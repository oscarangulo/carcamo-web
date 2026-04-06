import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prensa",
  description:
    "Cobertura de prensa y críticas sobre la obra de José Miguel Cárcamo. El Mercurio, La Tercera, Publimetro y medios internacionales.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
