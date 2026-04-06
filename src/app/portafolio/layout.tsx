import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Portafolio de esculturas: obra pública, fractura/calce, estelas, domos, ojos, orgánica y figura humana. Piedra basalto tallada a mano.",
  alternates: { canonical: "https://www.jmcarcamo.cl/portafolio" },
  openGraph: {
    title: "Portafolio | José Miguel Cárcamo — Escultor",
    description: "Portafolio de esculturas: obra pública, fractura/calce, estelas, domos, ojos, orgánica y figura humana.",
    url: "https://www.jmcarcamo.cl/portafolio",
  },
  twitter: {
    title: "Portafolio | José Miguel Cárcamo — Escultor",
    description: "Portafolio de esculturas: obra pública, fractura/calce, estelas, domos, ojos, orgánica y figura humana.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
