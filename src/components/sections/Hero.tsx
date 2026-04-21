"use client";

import { scrollToSection } from "@/lib/scroll";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#0F172A] text-white scroll-mt-16 md:scroll-mt-20"
    >
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#10203A] to-[#0A1426]" />

      {/* SOFT GLOW */}
      <div className="absolute -top-32 right-[-120px] h-[320px] w-[320px] rounded-full bg-[#F59E0B]/10 blur-3xl" />
      <div className="absolute left-[-100px] top-1/3 h-[220px] w-[220px] rounded-full bg-[#2563EB]/8 blur-3xl" />

      {/* RIGHT DECORATIVE VISUAL */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block">
        {/* grid */}
        <div className="absolute inset-y-0 right-0 w-full opacity-[0.07]">
          <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>

        {/* big circles */}
        <div className="absolute right-[10%] top-1/2 h-[440px] w-[440px] -translate-y-1/2 rounded-full border border-white/10" />
        <div className="absolute right-[18%] top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full border border-white/6" />
        <div className="absolute right-[28%] top-1/2 h-[180px] w-[180px] -translate-y-1/2 rounded-full border border-orange-400/15" />

        {/* accent line */}
        <div className="absolute right-[8%] top-[20%] h-px w-[220px] bg-gradient-to-r from-transparent via-orange-400/50 to-transparent" />

        {/* glass card-ish decorative blocks */}
        <div className="absolute right-[16%] top-[22%] h-24 w-24 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm" />
        <div className="absolute bottom-[18%] right-[26%] h-16 w-40 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm" />

        {/* soft radial accents */}
        <div className="absolute right-[12%] top-[26%] h-[220px] w-[220px] rounded-full bg-[#2563EB]/10 blur-3xl" />
        <div className="absolute bottom-[20%] right-[18%] h-[180px] w-[180px] rounded-full bg-[#F97316]/10 blur-3xl" />
      </div>

      {/* STRONGER OVERLAY FOR TEXT */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.92),rgba(2,6,23,0.72),rgba(2,6,23,0.28))]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col justify-center px-6 md:px-10">
        <div className="flex max-w-4xl flex-col items-start gap-6">
          {/* LABEL */}
          <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
            <span className="h-px w-8 bg-orange-400/70" />
            Bauunternehmen
          </span>

          {/* TITLE */}
          <h1 className="max-w-[720px] text-4xl font-bold leading-[1.12] tracking-tight md:text-6xl">
            <span className="text-slate-300">
              Ihr zuverlässiger Partner für{" "}
            </span>
            <span className="text-orange-400">hochwertige Bauprojekte</span>
          </h1>

          {/* TEXT */}
          <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Wir realisieren Bauprojekte mit höchster Präzision, moderner Technik
            und einem klaren Fokus auf Qualität, Zuverlässigkeit und
            Termintreue.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-2">
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
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-orange-300/20 bg-gradient-to-b from-[#FB923C] to-[#EA580C] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(249,115,22,0.22)] transition-[background-color,box-shadow,transform] duration-300 ease-out hover:shadow-[0_16px_36px_rgba(249,115,22,0.28)] active:scale-[0.985]"
            >
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.16)_45%,transparent_70%)] translate-x-[-120%] transition-transform duration-700 ease-out group-hover:translate-x-[120%]" />
              <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
              <span className="relative z-10">
                Kostenloses Angebot anfordern
              </span>
            </a>

            {/* SECONDARY */}
            <a
              href="#projekte"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projekte");
              }}
              className="group inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur-md transition-[background-color,border-color,box-shadow,transform] duration-300 ease-out hover:border-white/25 hover:bg-white/[0.1] hover:shadow-[0_10px_30px_rgba(2,6,23,0.35)] active:scale-[0.985]"
            >
              <span>Unsere Projekte ansehen</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
