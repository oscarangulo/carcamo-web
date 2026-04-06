import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta a José Miguel Cárcamo para proyectos de escultura pública, comisiones privadas y colaboraciones artísticas. Santiago de Chile.",
  alternates: { canonical: "https://www.jmcarcamo.cl/contacto" },
  openGraph: {
    title: "Contacto | José Miguel Cárcamo — Escultor",
    description: "Contacta para proyectos de escultura pública, comisiones privadas y colaboraciones artísticas. Santiago de Chile.",
    url: "https://www.jmcarcamo.cl/contacto",
  },
  twitter: {
    title: "Contacto | José Miguel Cárcamo — Escultor",
    description: "Contacta para proyectos de escultura pública, comisiones privadas y colaboraciones artísticas.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
