import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SocialMediaBar } from "@/components/ui/SocialMediaBar";

export const metadata: Metadata = {
  title: {
    default: "ProKolarz - Treningi Kolarskie & Fizjoterapia Zdalna",
    template: "%s | ProKolarz",
  },
  description: "Profesjonalne treningi kolarskie i fizjoterapia zdalna. Osiągnij swoje cele sportowe z moją pomocą!",
  keywords: ["trening kolarski", "fizjoterapia zdalna", "kolarstwo", "trening", "rehabilitacja", "coach kolarstwo"],
  authors: [{ name: "ProKolarz" }],
  creator: "ProKolarz",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/",
    siteName: "ProKolarz",
    title: "ProKolarz - Treningi Kolarskie & Fizjoterapia Zdalna",
    description: "Profesjonalne treningi kolarskie i fizjoterapia zdalna. Osiągnij swoje cele sportowe!",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
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
    <html lang="pl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-[#0a0a0f] font-sans antialiased">
        {children}
        <SocialMediaBar />
      </body>
    </html>
  );
}
