"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/lib/nav";

const MOBILE_MENU_ID = "menu-movil";

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  // Guardamos la ruta en la que se abrió el menú en vez de un booleano: así al navegar
  // (link o botón atrás del navegador) queda cerrado por derivación, sin un useEffect
  // que llame a setState y dispare renders en cascada.
  const [openedAtPathname, setOpenedAtPathname] = useState<string | null>(null);
  const isOpen = openedAtPathname === pathname;
  const closeMenu = () => setOpenedAtPathname(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Escape cierra el menú y devuelve el foco al botón que lo abrió.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      setOpenedAtPathname(null);
      toggleButtonRef.current?.focus();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  // Bloqueo del scroll de fondo, compensando el ancho de la barra para que no salte el layout.
  useEffect(() => {
    if (!isOpen) return;

    const { body, documentElement } = document;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth;

    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="relative z-50">
              <div className="flex flex-col">
                <span className="text-xs tracking-[0.3em] uppercase font-light text-warm-gray">
                  Escultor
                </span>
                <span className="text-lg md:text-xl tracking-[0.15em] uppercase font-light">
                  Cárcamo
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10" aria-label="Navegación principal">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                    pathname === item.href ? "text-charcoal" : "text-warm-gray hover:text-charcoal"
                  }`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="nav-underline"
                      className="h-[1px] bg-charcoal mt-1"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              ref={toggleButtonRef}
              onClick={() => setOpenedAtPathname(isOpen ? null : pathname)}
              className="relative z-50 md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
              aria-controls={MOBILE_MENU_ID}
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className="block w-6 h-[1px] bg-charcoal origin-center"
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-[1px] bg-charcoal"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={
                  isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }
                }
                className="block w-6 h-[1px] bg-charcoal origin-center"
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={MOBILE_MENU_ID}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-cream flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8" aria-label="Navegación móvil">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={`text-2xl tracking-[0.2em] uppercase font-light transition-colors ${
                      pathname === item.href
                        ? "text-charcoal"
                        : "text-warm-gray hover:text-charcoal"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
