import Image from "next/image";
import { images } from "@/lib/images";

const partners = [
  {
    name: "Glatz",
    logo: images.partners.glatz,
    alt: "Glatz Sonnenschirme Partner",
  },
  {
    name: "Somfy",
    logo: images.partners.somfy,
    alt: "Somfy Smart Home Partner",
  },
  {
    name: "Storosol",
    logo: images.partners.storosol,
    alt: "Storosol Storen Partner",
  },
  {
    name: "Velux",
    logo: images.partners.velux,
    alt: "Velux Dachfenster Partner",
  },
  {
    name: "Alurex",
    logo: images.partners.alurex,
    alt: "Alurex Lamellenstoren Partner",
  },
  {
    name: "Rufalex",
    logo: images.partners.rufalex,
    alt: "Rufalex Storen Partner",
  },
];

export default function Partners() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Unsere Partner
          </span>
          <h2 className="heading-md text-dark mb-4">
            Wir arbeiten mit den besten Marken
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Als zertifizierter Partner führender Hersteller garantieren wir
            Ihnen höchste Qualität und professionellen Service.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center h-24"
            >
              <Image
                src={partner.logo}
                alt={partner.alt}
                width={120}
                height={60}
                className="object-contain max-h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
