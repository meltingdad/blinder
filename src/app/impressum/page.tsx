import type { Metadata } from "next";
import { companyInfo } from "@/lib/config";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Informationen von Swiss Quality Storen GmbH.",
};

export default function ImpressumPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="heading-lg text-dark mb-8">Impressum</h1>

          <div className="prose prose-lg max-w-none text-gray-600">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">
                Angaben gemäss Schweizer Recht
              </h2>
              <p>
                <strong>{companyInfo.name}</strong>
                <br />
                {companyInfo.address.street}
                <br />
                {companyInfo.address.plz} {companyInfo.address.city}
                <br />
                {companyInfo.address.country}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">
                Kontakt
              </h2>
              <p>
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

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">
                Unternehmensform
              </h2>
              <p>Gesellschaft mit beschränkter Haftung (GmbH)</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">
                Mehrwertsteuer-Nummer
              </h2>
              <p>CHE-XXX.XXX.XXX MWST</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">
                Haftungsausschluss
              </h2>
              <p>
                Der Autor übernimmt keinerlei Gewähr hinsichtlich der
                inhaltlichen Richtigkeit, Genauigkeit, Aktualität,
                Zuverlässigkeit und Vollständigkeit der Informationen.
              </p>
              <p>
                Haftungsansprüche gegen den Autor wegen Schäden materieller oder
                immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw.
                Nichtnutzung der veröffentlichten Informationen, durch Missbrauch
                der Verbindung oder durch technische Störungen entstanden sind,
                werden ausgeschlossen.
              </p>
              <p>
                Alle Angebote sind unverbindlich. Der Autor behält es sich
                ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne
                gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder
                die Veröffentlichung zeitweise oder endgültig einzustellen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">
                Haftung für Links
              </h2>
              <p>
                Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres
                Verantwortungsbereichs. Es wird jegliche Verantwortung für solche
                Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten
                erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">
                Urheberrechte
              </h2>
              <p>
                Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos
                oder anderen Dateien auf der Website gehören ausschliesslich{" "}
                {companyInfo.name} oder den speziell genannten Rechtsinhabern.
                Für die Reproduktion jeglicher Elemente ist die schriftliche
                Zustimmung der Urheberrechtsträger im Voraus einzuholen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mb-4">
                Datenschutz
              </h2>
              <p>
                Basierend auf Artikel 13 der schweizerischen Bundesverfassung und
                den datenschutzrechtlichen Bestimmungen des Bundes hat jede Person
                Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor
                Missbrauch ihrer persönlichen Daten. Wir halten diese Bestimmungen
                ein. Persönliche Daten werden streng vertraulich behandelt und
                weder an Dritte verkauft noch weitergegeben.
              </p>
              <p>
                Weitere Informationen finden Sie in unserer{" "}
                <a href="/datenschutz" className="text-primary hover:underline">
                  Datenschutzerklärung
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
