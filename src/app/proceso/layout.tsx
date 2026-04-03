import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proceso de Obra",
  description: "Del concepto a la materia: proceso de creación escultórica en piedra basalto. Boceto, desbaste, modelado, talla directa y montaje final.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
