import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getStripeSession, getOneTimePaymentSession } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { APP_CONFIG } from "@/lib/config";
import Stripe from "stripe";

const getStripe = () => {
  const apiKey = process.env.STRIPE_SECRET_KEY;
  if (!apiKey) return null;
  return new Stripe(apiKey, {
    apiVersion: "2024-12-18.acacia",
    typescript: true,
  });
};

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { serviceId, priceId, type } = body;

    // Get user from database
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: { profile: true },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Get or create Stripe customer
    let stripeCustomerId = user.profile?.stripeCustomerId;

    if (!stripeCustomerId) {
      const stripe = getStripe();
      if (!stripe) {
        return NextResponse.json(
          { error: "Stripe not configured" },
          { status: 500 }
        );
      }
      
      const customer = await stripe.customers.create({
        email: user.email,
        name: user.name || undefined,
      });

      stripeCustomerId = customer.id;

      await prisma.userProfile.update({
        where: { userId: user.id },
        data: { stripeCustomerId },
      });
    }

    let checkoutSession;

    if (type === "subscription" && priceId) {
      // Subscription payment
      checkoutSession = await getStripeSession({
        priceId,
        domainUrl: APP_CONFIG.url,
        customerId: stripeCustomerId,
      });
    } else if (serviceId) {
      // One-time payment for service
      const service = await prisma.service.findUnique({
        where: { id: serviceId },
      });

      if (!service) {
        return NextResponse.json(
          { error: "Service not found" },
          { status: 404 }
        );
      }

      // Create pending payment record
      const payment = await prisma.payment.create({
        data: {
          userId: user.id,
          serviceId: service.id,
          amount: service.price,
          currency: "PLN",
          status: "PENDING",
          type: service.priceType,
          description: service.name,
        },
      });

      checkoutSession = await getOneTimePaymentSession({
        amount: Number(service.price),
        serviceName: service.name,
        domainUrl: APP_CONFIG.url,
        customerId: stripeCustomerId,
        metadata: {
          paymentId: payment.id,
          userId: user.id,
          serviceId: service.id,
        },
      });
    } else {
      return NextResponse.json(
        { error: "Invalid payment parameters" },
        { status: 400 }
      );
    }

    return NextResponse.json({ url: checkoutSession.url });
  } catch (error) {
    console.error("Payment creation error:", error);
    return NextResponse.json(
      { error: "Failed to create payment session" },
      { status: 500 }
    );
  }
}
