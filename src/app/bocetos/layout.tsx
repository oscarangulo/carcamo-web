import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bocetos",
  description: "Bocetos y estudios preparatorios de José Miguel Cárcamo. El origen de la forma: exploración de volumen, escala y proporciones para escultura en piedra.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
