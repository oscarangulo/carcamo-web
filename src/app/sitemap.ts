import type { MetadataRoute } from "next";

// Fechas fijas, no `new Date()`: con la fecha del build cada deploy cambiaba lastmod sin que
// cambiara el contenido. Actualiza a mano la constante de la ruta cuando edites esa página.
const LAST_MODIFIED = {
  home: "2026-07-31",
  trayectoria: "2026-04-10",
  portafolio: "2026-04-10",
  proceso: "2026-04-10",
  bocetos: "2026-04-10",
  prensa: "2026-07-31",
  contacto: "2026-04-10",
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.jmcarcamo.cl";

  return [
    { url: baseUrl, lastModified: LAST_MODIFIED.home, changeFrequency: "monthly", priority: 1 },
    {
      url: `${baseUrl}/trayectoria`,
      lastModified: LAST_MODIFIED.trayectoria,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portafolio`,
      lastModified: LAST_MODIFIED.portafolio,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    { url: `${baseUrl}/proceso`, lastModified: LAST_MODIFIED.proceso, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/bocetos`, lastModified: LAST_MODIFIED.bocetos, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/prensa`, lastModified: LAST_MODIFIED.prensa, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contacto`, lastModified: LAST_MODIFIED.contacto, changeFrequency: "yearly", priority: 0.7 },
  ];
}
