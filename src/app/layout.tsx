import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "José Miguel Cárcamo — Escultor",
  description:
    "Escultor chileno con más de 25 años dedicados a la escultura. Atemporalidad, Existencia, Materialidad.",
  keywords: [
    "escultor",
    "escultura",
    "Chile",
    "José Miguel Cárcamo",
    "arte",
    "piedra",
    "basalto",
  ],
  openGraph: {
    title: "José Miguel Cárcamo — Escultor",
    description:
      "Escultor chileno con más de 25 años dedicados a la escultura.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
