import type { Metadata, Viewport } from "next";
import "./globals.css";
import { IBM_Plex_Mono, IBM_Plex_Sans, Montserrat, Newsreader } from "next/font/google";
import { SITE } from "@/lib/site";
import Movimiento from "@/components/novum/Movimiento";
import Cabecera from "@/components/novum/Cabecera";
import Pie from "@/components/novum/Pie";
import DatosEstructurados from "@/components/novum/DatosEstructurados";

const newsreader = Newsreader({ subsets: ["latin"], weight: ["300", "400"], style: ["normal"], variable: "--f-newsreader", display: "swap", adjustFontFallback: false, fallback: ["Georgia", "serif"] });
const plexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500"], variable: "--f-plex-sans", display: "swap" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"], variable: "--f-plex-mono", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "500"], variable: "--f-montserrat", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} — ${SITE.tagline}`, template: `%s · ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [...SITE.keywords],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "technology",
  alternates: { canonical: "/" },
  formatDetection: { email: false, telephone: false, address: false },
  openGraph: { type: "website", locale: SITE.locale, url: SITE.url, siteName: SITE.name, title: `${SITE.name} — ${SITE.tagline}`, description: SITE.description },
  twitter: { card: "summary_large_image", title: `${SITE.name} — ${SITE.tagline}`, description: SITE.description, images: ["/opengraph-image"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
};

export const viewport: Viewport = {
  themeColor: "#f4f6fa",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={SITE.lang} className={`${newsreader.variable} ${plexSans.variable} ${plexMono.variable} ${montserrat.variable}`}>
      <body>
        <Movimiento>
          <Cabecera />
          <main id="contenido" tabIndex={-1} className="focus:outline-none">
            {children}
          </main>
          <Pie />
        </Movimiento>
        <DatosEstructurados />
      </body>
    </html>
  );
}
