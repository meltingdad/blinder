import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";
import ContactForm from "@/components/forms/ContactForm";
import servicesData from "@/data/services.json";
import locationsData from "@/data/locations.json";
import { getCantonAbbreviation } from "@/lib/utils";

interface ServiceLocationPageProps {
  params: Promise<{
    serviceLocation: string;
  }>;
}

// Parse the slug to extract service and location
function parseSlug(slug: string): { serviceSlug: string; locationSlug: string } | null {
  // Try to match service-location pattern
  for (const service of servicesData.services) {
    if (slug.startsWith(service.slug + "-")) {
      const locationSlug = slug.replace(service.slug + "-", "");
      const location = locationsData.locations.find((l) => l.slug === locationSlug);
      if (location) {
        return { serviceSlug: service.slug, locationSlug };
      }
    }
  }
  return null;
}

export async function generateStaticParams() {
  const params: { serviceLocation: string }[] = [];

  for (const service of servicesData.services) {
    for (const location of locationsData.locations) {
      params.push({
        serviceLocation: `${service.slug}-${location.slug}`,
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }: ServiceLocationPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.serviceLocation;
  const parsed = parseSlug(slug);

  if (!parsed) {
    return { title: "Seite nicht gefunden" };
  }

  const service = servicesData.services.find((s) => s.slug === parsed.serviceSlug);
  const location = locationsData.locations.find((l) => l.slug === parsed.locationSlug);

  if (!service || !location) {
    return { title: "Seite nicht gefunden" };
  }

  const title = `${service.name} in ${location.name} | Swiss Quality Storen`;
  const description = `Professionelle ${service.name} in ${location.name} (${location.plz}), Kanton ${location.canton}. Schweizer Qualität, faire Preise, kompetente Beratung. Jetzt kostenlose Offerte anfordern!`;

  return {
    title,
    description,
    keywords: [
      `${service.name.toLowerCase()} ${location.name.toLowerCase()}`,
      `${service.slug} ${location.slug}`,
      `storen ${location.name.toLowerCase()}`,
      `sonnenschutz ${location.name.toLowerCase()}`,
      ...service.keywords.slice(0, 5),
    ],
    openGraph: {
      title,
      description,
    },
  };
}

export default async function ServiceLocationPage({ params }: ServiceLocationPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.serviceLocation;
  const parsed = parseSlug(slug);

  if (!parsed) {
    notFound();
  }

  const service = servicesData.services.find((s) => s.slug === parsed.serviceSlug);
  const location = locationsData.locations.find((l) => l.slug === parsed.locationSlug);

  if (!service || !location) {
    notFound();
  }

  // Get other services for cross-linking
  const otherServices = servicesData.services.filter((s) => s.id !== service.id);

  // Get nearby locations (same canton)
  const nearbyLocations = locationsData.locations
    .filter((l) => l.canton === location.canton && l.slug !== location.slug)
    .slice(0, 6);

  return (
    <>
      <Hero
        variant="service"
        title={`${service.name} in ${location.name}`}
        subtitle={`Kanton ${location.canton} (${getCantonAbbreviation(location.canton)})`}
        description={`Ihr lokaler Partner für hochwertige ${service.name} in ${location.name} und Umgebung. Professionelle Beratung, massgefertigte Lösungen und fachgerechte Montage.`}
        ctaText="Kostenlose Offerte"
        ctaLink="#kontakt"
      />

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="heading-md text-dark mb-6">
                {service.name} in {location.name} - Ihr lokaler Experte
              </h2>

              <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                <p>
                  Suchen Sie professionelle {service.name} in {location.name}?
                  Swiss Quality Storen GmbH ist Ihr zuverlässiger Partner für
                  hochwertige Sonnenschutzlösungen in {location.name} ({location.plz})
                  und der gesamten Region {location.canton}.
                </p>
                <p>{service.description}</p>
                <p>
                  Von unserem Standort in Bülach aus sind wir in nur {location.distance} km
                  bei Ihnen in {location.name} vor Ort. Profitieren Sie von unserer
                  kostenlosen Beratung, Schweizer Qualität und fairen Preisen.
                </p>
              </div>

              {/* Benefits */}
              <div className="mb-12">
                <h3 className="heading-sm text-dark mb-6">
                  Ihre Vorteile bei {service.name} in {location.name}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-4 h-4 text-dark"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-12">
                <h3 className="heading-sm text-dark mb-6">
                  Eigenschaften unserer {service.name}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-primary flex-shrink-0"
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
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why choose us in this location */}
              <div className="mb-12 p-8 bg-dark rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-6">
                  Warum Swiss Quality Storen für {service.name} in {location.name}?
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Lokaler Service</h4>
                      <p className="text-white/70 text-sm">
                        Nur {location.distance} km von Bülach - schnell bei Ihnen vor Ort
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Schweizer Qualität</h4>
                      <p className="text-white/70 text-sm">
                        Hochwertige Materialien und professionelle Verarbeitung
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Faire Preise</h4>
                      <p className="text-white/70 text-sm">
                        Transparente Preisgestaltung, kostenlose Offerten
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Schnelle Montage</h4>
                      <p className="text-white/70 text-sm">
                        Termingerechte Installation durch erfahrene Monteure
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Applications */}
              <div>
                <h3 className="heading-sm text-dark mb-6">
                  Einsatzbereiche für {service.name} in {location.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {service.applications.map((application, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {application}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Quick Contact */}
                <div className="bg-primary rounded-2xl p-6 text-dark">
                  <h3 className="text-xl font-bold mb-4">
                    Jetzt Offerte anfordern
                  </h3>
                  <p className="mb-6 opacity-80">
                    Kostenlose Beratung für {service.name} in {location.name}
                  </p>
                  <a
                    href="tel:+41625589818"
                    className="flex items-center gap-3 p-4 bg-dark/10 rounded-lg hover:bg-dark/20 transition-colors mb-4"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-bold">062 558 98 18</span>
                  </a>
                  <Link href="#kontakt" className="btn-dark w-full justify-center">
                    Offerte anfordern
                  </Link>
                </div>

                {/* Location Info */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h3 className="text-lg font-bold text-dark">{location.name}</h3>
                  </div>
                  <div className="space-y-2 text-gray-600 text-sm">
                    <p>PLZ: {location.plz}</p>
                    <p>Kanton: {location.canton}</p>
                    <p>Entfernung: {location.distance} km von Bülach</p>
                  </div>
                </div>

                {/* Other Services */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-dark mb-4">
                    Weitere Angebote in {location.name}
                  </h3>
                  <ul className="space-y-2">
                    {otherServices.map((s) => (
                      <li key={s.id}>
                        <Link
                          href={`/${s.slug}-${location.slug}`}
                          className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors py-2 border-b border-gray-100 last:border-0"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Nearby Locations */}
                {nearbyLocations.length > 0 && (
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-dark mb-4">
                      {service.name} in der Nähe
                    </h3>
                    <ul className="space-y-2">
                      {nearbyLocations.map((loc) => (
                        <li key={loc.slug}>
                          <Link
                            href={`/${service.slug}-${loc.slug}`}
                            className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors py-2 border-b border-gray-100 last:border-0"
                          >
                            <span>{loc.name}</span>
                            <span className="text-xs text-gray-400">{loc.distance} km</span>
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

      {/* FAQ Section */}
      <div className="bg-gray-50">
        <FAQ
          items={service.faq}
          title={`Häufige Fragen zu ${service.name} in ${location.name}`}
          subtitle="Hier finden Sie Antworten auf die wichtigsten Fragen."
        />
      </div>

      {/* Contact Form */}
      <section id="kontakt" className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="heading-md text-dark mb-4">
                {service.name} in {location.name} anfragen
              </h2>
              <p className="text-gray-600">
                Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.
                Kostenlos und unverbindlich.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <ContactForm
                service={service.name}
                location={`${location.plz} ${location.name}`}
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        variant="gradient"
        title={`${service.name} in ${location.name}`}
        description="Wir freuen uns darauf, Ihr Projekt zu realisieren. Kontaktieren Sie uns noch heute!"
      />
    </>
  );
}
