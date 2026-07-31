import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Prensa",
  description:
    "Cobertura de prensa y críticas: El Mercurio, La Tercera, Publimetro, Radio Bio Bio y medios " +
    "internacionales sobre la obra de José Miguel Cárcamo.",
  path: "/prensa",
  socialDescription:
    "Cobertura de prensa y críticas: El Mercurio, La Tercera, Publimetro, Radio Bio Bio y medios internacionales.",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
