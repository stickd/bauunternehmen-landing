"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Projekt 01",
    category: "Neubau",
    image: "/Neubau.jpg",
  },
  {
    title: "Projekt 02",
    category: "Sanierung",
    image: "/Sanierung.jpg",
  },
  {
    title: "Projekt 03",
    category: "Innenausbau",
    image: "/Innenausbau.jpg",
  },
  {
    title: "Projekt 04",
    category: "Fassade",
    image: "/Fassade.jpg",
  },
  {
    title: "Projekt 05",
    category: "Außenbereich",
    image: "/Ausenbereich.jpg",
  },
];

export default function ProjectsGallery() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = sliderRef.current;
    if (!container) return;

    const card = container.querySelector(
      "[data-card]",
    ) as HTMLDivElement | null;
    if (!card) return;

    const styles = window.getComputedStyle(container);
    const gap = parseInt(styles.columnGap || styles.gap || "0", 10);
    const amount = card.offsetWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projekte"
      className="relative scroll-mt-28 overflow-hidden bg-[#0B1220] py-16 md:scroll-mt-36 md:py-28"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0B1220_0%,#0F172A_55%,#111827_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.05]" />
      <div className="absolute -right-16 top-12 h-[260px] w-[260px] rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute left-[-80px] bottom-12 h-[240px] w-[240px] rounded-full bg-blue-500/10 blur-3xl" />

      {/* text container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-16">
          <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 sm:text-sm">
            <span className="h-px w-8 bg-orange-400/70" />
            Unsere Projekte
          </p>

          <h2 className="text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            <span className="text-slate-300">Ein Blick auf</span>{" "}
            <span className="text-orange-400">unsere Arbeiten</span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-300 sm:mt-4 sm:text-base md:text-lg">
            Einige Beispiele unserer Projekte und Leistungen.
          </p>
        </div>
      </div>

      {/* full width carousel */}
      <div className="relative w-full">
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Vorheriges Projekt"
          className="absolute left-4 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-slate-200 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/[0.1] active:scale-95 md:flex"
        >
          <ChevronLeft className="h-7 w-7" />
        </button>

        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Nächstes Projekt"
          className="absolute right-4 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-slate-200 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/[0.1] active:scale-95 md:flex"
        >
          <ChevronRight className="h-7 w-7" />
        </button>

        {/* Mobile */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:hidden">
          <div className="grid gap-5">
            {projects.map((project, index) => (
              <article
                key={`${project.title}-${index}`}
                className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="relative overflow-hidden bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1400}
                    height={1000}
                    priority={index === 0}
                    className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/70 via-[#020617]/12 to-transparent" />
                </div>

                <div className="px-4 pb-5 pt-4">
                  <p className="mb-1 text-xs font-medium tracking-wide text-orange-300">
                    {project.category}
                  </p>

                  <h3 className="text-xl font-semibold tracking-tight text-slate-100">
                    {project.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Desktop / Tablet */}
        <div
          ref={sliderRef}
          className="hidden snap-x snap-mandatory gap-6 overflow-x-auto pl-6 pr-6 pb-3 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:flex"
        >
          {projects.map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              data-card
              className="group relative w-[80%] shrink-0 snap-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-500 md:w-[60%] lg:w-[45%] hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="relative h-[340px] w-full overflow-hidden bg-slate-900 lg:h-[420px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1400}
                  height={1000}
                  priority={index === 0}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/70 via-[#020617]/18 to-transparent" />
              </div>

              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="mb-2 text-sm font-medium tracking-wide text-orange-300 md:text-base">
                  {project.category}
                </p>

                <h3 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
                  {project.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
