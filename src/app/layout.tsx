import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const SOCIAL_TITLE = "José Miguel Cárcamo — Escultor Chileno | Escultura en Piedra";
const SOCIAL_DESCRIPTION =
  "Más de 25 años dedicados a la escultura en piedra basalto. Obra pública en 14 países. " +
  "Descubre su portafolio, proceso creativo y trayectoria internacional.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jmcarcamo.cl"),
  title: {
    default: "José Miguel Cárcamo — Escultor",
    template: "%s | José Miguel Cárcamo",
  },
  description:
    "Escultor chileno con más de 25 años dedicados a la escultura en piedra basalto. " +
    "Obra pública internacional en 14 países.",
  keywords: [
    "escultor chileno",
    "escultura en piedra",
    "basalto",
    "José Miguel Cárcamo",
    "arte contemporáneo",
    "escultura pública",
    "simposio internacional escultura",
    "sculptor Chile",
  ],
  authors: [{ name: "José Miguel Cárcamo Fonseca" }],
  creator: "José Miguel Cárcamo Fonseca",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: SOCIAL_TITLE,
    description: SOCIAL_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "es_CL",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SOCIAL_TITLE,
    description: SOCIAL_DESCRIPTION,
    images: [OG_IMAGE.url],
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "José Miguel Cárcamo Fonseca",
  jobTitle: "Escultor",
  description:
    "Escultor chileno con más de 25 años dedicados a la escultura en piedra basalto.",
  url: "https://www.jmcarcamo.cl",
  image: "https://www.jmcarcamo.cl/og-image.jpg",
  email: "jmcf68@gmail.com",
  telephone: "+56987906530",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santiago",
    addressRegion: "Región Metropolitana",
    addressCountry: "CL",
  },
  sameAs: ["https://www.instagram.com/josemiguelcarcamo"],
  knowsAbout: [
    "Escultura",
    "Piedra Basalto",
    "Talla directa",
    "Escultura pública",
  ],
};

/**
 * Sin JavaScript, framer-motion nunca reemplaza el `initial={{ opacity: 0 }}` que FadeIn
 * emite como estilo inline, así que el HTML servido se ve en blanco. Estos selectores
 * apuntan al estilo inline real (`opacity:0` y `opacity:0;transform:...`).
 */
const noScriptFallbackCss =
  '[style*="opacity:0;"],[style$="opacity:0"]{opacity:1!important;transform:none!important}';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: noScriptFallbackCss }} />
        </noscript>
      </head>
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        <a
          href="#main-content"
          className={
            "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[999] " +
            "focus:bg-charcoal focus:text-cream focus:px-4 focus:py-2 focus:text-sm"
          }
        >
          Ir al contenido principal
        </a>
        <Navigation />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
