"use client";

import { scrollToSection } from "@/lib/scroll";

export default function Hero() {
  return (
    <section id="hero" className="scroll-mt-16 md:scroll-mt-20">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col justify-center px-6 md:px-10">
        <div className="flex flex-col items-start gap-6">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Bauunternehmen
          </span>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-neutral-900 md:text-6xl">
            Ihr zuverlässiger Partner für Bauprojekte
          </h1>

          <p className="max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
            Wir realisieren hochwertige Bauarbeiten mit Präzision, Erfahrung und
            einem klaren Fokus auf Qualität.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">
            {/* PRIMARY */}
            <a
              href="#kontakt"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("kontakt", {
                  mobileOffset: 24,
                  desktopOffset: 65,
                });
              }}
              className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Kostenloses Angebot anfordern
            </a>

            {/* SECONDARY */}
            <a
              href="#projekte"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projekte");
              }}
              className="rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
            >
              Unsere Projekte ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
