import Stripe from "stripe";

const getStripe = () => {
  const apiKey = process.env.STRIPE_SECRET_KEY;
  if (!apiKey) {
    console.warn("STRIPE_SECRET_KEY not configured");
    return null;
  }
  return new Stripe(apiKey, {
    apiVersion: "2024-12-18.acacia",
    typescript: true,
  });
};

export const getStripeSession = async ({
  priceId,
  domainUrl,
  customerId,
}: {
  priceId: string;
  domainUrl: string;
  customerId: string;
}) => {
  const stripe = getStripe();
  if (!stripe) {
    throw new Error("Stripe not configured");
  }
  
  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    mode: "subscription",
    billing_address_collection: "auto",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: `${domainUrl}/platnosci/sukces?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${domainUrl}/platnosci/anulowane`,
    subscription_data: {
      trial_settings: {
        end_behavior: {
          missing_payment_method: "cancel",
        },
      },
      trial_period_days: 7,
    },
    payment_method_collection: "always",
  });

  return session;
};

export const getOneTimePaymentSession = async ({
  amount,
  serviceName,
  domainUrl,
  customerId,
  metadata,
}: {
  amount: number;
  serviceName: string;
  domainUrl: string;
  customerId: string;
  metadata: Record<string, string>;
}) => {
  const stripe = getStripe();
  if (!stripe) {
    throw new Error("Stripe not configured");
  }
  
  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    mode: "payment",
    billing_address_collection: "required",
    line_items: [
      {
        price_data: {
          currency: "pln",
          product_data: {
            name: serviceName,
          },
          unit_amount: amount * 100,
        },
        quantity: 1,
      },
    ],
    success_url: `${domainUrl}/platnosci/sukces?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${domainUrl}/platnosci/anulowane`,
    metadata,
  });

  return session;
};
