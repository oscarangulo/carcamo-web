"use client";

import FadeIn from "@/components/FadeIn";
import { useState, FormEvent } from "react";

export default function Contacto() {
  const [formState, setFormState] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:jmcf68@gmail.com?subject=${encodeURIComponent(formState.asunto)}&body=${encodeURIComponent(`De: ${formState.nombre}\nEmail: ${formState.email}\n\n${formState.mensaje}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <p className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-4">
              Contacto
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[0.05em] uppercase leading-[1.1]">
              Conversemos
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 px-6 border-t border-stone/30">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
            {/* Info */}
            <div className="md:col-span-4">
              <FadeIn>
                <div className="space-y-12">
                  <div>
                    <h3 className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-4">
                      Email
                    </h3>
                    <a
                      href="mailto:jmcf68@gmail.com"
                      className="text-lg font-light hover:text-warm-gray transition-colors duration-300"
                    >
                      jmcf68@gmail.com
                    </a>
                  </div>

                  <div>
                    <h3 className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-4">
                      Teléfono
                    </h3>
                    <a
                      href="tel:+56987906530"
                      className="text-lg font-light hover:text-warm-gray transition-colors duration-300"
                    >
                      +56 9 8790 6530
                    </a>
                  </div>

                  <div>
                    <h3 className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-4">
                      Instagram
                    </h3>
                    <a
                      href="https://www.instagram.com/josemiguelcarcamo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-light hover:text-warm-gray transition-colors duration-300"
                    >
                      @josemiguelcarcamo
                    </a>
                  </div>

                  <div>
                    <h3 className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-4">
                      Ubicación
                    </h3>
                    <p className="text-lg font-light">Santiago de Chile</p>
                    <p className="text-sm text-warm-gray mt-1">
                      Tucapel 6163, Peñalolén
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-4">
                      Taller
                    </h3>
                    <p className="text-sm text-warm-gray leading-relaxed">
                      Visitas al taller con cita previa.
                      <br />
                      Disponible para proyectos de escultura pública,
                      comisiones privadas y colaboraciones artísticas.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Form */}
            <div className="md:col-span-6 md:col-start-7">
              <FadeIn delay={0.2}>
                {submitted ? (
                  <div className="text-center py-20">
                    <p className="text-2xl font-extralight tracking-wide mb-4">
                      Gracias por su mensaje
                    </p>
                    <p className="text-sm text-warm-gray">
                      Responderé a la brevedad posible.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({
                          nombre: "",
                          email: "",
                          asunto: "",
                          mensaje: "",
                        });
                      }}
                      className="mt-8 text-[11px] tracking-[0.25em] uppercase text-warm-gray hover:text-charcoal transition-colors"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <label className="text-[10px] tracking-[0.3em] uppercase text-warm-gray block mb-3">
                        Nombre
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.nombre}
                        onChange={(e) =>
                          setFormState({ ...formState, nombre: e.target.value })
                        }
                        className="w-full bg-transparent border-b border-stone/40 pb-3 text-sm font-light focus:outline-none focus:border-charcoal transition-colors duration-300 placeholder:text-stone"
                        placeholder="Su nombre"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] tracking-[0.3em] uppercase text-warm-gray block mb-3">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className="w-full bg-transparent border-b border-stone/40 pb-3 text-sm font-light focus:outline-none focus:border-charcoal transition-colors duration-300 placeholder:text-stone"
                        placeholder="su@email.com"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] tracking-[0.3em] uppercase text-warm-gray block mb-3">
                        Asunto
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.asunto}
                        onChange={(e) =>
                          setFormState({ ...formState, asunto: e.target.value })
                        }
                        className="w-full bg-transparent border-b border-stone/40 pb-3 text-sm font-light focus:outline-none focus:border-charcoal transition-colors duration-300 placeholder:text-stone"
                        placeholder="Motivo de contacto"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] tracking-[0.3em] uppercase text-warm-gray block mb-3">
                        Mensaje
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formState.mensaje}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            mensaje: e.target.value,
                          })
                        }
                        className="w-full bg-transparent border-b border-stone/40 pb-3 text-sm font-light focus:outline-none focus:border-charcoal transition-colors duration-300 resize-none placeholder:text-stone"
                        placeholder="Su mensaje..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="text-[11px] tracking-[0.25em] uppercase border border-charcoal/20 px-10 py-4 hover:bg-charcoal hover:text-cream transition-all duration-500"
                    >
                      Enviar Mensaje
                    </button>
                  </form>
                )}
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
