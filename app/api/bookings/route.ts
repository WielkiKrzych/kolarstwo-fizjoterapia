import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { sendBookingConfirmation } from "@/lib/email";
import { z } from "zod";

const bookingSchema = z.object({
  serviceId: z.string().min(1, "Wybierz usługę"),
  startTime: z.string().datetime(),
  notes: z.string().optional(),
  isOnline: z.boolean().default(true),
});

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json(
        { error: "Musisz być zalogowany, aby dokonać rezerwacji" },
        { status: 401 }
      );
    }

    const body = await req.json();
    
    const result = bookingSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { error: "Nieprawidłowe dane", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { serviceId, startTime, notes, isOnline } = result.data;

    // Get service details
    const service = await prisma.service.findUnique({
      where: { id: serviceId },
    });

    if (!service) {
      return NextResponse.json(
        { error: "Usługa nie istnieje" },
        { status: 404 }
      );
    }

    // Calculate end time based on service duration
    const start = new Date(startTime);
    const duration = service.duration || 60;
    const end = new Date(start.getTime() + duration * 60000);

    // Check for conflicts
    const conflictingBooking = await prisma.booking.findFirst({
      where: {
        status: { not: "CANCELLED" },
        OR: [
          {
            startTime: { lte: start },
            endTime: { gt: start },
          },
          {
            startTime: { lt: end },
            endTime: { gte: end },
          },
        ],
      },
    });

    if (conflictingBooking) {
      return NextResponse.json(
        { error: "Wybrany termin jest już zajęty" },
        { status: 409 }
      );
    }

    // Create booking
    const booking = await prisma.booking.create({
      data: {
        userId: session.user.id,
        serviceId,
        startTime: start,
        endTime: end,
        notes,
        isOnline,
        status: "PENDING",
      },
      include: {
        user: true,
        service: true,
      },
    });

    // Send confirmation email
    if (booking.user.email) {
      await sendBookingConfirmation({
        to: booking.user.email,
        name: booking.user.name || "Klient",
        serviceName: booking.service.name,
        date: start.toLocaleDateString("pl-PL"),
        time: start.toLocaleTimeString("pl-PL", { hour: "2-digit", minute: "2-digit" }),
        meetLink: isOnline ? "https://meet.prokolarz.pl/" + booking.id : undefined,
      });
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Rezerwacja została utworzona",
        booking 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Wystąpił błąd podczas tworzenia rezerwacji" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(req.url);
    const start = searchParams.get("start");
    const end = searchParams.get("end");

    const where: any = {
      userId: session.user.id,
    };

    if (start && end) {
      where.startTime = {
        gte: new Date(start),
        lte: new Date(end),
      };
    }

    const bookings = await prisma.booking.findMany({
      where,
      include: {
        service: true,
        payment: true,
      },
      orderBy: {
        startTime: "asc",
      },
    });

    return NextResponse.json({ bookings });
  } catch (error) {
    console.error("Get bookings error:", error);
    return NextResponse.json(
      { error: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}
