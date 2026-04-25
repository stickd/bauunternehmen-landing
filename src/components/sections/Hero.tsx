"use client";

import { Container } from "@/components/ui/Container";
import { ScrollButton } from "@/components/ui/ScrollButton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#0F172A] text-white scroll-mt-16 md:scroll-mt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#10203A] to-[#0A1426]" />

      <div className="absolute -top-32 right-[-120px] h-[320px] w-[320px] rounded-full bg-[#F59E0B]/10 blur-3xl" />
      <div className="absolute left-[-100px] top-1/3 h-[220px] w-[220px] rounded-full bg-[#2563EB]/8 blur-3xl" />

      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block">
        <div className="absolute inset-y-0 right-0 w-full opacity-[0.07]">
          <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>

        <div className="absolute right-[10%] top-1/2 h-[440px] w-[440px] -translate-y-1/2 rounded-full border border-white/10" />
        <div className="absolute right-[18%] top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full border border-white/6" />
        <div className="absolute right-[28%] top-1/2 h-[180px] w-[180px] -translate-y-1/2 rounded-full border border-orange-400/15" />

        <div className="absolute right-[8%] top-[20%] h-px w-[220px] bg-gradient-to-r from-transparent via-orange-400/50 to-transparent" />

        <div className="absolute right-[16%] top-[22%] h-24 w-24 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm" />
        <div className="absolute bottom-[18%] right-[26%] h-16 w-40 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm" />

        <div className="absolute right-[12%] top-[26%] h-[220px] w-[220px] rounded-full bg-[#2563EB]/10 blur-3xl" />
        <div className="absolute bottom-[20%] right-[18%] h-[180px] w-[180px] rounded-full bg-[#F97316]/10 blur-3xl" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.92),rgba(2,6,23,0.72),rgba(2,6,23,0.28))]" />

      <Container className="relative flex min-h-screen flex-col justify-start pt-16 sm:pt-20 md:pt-28">
        <div className="flex max-w-4xl flex-col items-start gap-6 md:gap-8">
          <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
            <span className="h-px w-8 bg-orange-400/70" />
            Bauunternehmen
          </span>

          <h1 className="max-w-[720px] text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-6xl">
            <span className="text-slate-300">
              Ihr zuverlässiger Partner für{" "}
            </span>
            <span className="text-orange-400">hochwertige Bauprojekte</span>
          </h1>

          <p className="max-w-2xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">
            Wir realisieren Bauprojekte mit höchster Präzision, moderner Technik
            und einem klaren Fokus auf Qualität, Zuverlässigkeit und
            Termintreue.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <ScrollButton href="#kontakt" mobileOffset={24} desktopOffset={65}>
              Kostenloses Angebot anfordern
            </ScrollButton>

            <ScrollButton href="#projekte" variant="secondary">
              Unsere Projekte ansehen
            </ScrollButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
