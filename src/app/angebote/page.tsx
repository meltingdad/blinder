import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Angebote - Storen, Rollladen & Sonnenschutz",
  description:
    "Entdecken Sie unser umfangreiches Angebot an Lamellenstoren, Rollladen, Markisen, Sonnenschirmen und Insektenschutzgittern. Schweizer Qualität zu fairen Preisen.",
};

export default function AngebotePage() {
  return (
    <>
      <Hero
        variant="page"
        title="Unsere Angebote für Ihren Sonnenschutz"
        subtitle="Qualität aus der Schweiz"
        description="Entdecken Sie unser umfangreiches Sortiment an hochwertigen Storen, Rollladen und Sonnenschutzlösungen. Für jede Anforderung die passende Lösung."
        ctaText="Beratung anfordern"
        ctaLink="/kontakt"
      />

      <ServicesGrid
        variant="featured"
        showTitle={false}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md text-dark mb-6">
              Individuelle Lösungen für jeden Bedarf
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Jedes Gebäude ist einzigartig. Deshalb bieten wir massgefertigte
              Sonnenschutzlösungen, die perfekt zu Ihrer Architektur und Ihren
              Anforderungen passen. Von der ersten Beratung bis zur
              professionellen Montage begleiten wir Sie durch den gesamten
              Prozess.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-dark mb-2">Massgefertigt</h3>
                <p className="text-sm text-gray-600">
                  Individuelle Anfertigung nach Ihren Massen
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-dark mb-2">Schnell</h3>
                <p className="text-sm text-gray-600">
                  Kurze Lieferzeiten und termingerechte Montage
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-dark mb-2">Garantie</h3>
                <p className="text-sm text-gray-600">
                  Mehrjährige Garantie auf alle Produkte
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        variant="default"
        title="Interesse geweckt?"
        description="Kontaktieren Sie uns für eine kostenlose und unverbindliche Beratung."
        primaryCta={{ text: "Jetzt Offerte anfordern", href: "/kontakt" }}
      />
    </>
  );
}
