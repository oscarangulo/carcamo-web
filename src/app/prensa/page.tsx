"use client";

import Image from "next/image";
import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  {
    text: "Sus oscuros granito y basalto, las bellas vetas de la madera petrificada se hallan elaboradas con delicadeza y sensualidad.",
    author: "Waldemar Sommer",
    source: "El Mercurio, Artes y Letras, 2002",
  },
  {
    text: "Sorprende por la limpidez de las formas, por la suavidad con que desplaza los volúmenes plenos en sus torsos truncados o sus esferas casi abstractas.",
    author: "Ricardo Bindis",
    source: "La Tercera, 1996",
  },
  {
    text: "La idea es sacar las esculturas desde los salones de arte y llevarlas al espacio público, donde siempre debieran estar.",
    author: "José Miguel Cárcamo",
    source: "Diario La Hora, 2013",
  },
];

const pressCoverage = [
  { year: "2014", title: "Artistas de Chile y el exterior crean parque de esculturas en Peñalolén", source: "La Tercera" },
  { year: "2014", title: "Este domingo se inaugura el Parque de las Esculturas de Peñalolén", source: "La Tercera" },
  { year: "2014", title: "Peñalolén inaugura un nuevo parque de las esculturas", source: "Radio Bio Bio" },
  { year: "2014", title: "Abren parque de esculturas", source: "Publimetro" },
  { year: "2014", title: "Inauguran esculturas con motivo de los Juegos Suramericanos", source: "Terra.cl" },
  { year: "2014", title: "Roberto Bravo tocará en nuevo parque de Peñalolén", source: "24Horas.cl (TVN)" },
  { year: "2013", title: "Peñalolén tendrá su primer parque de las esculturas", source: "Diario La Hora" },
  { year: "2013", title: "Peñalolén prepara inauguración de su primer parque de esculturas", source: "El Mercurio" },
  { year: "2007", title: "Fisuras y Cadencias — Esculturas", source: "Centro Cultural Estación Mapocho" },
  { year: "2003", title: "Los nuevos aires de la escultura en Chile", source: "El Mercurio" },
  { year: "2002", title: "Final e inicio del año plástico — Crítica de Waldemar Sommer", source: "El Mercurio, Artes y Letras" },
  { year: "1996", title: "Fascinación Ecléctica — Crítica de exposición", source: "El Mercurio, Artes y Letras" },
  { year: "1996", title: "Esculturas en piedra — Crítica de Ricardo Bindis", source: "La Tercera" },
];

const pressClippings = [
  { src: "/images/prensa-el-mercurio-lecturas-esenciales.jpg", title: "El Mercurio — Lecturas Esenciales" },
  { src: "/images/prensa-vivienda-decoracion.jpg", title: "Vivienda y Decoración" },
  { src: "/images/prensa-el-duro-arte-de-esculpir.jpg", title: "El Duro Arte de Esculpir" },
  { src: "/images/prensa-revista-caras-expo.jpg", title: "Revista Caras" },
  { src: "/images/prensa-ecuador-simposio-marmol.jpg", title: "Prensa Ecuador — Simposio de Mármol" },
];

const mediaOutlets = [
  "El Mercurio",
  "La Tercera",
  "Publimetro",
  "Emol",
  "Radio Bio Bio",
  "TVN",
  "Terra",
  "Revista Caras",
];

export default function Prensa() {
  const [selectedClipping, setSelectedClipping] = useState<(typeof pressClippings)[0] | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8">
              <FadeIn>
                <p className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-4">
                  Prensa y Medios
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[0.05em] uppercase leading-[1.1]">
                  En los medios
                </h1>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Quotes */}
      <section className="py-16 md:py-24 px-6 border-t border-stone/30">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <h2 className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-16">
              Voces de la Crítica
            </h2>
          </FadeIn>

          <div className="space-y-20 md:space-y-28">
            {quotes.map((quote, i) => (
              <FadeIn key={quote.author} delay={i * 0.15}>
                <blockquote className="max-w-4xl">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-extralight tracking-wide leading-relaxed">
                    &ldquo;{quote.text}&rdquo;
                  </p>
                  <footer className="mt-8">
                    <span className="text-sm text-warm-gray">
                      {quote.author}
                    </span>
                    <span className="text-sm text-warm-gray/60 ml-2">
                      &mdash; {quote.source}
                    </span>
                  </footer>
                </blockquote>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Press Coverage List */}
      <section className="py-16 md:py-24 px-6 border-t border-stone/30">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <h2 className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-16">
              Cobertura de Prensa
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {pressCoverage.map((item, i) => (
              <FadeIn key={item.year + item.title} delay={i * 0.06}>
                <div className="grid grid-cols-12 gap-4 py-6 border-b border-stone/20 group">
                  <div className="col-span-2 md:col-span-1">
                    <span className="text-sm text-warm-gray font-light">
                      {item.year}
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-7">
                    <span className="text-base md:text-lg font-light tracking-wide group-hover:text-warm-gray transition-colors">
                      {item.title}
                    </span>
                  </div>
                  <div className="col-span-12 md:col-span-4 md:text-right">
                    <span className="text-sm text-warm-gray">
                      {item.source}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Press Clippings Gallery */}
      <section className="py-16 md:py-24 px-6 border-t border-stone/30">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <h2 className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-16">
              Recortes de Prensa
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {pressClippings.map((clipping, i) => (
              <FadeIn key={clipping.src} delay={i * 0.1}>
                <button
                  onClick={() => setSelectedClipping(clipping)}
                  className="block w-full text-left group cursor-pointer"
                  aria-label={`Ver recorte: ${clipping.title}`}
                >
                  <div className="img-zoom aspect-[4/3] relative bg-stone/10">
                    <Image
                      src={clipping.src}
                      alt={clipping.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/5 transition-colors duration-500" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-sm tracking-[0.1em] font-light">
                      {clipping.title}
                    </h3>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Media Logos Section */}
      <section className="py-24 md:py-40 px-6 border-t border-stone/30">
        <div className="max-w-[1400px] mx-auto text-center">
          <FadeIn>
            <p className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-8">
              Medios de Comunicación
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-3xl mx-auto">
              {mediaOutlets.map((outlet) => (
                <span
                  key={outlet}
                  className="text-lg md:text-xl font-extralight tracking-wide text-warm-gray"
                >
                  {outlet}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedClipping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center p-6"
            onClick={() => setSelectedClipping(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Recorte ampliado: ${selectedClipping.title}`}
          >
            <button
              className="absolute top-6 right-6 text-cream/60 hover:text-cream transition-colors z-10 cursor-pointer p-2"
              onClick={() => setSelectedClipping(null)}
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
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedClipping.src}
                alt={selectedClipping.title}
                fill
                className="object-contain"
                sizes="90vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/80 to-transparent">
                <h3 className="text-cream text-lg font-light tracking-wide">
                  {selectedClipping.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
