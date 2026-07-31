import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contacto",
  description:
    "Contacta a José Miguel Cárcamo para proyectos de escultura pública, comisiones privadas y " +
    "colaboraciones artísticas. Santiago de Chile.",
  path: "/contacto",
  socialDescription:
    "Contacta para proyectos de escultura pública, comisiones privadas y colaboraciones artísticas. " +
    "Santiago de Chile.",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
