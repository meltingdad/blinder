import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ContactForm from "@/components/forms/ContactForm";
import { companyInfo } from "@/lib/config";
import {
  generateLocalBusinessSchema,
  generateContactPageSchema,
  combineSchemas,
} from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Kontakt - Kostenlose Offerte anfordern",
  description:
    "Kontaktieren Sie Swiss Quality Storen GmbH für eine kostenlose Beratung und Offerte. Wir sind Ihr Partner für Storen und Sonnenschutz in Bülach.",
};

export default function KontaktPage() {
  const structuredData = combineSchemas(
    generateLocalBusinessSchema(),
    generateContactPageSchema()
  );

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Hero
        variant="page"
        title="Kontaktieren Sie uns"
        subtitle="Kostenlose Beratung"
        description="Wir freuen uns auf Ihre Anfrage. Unser Team steht Ihnen für eine persönliche Beratung gerne zur Verfügung."
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Company Card */}
                <div className="bg-dark rounded-2xl p-8 text-white">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-7 h-7 text-dark"
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
                    <div>
                      <span className="text-lg font-bold text-primary block">
                        Swiss Quality
                      </span>
                      <span className="text-sm text-white/80">Storen GmbH</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-primary mt-0.5"
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
                      <div>
                        <p>{companyInfo.address.street}</p>
                        <p>
                          {companyInfo.address.plz} {companyInfo.address.city}
                        </p>
                        <p>{companyInfo.address.country}</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <a
                      href={companyInfo.contact.phoneLink}
                      className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 text-primary"
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
                      <span className="font-semibold">
                        {companyInfo.contact.phone}
                      </span>
                    </a>

                    {/* Email */}
                    <a
                      href={companyInfo.contact.emailLink}
                      className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span>{companyInfo.contact.email}</span>
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-lg font-bold text-dark mb-4">
                    Öffnungszeiten
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-primary"
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
                      <div>
                        <p className="font-medium text-dark">Montag - Freitag</p>
                        <p className="text-gray-600">7:00 - 12:00, 13:00 - 17:00</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-gray-400"
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
                      <div>
                        <p className="font-medium text-dark">Samstag - Sonntag</p>
                        <p className="text-gray-600">Geschlossen</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Facts */}
                <div className="bg-primary/10 rounded-2xl p-8">
                  <h3 className="text-lg font-bold text-dark mb-4">
                    Das erwartet Sie
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-700">
                      <svg
                        className="w-5 h-5 text-primary"
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
                      Kostenlose Beratung
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <svg
                        className="w-5 h-5 text-primary"
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
                      Unverbindliche Offerte
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <svg
                        className="w-5 h-5 text-primary"
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
                      Schnelle Rückmeldung
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <svg
                        className="w-5 h-5 text-primary"
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
                      Persönlicher Ansprechpartner
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="heading-sm text-dark mb-2">
                  Offerte anfordern
                </h2>
                <p className="text-gray-600 mb-8">
                  Füllen Sie das Formular aus und wir melden uns schnellstmöglich
                  bei Ihnen.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-cream">
        <div className="relative">
          {/* Map Container */}
          <div className="h-[450px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.8!2d8.5387!3d47.5194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47906d01c39f8e8f%3A0x0!2sSchlosserstrasse%204%2C%208180%20B%C3%BClach!5e0!3m2!1sde!2sch!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(20%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Swiss Quality Storen GmbH Standort"
              className="w-full h-full"
            />
          </div>

          {/* Floating Address Card */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 bg-white rounded-xl shadow-xl p-6 max-w-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-dark"
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
                <h3 className="font-bold text-dark mb-1">{companyInfo.name}</h3>
                <p className="text-dark-lighter text-sm">
                  {companyInfo.address.street}<br />
                  {companyInfo.address.plz} {companyInfo.address.city}
                </p>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    `${companyInfo.address.street}, ${companyInfo.address.plz} ${companyInfo.address.city}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-primary hover:text-primary-dark font-medium text-sm transition-colors"
                >
                  Route planen
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
