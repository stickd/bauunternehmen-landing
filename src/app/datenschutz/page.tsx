import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-28 md:px-10">
      {/* КНОПКА НАЗАД */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition hover:text-neutral-900"
      >
        ← Zurück zur Startseite
      </Link>

      <h1 className="mt-6 text-4xl font-bold text-neutral-900">
        Datenschutzerklärung
      </h1>

      <div className="mt-8 space-y-6 text-neutral-700">
        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            Allgemeine Hinweise
          </h2>
          <p className="mt-3">
            Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese
            Datenschutzerklärung informiert Sie darüber, welche Daten auf dieser
            Website verarbeitet werden.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            Verantwortliche Stelle
          </h2>
          <p className="mt-3">
            Musterfirma GmbH <br />
            Musterstraße 1 <br />
            12345 Musterstadt <br />
            E-Mail: info@deine-domain.de
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            Kontaktformular
          </h2>
          <p className="mt-3">
            Wenn Sie uns über das Kontaktformular kontaktieren, werden Ihre
            Angaben zur Bearbeitung der Anfrage verarbeitet.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            Server-Logfiles
          </h2>
          <p className="mt-3">
            Beim Besuch der Website können technische Daten wie IP-Adresse,
            Browsertyp, Uhrzeit und aufgerufene Seiten verarbeitet werden.
          </p>
        </section>

        <p className="text-sm text-neutral-500">
          Hinweis: Dies ist ein Platzhalter und ersetzt keine rechtliche
          Beratung.
        </p>
      </div>
    </main>
  );
}
