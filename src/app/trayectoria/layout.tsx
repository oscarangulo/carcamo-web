import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trayectoria",
  description: "Más de 25 años dedicados a la escultura. Exposiciones individuales, simposios internacionales y obra pública en 13 países. Biografía de José Miguel Cárcamo Fonseca.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
