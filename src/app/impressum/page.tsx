import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-28 md:px-10">
      <Link
        href="/"
        className="text-sm font-medium text-neutral-500 transition hover:text-neutral-900"
      >
        ← Zurück zur Startseite
      </Link>

      <h1 className="mt-6 text-4xl font-bold text-neutral-900">Impressum</h1>

      <div className="mt-8 space-y-8 text-neutral-700">
        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            Angaben gemäß § 5 DDG
          </h2>

          <p className="mt-3 leading-7">
            Musterfirma GmbH <br />
            Musterstraße 1 <br />
            12345 Musterstadt <br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            Vertreten durch
          </h2>

          <p className="mt-3 leading-7">Max Mustermann</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Kontakt</h2>

          <p className="mt-3 leading-7">
            Telefon: +49 000 000000 <br />
            E-Mail: info@deine-domain.de
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            Registereintrag
          </h2>

          <p className="mt-3 leading-7">
            Eintragung im Handelsregister. <br />
            Registergericht: Amtsgericht Musterstadt <br />
            Registernummer: HRB 000000
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            Umsatzsteuer-ID
          </h2>

          <p className="mt-3 leading-7">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            DE000000000
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>

          <p className="mt-3 leading-7">
            Max Mustermann <br />
            Musterstraße 1 <br />
            12345 Musterstadt <br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            Haftung für Inhalte
          </h2>

          <p className="mt-3 leading-7">
            Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            Haftung für Links
          </h2>

          <p className="mt-3 leading-7">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            Urheberrecht
          </h2>

          <p className="mt-3 leading-7">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            dieser Website unterliegen dem deutschen Urheberrecht. Beiträge
            Dritter werden als solche gekennzeichnet. Die Vervielfältigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
            jeweiligen Autors bzw. Erstellers.
          </p>
        </section>

        <p className="rounded-2xl bg-neutral-100 p-4 text-sm leading-6 text-neutral-500">
          Hinweis: Dieses Impressum ist ein Platzhalter und ersetzt keine
          rechtliche Beratung. Vor Veröffentlichung müssen die Angaben durch die
          echten Unternehmensdaten ersetzt und rechtlich geprüft werden.
        </p>
      </div>
    </main>
  );
}
