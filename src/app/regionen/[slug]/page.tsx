import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CTASection from "@/components/sections/CTASection";
import ContactForm from "@/components/forms/ContactForm";
import locationsData from "@/data/locations.json";
import servicesData from "@/data/services.json";
import { getCantonAbbreviation } from "@/lib/utils";

interface RegionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return locationsData.locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }: RegionPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const location = locationsData.locations.find((l) => l.slug === resolvedParams.slug);

  if (!location) {
    return {
      title: "Region nicht gefunden",
    };
  }

  return {
    title: `Storen & Sonnenschutz in ${location.name} | Swiss Quality Storen`,
    description: `Professionelle Storen, Lamellenstoren, Rollladen und Sonnenschutz in ${location.name} (${location.plz}). Schweizer Qualität, faire Preise, kompetente Beratung. Jetzt Offerte anfordern!`,
    keywords: [
      `storen ${location.name.toLowerCase()}`,
      `lamellenstoren ${location.name.toLowerCase()}`,
      `sonnenschutz ${location.name.toLowerCase()}`,
      `rollladen ${location.name.toLowerCase()}`,
      `markisen ${location.name.toLowerCase()}`,
    ],
  };
}

export default async function RegionPage({ params }: RegionPageProps) {
  const resolvedParams = await params;
  const location = locationsData.locations.find((l) => l.slug === resolvedParams.slug);

  if (!location) {
    notFound();
  }

  // Get nearby locations (same canton, excluding current)
  const nearbyLocations = locationsData.locations
    .filter((l) => l.canton === location.canton && l.slug !== location.slug)
    .slice(0, 6);

  return (
    <>
      <Hero
        variant="service"
        title={`Storen & Sonnenschutz in ${location.name}`}
        subtitle={`Kanton ${location.canton} (${getCantonAbbreviation(location.canton)})`}
        description={`Ihr lokaler Partner für hochwertige Lamellenstoren, Rollladen, Markisen und Sonnenschutz in ${location.name} und Umgebung. Nur ${location.distance} km von unserem Standort in Bülach.`}
        ctaText="Offerte anfordern"
        ctaLink="#kontakt"
      />

      {/* Location Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="heading-md text-dark mb-6">
                Storen-Service in {location.name}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Swiss Quality Storen GmbH ist Ihr zuverlässiger Partner für
                  Sonnenschutzlösungen in {location.name} ({location.plz}) und
                  der gesamten Region {location.canton}. Von unserem Standort in
                  Bülach aus sind wir schnell bei Ihnen vor Ort.
                </p>
                <p>
                  Wir bieten Ihnen ein umfassendes Sortiment an hochwertigen
                  Produkten: von Lamellenstoren über Rollladen und Markisen bis
                  hin zu Insektenschutzgittern. Jedes Produkt wird individuell
                  an Ihre Bedürfnisse angepasst und von unseren erfahrenen
                  Monteuren fachgerecht installiert.
                </p>
                <p>
                  Profitieren Sie von unserer kostenlosen Beratung vor Ort,
                  Schweizer Qualität und fairen Preisen. Wir freuen uns darauf,
                  auch Ihr Projekt in {location.name} zu realisieren.
                </p>
              </div>

              {/* Services in this location */}
              <div className="mt-12">
                <h3 className="heading-sm text-dark mb-6">
                  Unsere Leistungen in {location.name}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {servicesData.services.map((service) => (
                    <Link
                      key={service.id}
                      href={`/angebote/${service.slug}`}
                      className="group flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                        <svg
                          className="w-5 h-5 text-primary group-hover:text-dark transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="1"
                            strokeWidth={2}
                          />
                          <line x1="3" y1="7" x2="21" y2="7" strokeWidth={2} />
                          <line x1="3" y1="11" x2="21" y2="11" strokeWidth={2} />
                          <line x1="3" y1="15" x2="21" y2="15" strokeWidth={2} />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark group-hover:text-primary transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {service.shortDescription}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Why choose us */}
              <div className="mt-12">
                <h3 className="heading-sm text-dark mb-6">
                  Warum Swiss Quality Storen in {location.name}?
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-1">
                        Lokaler Service
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Nur {location.distance} km von Bülach entfernt. Wir sind
                        schnell bei Ihnen vor Ort.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
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
                    <div>
                      <h4 className="font-semibold text-dark mb-1">
                        Schweizer Qualität
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Hochwertige Produkte und professionelle Verarbeitung.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
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
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-1">
                        Faire Preise
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Transparente Preisgestaltung und kostenlose Offerten.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
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
                    <div>
                      <h4 className="font-semibold text-dark mb-1">
                        Schnelle Montage
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Termingerechte Installation durch erfahrene Monteure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Location Info Card */}
                <div className="bg-dark rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-2 mb-4">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <h3 className="text-xl font-bold">{location.name}</h3>
                  </div>
                  <div className="space-y-2 text-white/80 mb-6">
                    <p>PLZ: {location.plz}</p>
                    <p>Kanton: {location.canton}</p>
                    <p>Entfernung: {location.distance} km von Bülach</p>
                    {location.population && (
                      <p>
                        Einwohner: {parseInt(location.population).toLocaleString("de-CH")}
                      </p>
                    )}
                  </div>
                  <Link
                    href="#kontakt"
                    className="btn-primary w-full justify-center"
                  >
                    Offerte anfordern
                  </Link>
                </div>

                {/* Nearby Locations */}
                {nearbyLocations.length > 0 && (
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-dark mb-4">
                      Weitere Orte in {location.canton}
                    </h3>
                    <ul className="space-y-2">
                      {nearbyLocations.map((loc) => (
                        <li key={loc.slug}>
                          <Link
                            href={`/regionen/${loc.slug}`}
                            className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors py-2 border-b border-gray-100 last:border-0"
                          >
                            <span>{loc.name}</span>
                            <span className="text-sm text-gray-400">
                              {loc.distance} km
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesGrid
        variant="compact"
        title={`Unsere Angebote in ${location.name}`}
        subtitle="Hochwertige Storen und Sonnenschutz für Ihr Zuhause"
      />

      {/* Contact Form Section */}
      <section id="kontakt" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="heading-md text-dark mb-4">
                Offerte für {location.name} anfordern
              </h2>
              <p className="text-gray-600">
                Füllen Sie das Formular aus und wir melden uns schnellstmöglich
                bei Ihnen. Kostenlos und unverbindlich.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <ContactForm location={`${location.plz} ${location.name}`} />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        variant="gradient"
        title="Sonnenschutz in Ihrer Nähe"
        description={`Wir freuen uns darauf, Ihr Projekt in ${location.name} zu realisieren.`}
      />
    </>
  );
}
