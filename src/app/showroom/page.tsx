import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import { companyInfo } from "@/lib/config";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "CUBE Showroom Bülach - Swiss Quality Storen GmbH",
  description:
    "Besuchen Sie unseren exklusiven CUBE Showroom in Bülach. Erleben Sie Raffstoren, Rollladen, Markisen und Smart-Home-Lösungen live. Der einzige CUBE Showroom in der Schweiz.",
  keywords: [
    "showroom bülach",
    "cube showroom",
    "storen showroom",
    "sonnenschutz ausstellung",
    "swiss quality storen showroom",
  ],
};

const showroomFeatures = [
  {
    title: "Raffstoren & Lamellenstoren",
    description:
      "Entdecken Sie verschiedene Lamellenbreiten, Farben und Bedienungsarten.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="15" x2="21" y2="15" />
      </svg>
    ),
  },
  {
    title: "Rollladen",
    description:
      "Testen Sie verschiedene Rollladensysteme für Sicherheit und Komfort.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <path d="M3 7h18M3 11h18M3 15h18" />
        <circle cx="12" cy="19" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Textile Screens",
    description:
      "Moderne Textilscreens für eleganten Sonnen- und Blendschutz.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
      </svg>
    ),
  },
  {
    title: "Smart-Home-Integration",
    description:
      "Erleben Sie intelligente Steuerungslösungen live in Aktion.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

export default function ShowroomPage() {
  return (
    <>
      <Hero
        variant="page"
        title="CUBE - Unser exklusiver Showroom in Bülach"
        subtitle="Der einzige CUBE Showroom in der Schweiz"
        description="Erleben Sie modernen Sonnen- und Wetterschutz hautnah. Im CUBE können Sie Materialien, Designvarianten und Funktionen live erleben, anfassen und vergleichen."
        ctaText="Termin vereinbaren"
        ctaLink="/kontakt"
        backgroundImage={images.showroom.main}
      />

      {/* What is CUBE Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Was ist der CUBE?
              </span>
              <h2 className="heading-md text-dark mb-6">
                Unser Showroom für modernen Sonnen- und Wetterschutz
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Im CUBE - dem exklusiven Showroom, den wir als einziger
                  Fachhändler in der Schweiz betreiben - präsentieren wir Ihnen
                  die gesamte Vielfalt moderner Sonnenschutzlösungen.
                </p>
                <p>
                  In moderner Architektur und hochwertiger Präsentation zeigen
                  wir Ihnen:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
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
                    Raffstoren, Rollladen und textile Screens
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
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
                    Markisen und Fassadensysteme
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
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
                    Intelligente Steuerungslösungen und Smart-Home-Anwendungen
                  </li>
                </ul>
                <p>
                  Ob für Neubau, Renovierung oder anspruchsvolle Architektur -
                  im CUBE können Sie alles live erleben, anfassen und
                  vergleichen.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={images.showroom.gallery[0]}
                  alt="CUBE Showroom Innenansicht"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary rounded-xl p-4 shadow-lg">
                <p className="text-dark font-bold text-lg">Exklusiv</p>
                <p className="text-dark/80 text-sm">in der Schweiz</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md text-dark mb-4">
              Was Sie im CUBE erwartet
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Entdecken Sie unsere Produktvielfalt in einer einzigartigen
              Ausstellungsumgebung.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {showroomFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <div className="text-primary group-hover:text-dark transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-dark mb-3 text-center group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Impressionen
            </span>
            <h2 className="heading-md text-dark mb-4">
              Einblicke in unseren CUBE Showroom
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.showroom.gallery.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <Image
                  src={image}
                  alt={`CUBE Showroom Bild ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours & Location */}
      <section className="section-padding bg-dark text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-md text-white mb-6">Besuchen Sie uns</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
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
                    <h3 className="font-semibold text-lg mb-1">Adresse</h3>
                    <p className="text-white/70">
                      {companyInfo.name}
                      <br />
                      {companyInfo.address.street}
                      <br />
                      {companyInfo.address.plz} {companyInfo.address.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
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
                    <h3 className="font-semibold text-lg mb-1">Öffnungszeiten</h3>
                    <p className="text-white/70">
                      Mo - Fr: 7:00 - 12:00, 13:00 - 17:00
                      <br />
                      Sa - So: Geschlossen
                    </p>
                    <p className="text-primary text-sm mt-2">
                      Termine nach Vereinbarung auch ausserhalb der
                      Öffnungszeiten möglich
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
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
                    <h3 className="font-semibold text-lg mb-1">Kontakt</h3>
                    <p className="text-white/70">
                      Tel:{" "}
                      <a
                        href={companyInfo.contact.phoneLink}
                        className="text-primary hover:underline"
                      >
                        {companyInfo.contact.phone}
                      </a>
                      <br />
                      E-Mail:{" "}
                      <a
                        href={`mailto:${companyInfo.contact.email}`}
                        className="text-primary hover:underline"
                      >
                        {companyInfo.contact.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 text-primary">
                Termin vereinbaren
              </h3>
              <p className="text-white/70 mb-6">
                Vereinbaren Sie einen persönlichen Beratungstermin und erleben
                Sie den CUBE Showroom exklusiv. Unser Team begleitet Sie gerne
                mit Fachwissen und individueller Beratung.
              </p>
              <div className="space-y-4">
                <Link href="/kontakt" className="btn-primary w-full justify-center">
                  Termin anfragen
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
                <a
                  href={companyInfo.contact.phoneLink}
                  className="btn-secondary w-full justify-center"
                >
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Jetzt anrufen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        variant="default"
        title="Erleben Sie den CUBE"
        description="Besuchen Sie unseren exklusiven Showroom und lassen Sie sich inspirieren."
        primaryCta={{ text: "Termin vereinbaren", href: "/kontakt" }}
      />
    </>
  );
}
