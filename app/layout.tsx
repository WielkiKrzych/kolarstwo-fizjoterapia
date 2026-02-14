import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SocialMediaBar } from "@/components/ui/SocialMediaBar";
import { MotionProvider } from "@/lib/motion";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://prokolarz.pl";
const twitterHandle = process.env.NEXT_PUBLIC_TWITTER_HANDLE || "ProKolarz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ProKolarz - Treningi Kolarskie & Fizjoterapia Zdalna",
    template: "%s | ProKolarz",
  },
  description: "Profesjonalne treningi kolarskie i fizjoterapia zdalna. Osiągnij swoje cele sportowe z pomocą doświadczonego trenera i fizjoterapeuty!",
  keywords: [
    "trening kolarski",
    "fizjoterapia zdalna",
    "kolarstwo",
    "trening",
    "rehabilitacja",
    "coach kolarstwo",
    "trener kolarski",
    "fizjoterapia online",
    "trening rowerowy",
    "kolarstwo szosowe",
    "triathlon",
    "bieganie"
  ],
  authors: [{ name: "Krzysztof - WielkiKrzych", url: `${siteUrl}/o-mnie` }],
  creator: "Krzysztof - WielkiKrzych",
  publisher: "ProKolarz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: siteUrl,
    siteName: "ProKolarz",
    title: "ProKolarz - Treningi Kolarskie & Fizjoterapia Zdalna",
    description: "Profesjonalne treningi kolarskie i fizjoterapia zdalna. Osiągnij swoje cele sportowe z pomocą doświadczonego trenera i fizjoterapeuty!",
    images: [
      {
        url: `${siteUrl}/images/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: "ProKolarz - Treningi Kolarskie & Fizjoterapia Zdalna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: `@${twitterHandle}`,
    creator: `@${twitterHandle}`,
    title: "ProKolarz - Treningi Kolarskie & Fizjoterapia Zdalna",
    description: "Profesjonalne treningi kolarskie i fizjoterapia zdalna. Osiągnij swoje cele sportowe!",
    images: [`${siteUrl}/images/og-default.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  manifest: "/manifest.json",
  category: "sports fitness coaching",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning className={inter.variable}>
      <body className={`${inter.className} min-h-screen bg-[#0a0a0f] antialiased`}>
        <MotionProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-3 focus:bg-gradient-to-r focus:from-[#00f0ff] focus:to-[#b829dd] focus:text-black focus:font-bold focus:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00f0ff] focus:ring-offset-2 focus:ring-offset-[#0a0a0f] focus:shadow-[0_0_20px_rgba(0,240,255,0.5)]"
          >
            Przejdź do treści
          </a>
          {children}
          <SocialMediaBar />
        </MotionProvider>
      </body>
    </html>
  );
}
