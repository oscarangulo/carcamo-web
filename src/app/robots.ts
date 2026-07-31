import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /og-image es un rig interno para capturar la imagen social de 1200x630.
      disallow: "/og-image",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
