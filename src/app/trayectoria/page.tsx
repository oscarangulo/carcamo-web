"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const exhibitions = [
  { year: "2007", title: "Cadencias / Fisuras", venue: "Estación Mapocho, Hall Central, Santiago" },
  { year: "2004", title: "Erosión Orgánica", venue: "Galería Praxis" },
  { year: "2002", title: "Materialidad e Imaginario", venue: "Edificio Consistorial, Municipalidad de Ñuñoa" },
  { year: "1998", title: "Forma / Fondo", venue: "Galería Parque de las Esculturas" },
  { year: "1996", title: "Esculturas", venue: "Galería Plástica Nueva Isabel Aninat" },
  { year: "1993", title: "Esculturas", venue: "Galería Arte Actual La Dehesa" },
];

const symposiums = [
  { year: "2023", location: "México — Valle de Guadalupe" },
  { year: "2022", location: "Chile — San Pedro de Atacama (Residencia)" },
  { year: "2021", location: "Brasil — Jaraguá do Sul" },
  { year: "2019", location: "Argentina — Corrientes / El Salvador — Panchimalco" },
  { year: "2018", location: "Argentina — Avellaneda / Bolivia — La Paz / El Salvador" },
  { year: "2017", location: "Ecuador — Quito / Argentina — El Dorado / Colombia — Ciudad de los Andes" },
  { year: "2016", location: "Perú / Bolivia / Irán — Tabriz / Rumania / Uruguay" },
  { year: "2015", location: "Ecuador / Chile / Brasil / Chipre" },
  { year: "2014", location: "Bolivia / Chile — Parque Peñalolén" },
  { year: "2013", location: "Ecuador — Quito" },
];

export default function Trayectoria() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8">
              <FadeIn>
                <p className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-4">
                  Trayectoria
                </p>
                <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light tracking-wide leading-[1.1] italic">
                  Más de 25 años
                  <br />
                  dedicados a la
                  <br />
                  <span className="not-italic font-normal">escultura</span>
                </h1>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
            <FadeIn className="md:col-span-5" direction="left">
              <div className="aspect-[3/4] relative bg-stone/20 sticky top-32">
                <Image
                  src="/images/jm-carcamo.png"
                  alt="José Miguel Cárcamo Fonseca — Escultor chileno junto a su obra"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
            </FadeIn>
            <div className="md:col-span-6 md:col-start-7">
              <FadeIn delay={0.2}>
                <h2 className="font-heading text-3xl md:text-4xl font-light tracking-wide italic leading-relaxed mb-8">
                  José Miguel Cárcamo Fonseca
                </h2>
                <div className="space-y-6 text-sm md:text-base text-warm-gray leading-relaxed">
                  <p>
                    Escultor nacido en Santiago de Chile, con más de 25 años
                    dedicados a la escultura. Sus primeras búsquedas artísticas
                    incluyeron talleres, estudios de diseño en la Universidad de
                    Chile como alumno libre en grabado, pintura y acuarela.
                  </p>
                  <p>
                    Descubrió en la escultura su lenguaje artístico personal,
                    permitiéndole la autoexpresión a través de la materialidad.
                  </p>
                  <p>
                    La escultura le ha permitido desarrollar, investigar,
                    formular y preguntar en un lenguaje propio. Su obra explora
                    la existencia humana y el ser en medio de cambios
                    ideológicos y filosóficos, creando respuestas silenciosas y
                    reflexivas ante la convulsión del mundo.
                  </p>
                  <p>
                    Sus propuestas y planteamientos escultóricos se introducen
                    en los intrincados laberintos del yo interior, donde los
                    materiales funcionan como meros continentes a modelar, y el
                    concepto toma precedencia sobre la habilidad técnica.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="mt-16">
                  <h3 className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-6">
                    Formación
                  </h3>
                  <div className="space-y-3 text-sm">
                    <p>Universidad de Chile — Alumno libre</p>
                    <p>Grabado, Pintura, Acuarela</p>
                    <p>Estudios de Diseño</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Exhibitions */}
      <section className="py-16 md:py-24 px-6 border-t border-stone/30">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <h2 className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-16">
              Exposiciones Individuales
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {exhibitions.map((ex, i) => (
              <FadeIn key={ex.year + ex.title} delay={i * 0.08}>
                <div className="grid grid-cols-12 gap-4 py-6 border-b border-stone/20 group">
                  <div className="col-span-2 md:col-span-1">
                    <span className="text-sm text-warm-gray font-light">
                      {ex.year}
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-4">
                    <span className="font-heading text-base md:text-lg font-normal italic tracking-wide group-hover:text-warm-gray transition-colors">
                      {ex.title}
                    </span>
                  </div>
                  <div className="col-span-12 md:col-span-7 md:text-right">
                    <span className="text-sm text-warm-gray">
                      {ex.venue}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* International Symposiums */}
      <section className="py-16 md:py-24 px-6 border-t border-stone/30">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <h2 className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-16">
              Simposios y Bienales Internacionales
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {symposiums.map((s, i) => (
              <FadeIn key={s.year + s.location} delay={i * 0.06}>
                <div className="grid grid-cols-12 gap-4 py-5 border-b border-stone/20">
                  <div className="col-span-2 md:col-span-1">
                    <span className="text-sm text-warm-gray font-light">
                      {s.year}
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-11">
                    <span className="text-sm font-light tracking-wide">
                      {s.location}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* International Presence */}
      <section className="py-24 md:py-40 px-6 border-t border-stone/30">
        <div className="max-w-[1400px] mx-auto text-center">
          <FadeIn>
            <p className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-8">
              Presencia Internacional
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-3xl mx-auto">
              {[
                "Chile", "México", "Brasil", "Argentina", "Ecuador",
                "Perú", "Bolivia", "Colombia", "El Salvador", "Uruguay",
                "Irán", "Rumania", "Chipre",
              ].map((country) => (
                <span
                  key={country}
                  className="font-heading text-xl md:text-2xl font-light italic tracking-wide text-warm-gray"
                >
                  {country}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
