import type { Metadata } from "next";
import { companyInfo } from "@/lib/config";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen (AGB)",
  description: "Allgemeine Geschäftsbedingungen von Swiss Quality Storen GmbH.",
};

export default function AGBPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="heading-lg text-dark mb-8">
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-lg mb-8">
              Stand: Dezember 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">
                1. Geltungsbereich
              </h2>
              <p>
                Diese Allgemeinen Geschäftsbedingungen (nachfolgend &quot;AGB&quot;) gelten
                für sämtliche Geschäftsbeziehungen zwischen {companyInfo.name}
                (nachfolgend &quot;Auftragnehmer&quot;) und dem Kunden (nachfolgend
                &quot;Auftraggeber&quot;). Sie werden mit Auftragserteilung oder Annahme
                unserer Offerte verbindlich.
              </p>
              <p>
                Abweichende Bedingungen des Auftraggebers werden nicht anerkannt,
                es sei denn, der Auftragnehmer stimmt ihrer Geltung ausdrücklich
                schriftlich zu.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">
                2. Offerten und Vertragsabschluss
              </h2>
              <p>
                Unsere Offerten sind freibleibend und unverbindlich, sofern nicht
                anders angegeben. Ein Vertrag kommt erst durch schriftliche
                Auftragsbestätigung oder Ausführung der Leistung zustande.
              </p>
              <p>
                Die Offerte basiert auf den uns bekannten Gegebenheiten. Ändern
                sich diese bis zur Ausführung, behalten wir uns Preisanpassungen
                vor.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">
                3. Preise und Zahlungsbedingungen
              </h2>
              <p>
                Alle Preise verstehen sich in Schweizer Franken (CHF) inklusive
                der gesetzlichen Mehrwertsteuer, sofern nicht anders angegeben.
              </p>
              <p>
                Die Zahlung erfolgt innert 30 Tagen ab Rechnungsdatum ohne Abzug.
                Bei verspäteter Zahlung sind wir berechtigt, Verzugszinsen von 5%
                pro Jahr zu berechnen.
              </p>
              <p>
                Bei grösseren Aufträgen behalten wir uns vor, eine Anzahlung von
                bis zu 50% des Auftragswertes zu verlangen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">
                4. Lieferung und Montage
              </h2>
              <p>
                Liefertermine sind unverbindlich, sofern nicht ausdrücklich als
                verbindlich vereinbart. Bei Lieferverzögerungen informieren wir
                den Auftraggeber umgehend.
              </p>
              <p>
                Die Montage erfolgt nach Absprache mit dem Auftraggeber. Dieser
                hat für einen freien Zugang zur Montagestelle zu sorgen. Mehrkosten
                aufgrund von Hindernissen gehen zu Lasten des Auftraggebers.
              </p>
              <p>
                Geringfügige Abweichungen in Farbe, Material oder Ausführung, die
                technisch bedingt oder handwerksüblich sind, berechtigen nicht zur
                Reklamation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">
                5. Gewährleistung und Garantie
              </h2>
              <p>
                Der Auftragnehmer gewährt auf seine Produkte und Arbeiten eine
                Garantie gemäss Herstellerangaben, mindestens jedoch 2 Jahre ab
                Lieferung/Montage.
              </p>
              <p>
                Die Garantie umfasst die kostenlose Behebung von Material- und
                Verarbeitungsfehlern. Ausgenommen sind Schäden durch:
              </p>
              <ul>
                <li>Unsachgemässe Handhabung oder Bedienung</li>
                <li>Normale Abnutzung</li>
                <li>Höhere Gewalt</li>
                <li>Eingriffe durch Dritte</li>
                <li>Nichtbeachtung der Pflege- und Wartungshinweise</li>
              </ul>
              <p>
                Mängel sind unverzüglich, spätestens innert 8 Tagen nach
                Entdeckung, schriftlich zu melden.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">
                6. Eigentumsvorbehalt
              </h2>
              <p>
                Die gelieferte Ware bleibt bis zur vollständigen Bezahlung
                Eigentum des Auftragnehmers. Der Auftraggeber ist verpflichtet,
                die Ware pfleglich zu behandeln und gegen Beschädigung und Diebstahl
                zu versichern.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">
                7. Haftung
              </h2>
              <p>
                Die Haftung des Auftragnehmers beschränkt sich auf Vorsatz und
                grobe Fahrlässigkeit. Für leichte Fahrlässigkeit wird nicht
                gehaftet.
              </p>
              <p>
                Die Haftung für indirekte Schäden, Folgeschäden oder
                entgangenen Gewinn ist ausgeschlossen.
              </p>
              <p>
                Die Haftungssumme ist in jedem Fall auf den Auftragswert begrenzt.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">
                8. Stornierung
              </h2>
              <p>
                Stornierungen durch den Auftraggeber sind nur mit schriftlicher
                Zustimmung des Auftragnehmers möglich. Bei Stornierung nach
                Auftragsbestätigung fallen folgende Gebühren an:
              </p>
              <ul>
                <li>
                  Bis zu 14 Tage vor Liefertermin: 30% des Auftragswertes
                </li>
                <li>
                  Weniger als 14 Tage vor Liefertermin: 50% des Auftragswertes
                </li>
                <li>
                  Bei bereits produzierten oder massgefertigten Waren: 100% des
                  Auftragswertes
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">
                9. Datenschutz
              </h2>
              <p>
                Die Erhebung und Verarbeitung personenbezogener Daten erfolgt
                gemäss unserer Datenschutzerklärung und den anwendbaren
                Datenschutzgesetzen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">
                10. Anwendbares Recht und Gerichtsstand
              </h2>
              <p>
                Es gilt ausschliesslich schweizerisches Recht unter Ausschluss des
                UN-Kaufrechts.
              </p>
              <p>
                Gerichtsstand für alle Streitigkeiten aus diesem Vertragsverhältnis
                ist {companyInfo.address.city}, Schweiz.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">
                11. Salvatorische Klausel
              </h2>
              <p>
                Sollten einzelne Bestimmungen dieser AGB unwirksam oder
                undurchführbar sein oder werden, so bleibt die Wirksamkeit der
                übrigen Bestimmungen unberührt. Die unwirksame Bestimmung ist
                durch eine wirksame zu ersetzen, die dem wirtschaftlichen Zweck
                der unwirksamen Bestimmung am nächsten kommt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mb-4">
                12. Kontakt
              </h2>
              <p>
                Bei Fragen zu diesen AGB wenden Sie sich bitte an:
              </p>
              <p>
                <strong>{companyInfo.name}</strong>
                <br />
                {companyInfo.address.street}
                <br />
                {companyInfo.address.plz} {companyInfo.address.city}
                <br />
                Telefon:{" "}
                <a
                  href={companyInfo.contact.phoneLink}
                  className="text-primary hover:underline"
                >
                  {companyInfo.contact.phone}
                </a>
                <br />
                E-Mail:{" "}
                <a
                  href={companyInfo.contact.emailLink}
                  className="text-primary hover:underline"
                >
                  {companyInfo.contact.email}
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
