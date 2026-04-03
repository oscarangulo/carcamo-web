"use client";

import Image from "next/image";
import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: "all", label: "Todas" },
  { id: "publica", label: "Obra Pública" },
  { id: "fractura", label: "Fractura / Calce" },
  { id: "estelas", label: "Estelas" },
  { id: "figura", label: "Figura Humana" },
];

const works = [
  {
    src: "/images/rumania-caransebes-1.jpeg",
    title: "Simposio Caransebes",
    location: "Rumania",
    category: "publica",
    year: "2016",
  },
  {
    src: "/images/chile-lampa.jpeg",
    title: "Escultura Monumental",
    location: "Lampa, Chile",
    category: "publica",
    year: "2014",
  },
  {
    src: "/images/ecuador-quito-2.jpeg",
    title: "Simposio Internacional",
    location: "Quito, Ecuador",
    category: "publica",
    year: "2013",
  },
  {
    src: "/images/escultura.jpeg",
    title: "Fractura / Calce",
    location: "Taller del artista",
    category: "fractura",
    year: "2018",
  },
  {
    src: "/images/obra-publica.jpeg",
    title: "Forma Orgánica",
    location: "Chile",
    category: "estelas",
    year: "2017",
  },
  {
    src: "/images/natural-coupling-stone.jpeg",
    title: "Natural Coupling Stone",
    location: "400 x 200 x 100 cm",
    category: "publica",
    year: "2019",
  },
  {
    src: "/images/desplazamiento-organico.jpeg",
    title: "Desplazamiento Orgánico",
    location: "Taller del artista",
    category: "estelas",
    year: "2016",
  },
];

export default function Portafolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedWork, setSelectedWork] = useState<(typeof works)[0] | null>(
    null
  );

  const filteredWorks =
    activeCategory === "all"
      ? works
      : works.filter((w) => w.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-8 md:pb-12 px-6">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <p className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-4">
              Portafolio
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[0.05em] uppercase leading-[1.1]">
              Obra
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-6 border-b border-stone/30 sticky top-20 md:top-24 bg-cream/95 backdrop-blur-sm z-30">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex gap-6 md:gap-10 overflow-x-auto pb-2 -mb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-[11px] tracking-[0.2em] uppercase whitespace-nowrap transition-colors duration-300 pb-2 border-b ${
                  activeCategory === cat.id
                    ? "text-charcoal border-charcoal"
                    : "text-warm-gray border-transparent hover:text-charcoal"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredWorks.map((work) => (
                <motion.div
                  key={work.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <button
                    onClick={() => setSelectedWork(work)}
                    className="block w-full text-left group cursor-pointer"
                  >
                    <div className="img-zoom aspect-[4/5] relative bg-stone/20">
                      <Image
                        src={work.src}
                        alt={work.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500" />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-sm tracking-[0.1em] font-light">
                        {work.title}
                      </h3>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-[10px] tracking-[0.15em] text-warm-gray">
                          {work.location}
                        </span>
                        <span className="text-[10px] tracking-[0.15em] text-stone">
                          {work.year}
                        </span>
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center p-6"
            onClick={() => setSelectedWork(null)}
          >
            <button
              className="absolute top-6 right-6 text-cream/60 hover:text-cream transition-colors z-10"
              onClick={() => setSelectedWork(null)}
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
              className="relative max-w-5xl max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedWork.src}
                alt={selectedWork.title}
                fill
                className="object-contain"
                sizes="90vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/80 to-transparent">
                <h3 className="text-cream text-lg font-light tracking-wide">
                  {selectedWork.title}
                </h3>
                <p className="text-cream/60 text-sm mt-1">
                  {selectedWork.location} — {selectedWork.year}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
