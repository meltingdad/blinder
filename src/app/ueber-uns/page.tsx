import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import { companyInfo } from "@/lib/config";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Über uns - Swiss Quality Storen GmbH",
  description:
    "Lernen Sie Swiss Quality Storen GmbH kennen. Ihr Partner für hochwertige Storen und Sonnenschutz in Bülach seit Jahren.",
};

const values = [
  {
    title: "Schweizer Qualität",
    description:
      "Wir setzen auf bewährte Schweizer Handwerkskunst und hochwertige Materialien für langlebige Produkte.",
    icon: (
      <svg
        className="w-8 h-8"
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
    title: "Kundenzufriedenheit",
    description:
      "Ihre Zufriedenheit steht bei uns an erster Stelle. Wir beraten Sie persönlich und finden die optimale Lösung.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    title: "Zuverlässigkeit",
    description:
      "Pünktlichkeit und Zuverlässigkeit sind für uns selbstverständlich. Wir halten, was wir versprechen.",
    icon: (
      <svg
        className="w-8 h-8"
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
    title: "Fachkompetenz",
    description:
      "Unser erfahrenes Team verfügt über jahrelange Expertise in der Storen- und Sonnenschutzbranche.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <Hero
        variant="page"
        title="Über Swiss Quality Storen"
        subtitle="Ihr Partner für Sonnenschutz"
        description="Seit Jahren sind wir Ihr zuverlässiger Partner für hochwertige Storen und Sonnenschutzlösungen in Bülach und der Region Zürich."
        ctaText="Kontakt aufnehmen"
        ctaLink="/kontakt"
      />

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Unsere Geschichte
              </span>
              <h2 className="heading-md text-dark mb-6">
                Qualität und Service aus Überzeugung
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  {companyInfo.name} wurde mit der Vision gegründet, hochwertige
                  Sonnenschutzlösungen mit erstklassigem Service zu verbinden.
                  Von unserem Standort in {companyInfo.address.city} aus betreuen
                  wir Kunden in der gesamten Region Zürich.
                </p>
                <p>
                  Als familiengeführtes Unternehmen legen wir besonderen Wert auf
                  persönliche Beratung, Schweizer Qualität und faire Preise.
                  Jeder Kunde ist für uns einzigartig und verdient eine
                  individuelle Lösung.
                </p>
                <p>
                  Unser erfahrenes Team aus Beratern und Monteuren sorgt dafür,
                  dass Sie von der ersten Anfrage bis zur fertigen Installation
                  in besten Händen sind.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={images.services.lamellenstoren.main}
                  alt="Swiss Quality Storen - Lamellenstoren Installation"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Location Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-7 bg-swiss-red flex items-center justify-center">
                    <span className="text-white font-bold">+</span>
                  </div>
                  <div>
                    <p className="font-semibold text-dark">{companyInfo.address.city}</p>
                    <p className="text-xs text-gray-500">Schweiz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md text-dark mb-4">Unsere Werte</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Diese Grundsätze leiten unser Handeln und garantieren Ihnen
              höchste Qualität.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <div className="text-primary group-hover:text-dark transition-colors">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-dark mb-3 text-center group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Unser Team
            </span>
            <h2 className="heading-md text-dark mb-4">
              Die Menschen hinter Swiss Quality Storen
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Unser erfahrenes Team steht Ihnen mit Fachwissen und Engagement zur Seite.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={images.team.ruan}
                  alt="Ruan - Swiss Quality Storen"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-dark mb-1">Ruan</h3>
              <p className="text-primary font-medium mb-2">Montage & Service</p>
              <p className="text-gray-600 text-sm">Experte für fachgerechte Montage</p>
            </div>

            <div className="group text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={images.team.geza}
                  alt="Geza - Swiss Quality Storen"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-dark mb-1">Geza</h3>
              <p className="text-primary font-medium mb-2">Beratung & Verkauf</p>
              <p className="text-gray-600 text-sm">Ihr Ansprechpartner für Beratung</p>
            </div>

            <div className="group text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={images.team.reto}
                  alt="Reto - Swiss Quality Storen"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-dark mb-1">Reto</h3>
              <p className="text-primary font-medium mb-2">Technik & Planung</p>
              <p className="text-gray-600 text-sm">Spezialist für technische Lösungen</p>
            </div>

            <div className="group text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={images.team.lari}
                  alt="Lari - Swiss Quality Storen"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-dark mb-1">Lari</h3>
              <p className="text-primary font-medium mb-2">Administration</p>
              <p className="text-gray-600 text-sm">Organisation und Koordination</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-dark text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                100%
              </p>
              <p className="text-white/70">Kundenzufriedenheit</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                60+
              </p>
              <p className="text-white/70">Regionen abgedeckt</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                5
              </p>
              <p className="text-white/70">Produktkategorien</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                2+
              </p>
              <p className="text-white/70">Jahre Garantie</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Promise */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md text-dark mb-6">
              Unser Versprechen an Sie
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Bei {companyInfo.name} erhalten Sie nicht nur ein Produkt, sondern
              einen Partner, der Sie durch den gesamten Prozess begleitet. Von
              der ersten Beratung über die Planung bis zur Montage und darüber
              hinaus - wir sind für Sie da.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              <div className="p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold text-dark mb-2">Beratung</h3>
                <p className="text-sm text-gray-600">
                  Kostenlose und unverbindliche Beratung vor Ort
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold text-dark mb-2">Massfertigung</h3>
                <p className="text-sm text-gray-600">
                  Individuelle Anfertigung nach Ihren Wünschen
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold text-dark mb-2">Montage</h3>
                <p className="text-sm text-gray-600">
                  Professionelle Installation durch Fachleute
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        variant="default"
        title="Lernen Sie uns kennen"
        description="Wir freuen uns auf Ihre Kontaktaufnahme und beraten Sie gerne persönlich."
        primaryCta={{ text: "Kontakt aufnehmen", href: "/kontakt" }}
      />
    </>
  );
}
