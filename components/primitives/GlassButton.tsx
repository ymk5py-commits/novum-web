"use client";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline";

export function GlassButton({
  href = "#",
  children,
  variant = "primary",
  icon = true,
  size = "md",
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  icon?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const base =
    "group sheen relative inline-flex items-center gap-2 rounded-full font-medium tracking-snug transition-all duration-300 select-none";

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-sm",
  }[size];

  const styles = {
    primary:
      "liquid-glass text-ivory-50 hover:-translate-y-0.5 hover:shadow-glow active:translate-y-0",
    ghost:
      "glass text-ivory-50 hover:bg-white/[0.06]",
    outline:
      "border border-white/15 bg-transparent text-ivory-50 hover:border-cobalt-200/60 hover:bg-cobalt-400/[0.08]",
  }[variant];

  return (
    <a href={href} className={`${base} ${sizes} ${styles}`}>
      <span className="relative z-10">{children}</span>
      {icon && (
        <ArrowUpRight className="relative z-10 h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      )}
    </a>
  );
}

export function GlassChip({
  children,
  dot,
  tone = "neutral",
  shiny = false,
}: {
  children: ReactNode;
  dot?: boolean;
  tone?: "neutral" | "cobalt" | "mint" | "amber" | "coral";
  shiny?: boolean;
}) {
  const toneClass = {
    neutral: "glass-chip text-ivory-200",
    cobalt: "glass-cobalt text-cobalt-100",
    mint: "border border-signal-mint/30 bg-signal-mint/10 text-signal-mint backdrop-blur-md",
    amber: "border border-signal-amber/30 bg-signal-amber/10 text-signal-amber backdrop-blur-md",
    coral: "border border-signal-coral/30 bg-signal-coral/10 text-signal-coral backdrop-blur-md",
  }[tone];
  const dotClass = {
    neutral: "bg-ivory-200/70",
    cobalt: "bg-cobalt-400",
    mint: "bg-signal-mint",
    amber: "bg-signal-amber",
    coral: "bg-signal-coral",
  }[tone];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-ultrawide ${toneClass} ${
        shiny ? "shiny-chip" : ""
      }`}
    >
      {dot && <span className={`h-1.5 w-1.5 rounded-full ${dotClass}`} />}
      {children}
    </span>
  );
}
