import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import RegionsGrid from "@/components/sections/RegionsGrid";
import CTASection from "@/components/sections/CTASection";
import locationsData from "@/data/locations.json";

export const metadata: Metadata = {
  title: "Serviceregionen - Storen in Zürich und Umgebung",
  description: `Wir sind in ${locationsData.totalLocations}+ Gemeinden in der Region Zürich für Sie da. Entdecken Sie unseren Sonnenschutz-Service in Ihrer Nähe.`,
};

export default function RegionenPage() {
  return (
    <>
      <Hero
        variant="page"
        title="Unsere Serviceregionen"
        subtitle={`${locationsData.totalLocations}+ Standorte`}
        description={`Von unserem Standort in ${locationsData.serviceCenter.name} aus betreuen wir Kunden in der gesamten Region Zürich und darüber hinaus.`}
        ctaText="Standort anfragen"
        ctaLink="/kontakt"
      />

      <RegionsGrid
        showTitle={false}
        groupByCanton
      />

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md text-dark mb-6">
              Ihr Standort ist nicht dabei?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Auch wenn Ihr Ort nicht aufgelistet ist, sind wir möglicherweise
              für Sie erreichbar. Kontaktieren Sie uns einfach und wir prüfen
              gerne, ob wir Ihnen helfen können.
            </p>
            <a href="/kontakt" className="btn-primary">
              Verfügbarkeit anfragen
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
      </section>

      <CTASection
        variant="default"
        title="Storen in Ihrer Region"
        description="Professionelle Beratung und Montage in Ihrer Nähe. Kontaktieren Sie uns noch heute!"
      />
    </>
  );
}
