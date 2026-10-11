import type { Config } from "tailwindcss";

/* Los valores viven en app/globals.css (:root) y en design.md. Acá solo se exponen
 * como utilidades de Tailwind por nombre: nunca un color o una medida suelta. */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/novum/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: "var(--color-paper)", 2: "var(--color-paper-2)" },
        rule: "var(--color-rule)",
        muted: "var(--color-muted)",
        ink: { DEFAULT: "var(--color-ink)", 2: "var(--color-ink-2)" },
        accent: { DEFAULT: "var(--color-accent)", ink: "var(--color-accent-ink)" },
        "on-ink": { DEFAULT: "var(--color-on-ink)", 2: "var(--color-on-ink-2)" },
        error: "var(--color-error)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
        wordmark: ["var(--font-wordmark)"],
      },
      fontSize: {
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        md: "var(--text-md)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        "2xl": "var(--text-2xl)",
        "3xl": "var(--text-3xl)",
        "display-s": "var(--text-display-s)",
        display: "var(--text-display)",
      },
      spacing: {
        "3xs": "var(--space-3xs)",
        "2xs": "var(--space-2xs)",
        xs: "var(--space-xs)",
        sm: "var(--space-sm)",
        md: "var(--space-md)",
        lg: "var(--space-lg)",
        xl: "var(--space-xl)",
        "2xl": "var(--space-2xl)",
        "3xl": "var(--space-3xl)",
        "4xl": "var(--space-4xl)",
        gutter: "var(--gutter)",
      },
      maxWidth: { medida: "var(--measure)" },
      transitionTimingFunction: { out: "var(--ease-out)", in: "var(--ease-in)", "in-out": "var(--ease-in-out)" },
    },
  },
  plugins: [],
};

export default config;
