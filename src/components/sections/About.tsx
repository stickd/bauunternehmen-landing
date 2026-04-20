export default function About() {
  const stats = [
    { value: "10+", label: "Jahre Erfahrung" },
    { value: "100+", label: "Abgeschlossene Projekte" },
    { value: "50+", label: "Zufriedene Kunden" },
  ];

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
          Über uns
        </p>

        <h2 className="max-w-xl text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          Ihr zuverlässiger Partner für hochwertige Bauprojekte
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600">
          Wir stehen für Qualität, Präzision und Verlässlichkeit im Bauwesen.
          Mit langjähriger Erfahrung begleiten wir unsere Kunden von der ersten
          Planung bis zur erfolgreichen Umsetzung jedes Projekts.
        </p>

        <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
          Unser Anspruch ist es, funktionale und nachhaltige Lösungen zu
          schaffen, die höchsten Standards entsprechen und individuell auf die
          Bedürfnisse unserer Kunden abgestimmt sind.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <p className="text-3xl font-bold text-orange-600">{stat.value}</p>
            <p className="mt-2 text-sm text-neutral-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
