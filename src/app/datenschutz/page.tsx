import type { Metadata } from "next";
import { companyInfo } from "@/lib/config";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Swiss Quality Storen GmbH. Informationen zum Umgang mit Ihren personenbezogenen Daten.",
};

export default function DatenschutzPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="heading-lg text-dark mb-8">Datenschutzerklärung</h1>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-lg mb-8">
              Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen.
              In dieser Datenschutzerklärung informieren wir Sie über die
              Verarbeitung personenbezogener Daten bei der Nutzung unserer Website.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">
                1. Verantwortlicher
              </h2>
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p>
                <strong>{companyInfo.name}</strong>
                <br />
                {companyInfo.address.street}
                <br />
                {companyInfo.address.plz} {companyInfo.address.city}
                <br />
                {companyInfo.address.country}
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
                2. Erhebung und Speicherung personenbezogener Daten
              </h2>
              <h3 className="text-xl font-semibold text-dark mb-3">
                a) Beim Besuch der Website
              </h3>
              <p>
                Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät
                zum Einsatz kommenden Browser automatisch Informationen an den
                Server unserer Website gesendet. Diese Informationen werden
                temporär in einem sog. Logfile gespeichert. Folgende Informationen
                werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten
                Löschung gespeichert:
              </p>
              <ul>
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                <li>
                  Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners
                </li>
                <li>Name Ihres Access-Providers</li>
              </ul>

              <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
                b) Bei Nutzung des Kontaktformulars
              </h3>
              <p>
                Bei Fragen jeglicher Art bieten wir Ihnen die Möglichkeit, mit uns
                über ein auf der Website bereitgestelltes Formular Kontakt
                aufzunehmen. Dabei ist die Angabe einer gültigen E-Mail-Adresse
                erforderlich, damit wir wissen, von wem die Anfrage stammt und um
                diese beantworten zu können. Weitere Angaben können freiwillig
                getätigt werden.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">
                3. Weitergabe von Daten
              </h2>
              <p>
                Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen
                als den im Folgenden aufgeführten Zwecken findet nicht statt. Wir
                geben Ihre persönlichen Daten nur an Dritte weiter, wenn:
              </p>
              <ul>
                <li>
                  Sie Ihre ausdrückliche Einwilligung dazu erteilt haben
                </li>
                <li>
                  die Weitergabe zur Geltendmachung, Ausübung oder Verteidigung
                  von Rechtsansprüchen erforderlich ist
                </li>
                <li>
                  für die Weitergabe eine gesetzliche Verpflichtung besteht
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">
                4. Cookies
              </h2>
              <p>
                Unsere Website verwendet Cookies. Das sind kleine Textdateien, die
                Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns
                dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer
                zu machen.
              </p>
              <p>
                Einige Cookies sind &quot;Session-Cookies&quot;. Solche Cookies werden
                nach Ende Ihrer Browser-Sitzung von selbst gelöscht. Hingegen
                bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese
                selbst löschen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">
                5. Analyse-Tools
              </h2>
              <p>
                Wir nutzen Vercel Analytics, um die Nutzung unserer Website zu
                analysieren. Diese Analyse ist datenschutzfreundlich und speichert
                keine persönlichen Daten oder Cookies. Die Daten werden anonymisiert
                erhoben und dienen ausschliesslich der Verbesserung unseres
                Angebots.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">
                6. Ihre Rechte
              </h2>
              <p>Sie haben das Recht:</p>
              <ul>
                <li>
                  gemäss Art. 8 DSG Auskunft über Ihre von uns verarbeiteten
                  personenbezogenen Daten zu verlangen
                </li>
                <li>
                  gemäss Art. 5 DSG die Berichtigung unrichtiger oder
                  Vervollständigung Ihrer bei uns gespeicherten personenbezogenen
                  Daten zu verlangen
                </li>
                <li>
                  die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten
                  zu verlangen
                </li>
                <li>
                  die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
                  zu verlangen
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">
                7. Datensicherheit
              </h2>
              <p>
                Wir verwenden innerhalb des Website-Besuchs das verbreitete
                SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils
                höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt
                wird. Ob eine einzelne Seite unseres Internetauftrittes
                verschlüsselt übertragen wird, erkennen Sie an der geschlossenen
                Darstellung des Schlüssel- beziehungsweise Schloss-Symbols in der
                Adresszeile Ihres Browsers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mb-4">
                8. Aktualität und Änderung dieser Datenschutzerklärung
              </h2>
              <p>
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand
                Dezember 2024.
              </p>
              <p>
                Durch die Weiterentwicklung unserer Website oder aufgrund
                geänderter gesetzlicher bzw. behördlicher Vorgaben kann es
                notwendig werden, diese Datenschutzerklärung zu ändern. Die
                jeweils aktuelle Datenschutzerklärung kann jederzeit auf dieser
                Website von Ihnen abgerufen werden.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
