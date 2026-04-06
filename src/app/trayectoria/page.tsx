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

const collectiveExhibitions = [
  { year: "2022", title: "Colectiva", venue: "Centro Cultural Los Andes" },
  { year: "2019", title: "Jardín de las Esculturas", venue: "Universidad Andrés Bello, Casona de Las Condes" },
  { year: "2018", title: "Tributo a Rodríguez Castelo", venue: "Casa de la Cultura Ecuatoriana, Quito, Ecuador" },
  { year: "2017", title: "Viajeros del Sur", venue: "Museo El Dorado, Misiones, Argentina" },
  { year: "2016", title: "Viajeros del Sur", venue: "Museo Luis Perlotti, Buenos Aires, Argentina" },
  { year: "2014", title: "Frontis Museo Nacional de Bellas Artes", venue: "Simposio Parque Peñalolén" },
  { year: "2013", title: "III Simposio Internacional de Escultura Monumental", venue: "Casa de la Cultura Ecuatoriana, Quito" },
  { year: "2012", title: "Escultura en Hielo", venue: "Valle Nevado, Santiago" },
  { year: "2009", title: "El Día de Europa", venue: "Embajada de Rumania" },
  { year: "2007", title: "Laberintos de amor y erotismo", venue: "Casona Nemesio Antúnez" },
  { year: "2006", title: "PIEDRA", venue: "Soech, Biblioteca de Santiago" },
  { year: "2001", title: "Nueva Abstracción", venue: "Galería Praxis" },
  { year: "2000", title: "Grandes Escultores", venue: "Club de Golf, Valle Escondido" },
  { year: "1996", title: "Arte Internacional Casapieda", venue: "Praxis — EEUU, México, Brasil, Argentina, Perú, Chile" },
];

const symposiums = [
  { year: "2026", location: "Arabia Saudita — Riad" },
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

const obraPublica = [
  { year: "1997", description: "Parque privado, arquitecto Christian Boza, Los Vilos" },
  { year: "1996", description: "Hotel Marriott, Santiago, Chile" },
  { year: "1996", description: "Hospital Roberto del Río — Banca Escultórica, Fundación Integra" },
  { year: "1996", description: "Instituto Cultural de Providencia" },
  { year: "1996", description: "Cementerio General, Patio de los Presidentes" },
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
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[0.05em] uppercase leading-[1.1]">
                  Más de 25 años
                  <br />
                  dedicados a la
                  <br />
                  escultura
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
                <h2 className="text-2xl md:text-3xl font-extralight tracking-wide leading-relaxed mb-8">
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
                    Su maestra Lily Garafulic, quien trabajó en el taller de
                    Constantin Brancusi y fue Directora del Museo Nacional de
                    Bellas Artes, le enseñó que &ldquo;hay demasiado escrito en
                    arte&rdquo; y le dio las llaves de su taller con absoluta
                    confianza.
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
                    <p>Talleres de Lily Garafulic y Matías Vial</p>
                    <p>Alumno libre, Facultad de Artes Visuales, Universidad de Chile</p>
                    <p>Grabado, Pintura, Acuarela</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Exhibitions */}
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
                    <span className="text-base md:text-lg font-light tracking-wide group-hover:text-warm-gray transition-colors">
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

      {/* Collective Exhibitions */}
      <section className="py-16 md:py-24 px-6 border-t border-stone/30">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <h2 className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-16">
              Exposiciones Colectivas
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {collectiveExhibitions.map((ex, i) => (
              <FadeIn key={ex.year + ex.title} delay={i * 0.08}>
                <div className="grid grid-cols-12 gap-4 py-6 border-b border-stone/20 group">
                  <div className="col-span-2 md:col-span-1">
                    <span className="text-sm text-warm-gray font-light">
                      {ex.year}
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-4">
                    <span className="text-base md:text-lg font-light tracking-wide group-hover:text-warm-gray transition-colors">
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
                "Irán", "Rumania", "Chipre", "Arabia Saudita",
              ].map((country) => (
                <span
                  key={country}
                  className="text-lg md:text-xl font-extralight tracking-wide text-warm-gray"
                >
                  {country}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Jeff Koons Photo */}
      <section className="py-16 md:py-24 px-6 border-t border-stone/30">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-6 md:col-start-4">
              <FadeIn>
                <div className="aspect-[4/3] relative bg-stone/20">
                  <Image
                    src="/images/con-jeff-koons.jpg"
                    alt="José Miguel Cárcamo junto a Jeff Koons"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <p className="text-sm text-warm-gray mt-4 text-center font-light tracking-wide">
                  Junto a Jeff Koons
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Obra Pública Histórica */}
      <section className="py-16 md:py-24 px-6 border-t border-stone/30">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <h2 className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-16">
              Obra Pública Histórica
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {obraPublica.map((item, i) => (
              <FadeIn key={item.year + item.description} delay={i * 0.08}>
                <div className="grid grid-cols-12 gap-4 py-5 border-b border-stone/20">
                  <div className="col-span-2 md:col-span-1">
                    <span className="text-sm text-warm-gray font-light">
                      {item.year}
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-11">
                    <span className="text-sm font-light tracking-wide">
                      {item.description}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Colecciones */}
      <section className="py-24 md:py-40 px-6 border-t border-stone/30">
        <div className="max-w-[1400px] mx-auto text-center">
          <FadeIn>
            <p className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-8">
              Colecciones
            </p>
            <p className="text-lg md:text-xl font-extralight tracking-wide text-warm-gray leading-relaxed max-w-3xl mx-auto">
              Obras en colecciones de Argentina, Brasil, Ecuador, Uruguay,
              Estados Unidos, Austria, Portugal, Rumania e Italia.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
