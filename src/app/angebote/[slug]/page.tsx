import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";
import ContactForm from "@/components/forms/ContactForm";
import servicesData from "@/data/services.json";
import { generateMetaTitle, generateMetaDescription } from "@/lib/utils";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return servicesData.services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData.services.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    return {
      title: "Service nicht gefunden",
    };
  }

  return {
    title: generateMetaTitle(service.name),
    description: generateMetaDescription(service.name),
    keywords: service.keywords,
    openGraph: {
      title: generateMetaTitle(service.name),
      description: service.shortDescription,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = servicesData.services.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Hero
        variant="service"
        title={service.name}
        subtitle="Swiss Quality Storen"
        description={service.shortDescription}
        ctaText="Offerte anfordern"
        ctaLink="#kontakt"
      />

      {/* Service Description */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="heading-md text-dark mb-6">
                {service.name} von Swiss Quality Storen
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="text-lg leading-relaxed">{service.description}</p>
              </div>

              {/* Benefits */}
              <div className="mt-12">
                <h3 className="heading-sm text-dark mb-6">Ihre Vorteile</h3>
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
              <div className="mt-12">
                <h3 className="heading-sm text-dark mb-6">Eigenschaften</h3>
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

              {/* Applications */}
              <div className="mt-12">
                <h3 className="heading-sm text-dark mb-6">Einsatzbereiche</h3>
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
                <div className="bg-dark rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">
                    Kostenlose Beratung
                  </h3>
                  <p className="text-white/80 mb-6">
                    Unsere Experten beraten Sie gerne zu {service.name}.
                  </p>
                  <a
                    href="tel:+41625589818"
                    className="flex items-center gap-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors mb-4"
                  >
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
                    <span className="font-semibold">062 558 98 18</span>
                  </a>
                  <Link
                    href="#kontakt"
                    className="btn-primary w-full justify-center"
                  >
                    Offerte anfordern
                  </Link>
                </div>

                {/* Price Info */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-dark mb-2">Preis</h3>
                  <p className="text-primary font-semibold text-lg mb-2">
                    {service.priceRange}
                  </p>
                  <p className="text-sm text-gray-600">
                    Preise variieren je nach Grösse, Material und Ausstattung.
                    Kontaktieren Sie uns für ein individuelles Angebot.
                  </p>
                </div>

                {/* Other Services */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-dark mb-4">
                    Weitere Angebote
                  </h3>
                  <ul className="space-y-3">
                    {servicesData.services
                      .filter((s) => s.id !== service.id)
                      .slice(0, 4)
                      .map((s) => (
                        <li key={s.id}>
                          <Link
                            href={`/angebote/${s.slug}`}
                            className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                          >
                            <svg
                              className="w-4 h-4"
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
                            {s.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="bg-gray-50">
        <FAQ
          items={service.faq}
          title={`Häufige Fragen zu ${service.name}`}
          subtitle="Hier finden Sie Antworten auf die wichtigsten Fragen."
        />
      </div>

      {/* Contact Form Section */}
      <section id="kontakt" className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="heading-md text-dark mb-4">
                Offerte für {service.name} anfordern
              </h2>
              <p className="text-gray-600">
                Füllen Sie das Formular aus und wir melden uns schnellstmöglich
                bei Ihnen.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <ContactForm service={service.name} />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        variant="gradient"
        title="Noch Fragen?"
        description="Unser Team steht Ihnen gerne für eine persönliche Beratung zur Verfügung."
      />
    </>
  );
}
