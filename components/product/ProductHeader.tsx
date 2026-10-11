"use client";
import { ArrowLeft } from "lucide-react";
import { NovumLogo } from "../brand/NovumLogo";
import { NeoButton } from "../magic/NeoButton";

export default function ProductHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-7xl rounded-full glass-strong">
        <div className="flex h-14 items-center justify-between px-4 sm:px-6">
          <a href="/" className="flex items-center gap-3" aria-label="Volver a NOVUM">
            <NovumLogo size="sm" subline={false} className="text-ivory-50" />
          </a>
          <div className="flex items-center gap-2">
            <a
              href="/"
              className="hidden items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-ivory-200/85 transition-colors hover:bg-white/5 hover:text-ivory-50 sm:inline-flex"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> NOVUM
            </a>
            <NeoButton href="#contacto" size="sm">Agendar demo</NeoButton>
          </div>
        </div>
      </div>
    </header>
  );
}
