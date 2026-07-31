"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export interface LightboxItem {
  src: string;
  title: string;
  /** Línea secundaria bajo el título: ubicación, año, descripción, etc. */
  caption?: string;
  /** Enlace a la fuente original (ej. la edición online de una revista). */
  link?: { href: string; label: string };
}

interface LightboxProps {
  item: LightboxItem | null;
  onClose: () => void;
  /** Prefijo del aria-label del diálogo: "Imagen ampliada", "Boceto ampliado", etc. */
  labelPrefix?: string;
  /** Ancho máximo del contenido. Las obras usan 5xl; bocetos y recortes, 4xl. */
  maxWidthClass?: string;
}

export default function Lightbox({
  item,
  onClose,
  labelPrefix = "Imagen ampliada",
  maxWidthClass = "max-w-4xl",
}: LightboxProps) {
  const reduceMotion = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);
  const isOpen = item !== null;

  // Escape para cerrar y Tab confinado al diálogo mientras está abierto.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

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

  // Foco al botón de cierre al abrir; se devuelve al disparador al cerrar.
  useEffect(() => {
    if (!isOpen) return;

    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    return () => lastFocusedRef.current?.focus();
  }, [isOpen]);

  const backdropMotion = reduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.15 } }
    : { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.3 } };

  const contentMotion = reduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.15 } }
    : {
        initial: { scale: 0.9, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.9, opacity: 0 },
        transition: { duration: 0.3 },
      };

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          {...backdropMotion}
          ref={dialogRef}
          className="fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${labelPrefix}: ${item.title}`}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className="absolute top-6 right-6 text-cream/60 hover:text-cream transition-colors z-10 cursor-pointer p-2"
            onClick={onClose}
            aria-label="Cerrar imagen"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              aria-hidden="true"
            >
              <line x1="4" y1="4" x2="20" y2="20" />
              <line x1="20" y1="4" x2="4" y2="20" />
            </svg>
          </button>

          <motion.div
            {...contentMotion}
            className={`relative ${maxWidthClass} max-h-[85vh] w-full h-full`}
            onClick={(event) => event.stopPropagation()}
          >
            <Image src={item.src} alt={item.title} fill className="object-contain" sizes="90vw" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/80 to-transparent">
              <h3 className="text-cream text-lg font-light tracking-wide">{item.title}</h3>
              {item.caption && <p className="text-cream/60 text-sm mt-1">{item.caption}</p>}
              {item.link && (
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-[10px] tracking-[0.2em] uppercase text-cream/80 hover:text-cream border-b border-cream/30 hover:border-cream pb-1 transition-colors"
                >
                  {item.link.label} &rarr;
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
