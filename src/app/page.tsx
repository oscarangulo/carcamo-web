"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

const featuredWorks = [
  {
    src: "/images/rumania-caransebes-1.jpeg",
    title: "Rumania, Caransebes",
    category: "Obra Pública",
  },
  {
    src: "/images/chile-lampa.jpeg",
    title: "Chile, Lampa",
    category: "Obra Pública",
  },
  {
    src: "/images/ecuador-quito-2.jpeg",
    title: "Ecuador, Quito",
    category: "Obra Pública",
  },
  {
    src: "/images/escultura.jpeg",
    title: "Escultura",
    category: "Fractura / Calce",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/arabia-saudita-volutas-noche.jpg"
            alt="José Miguel Cárcamo — Escultura"
            fill
            className="object-cover opacity-30"
            style={{ objectPosition: "center center" }}
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-cream/30 to-cream" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-warm-gray mb-6 md:mb-8">
              Escultor &mdash; Santiago de Chile
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-[0.08em] uppercase leading-[1.1]"
          >
            José Miguel
            <br />
            Cárcamo
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-10 md:mt-14"
          >
            <div className="flex items-center justify-center gap-6 md:gap-10">
              <div className="h-[1px] w-12 md:w-20 bg-stone" />
              <p className="text-[11px] md:text-xs tracking-[0.3em] uppercase text-warm-gray font-light">
                Atemporalidad &middot; Existencia &middot; Materialidad
              </p>
              <div className="h-[1px] w-12 md:w-20 bg-stone" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12 md:mt-16"
          >
            <Link
              href="/portafolio"
              className="inline-block text-[11px] tracking-[0.25em] uppercase border border-charcoal/20 px-10 py-4 hover:bg-charcoal hover:text-cream transition-all duration-500 cursor-pointer"
            >
              Ver Obra
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-transparent to-warm-gray"
          />
        </motion.div>
      </section>

      {/* Statement */}
      <section className="py-24 md:py-40 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-2">
              <FadeIn>
                <p className="text-[10px] tracking-[0.3em] uppercase text-warm-gray">
                  Sobre el artista
                </p>
              </FadeIn>
            </div>
            <div className="md:col-span-7 md:col-start-4">
              <FadeIn delay={0.2}>
                <blockquote className="text-2xl md:text-3xl lg:text-[2.75rem] font-extralight leading-relaxed tracking-wide">
                  Las propuestas y planteamientos escultóricos se introducen en
                  los intrincados laberintos del yo interior, donde la materia
                  se transforma en lenguaje.
                </blockquote>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="mt-10">
                  <Link
                    href="/trayectoria"
                    className="text-[11px] tracking-[0.25em] uppercase text-warm-gray hover:text-charcoal transition-colors duration-300 group cursor-pointer"
                  >
                    Conocer más
                    <span className="inline-block ml-3 transition-transform duration-300 group-hover:translate-x-2">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-12 md:py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="flex items-center justify-between mb-16 md:mb-24">
              <h2 className="text-[10px] tracking-[0.3em] uppercase text-warm-gray">
                Obras Seleccionadas
              </h2>
              <Link
                href="/portafolio"
                className="text-[10px] tracking-[0.3em] uppercase text-warm-gray hover:text-charcoal transition-colors duration-300 cursor-pointer"
              >
                Ver todo &rarr;
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {featuredWorks.map((work, i) => (
              <FadeIn key={work.title} delay={i * 0.15}>
                <Link href="/portafolio" className="group block cursor-pointer">
                  <div className="img-zoom aspect-[4/3] relative bg-stone/20">
                    <Image
                      src={work.src}
                      alt={`${work.title} — ${work.category}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between">
                    <h3 className="text-sm tracking-[0.1em] font-light group-hover:text-warm-gray transition-colors duration-300">
                      {work.title}
                    </h3>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-warm-gray">
                      {work.category}
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-24 md:py-40 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <FadeIn className="md:col-span-6" direction="left">
              <div className="img-zoom aspect-[3/4] relative bg-stone/20">
                <Image
                  src="/images/natural-coupling-stone.jpeg"
                  alt="Natural Coupling Stone — Proceso escultórico en piedra basalto"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <div className="md:col-span-5 md:col-start-8">
              <FadeIn delay={0.2}>
                <p className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-6">
                  Proceso de Obra
                </p>
                <h2 className="text-4xl md:text-5xl font-extralight tracking-wide leading-snug mb-8">
                  Del boceto a la piedra
                </h2>
                <p className="text-sm md:text-base text-warm-gray leading-relaxed mb-10">
                  Los fundamentos de cada escultura obedecen a un camino
                  personal de búsqueda en torno al lenguaje matérico. Desde el
                  diseño en bocetos, la escala y dimensiones, hasta la talla
                  directa en piedra basalto.
                </p>
                <Link
                  href="/proceso"
                  className="text-[11px] tracking-[0.25em] uppercase text-warm-gray hover:text-charcoal transition-colors duration-300 group cursor-pointer"
                >
                  Ver proceso
                  <span className="inline-block ml-3 transition-transform duration-300 group-hover:translate-x-2">
                    &rarr;
                  </span>
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 md:py-32 px-6 border-t border-stone/30">
        <div className="max-w-[1400px] mx-auto text-center">
          <FadeIn>
            <p className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-8">
              Contacto
            </p>
            <h2 className="text-4xl md:text-6xl font-extralight tracking-wide mb-10">
              Conversemos sobre su proyecto
            </h2>
            <Link
              href="/contacto"
              className="inline-block text-[11px] tracking-[0.25em] uppercase border border-charcoal/20 px-10 py-4 hover:bg-charcoal hover:text-cream transition-all duration-500 cursor-pointer"
            >
              Contactar
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
