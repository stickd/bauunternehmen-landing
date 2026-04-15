const projects = [
  {
    title: "Projekt 01",
    category: "Neubau",
  },
  {
    title: "Projekt 02",
    category: "Sanierung",
  },
  {
    title: "Projekt 03",
    category: "Innenausbau",
  },
  {
    title: "Projekt 04",
    category: "Fassade",
  },
  {
    title: "Projekt 05",
    category: "Gewerbe",
  },
  {
    title: "Projekt 06",
    category: "Außenbereich",
  },
];

export default function ProjectsGallery() {
  return (
    <section id="projects" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
            Unsere Projekte
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Ein Blick auf unsere Arbeiten
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-600">
            Einige Beispiele unserer Projekte und Leistungen.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-neutral-200 via-neutral-300 to-neutral-400" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="mb-2 text-sm font-medium text-orange-300">
                  {project.category}
                </p>
                <h3 className="text-xl font-semibold text-white">
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
