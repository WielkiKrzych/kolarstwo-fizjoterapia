export const APP_CONFIG = {
  name: process.env.APP_NAME || "ProKolarz",
  url: process.env.APP_URL || "http://localhost:3000",
  email: process.env.EMAIL_FROM || "kontakt@prokolarz.pl",
} as const;

export const STRIPE_CONFIG = {
  successUrl: "/platnosci/sukces",
  cancelUrl: "/platnosci/anulowane",
  currency: "pln",
} as const;

export const BOOKING_CONFIG = {
  minAdvanceHours: 24,
  maxAdvanceDays: 90,
  defaultDuration: 60,
  reminderHours: 24,
} as const;
