export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/[0.06] bg-navy-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cobalt-500/15 ring-1 ring-cobalt-400/40">
                <span className="h-2 w-2 rounded-full bg-cobalt-300" />
              </span>
              <div className="flex items-baseline gap-2">
                <span className="display-tight text-2xl text-ivory-50 tracking-ultrawide">NOVUM</span>
                <span className="text-[10px] uppercase tracking-ultrawide text-ivory-300 border-l border-white/10 pl-2">holding</span>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm text-ivory-200/75 leading-relaxed">
              Holding y studio de sistemas inteligentes. Fundado en Bogotá,
              operando donde tu negocio lo necesite.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 glass-chip rounded-full px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-signal-mint animate-ticker" />
              <span className="font-mono text-[10px] uppercase tracking-ultrawide text-ivory-200">All systems operational</span>
            </div>
          </div>

          <div className="col-span-6 md:col-span-2">
            <h4 className="eyebrow">Producto</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-ivory-100/90">
              <li><a href="#productos" className="hover:text-cobalt-300 transition-colors">Botika</a></li>
              <li><a href="#productos" className="hover:text-cobalt-300 transition-colors">PAUTIK</a></li>
              <li><a href="#productos" className="hover:text-cobalt-300 transition-colors">NOVUMed</a></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <h4 className="eyebrow">Studio</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-ivory-100/90">
              <li><a href="#servicios" className="hover:text-cobalt-300 transition-colors">Servicios</a></li>
              <li><a href="#proceso" className="hover:text-cobalt-300 transition-colors">Proceso</a></li>
              <li><a href="#proyectos" className="hover:text-cobalt-300 transition-colors">Proyectos</a></li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <h4 className="eyebrow">Contacto</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-ivory-100/90">
              <li><a href="mailto:hola@novum.studio" className="hover:text-cobalt-300 transition-colors">hola@novum.studio</a></li>
              <li><a href="https://wa.me/573000000000" className="hover:text-cobalt-300 transition-colors">WhatsApp</a></li>
              <li><span className="text-ivory-300/70">Bogotá, Colombia</span></li>
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
