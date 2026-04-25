"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionBackground } from "@/components/ui/SectionBackground";

const stats = [
  { value: "10+", label: "Jahre Erfahrung" },
  { value: "100+", label: "Abgeschlossene Projekte" },
  { value: "50+", label: "Zufriedene Kunden" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.97,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

type StatCardProps = {
  value: string;
  label: string;
};

function StatCard({ value, label }: StatCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_10px_30px_rgba(2,6,23,0.25)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.06] hover:shadow-[0_18px_45px_rgba(2,6,23,0.35)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <p className="text-3xl font-bold text-orange-400">{value}</p>

      <p className="mt-2 text-sm leading-6 text-slate-300">{label}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <Section
      id="ueber-uns"
      className="scroll-mt-32 flex min-h-screen items-center py-0 md:scroll-mt-36"
    >
      <SectionBackground />

      <Container className="relative pt-24 md:pt-0">
        <div className="grid w-full gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <p className="mb-4 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              <span className="h-px w-8 bg-orange-400/70" />
              Über uns
            </p>

            <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="text-slate-300">
                Ihr zuverlässiger Partner für
              </span>{" "}
              <span className="text-orange-400">hochwertige Bauprojekte</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
              Wir stehen für Qualität, Präzision und Verlässlichkeit im
              Bauwesen. Mit langjähriger Erfahrung begleiten wir unsere Kunden
              von der ersten Planung bis zur erfolgreichen Umsetzung jedes
              Projekts.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              Unser Anspruch ist es, funktionale und nachhaltige Lösungen zu
              schaffen, die höchsten Standards entsprechen und individuell auf
              die Bedürfnisse unserer Kunden abgestimmt sind.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
