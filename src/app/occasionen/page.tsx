import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import { companyInfo } from "@/lib/config";

export const metadata: Metadata = {
  title: "Occasionen - Günstige Storen & Sonnenschutz | Swiss Quality Storen GmbH",
  description:
    "Sparen Sie mit unseren Occasionen! Günstige Lamellenstoren, Rollladen, Markisen und Sonnenschutz in Top-Qualität. Reduzierte Artikel bei Swiss Quality Storen GmbH Bülach.",
  keywords: [
    "occasionen storen",
    "günstige lamellenstoren",
    "storen angebote",
    "sonnenschutz günstig",
    "reduzierte storen",
    "storen bülach",
  ],
};

const benefits = [
  {
    title: "Top Qualität",
    description:
      "Alle Occasionen entsprechen unseren hohen Qualitätsstandards.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    title: "Attraktive Preise",
    description: "Profitieren Sie von deutlich reduzierten Preisen.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Sofort verfügbar",
    description: "Viele Artikel sind ab Lager lieferbar.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Professionelle Montage",
    description: "Auf Wunsch mit fachgerechter Installation.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

const occasionCategories = [
  {
    title: "Lamellenstoren",
    description:
      "Hochwertige Aussenstoren zu reduzierten Preisen. Ideal für Sonnenschutz und Sichtschutz.",
    href: "/angebote/lamellenstoren",
  },
  {
    title: "Rollladen",
    description:
      "Energieeffiziente Rollladen für mehr Sicherheit und Komfort zu Schnäppchenpreisen.",
    href: "/angebote/rollladen",
  },
  {
    title: "Markisen",
    description:
      "Terrassenmarkisen und Balkonmarkisen zu attraktiven Konditionen.",
    href: "/angebote/markisen",
  },
  {
    title: "Sonnenschirme",
    description:
      "Hochwertige Sonnenschirme von Glatz und anderen Marken reduziert.",
    href: "/angebote/sonnenschirme",
  },
];

export default function OccasionenPage() {
  return (
    <>
      <Hero
        variant="page"
        title="Occasionen - Qualität zu günstigen Preisen"
        subtitle="Jetzt sparen"
        description="Sie sind auf der Suche nach einem kostengünstigen Licht- oder Sichtschutz? In unserem Angebot von reduzierten Artikeln werden Sie sicherlich fündig."
        ctaText="Angebot anfragen"
        ctaLink="/kontakt"
      />

      {/* Intro Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Sparen Sie mit unseren Occasionen
            </span>
            <h2 className="heading-md text-dark mb-6">
              Holen Sie sich Ihre Occasionen bei der Swiss Quality Storen GmbH
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Wir bieten eine grosse Auswahl an Occasionen, die in Bezug auf
              Qualität und Aussehen keine Kompromisse machen. Unsere Occasionen
              sind sicher, langlebig und zuverlässig - eine einzigartige
              Möglichkeit, Ihren Bedarf zu decken und gleichzeitig Ihr Budget zu
              schonen.
            </p>
            <p className="text-lg text-gray-600">
              Kontaktieren Sie uns noch heute - gerne beraten wir Sie zu unserem
              aktuellen Angebot!
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md text-dark mb-4">
              Warum Occasionen bei uns?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profitieren Sie von unseren Vorteilen beim Kauf von reduzierten
              Artikeln.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-primary">{benefit.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md text-dark mb-4">
              Occasionen nach Kategorie
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fragen Sie nach aktuellen Angeboten in diesen Produktkategorien.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {occasionCategories.map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <svg
                      className="w-5 h-5 text-primary group-hover:text-dark transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-dark text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-md text-white mb-6">
                Aktuelle Occasionen anfragen
              </h2>
              <p className="text-white/80 mb-6">
                Unser Angebot an Occasionen wechselt regelmässig. Kontaktieren
                Sie uns, um zu erfahren, welche reduzierten Artikel aktuell
                verfügbar sind. Wir beraten Sie gerne und finden die passende
                Lösung für Ihr Budget.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white/60 text-sm">Rufen Sie uns an</p>
                  <a
                    href={companyInfo.contact.phoneLink}
                    className="text-primary text-xl font-bold hover:underline"
                  >
                    {companyInfo.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4 text-primary">
                So funktioniert&apos;s
              </h3>
              <ol className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-dark font-bold flex-shrink-0">
                    1
                  </span>
                  <p className="text-white/80">
                    Kontaktieren Sie uns telefonisch oder per E-Mail
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-dark font-bold flex-shrink-0">
                    2
                  </span>
                  <p className="text-white/80">
                    Wir informieren Sie über aktuelle Occasionen
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-dark font-bold flex-shrink-0">
                    3
                  </span>
                  <p className="text-white/80">
                    Besichtigen Sie die Artikel vor Ort oder erhalten Sie Fotos
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-dark font-bold flex-shrink-0">
                    4
                  </span>
                  <p className="text-white/80">
                    Profitieren Sie von attraktiven Preisen
                  </p>
                </li>
              </ol>
              <div className="mt-8">
                <Link href="/kontakt" className="btn-primary w-full justify-center">
                  Jetzt anfragen
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        variant="default"
        title="Interesse an unseren Occasionen?"
        description="Kontaktieren Sie uns für eine unverbindliche Anfrage zu aktuellen Angeboten."
        primaryCta={{ text: "Kontakt aufnehmen", href: "/kontakt" }}
      />
    </>
  );
}
