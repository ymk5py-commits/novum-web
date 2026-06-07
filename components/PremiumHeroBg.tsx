"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

/**
 * Fondo de hero premium (base: componente "Aurora Hero" de 21st.dev, adaptado).
 * Aurora azul en movimiento + anillo conic rotando + rayos diagonales + spotlight.
 * 100% azul (sin lila), solo transform/opacity → fluido en mobile.
 */
const NAVY = "#07142C";
const AZURE = "#2E83F5";
const AZURE_DEEP = "#1769E0";
const AZURE_LIGHT = "#5FA1FB";
const AZURE_PALE = "#9AC4FF";

const beams = [
  { top: "20%", width: "55%", left: "-8%", delay: "0s", dur: "7.5s" },
  { top: "36%", width: "44%", left: "-6%", delay: "1.6s", dur: "9s" },
  { top: "52%", width: "62%", left: "-10%", delay: "3.1s", dur: "8s" },
  { top: "68%", width: "40%", left: "-4%", delay: "4.6s", dur: "10s" },
];

function AuroraKeyframes() {
  return (
    <style>{`
      @keyframes phb-1 { 0%{transform:translate(0,0) scale(1)} 25%{transform:translate(16%,-14%) scale(1.18)} 50%{transform:translate(-14%,16%) scale(.86)} 75%{transform:translate(9%,-7%) scale(1.08)} 100%{transform:translate(0,0) scale(1)} }
      @keyframes phb-2 { 0%{transform:translate(0,0) scale(1)} 25%{transform:translate(-16%,14%) scale(1.1)} 50%{transform:translate(16%,-14%) scale(.9)} 75%{transform:translate(-9%,7%) scale(1.16)} 100%{transform:translate(0,0) scale(1)} }
      @keyframes phb-3 { 0%{transform:translate(0,0) scale(.95)} 33%{transform:translate(11%,11%) scale(1.12)} 66%{transform:translate(-11%,-9%) scale(.92)} 100%{transform:translate(0,0) scale(.95)} }
      @media (prefers-reduced-motion: reduce){ .phb-blob{animation:none!important} }
    `}</style>
  );
}

export default function PremiumHeroBg() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0.6);
  const my = useMotionValue(0.25);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });
  const spot = useTransform([sx, sy], ([x, y]: number[]) =>
    `radial-gradient(620px circle at ${x * 100}% ${y * 100}%, rgba(46,131,245,0.16), transparent 60%)`
  );

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden" style={{ backgroundColor: NAVY }}>
      <AuroraKeyframes />

      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(120% 80% at 50% -10%, ${AZURE_DEEP}33 0%, transparent 55%)` }}
      />

      {/* anillo conic rotando detrás del centro */}
      {!reduce && (
        <motion.div
          className="conic-glow absolute left-1/2 top-[38%] h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25"
          style={{ filter: "blur(34px)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* aurora blobs azules en movimiento */}
      <motion.div className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, ease: "easeOut" }}>
        <div className="phb-blob absolute -top-1/4 left-[14%] h-[30rem] w-[30rem] rounded-full blur-3xl" style={{ backgroundColor: AZURE, opacity: 0.34, animation: reduce ? "none" : "phb-1 22s ease-in-out infinite" }} />
        <div className="phb-blob absolute -bottom-1/4 right-[10%] h-[32rem] w-[32rem] rounded-full blur-3xl" style={{ backgroundColor: AZURE_DEEP, opacity: 0.3, animation: reduce ? "none" : "phb-2 26s ease-in-out infinite" }} />
        <div className="phb-blob absolute top-1/3 left-1/2 hidden h-[24rem] w-[24rem] -translate-x-1/2 rounded-full blur-3xl md:block" style={{ backgroundColor: AZURE_LIGHT, opacity: 0.22, animation: reduce ? "none" : "phb-3 30s ease-in-out infinite" }} />
        <div className="phb-blob absolute top-[8%] right-1/4 hidden h-[16rem] w-[16rem] rounded-full blur-3xl md:block" style={{ backgroundColor: AZURE_PALE, opacity: 0.16, animation: reduce ? "none" : "phb-1 34s ease-in-out infinite reverse" }} />
      </motion.div>

      {/* rayos de luz diagonales */}
      <div className="absolute inset-0 origin-center [transform:rotate(-14deg)_scale(1.5)]">
        {beams.map((b, i) => (
          <span key={i} className="hero-beam" style={{ top: b.top, width: b.width, left: b.left, animationDelay: b.delay, animationDuration: b.dur }} />
        ))}
      </div>

      {/* grilla fina enmascarada */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(${AZURE_PALE} 1px, transparent 1px), linear-gradient(90deg, ${AZURE_PALE} 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
          WebkitMaskImage: "radial-gradient(70% 60% at 50% 40%, #000 0%, transparent 80%)",
          maskImage: "radial-gradient(70% 60% at 50% 40%, #000 0%, transparent 80%)",
        }}
      />

      {/* spotlight (desktop) */}
      {!reduce && <motion.div className="absolute inset-0 hidden md:block" style={{ background: spot }} />}

      {/* vignette + scrim inferior */}
      <div className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(ellipse at center, transparent 32%, ${NAVY}E6 100%)` }} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-navy-950 to-transparent" />
    </div>
  );
}
