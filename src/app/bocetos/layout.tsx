import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bocetos",
  description: "Bocetos y estudios preparatorios. El origen de la forma: exploración de volumen, escala y proporciones para escultura en piedra.",
  alternates: { canonical: "https://www.jmcarcamo.cl/bocetos" },
  openGraph: {
    title: "Bocetos | José Miguel Cárcamo — Escultor",
    description: "Bocetos y estudios preparatorios. El origen de la forma: exploración de volumen, escala y proporciones para escultura en piedra.",
    url: "https://www.jmcarcamo.cl/bocetos",
  },
  twitter: {
    title: "Bocetos | José Miguel Cárcamo — Escultor",
    description: "Bocetos y estudios preparatorios para escultura en piedra.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
