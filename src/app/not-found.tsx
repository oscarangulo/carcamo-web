import Link from "next/link";

// Next 16 solo admite `export const metadata` en layout.js/page.js (y en global-not-found.js);
// desde not-found.tsx se ignora. El <meta name="robots" content="noindex"> lo inyecta Next
// automáticamente al responder 404.
export default function NotFound() {
  return (
    <section className="pt-32 md:pt-44 pb-24 md:pb-36 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-3xl">
          <p className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-4">
            Error 404
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[0.05em] uppercase leading-[1.1]">
            Página no encontrada
          </h1>

          <div className="w-16 h-px bg-stone my-10 md:my-12" />

          <p className="text-base md:text-lg font-light leading-relaxed text-warm-gray">
            La página que buscas no existe o cambió de dirección. Puedes volver al inicio o
            recorrer el portafolio de esculturas en piedra.
          </p>

          <div className="mt-12 md:mt-16 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            <Link
              href="/"
              className={
                "inline-block text-center text-[11px] tracking-[0.25em] uppercase " +
                "border border-charcoal/20 px-10 py-4 hover:bg-charcoal hover:text-cream " +
                "transition-all duration-500 cursor-pointer"
              }
            >
              Volver al inicio
            </Link>
            <Link
              href="/portafolio"
              className={
                "group text-[11px] tracking-[0.25em] uppercase text-warm-gray " +
                "hover:text-charcoal transition-colors duration-300 cursor-pointer"
              }
            >
              Ver portafolio
              <span className="inline-block ml-3 transition-transform duration-300 group-hover:translate-x-2">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
