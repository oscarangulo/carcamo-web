import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Portafolio de esculturas de José Miguel Cárcamo: obra pública, fractura/calce, estelas y figura humana. Piedra basalto tallada a mano.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
