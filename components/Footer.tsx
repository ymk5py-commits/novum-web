import { NovumLogo } from "./brand/NovumLogo";
import { SITE } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/[0.06] bg-navy-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        {/* gap-x solo desde lg: 11 huecos × 32px = 352px de mínimo, que en un
            teléfono de 375 deja al contenido sin lugar y mete scroll lateral. */}
        <div className="grid grid-cols-12 gap-y-8 gap-x-0 lg:gap-x-8">
          <div className="col-span-12 md:col-span-5">
            <NovumLogo size="md" align="left" className="text-ivory-50" />
            <p className="mt-6 max-w-sm text-sm text-ivory-200/75 leading-relaxed">
              Holding y studio de sistemas inteligentes. Fundado en Asunción,
              operando donde tu negocio lo necesite.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 glass-chip rounded-full px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-signal-mint animate-ticker" />
              <span className="font-mono text-[12px] uppercase tracking-ultrawide text-ivory-200">All systems operational</span>
            </div>
          </div>

          <div className="col-span-6 md:col-span-2">
            <h4 className="eyebrow">Producto</h4>
            <ul className="mt-2 text-sm text-ivory-100/90">
              <li><a href="#productos" className="inline-flex min-h-[44px] items-center transition-colors hover:text-cobalt-300">Botika</a></li>
              <li><a href="#productos" className="inline-flex min-h-[44px] items-center transition-colors hover:text-cobalt-300">PAUTIK</a></li>
              <li><a href="#productos" className="inline-flex min-h-[44px] items-center transition-colors hover:text-cobalt-300">NOVUMed</a></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <h4 className="eyebrow">Studio</h4>
            <ul className="mt-2 text-sm text-ivory-100/90">
              <li><a href="#servicios" className="inline-flex min-h-[44px] items-center transition-colors hover:text-cobalt-300">Servicios</a></li>
              <li><a href="#proceso" className="inline-flex min-h-[44px] items-center transition-colors hover:text-cobalt-300">Proceso</a></li>
              <li><a href="#proyectos" className="inline-flex min-h-[44px] items-center transition-colors hover:text-cobalt-300">Proyectos</a></li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <h4 className="eyebrow">Contacto</h4>
            <ul className="mt-2 text-sm text-ivory-100/90">
              <li><a href="mailto:hola@novum.studio" className="inline-flex min-h-[44px] items-center transition-colors hover:text-cobalt-300">hola@novum.studio</a></li>
              <li><a href={SITE.whatsapp} className="inline-flex min-h-[44px] items-center transition-colors hover:text-cobalt-300">WhatsApp</a></li>
              <li><span className="text-ivory-300/70">Asunción, Paraguay</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-white/[0.06] pt-6">
          <span className="eyebrow">© {year} NOVUM Holding · Hecho con código</span>
          <span className="eyebrow">No usamos plantillas. Ni vendemos humo.</span>
        </div>
      </div>
    </footer>
  );
}
