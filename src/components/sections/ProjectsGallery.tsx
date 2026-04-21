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
      className="scroll-mt-28 bg-white py-16 md:scroll-mt-36 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-orange-600 sm:text-sm">
            Unsere Projekte
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Ein Blick auf unsere Arbeiten
          </h2>

          <p className="mt-3 text-sm leading-6 text-neutral-600 sm:mt-4 sm:text-base md:text-lg">
            Einige Beispiele unserer Projekte und Leistungen.
          </p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-16 bg-gradient-to-r from-white to-transparent md:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-16 bg-gradient-to-l from-white to-transparent md:block" />

          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Vorheriges Projekt"
            className="absolute left-4 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/85 text-neutral-900 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl transition duration-300 hover:scale-105 hover:bg-white active:scale-95 md:flex"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Nächstes Projekt"
            className="absolute right-4 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/85 text-neutral-900 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl transition duration-300 hover:scale-105 hover:bg-white active:scale-95 md:flex"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          <div
            ref={sliderRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 pb-3 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:gap-5 md:gap-6"
          >
            {projects.map((project, index) => (
              <article
                key={`${project.title}-${index}`}
                data-card
                className="group relative w-[96%] shrink-0 snap-start overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-neutral-100 shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition duration-500 sm:w-[78%] md:w-[70%] md:snap-center lg:w-[52%] md:rounded-[2rem] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.14)]"
              >
                <div className="relative h-[300px] w-full overflow-hidden bg-neutral-200 sm:h-[320px] md:h-[340px] lg:h-[380px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1400}
                    height={1000}
                    priority={index === 0}
                    className="h-full w-full object-contain object-center transition duration-700 group-hover:scale-105 md:object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 md:p-7">
                  <p className="mb-1 text-xs font-medium tracking-wide text-orange-300 sm:mb-2 sm:text-sm md:text-base">
                    {project.category}
                  </p>

                  <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl md:text-3xl">
                    {project.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
