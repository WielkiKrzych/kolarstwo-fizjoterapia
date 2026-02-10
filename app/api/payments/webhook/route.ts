import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

const getStripe = () => {
  const apiKey = process.env.STRIPE_SECRET_KEY;
  if (!apiKey) return null;
  return new Stripe(apiKey, {
    apiVersion: "2024-12-18.acacia",
    typescript: true,
  });
};

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: NextRequest) {
  try {
    const stripe = getStripe();
    
    if (!stripe) {
      return NextResponse.json(
        { error: "Stripe not configured" },
        { status: 500 }
      );
    }

    const body = await req.text();
    const headersList = await headers();
    const signature = headersList.get("stripe-signature") || "";

    if (!webhookSecret) {
      return NextResponse.json(
        { error: "Stripe webhook secret not configured" },
        { status: 500 }
      );
    }

    let event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err: any) {
      console.error(`Webhook signature verification failed:`, err.message);
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 400 }
      );
    }

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as any;
        
        await prisma.payment.updateMany({
          where: {
            stripePaymentId: session.id,
          },
          data: {
            status: "COMPLETED",
            paidAt: new Date(),
          },
        });

        if (session.metadata?.bookingId) {
          await prisma.booking.update({
            where: { id: session.metadata.bookingId },
            data: { status: "CONFIRMED" },
          });
        }

        break;
      }

      case "invoice.paid": {
        const invoice = event.data.object as any;
        
        await prisma.payment.create({
          data: {
            userId: invoice.metadata?.userId || "",
            stripeSubscriptionId: invoice.subscription,
            amount: invoice.amount_paid / 100,
            currency: invoice.currency.toUpperCase(),
            status: "COMPLETED",
            type: "SUBSCRIPTION",
            description: `Subscription payment - ${invoice.id}`,
            paidAt: new Date(),
          },
        });

        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as any;
        
        console.error(`Payment failed for invoice: ${invoice.id}`);
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as any;
        
        await prisma.payment.updateMany({
          where: {
            stripeSubscriptionId: subscription.id,
          },
          data: {
            status: "CANCELLED",
          },
        });

        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Stripe webhook error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
