import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proceso de Obra",
  description: "Del concepto a la materia: proceso de creación escultórica en piedra basalto. Boceto, desbaste, modelado, talla directa y montaje final.",
  alternates: { canonical: "https://www.jmcarcamo.cl/proceso" },
  openGraph: {
    title: "Proceso de Obra | José Miguel Cárcamo — Escultor",
    description: "Del concepto a la materia: proceso de creación escultórica en piedra basalto. Boceto, desbaste, modelado, talla directa y montaje.",
    url: "https://www.jmcarcamo.cl/proceso",
  },
  twitter: {
    title: "Proceso de Obra | José Miguel Cárcamo — Escultor",
    description: "Del concepto a la materia: proceso de creación escultórica en piedra basalto.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
