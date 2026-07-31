import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Portafolio",
  description:
    "Portafolio de esculturas: obra pública, fractura/calce, estelas, domos, ojos, orgánica y figura humana. " +
    "Piedra basalto tallada a mano.",
  path: "/portafolio",
  socialDescription:
    "Portafolio de esculturas: obra pública, fractura/calce, estelas, domos, ojos, orgánica y figura humana.",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
