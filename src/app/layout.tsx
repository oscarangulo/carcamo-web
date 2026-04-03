import type { Metadata } from "next";
import { Cormorant, Geist } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://carcamo.strixsoft.com"),
  title: {
    default: "José Miguel Cárcamo — Escultor",
    template: "%s | José Miguel Cárcamo",
  },
  description:
    "Escultor chileno con más de 25 años dedicados a la escultura en piedra basalto. Atemporalidad, Existencia, Materialidad. Obra pública internacional en más de 13 países.",
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
  openGraph: {
    title: "José Miguel Cárcamo — Escultor",
    description:
      "Escultor chileno con más de 25 años dedicados a la escultura en piedra basalto. Obra pública internacional.",
    url: "https://carcamo.strixsoft.com",
    siteName: "José Miguel Cárcamo — Escultor",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/images/jm-carcamo.png",
        width: 1200,
        height: 630,
        alt: "José Miguel Cárcamo — Escultor chileno",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "José Miguel Cárcamo — Escultor",
    description:
      "Escultor chileno con más de 25 años dedicados a la escultura en piedra basalto.",
    images: ["/images/jm-carcamo.png"],
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
    canonical: "https://carcamo.strixsoft.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "José Miguel Cárcamo Fonseca",
  jobTitle: "Escultor",
  description:
    "Escultor chileno con más de 25 años dedicados a la escultura en piedra basalto.",
  url: "https://carcamo.strixsoft.com",
  image: "https://carcamo.strixsoft.com/images/jm-carcamo.png",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${geistSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[999] focus:bg-charcoal focus:text-cream focus:px-4 focus:py-2 focus:text-sm"
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
