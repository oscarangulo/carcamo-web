"use client";

import Image from "next/image";
import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { motion, AnimatePresence } from "framer-motion";

const sketches = [
  {
    src: "/images/boceto-proceso.jpeg",
    title: "Boceto",
    description: "Diseño inicial para escultura en piedra basalto",
  },
  {
    src: "/images/boceto-escala.jpeg",
    title: "Boceto Escala",
    description: "Estudio de proporciones y dimensiones",
  },
  {
    src: "/images/boceto-1.jpeg",
    title: "Boceto",
    description: "Exploración de formas orgánicas",
  },
  {
    src: "/images/boceto-2.jpeg",
    title: "Boceto",
    description: "Estudio de volumen y masa",
  },
  {
    src: "/images/desplazamiento-organico.jpeg",
    title: "Desplazamiento Orgánico",
    description: "Estudio de movimiento y forma",
  },
  {
    src: "/images/boceto-ovalo.jpeg",
    title: "Boceto Óvalo",
    description: "Exploración de la forma oval",
  },
];

export default function Bocetos() {
  const [selectedSketch, setSelectedSketch] = useState<
    (typeof sketches)[0] | null
  >(null);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8">
              <FadeIn>
                <p className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-4">
                  Bocetos
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[0.05em] uppercase leading-[1.1]">
                  El origen
                  <br />
                  de la forma
                </h1>
              </FadeIn>
            </div>
            <div className="md:col-span-4 md:col-start-9 flex items-end">
              <FadeIn delay={0.2}>
                <p className="text-sm text-warm-gray leading-relaxed">
                  Cada escultura comienza como un trazo. Los bocetos son el
                  primer diálogo entre la idea y la materia, donde la forma
                  encuentra su camino desde la imaginación hacia la piedra.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Sketches Grid */}
      <section className="py-12 md:py-20 px-6 border-t border-stone/30">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {sketches.map((sketch, i) => (
              <FadeIn key={sketch.src} delay={i * 0.1}>
                <button
                  onClick={() => setSelectedSketch(sketch)}
                  className="block w-full text-left group cursor-pointer"
                >
                  <div className="img-zoom aspect-[3/4] relative bg-stone/10">
                    <Image
                      src={sketch.src}
                      alt={sketch.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/5 transition-colors duration-500" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-sm tracking-[0.1em] font-light">
                      {sketch.title}
                    </h3>
                    <p className="text-[10px] tracking-[0.15em] text-warm-gray mt-1">
                      {sketch.description}
                    </p>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedSketch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center p-6"
            onClick={() => setSelectedSketch(null)}
          >
            <button
              className="absolute top-6 right-6 text-cream/60 hover:text-cream transition-colors z-10"
              onClick={() => setSelectedSketch(null)}
              aria-label="Cerrar"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </svg>
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedSketch.src}
                alt={selectedSketch.title}
                fill
                className="object-contain"
                sizes="90vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/80 to-transparent">
                <h3 className="text-cream text-lg font-light tracking-wide">
                  {selectedSketch.title}
                </h3>
                <p className="text-cream/60 text-sm mt-1">
                  {selectedSketch.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
