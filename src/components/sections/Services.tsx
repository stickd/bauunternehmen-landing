import { Hammer, Building2, Wrench, Paintbrush } from "lucide-react";

const services = [
  {
    title: "Rohbau",
    description:
      "Solide und präzise Rohbauarbeiten für Wohn- und Gewerbeprojekte.",
    icon: Building2,
  },
  {
    title: "Sanierung",
    description:
      "Professionelle Modernisierung und Instandsetzung bestehender Gebäude.",
    icon: Hammer,
  },
  {
    title: "Innenausbau",
    description:
      "Individuelle Innenausbau-Lösungen mit Fokus auf Qualität und Funktion.",
    icon: Wrench,
  },
  {
    title: "Fassadenarbeiten",
    description:
      "Saubere und langlebige Fassadenarbeiten für ein starkes Erscheinungsbild.",
    icon: Paintbrush,
  },
];

export default function Services() {
  return (
    <section
      id="leistungen"
      className="relative overflow-hidden bg-[#0B1220] py-20 md:py-28"
    >
      {/* background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0B1220_0%,#0F172A_55%,#111827_100%)]" />
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute -top-20 right-0 h-[260px] w-[260px] rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute left-[-60px] top-1/3 h-[220px] w-[220px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            <span className="h-px w-8 bg-orange-400/70" />
            Unsere Leistungen
          </p>

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-100 md:text-4xl">
            <span className="text-slate-300">Zuverlässige Bauleistungen</span>{" "}
            <span className="text-orange-400">aus einer Hand</span>
          </h2>

          <p className="text-base leading-7 text-slate-300">
            Wir bieten professionelle Bau- und Sanierungslösungen für private
            und gewerbliche Projekte – effizient, sauber und termingerecht.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_10px_30px_rgba(2,6,23,0.25)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.06] hover:shadow-[0_18px_45px_rgba(2,6,23,0.35)]"
              >
                {/* subtle highlight */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl border border-orange-400/15 bg-orange-400/10 transition-all duration-300 group-hover:bg-orange-400/15 group-hover:border-orange-400/25">
                  <Icon className="h-6 w-6 text-orange-400" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-slate-100 transition-colors duration-300 group-hover:text-white">
                  {service.title}
                </h3>

                <p className="text-sm leading-6 text-slate-300">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
