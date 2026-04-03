"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const steps = [
  { number: "01", title: "Boceto y Diseño", description: "El proceso comienza con el diseño en bocetos, definiendo escala y dimensiones. Cada trazo responde a una búsqueda personal en torno al lenguaje matérico, donde la forma nace de la intuición y el concepto." },
  { number: "02", title: "Selección de Piedra", description: "La piedra basalto es extraída de la cantera, seleccionada por sus cualidades únicas de textura, color y densidad. Cada bloque posee un carácter propio que dialoga con la visión del escultor." },
  { number: "03", title: "Desbaste", description: "El desbaste inicial da forma general a la escultura, removiendo el material sobrante para revelar la forma que habita dentro de la piedra. Es un diálogo entre fuerza y sensibilidad." },
  { number: "04", title: "Modelado y Textura", description: "El modelado refina las superficies y volúmenes, mientras el tratamiento de texturas crea contrastes entre lo pulido y lo rugoso, entre lo orgánico y lo geométrico." },
  { number: "05", title: "Pulido y Talla Directa", description: "La talla directa y el pulido final revelan la nobleza del material. Cada superficie refleja horas de trabajo paciente, transformando la piedra bruta en lenguaje visual." },
  { number: "06", title: "Montaje Final", description: "La escultura encuentra su lugar sobre pedestales diseñados específicamente, completando la obra en su relación con el espacio y el observador." },
];

export default function Proceso() {
  return (
    <>
      <section className="pt-32 md:pt-44 pb-16 md:pb-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8">
              <FadeIn>
                <p className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-4">Proceso de Obra</p>
                <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light tracking-wide italic leading-[1.1]">
                  Del concepto
                  <br /><span className="not-italic font-normal">a la materia</span>
                </h1>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="py-16 md:py-24 px-6 border-t border-stone/30">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-2">
              <FadeIn><p className="text-[10px] tracking-[0.3em] uppercase text-warm-gray">Filosofía</p></FadeIn>
            </div>
            <div className="md:col-span-7 md:col-start-4">
              <FadeIn delay={0.2}>
                <blockquote className="font-heading text-2xl md:text-3xl font-light leading-relaxed tracking-wide italic">
                  Los fundamentos de cada escultura obedecen a un camino personal de búsqueda en torno al lenguaje matérico. Cada escultura existe en relación con la dimensión psicológica y espiritual del observador, reflejando un significado subjetivo y personal único para cada individuo.
                </blockquote>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Process Images */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <FadeIn direction="left">
              <div className="img-zoom aspect-[4/3] relative bg-stone/20">
                <Image src="/images/boceto-proceso.jpeg" alt="Proceso de boceto para escultura en piedra basalto" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-warm-gray mt-4">Bocetos y diseño inicial</p>
            </FadeIn>
            <FadeIn direction="right" delay={0.15}>
              <div className="img-zoom aspect-[4/3] relative bg-stone/20">
                <Image src="/images/natural-coupling-stone.jpeg" alt="Talla directa en piedra basalto — Natural Coupling Stone" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-warm-gray mt-4">Talla directa en piedra basalto</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 px-6 border-t border-stone/30">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <h2 className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-16 md:mb-24">Etapas del Proceso</h2>
          </FadeIn>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.1}>
                <div className="grid grid-cols-12 gap-6 md:gap-8">
                  <div className="col-span-12 md:col-span-1">
                    <span className="font-heading text-6xl md:text-7xl font-light text-stone/40 italic">{step.number}</span>
                  </div>
                  <div className="col-span-12 md:col-span-3 md:col-start-3">
                    <h3 className="font-heading text-xl md:text-2xl font-normal italic tracking-wide">{step.title}</h3>
                  </div>
                  <div className="col-span-12 md:col-span-5 md:col-start-7">
                    <p className="text-sm md:text-base text-warm-gray leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {i < steps.length - 1 && <hr className="mt-16 md:mt-24 border-stone/20" />}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Material */}
      <section className="py-24 md:py-40 px-6 border-t border-stone/30">
        <div className="max-w-[1400px] mx-auto text-center">
          <FadeIn>
            <p className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-8">Material</p>
            <h2 className="font-heading text-4xl md:text-6xl font-light tracking-wide italic mb-6">Piedra Basalto</h2>
            <p className="text-sm md:text-base text-warm-gray max-w-xl mx-auto leading-relaxed">
              El basalto es una roca ígnea volcánica de gran dureza y nobleza. Su color oscuro y textura única permiten crear contrastes profundos entre superficies pulidas y rugosas, revelando la esencia mineral de la tierra.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
