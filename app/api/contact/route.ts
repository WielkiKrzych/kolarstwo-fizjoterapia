import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendContactConfirmation } from "@/lib/email";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Imię musi mieć minimum 2 znaki"),
  email: z.string().email("Nieprawidłowy adres email"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Wybierz temat"),
  message: z.string().min(10, "Wiadomość musi mieć minimum 10 znaków"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    const result = contactSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { error: "Nieprawidłowe dane", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message } = result.data;

    // Save to database
    const contactMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        phone,
        subject,
        message,
      },
    });

    // Send confirmation email
    const emailResult = await sendContactConfirmation({ to: email, name });

    if (!emailResult.success) {
      console.error("Failed to send confirmation email:", emailResult.error);
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Wiadomość została wysłana",
        id: contactMessage.id 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Wystąpił błąd podczas wysyłania wiadomości" },
      { status: 500 }
    );
  }
}
