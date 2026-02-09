import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Treningi Kolarskie & Fizjoterapia Zdalna",
  description: "Profesjonalne treningi kolarskie i fizjoterapia zdalna. Osiągnij swoje cele z naszą pomocą!",
  keywords: ["trening kolarski", "fizjoterapia zdalna", "kolarstwo", "trening", "rehabilitacja"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
