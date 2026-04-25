"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionBackground } from "@/components/ui/SectionBackground";

type Project = {
  title: string;
  category: string;
  image: string;
};

type ProjectCardProps = {
  project: Project;
  index: number;
  variant: "mobile" | "desktop";
};

type SliderButtonProps = {
  direction: "left" | "right";
  label: string;
  icon: LucideIcon;
  onClick: () => void;
};

const projects: Project[] = [
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

function ProjectCard({ project, index, variant }: ProjectCardProps) {
  const isDesktop = variant === "desktop";

  return (
    <article
      data-card={isDesktop ? true : undefined}
      className={
        isDesktop
          ? "group relative w-[80%] shrink-0 snap-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] md:w-[60%] lg:w-[45%]"
          : "group overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
      }
    >
      <div
        className={
          isDesktop
            ? "relative h-[340px] w-full overflow-hidden bg-slate-900 lg:h-[420px]"
            : "relative overflow-hidden bg-slate-900"
        }
      >
        <Image
          src={project.image}
          alt={project.title}
          width={1400}
          height={1000}
          priority={index === 0}
          className={
            isDesktop
              ? "h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              : "h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          }
        />

        <div
          className={
            isDesktop
              ? "absolute inset-0 bg-gradient-to-t from-[#020617]/70 via-[#020617]/18 to-transparent"
              : "absolute inset-0 bg-gradient-to-t from-[#020617]/70 via-[#020617]/12 to-transparent"
          }
        />
      </div>

      {isDesktop && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      )}

      <div
        className={
          isDesktop ? "absolute inset-x-0 bottom-0 p-7" : "px-4 pb-5 pt-4"
        }
      >
        <p
          className={
            isDesktop
              ? "mb-2 text-sm font-medium tracking-wide text-orange-300 md:text-base"
              : "mb-1 text-xs font-medium tracking-wide text-orange-300"
          }
        >
          {project.category}
        </p>

        <h3
          className={
            isDesktop
              ? "text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl"
              : "text-xl font-semibold tracking-tight text-slate-100"
          }
        >
          {project.title}
        </h3>
      </div>
    </article>
  );
}

function SliderButton({
  direction,
  label,
  icon: Icon,
  onClick,
}: SliderButtonProps) {
  const positionClass = direction === "left" ? "left-4" : "right-4";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`absolute ${positionClass} top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-slate-200 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/[0.1] active:scale-95 md:flex`}
    >
      <Icon className="h-7 w-7" />
    </button>
  );
}

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
    <Section
      id="projekte"
      className="scroll-mt-28 py-16 md:scroll-mt-36 md:py-28"
    >
      <SectionBackground />

      <Container className="relative">
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
      </Container>

      <div className="relative w-full">
        <SliderButton
          direction="left"
          label="Vorheriges Projekt"
          icon={ChevronLeft}
          onClick={() => scroll("left")}
        />

        <SliderButton
          direction="right"
          label="Nächstes Projekt"
          icon={ChevronRight}
          onClick={() => scroll("right")}
        />

        <Container className="md:hidden">
          <div className="grid gap-5">
            {projects.map((project, index) => (
              <ProjectCard
                key={`${project.title}-${index}`}
                project={project}
                index={index}
                variant="mobile"
              />
            ))}
          </div>
        </Container>

        <div
          ref={sliderRef}
          className="hidden snap-x snap-mandatory gap-6 overflow-x-auto pb-3 pl-6 pr-6 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:flex"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              project={project}
              index={index}
              variant="desktop"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
