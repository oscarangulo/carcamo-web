import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Bocetos",
  description:
    "Bocetos y estudios preparatorios. El origen de la forma: exploración de volumen, escala y proporciones " +
    "para escultura en piedra.",
  path: "/bocetos",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
