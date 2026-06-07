"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { GlassChip } from "./primitives/GlassButton";

/**
 * Video que se expande con el scroll — versión scroll-linked (Framer useScroll),
 * sin secuestrar el scroll. Suave y fluido en mobile, compatible con Lenis.
 * Anima solo transform/opacity (GPU) para máxima fluidez.
 */
export default function ScrollExpandVideo({
  src = "/assets/showreel.mp4",
  title = "Esto construimos",
  hint = "Scroll para ver el reel",
}: {
  src?: string;
  title?: string;
  hint?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  const startScale = isMobile ? 0.66 : 0.38;
  const scale = useTransform(p, [0, 0.85], [startScale, 1]);
  const radius = useTransform(p, [0, 0.85], ["28px", "0px"]);
  const overlay = useTransform(p, [0, 0.85], [0.5, 0.12]);
  const titleOpacity = useTransform(p, [0, 0.35, 0.7], [1, 1, 0]);
  const xLeft = useTransform(p, [0, 0.6], ["0vw", "-26vw"]);
  const xRight = useTransform(p, [0, 0.6], ["0vw", "26vw"]);
  const hintOpacity = useTransform(p, [0, 0.18], [1, 0]);

  const firstWord = title.split(" ")[0];
  const rest = title.split(" ").slice(1).join(" ");

  return (
    <section id="reel" ref={ref} className="relative h-[220vh]">
      <div className="sticky top-0 grid h-[100dvh] place-items-center overflow-hidden bg-navy-950">
        {/* video que escala */}
        <motion.div
          style={{ scale, borderRadius: radius }}
          className="relative h-[100dvh] w-screen origin-center overflow-hidden will-change-transform"
        >
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <motion.div style={{ opacity: overlay }} className="absolute inset-0 bg-navy-950" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/30" />
        </motion.div>

        {/* título superpuesto que se separa y desvanece */}
        <div className="pointer-events-none absolute inset-0 grid place-items-center px-4">
          <motion.div style={{ opacity: titleOpacity }} className="flex flex-col items-center text-center">
            <motion.h2 style={{ x: xLeft }} className="display-tight text-5xl sm:text-7xl lg:text-8xl text-ivory-50">
              {firstWord}
            </motion.h2>
            {rest && (
              <motion.h2 style={{ x: xRight }} className="display-tight text-5xl sm:text-7xl lg:text-8xl text-ivory-50">
                {rest}
              </motion.h2>
            )}
            <motion.div style={{ opacity: hintOpacity }} className="mt-6">
              <GlassChip dot tone="cobalt">{hint}</GlassChip>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
