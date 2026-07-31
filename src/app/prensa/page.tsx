"use client";

import Image from "next/image";
import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import Lightbox, { type LightboxItem } from "@/components/Lightbox";

const NIKITIN_FORM_ISSUE_URL = "https://www.nikitinmag.com/reader?issue=nikitinform/july-2026";

const quotes = [
  {
    text: "Vale la pena prestar atención a Cárcamo Fonseca por su capacidad para unir la tecnología industrial con la intuición artística, transformando materiales pesados y resistentes en composiciones elegantes que interactúan dinámicamente con la arquitectura y el espacio público.",
    author: "Nikitin Form",
    source: "Contemporary Sculpture Spotlight, julio 2026",
  },
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

interface PressCoverageItem {
  year: string;
  title: string;
  source: string;
  link?: string;
}

const pressCoverage: PressCoverageItem[] = [
  {
    year: "2026",
    title: "Contemporary Sculpture Spotlight — Artista destacado en la edición de julio",
    source: "Nikitin Form — Nikitin Mag, Brooklyn NY",
    link: NIKITIN_FORM_ISSUE_URL,
  },
  { year: "2026", title: "Escultor chileno José Miguel Cárcamo participó en el festival Riyadh Art en Arabia Saudita", source: "El Mostrador", link: "https://www.elmostrador.cl/cultura/2026/02/13/escultor-chileno-jose-miguel-carcamo-participo-en-el-festival-riyadh-art-en-arabia-saudita/" },
  { year: "2026", title: "El Silencioso Lenguaje del Material — Entrevista por Francisco Javier Paredes", source: "Spacio Nómade" },
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

const pressClippings: LightboxItem[] = [
  {
    src: "/images/prensa-nikitin-form-apertura.jpg",
    title: "Nikitin Form — Julio 2026",
    link: { href: NIKITIN_FORM_ISSUE_URL, label: "Ver la edición completa" },
  },
  {
    src: "/images/prensa-nikitin-form-bio.jpg",
    title: "Nikitin Form — Perfil del artista",
    link: { href: NIKITIN_FORM_ISSUE_URL, label: "Ver la edición completa" },
  },
  { src: "/images/prensa-el-mercurio-lecturas-esenciales.jpg", title: "El Mercurio — Lecturas Esenciales" },
  { src: "/images/prensa-vivienda-decoracion.jpg", title: "Vivienda y Decoración" },
  { src: "/images/prensa-el-duro-arte-de-esculpir.jpg", title: "El Duro Arte de Esculpir" },
  { src: "/images/prensa-revista-caras-expo.jpg", title: "Revista Caras" },
  { src: "/images/prensa-ecuador-simposio-marmol.jpg", title: "Prensa Ecuador — Simposio de Mármol" },
];

const mediaOutlets = [
  "Nikitin Mag",
  "El Mostrador",
  "El Mercurio",
  "La Tercera",
  "Publimetro",
  "Emol",
  "Radio Bio Bio",
  "TVN",
  "Spacio Nómade",
  "Revista Caras",
];

export default function Prensa() {
  const [selectedClipping, setSelectedClipping] = useState<LightboxItem | null>(null);

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
            {pressCoverage.map((item, i) => {
              const inner = (
                <div className="grid grid-cols-12 gap-4 py-6 border-b border-stone/20 group">
                  <div className="col-span-2 md:col-span-1">
                    <span className="text-sm text-warm-gray font-light">
                      {item.year}
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-7">
                    <span className="text-base md:text-lg font-light tracking-wide group-hover:text-warm-gray transition-colors">
                      {item.title}
                      {item.link && (
                        <span className="ml-2 text-[10px] tracking-[0.2em] uppercase text-stone">&rarr;</span>
                      )}
                    </span>
                  </div>
                  <div className="col-span-12 md:col-span-4 md:text-right">
                    <span className="text-sm text-warm-gray">
                      {item.source}
                    </span>
                  </div>
                </div>
              );
              return (
                <FadeIn key={item.year + item.title} delay={i * 0.06}>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                      {inner}
                    </a>
                  ) : inner}
                </FadeIn>
              );
            })}
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
                  aria-label={
                    clipping.link
                      ? `Ver recorte: ${clipping.title} — incluye enlace a la fuente online`
                      : `Ver recorte: ${clipping.title}`
                  }
                >
                  {/* object-top: los recortes verticales pierden el titular si se encuadran al centro. */}
                  <div className="img-zoom aspect-[4/3] relative bg-stone/10">
                    <Image
                      src={clipping.src}
                      alt={clipping.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/5 transition-colors duration-500" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-sm tracking-[0.1em] font-light">
                      {clipping.title}
                      {clipping.link && (
                        <span className="ml-2 text-[10px] tracking-[0.2em] uppercase text-stone">&rarr;</span>
                      )}
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

      <Lightbox
        item={selectedClipping}
        onClose={() => setSelectedClipping(null)}
        labelPrefix="Recorte ampliado"
        maxWidthClass="max-w-4xl"
      />
    </>
  );
}
