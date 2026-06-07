"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";

const cn = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

const AZURE = "#2E83F5";
const AZURE_LIGHT = "#5FA1FB";
const DOT_COLOR = "#2A3F63";

type Dot = {
  start: { lat: number; lng: number; label?: string };
  end: { lat: number; lng: number; label?: string };
};

interface WorldMapProps {
  dots?: Dot[];
  lineColor?: string;
  className?: string;
}

const ASUNCION = { lat: -25.2637, lng: -57.5759, label: "Asunción" };

const DEFAULT_DOTS: Dot[] = [
  { start: ASUNCION, end: { lat: 40.7128, lng: -74.006, label: "New York" } },
  { start: ASUNCION, end: { lat: 40.4168, lng: -3.7038, label: "Madrid" } },
  { start: ASUNCION, end: { lat: -23.5505, lng: -46.6333, label: "São Paulo" } },
  { start: ASUNCION, end: { lat: 19.4326, lng: -99.1332, label: "Mexico City" } },
  { start: ASUNCION, end: { lat: 25.7617, lng: -80.1918, label: "Miami" } },
];

function useReducedMotion() {
  return useMemo(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);
}

export default function WorldMap({ dots = DEFAULT_DOTS, lineColor = AZURE, className }: WorldMapProps) {
  const reduced = useReducedMotion();

  const map = useMemo(() => new DottedMap({ height: 100, grid: "diagonal" }), []);
  const svgMap = useMemo(
    () => map.getSVG({ radius: 0.22, color: DOT_COLOR, shape: "circle", backgroundColor: "transparent" }),
    [map]
  );

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className={cn("relative aspect-[2/1] w-full bg-transparent", className)}>
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="pointer-events-none h-full w-full select-none object-contain [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)]"
        alt="Cobertura global NOVUM"
        height={495}
        width={1056}
        draggable={false}
        priority
      />
      <svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet" className="pointer-events-none absolute inset-0 h-full w-full select-none">
        <defs>
          <linearGradient id="world-map-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={AZURE} stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor={AZURE} stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => {
          const s = projectPoint(dot.start.lat, dot.start.lng);
          const e = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <motion.path
              key={`path-${i}`}
              d={createCurvedPath(s, e)}
              fill="none"
              stroke="url(#world-map-line)"
              strokeWidth="1"
              initial={{ pathLength: reduced ? 1 : 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={reduced ? { duration: 0 } : { duration: 1.2, delay: 0.3 * i, ease: "easeOut" }}
            />
          );
        })}

        {dots.map((dot, i) => {
          const pts = [projectPoint(dot.start.lat, dot.start.lng), projectPoint(dot.end.lat, dot.end.lng)];
          return pts.map((p, j) => (
            <g key={`pt-${i}-${j}`}>
              <circle cx={p.x} cy={p.y} r="3" fill={AZURE_LIGHT} />
              {!reduced && (
                <circle cx={p.x} cy={p.y} r="3" fill={AZURE} opacity="0.5">
                  <animate attributeName="r" from="3" to="12" dur="2s" begin={`${j * 0.5}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.6" to="0" dur="2s" begin={`${j * 0.5}s`} repeatCount="indefinite" />
                </circle>
              )}
            </g>
          ));
        })}
      </svg>
    </div>
  );
}
