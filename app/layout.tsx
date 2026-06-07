import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOVUM — Holding of intelligent systems",
  description:
    "NOVUM diseña, construye y opera sistemas con IA: Botika (agentes conversacionales conectados a Meta, Calendar y CRM), PAUTIK (plataforma de pauta programática) y NOVUMed (CRM clínico de nueva generación).",
  metadataBase: new URL("https://novum.studio"),
  openGraph: {
    title: "NOVUM Holding",
    description: "Botika · PAUTIK · NOVUMed. Construimos producto donde otros venden plantillas.",
    type: "website",
  },
  icons: { icon: "/assets/logo-azul.jpeg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="bg-navy-950 scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap"
        />
      </head>
      <body className="font-sans bg-navy-950 text-ivory-100 antialiased selection:bg-cobalt-400 selection:text-white">
        {children}
      </body>
    </html>
  );
}
