import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prensa",
  description: "Cobertura de prensa y críticas: El Mercurio, La Tercera, Publimetro, Radio Bio Bio y medios internacionales sobre la obra de José Miguel Cárcamo.",
  alternates: { canonical: "https://www.jmcarcamo.cl/prensa" },
  openGraph: {
    title: "Prensa | José Miguel Cárcamo — Escultor",
    description: "Cobertura de prensa y críticas: El Mercurio, La Tercera, Publimetro, Radio Bio Bio y medios internacionales.",
    url: "https://www.jmcarcamo.cl/prensa",
  },
  twitter: {
    title: "Prensa | José Miguel Cárcamo — Escultor",
    description: "Cobertura de prensa y críticas sobre la obra de José Miguel Cárcamo.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
