import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta a José Miguel Cárcamo para proyectos de escultura pública, comisiones privadas y colaboraciones artísticas. Santiago de Chile.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
