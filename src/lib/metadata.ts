import type { Metadata } from "next";

export const SITE_URL = "https://www.jmcarcamo.cl";
export const SITE_NAME = "José Miguel Cárcamo — Escultor";

/**
 * Next reemplaza `openGraph` y `twitter` completos cuando una ruta los redeclara:
 * no hace merge campo por campo. Sin `images` explícito, las subrutas quedaban
 * sin og:image ni twitter:image. Este helper los reinyecta siempre.
 */
export const OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Escultura monumental de José Miguel Cárcamo — Simposio Internacional Arabia Saudita",
  type: "image/jpeg",
} as const;

interface PageMetadataInput {
  /** Título corto de la ruta; el template del layout raíz le agrega el sufijo. */
  title: string;
  description: string;
  /** Ruta absoluta desde la raíz, con slash inicial. Ej: "/prensa". */
  path: string;
  /** Descripción más corta para redes; por defecto usa `description`. */
  socialDescription?: string;
}

export function pageMetadata({
  title,
  description,
  path,
  socialDescription,
}: PageMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const socialTitle = `${title} | ${SITE_NAME}`;
  const social = socialDescription ?? description;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description: social,
      url,
      siteName: SITE_NAME,
      locale: "es_CL",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: social,
      images: [OG_IMAGE.url],
    },
  };
}
