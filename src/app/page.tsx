import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import RegionsGrid from "@/components/sections/RegionsGrid";
import CTASection from "@/components/sections/CTASection";
import Features from "@/components/sections/Features";
import { companyInfo } from "@/lib/config";

const features = [
  {
    title: "Schweizer Qualität",
    description:
      "Wir verwenden ausschliesslich hochwertige Materialien und setzen auf bewährte Schweizer Handwerkskunst.",
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
    title: "Professionelle Beratung",
    description:
      "Unsere Experten beraten Sie persönlich und finden die optimale Lösung für Ihre Bedürfnisse.",
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Schnelle Montage",
    description:
      "Termingerechte und fachgerechte Installation durch unsere erfahrenen Monteure.",
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
    title: "Faire Preise",
    description:
      "Transparente Preisgestaltung und kostenlose Offerten für Ihr Projekt.",
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
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        variant="home"
        title="Ihr Spezialist für Storen und Sonnenschutz in Bülach"
        subtitle="Swiss Quality Storen GmbH"
        description="Hochwertige Lamellenstoren, Rollladen, Markisen und mehr. Professionelle Beratung, massgefertigte Lösungen und fachgerechte Montage in der Region Zürich."
        ctaText="Kostenlose Offerte"
        ctaLink="/kontakt"
        secondaryCtaText="Unsere Angebote"
        secondaryCtaLink="/angebote"
        showTrustBadges
      />

      {/* Features Section */}
      <Features
        features={features}
        title="Warum Swiss Quality Storen?"
        subtitle="Ihr zuverlässiger Partner für Sonnenschutz in der Schweiz"
        columns={4}
      />

      {/* Services Section */}
      <ServicesGrid
        variant="default"
        title="Unsere Angebote"
        subtitle="Entdecken Sie unsere hochwertigen Produkte für jeden Bedarf"
      />

      {/* CTA Section */}
      <CTASection
        variant="gradient"
        title="Kostenlose Beratung gewünscht?"
        description="Kontaktieren Sie uns für eine unverbindliche Beratung. Wir finden die perfekte Lösung für Ihr Zuhause."
      />

      {/* Regions Section */}
      <RegionsGrid
        limit={18}
        title="Wir sind für Sie da"
        subtitle={`Unser Service erstreckt sich über die gesamte Region Zürich und Umgebung. Von ${companyInfo.address.city} aus sind wir schnell bei Ihnen.`}
      />

      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Über uns
              </span>
              <h2 className="heading-md text-dark mb-6">
                {companyInfo.name} - Ihr Partner für Sonnenschutz
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Seit Jahren sind wir Ihr zuverlässiger Partner für hochwertige
                  Storen, Lamellenstoren, Rollladen, Markisen und Sonnenschutz
                  in Bülach und der gesamten Region Zürich.
                </p>
                <p>
                  Unser erfahrenes Team berät Sie kompetent und findet die
                  optimale Lösung für Ihre individuellen Anforderungen. Wir legen
                  Wert auf Schweizer Qualität, faire Preise und einen
                  erstklassigen Service.
                </p>
                <p>
                  Von der persönlichen Beratung über die massgefertigte
                  Anfertigung bis zur professionellen Montage - bei uns sind Sie
                  in besten Händen.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <a href="/ueber-uns" className="btn-primary">
                  Mehr erfahren
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
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-dark via-dark-light to-primary/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 mx-auto mb-6 bg-primary rounded-2xl flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-12 h-12 text-dark"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <line x1="3" y1="7" x2="21" y2="7" />
                        <line x1="3" y1="11" x2="21" y2="11" />
                        <line x1="3" y1="15" x2="21" y2="15" />
                        <line x1="3" y1="19" x2="21" y2="19" />
                      </svg>
                    </div>
                    <p className="text-2xl font-bold mb-2">Swiss Quality</p>
                    <p className="text-primary text-lg">Storen GmbH</p>
                  </div>
                </div>
              </div>
              {/* Decorative badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-8 bg-swiss-red flex items-center justify-center">
                    <span className="text-white text-xl font-bold">+</span>
                  </div>
                  <div>
                    <p className="font-bold text-dark">100%</p>
                    <p className="text-xs text-gray-500">Swiss Made</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        variant="default"
        title="Jetzt Offerte anfordern"
        description="Kostenlos und unverbindlich. Wir freuen uns auf Ihre Anfrage!"
        primaryCta={{ text: "Kontakt aufnehmen", href: "/kontakt" }}
      />
    </>
  );
}
