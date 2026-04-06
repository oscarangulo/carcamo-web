import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trayectoria",
  description: "Más de 25 años dedicados a la escultura. Exposiciones individuales, simposios internacionales y obra pública en 13 países.",
  alternates: { canonical: "https://www.jmcarcamo.cl/trayectoria" },
  openGraph: {
    title: "Trayectoria | José Miguel Cárcamo — Escultor",
    description: "Más de 25 años dedicados a la escultura. Exposiciones individuales, simposios internacionales y obra pública en 13 países.",
    url: "https://www.jmcarcamo.cl/trayectoria",
  },
  twitter: {
    title: "Trayectoria | José Miguel Cárcamo — Escultor",
    description: "Más de 25 años dedicados a la escultura. Exposiciones individuales, simposios internacionales y obra pública en 13 países.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
