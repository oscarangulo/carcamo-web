import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone/50 mt-auto">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex flex-col mb-6">
              <span className="text-xs tracking-[0.3em] uppercase font-light text-warm-gray">
                Escultor
              </span>
              <span className="text-lg tracking-[0.15em] uppercase font-light">
                José Miguel Cárcamo
              </span>
            </div>
            <p className="text-sm text-warm-gray leading-relaxed max-w-xs">
              Atemporalidad, Existencia, Materialidad
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-6">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-6">
              Navegación
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/trayectoria", label: "Trayectoria" },
                { href: "/portafolio", label: "Portafolio" },
                { href: "/proceso", label: "Proceso de Obra" },
                { href: "/bocetos", label: "Bocetos" },
                { href: "/prensa", label: "Prensa" },
                { href: "/contacto", label: "Contacto" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-warm-gray hover:text-charcoal transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-6">
              Contacto
            </h4>
            <div className="flex flex-col gap-3 text-sm text-warm-gray">
              <a
                href="mailto:jmcf68@gmail.com"
                className="hover:text-charcoal transition-colors duration-300"
              >
                jmcf68@gmail.com
              </a>
              <a
                href="tel:+56987906530"
                className="hover:text-charcoal transition-colors duration-300"
              >
                +56 9 8790 6530
              </a>
              <a
                href="https://www.instagram.com/josemiguelcarcamo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-charcoal transition-colors duration-300"
              >
                @josemiguelcarcamo
              </a>
              <p>Santiago de Chile</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-stone/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] tracking-[0.15em] text-warm-gray">
            &copy; {new Date().getFullYear()} José Miguel Cárcamo Fonseca
          </p>
          <p className="text-[11px] tracking-[0.15em] text-stone">
            Diseño y desarrollo por{" "}
            <a
              href="mailto:oscarangulo.dev@gmail.com"
              className="hover:text-warm-gray transition-colors duration-300"
            >
              Oscar Angulo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
