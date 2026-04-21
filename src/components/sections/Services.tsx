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
    <section id="leistungen" className="bg-neutral-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Unsere Leistungen
          </p>

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            Zuverlässige Bauleistungen aus einer Hand
          </h2>

          <p className="text-base leading-7 text-neutral-600">
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
                className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 transition group-hover:bg-emerald-100">
                  <Icon className="h-6 w-6 text-emerald-600" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-neutral-900">
                  {service.title}
                </h3>

                <p className="text-sm leading-6 text-neutral-600">
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
