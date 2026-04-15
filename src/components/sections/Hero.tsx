export default function Hero() {
  return (
    <section className="w-full px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-center gap-6">
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

        <button className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
          Kostenloses Angebot anfordern
        </button>
      </div>
    </section>
  );
}
