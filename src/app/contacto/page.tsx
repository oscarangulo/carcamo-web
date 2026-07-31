"use client";

import FadeIn from "@/components/FadeIn";
import { useState, FormEvent } from "react";

const WHATSAPP_PHONE = "56987906530";

const EMPTY_FORM = { nombre: "", email: "", asunto: "", mensaje: "" };

export default function Contacto() {
  const [formState, setFormState] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  // Si el navegador bloquea el popup guardamos la URL para ofrecer el enlace a mano.
  const [blockedUrl, setBlockedUrl] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text =
      `*Contacto desde jmcarcamo.cl*\n\n*Nombre:* ${formState.nombre}\n` +
      `*Email:* ${formState.email}\n*Asunto:* ${formState.asunto}\n\n*Mensaje:*\n${formState.mensaje}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;

    // Buena parte del tráfico llega desde el navegador interno de Instagram, que bloquea
    // window.open. Antes se marcaba el envío como exitoso igual, así que el visitante veía
    // "gracias por su mensaje" sin que se hubiera abierto nada.
    const opened = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    if (opened) {
      setSubmitted(true);
    } else {
      setBlockedUrl(whatsappUrl);
    }
  };

  return (
    <>
      <section className="pt-32 md:pt-44 pb-16 md:pb-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <p className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-4">Contacto</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-[0.05em] uppercase leading-[1.1]">
              Conversemos
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 border-t border-stone/30">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
            <div className="md:col-span-4">
              <FadeIn>
                <div className="space-y-12">
                  <div>
                    <h3 className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-4">Email</h3>
                    <a href="mailto:jmcf68@gmail.com" className="text-lg font-light hover:text-warm-gray transition-colors duration-300 cursor-pointer">jmcf68@gmail.com</a>
                  </div>
                  <div>
                    <h3 className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-4">Teléfono</h3>
                    <a href="tel:+56987906530" className="text-lg font-light hover:text-warm-gray transition-colors duration-300 cursor-pointer">+56 9 8790 6530</a>
                  </div>
                  <div>
                    <h3 className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-4">Instagram</h3>
                    <a href="https://www.instagram.com/josemiguelcarcamo" target="_blank" rel="noopener noreferrer" className="text-lg font-light hover:text-warm-gray transition-colors duration-300 cursor-pointer">@josemiguelcarcamo</a>
                  </div>
                  <div>
                    <h3 className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-4">Ubicación</h3>
                    <p className="text-lg font-light">Santiago de Chile</p>
                    <p className="text-sm text-warm-gray mt-1">Tucapel 6163, Peñalolén</p>
                  </div>
                  <div>
                    <h3 className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-4">Taller</h3>
                    <p className="text-sm text-warm-gray leading-relaxed">
                      Visitas al taller con cita previa.<br />
                      Disponible para proyectos de escultura pública, comisiones privadas y colaboraciones artísticas.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <FadeIn delay={0.2}>
                {submitted ? (
                  <div className="text-center py-20">
                    <p className="text-3xl font-extralight tracking-wide mb-4">Se abrió WhatsApp</p>
                    <p className="text-sm text-warm-gray">
                      Su mensaje quedó escrito en la conversación. Presione enviar en WhatsApp
                      para que me llegue.
                    </p>
                    <button
                      type="button"
                      onClick={() => { setSubmitted(false); setFormState(EMPTY_FORM); }}
                      className="mt-8 text-[11px] tracking-[0.25em] uppercase text-warm-gray hover:text-charcoal transition-colors cursor-pointer"
                    >
                      Escribir otro mensaje
                    </button>
                  </div>
                ) : blockedUrl ? (
                  <div className="text-center py-20">
                    <p className="text-3xl font-extralight tracking-wide mb-4">Abra WhatsApp para enviarlo</p>
                    <p className="text-sm text-warm-gray max-w-md mx-auto">
                      Su navegador bloqueó la ventana emergente. Use este enlace para abrir
                      WhatsApp con el mensaje ya escrito.
                    </p>
                    <a
                      href={blockedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-8 text-[11px] tracking-[0.25em] uppercase border border-charcoal/20 px-10 py-4 hover:bg-charcoal hover:text-cream transition-all duration-500"
                    >
                      Abrir WhatsApp
                    </a>
                    <div>
                      <button
                        type="button"
                        onClick={() => setBlockedUrl(null)}
                        className="mt-8 text-[11px] tracking-[0.25em] uppercase text-warm-gray hover:text-charcoal transition-colors cursor-pointer"
                      >
                        Volver al formulario
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <label htmlFor="nombre" className="text-[10px] tracking-[0.3em] uppercase text-warm-gray block mb-3">Nombre</label>
                      <input id="nombre" type="text" required value={formState.nombre} onChange={(e) => setFormState({ ...formState, nombre: e.target.value })} className="w-full bg-transparent border-b border-stone/40 pb-3 text-sm font-light focus:outline-none focus:border-charcoal transition-colors duration-300 placeholder:text-warm-gray" placeholder="Su nombre" autoComplete="name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-[10px] tracking-[0.3em] uppercase text-warm-gray block mb-3">Email</label>
                      <input id="email" type="email" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="w-full bg-transparent border-b border-stone/40 pb-3 text-sm font-light focus:outline-none focus:border-charcoal transition-colors duration-300 placeholder:text-warm-gray" placeholder="su@email.com" autoComplete="email" />
                    </div>
                    <div>
                      <label htmlFor="asunto" className="text-[10px] tracking-[0.3em] uppercase text-warm-gray block mb-3">Asunto</label>
                      <input id="asunto" type="text" required value={formState.asunto} onChange={(e) => setFormState({ ...formState, asunto: e.target.value })} className="w-full bg-transparent border-b border-stone/40 pb-3 text-sm font-light focus:outline-none focus:border-charcoal transition-colors duration-300 placeholder:text-warm-gray" placeholder="Motivo de contacto" />
                    </div>
                    <div>
                      <label htmlFor="mensaje" className="text-[10px] tracking-[0.3em] uppercase text-warm-gray block mb-3">Mensaje</label>
                      <textarea id="mensaje" required rows={5} value={formState.mensaje} onChange={(e) => setFormState({ ...formState, mensaje: e.target.value })} className="w-full bg-transparent border-b border-stone/40 pb-3 text-sm font-light focus:outline-none focus:border-charcoal transition-colors duration-300 resize-none placeholder:text-warm-gray" placeholder="Su mensaje..." />
                    </div>
                    <button type="submit" className="text-[11px] tracking-[0.25em] uppercase border border-charcoal/20 px-10 py-4 hover:bg-charcoal hover:text-cream transition-all duration-500 cursor-pointer">
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
