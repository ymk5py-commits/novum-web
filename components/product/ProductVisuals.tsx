"use client";
import { BorderBeam } from "../magic/BorderBeam";

function Shell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute -inset-4 -z-10 rounded-3xl bg-cobalt-500/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-3xl glass-strong shadow-glass-lg">
        <BorderBeam />
        <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-ultrawide text-ivory-300/60">{label}</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-signal-mint animate-ticker" />
            <span className="font-mono text-[10px] text-ivory-300/60">LIVE</span>
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

export function MedVisual() {
  return (
    <Shell label="novumed · agenda">
      <div className="grid gap-3 bg-gradient-to-br from-navy-900/40 via-transparent to-cobalt-500/[0.04] p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <div className="display-tight text-2xl text-ivory-50">Hoy · 6 turnos</div>
          <div className="eyebrow">88% ocupación</div>
        </div>
        {[
          ["09:00", "Lucía Ferreira", "Kinesiología · sesión 4", "mint"],
          ["09:40", "Marco Giménez", "Nutrición · control", "amber"],
          ["10:20", "Ana Villalba", "Psicología · telemedicina", "cobalt"],
        ].map(([h, who, what, tone]) => (
          <div key={h} className="flex items-center gap-3 rounded-2xl glass-chip px-3 py-2.5">
            <div className="w-10 shrink-0 font-mono text-xs text-ivory-300/70">{h}</div>
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cobalt-500/15 font-mono text-[10px] text-cobalt-100 ring-1 ring-cobalt-300/20">
              {(who as string).split(" ").map((w) => w[0]).join("")}
            </span>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm text-ivory-50">{who}</div>
              <div className="truncate text-[11px] text-ivory-300/70">{what}</div>
            </div>
            <span
              className={`h-2 w-2 rounded-full ${
                tone === "mint" ? "bg-signal-mint" : tone === "amber" ? "bg-signal-amber" : "bg-cobalt-400"
              }`}
            />
          </div>
        ))}
        <div className="mt-1 flex items-center gap-2.5 rounded-xl glass-chip px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-signal-mint animate-ticker" />
          <span className="font-mono text-[11px] text-ivory-200">
            Botika confirmó 4 turnos por <span className="text-cobalt-300">WhatsApp</span>
          </span>
        </div>
      </div>
    </Shell>
  );
}

const TEETH = ["18","17","16","15","14","13","12","11","21","22","23","24","25","26","27","28"];

export function DentalVisual() {
  // estados: ok, caries (amber), tratado (cobalt), faltante (muted)
  const states: Record<string, "ok" | "amber" | "cobalt" | "out"> = {
    "16": "amber", "26": "cobalt", "11": "cobalt", "24": "amber", "28": "out",
  };
  return (
    <Shell label="novudent · odontograma">
      <div className="grid gap-4 bg-gradient-to-br from-navy-900/40 via-transparent to-cobalt-500/[0.04] p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <div className="display-tight text-2xl text-ivory-50">Odontograma</div>
          <div className="eyebrow">Maxilar superior</div>
        </div>
        <div className="grid grid-cols-8 gap-1.5">
          {TEETH.map((t) => {
            const s = states[t] ?? "ok";
            const cls =
              s === "amber" ? "bg-signal-amber/25 ring-signal-amber/50 text-signal-amber"
              : s === "cobalt" ? "bg-cobalt-500/25 ring-cobalt-300/50 text-cobalt-100"
              : s === "out" ? "bg-white/[0.02] ring-white/10 text-ivory-300/30 line-through"
              : "bg-white/[0.04] ring-white/10 text-ivory-300/60";
            return (
              <div key={t} className={`grid aspect-square place-items-center rounded-md ring-1 font-mono text-[10px] ${cls}`}>
                {t}
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3 text-[10px] font-mono text-ivory-300/70">
          <span className="inline-flex items-center gap-1.5"><i className="h-2 w-2 rounded-sm bg-signal-amber/60" />Caries</span>
          <span className="inline-flex items-center gap-1.5"><i className="h-2 w-2 rounded-sm bg-cobalt-400/70" />Tratado</span>
          <span className="inline-flex items-center gap-1.5"><i className="h-2 w-2 rounded-sm bg-white/15" />Sano</span>
        </div>
        <div className="rounded-2xl glass-chip p-3">
          <div className="mb-2 flex items-center justify-between">
            <div className="eyebrow">Plan de tratamiento</div>
            <div className="font-mono text-xs text-cobalt-200">Gs 2.450.000</div>
          </div>
          <div className="grid gap-1.5 text-[11px] text-ivory-200/80">
            <div className="flex justify-between"><span>Resina · pieza 16</span><span className="text-ivory-300/60">Gs 420.000</span></div>
            <div className="flex justify-between"><span>Endodoncia · pieza 24</span><span className="text-ivory-300/60">Gs 980.000</span></div>
            <div className="flex justify-between"><span>Corona · pieza 26</span><span className="text-ivory-300/60">Gs 1.050.000</span></div>
          </div>
          <div className="mt-2 flex items-center gap-2.5 border-t border-white/5 pt-2">
            <span className="h-2 w-2 rounded-full bg-signal-mint animate-ticker" />
            <span className="font-mono text-[10px] text-ivory-200">Financiable en 6 cuotas</span>
          </div>
        </div>
      </div>
    </Shell>
  );
}
