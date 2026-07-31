export interface NavItem {
  href: string;
  label: string;
}

interface NavItemSource extends NavItem {
  /** Etiqueta larga que usa el pie de página cuando difiere de la de la barra superior. */
  footerLabel?: string;
}

const NAV_SOURCE: readonly NavItemSource[] = [
  { href: "/", label: "Inicio" },
  { href: "/trayectoria", label: "Trayectoria" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/proceso", label: "Proceso", footerLabel: "Proceso de Obra" },
  { href: "/bocetos", label: "Bocetos" },
  { href: "/prensa", label: "Prensa" },
  { href: "/contacto", label: "Contacto" },
];

/** Enlaces de la barra de navegación (escritorio y menú móvil). */
export const NAV_ITEMS: readonly NavItem[] = NAV_SOURCE.map(({ href, label }) => ({ href, label }));

/** El pie de página no repite el enlace a la portada y usa las etiquetas largas. */
export const FOOTER_NAV_ITEMS: readonly NavItem[] = NAV_SOURCE.filter((item) => item.href !== "/").map(
  ({ href, label, footerLabel }) => ({ href, label: footerLabel ?? label }),
);
