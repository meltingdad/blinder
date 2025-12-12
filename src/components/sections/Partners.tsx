"use client";

import { useState } from "react";
import Image from "next/image";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

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

interface PartnersProps {
  variant?: "grid" | "marquee";
  showTitle?: boolean;
  title?: string;
  subtitle?: string;
}

export default function Partners({
  variant = "grid",
  showTitle = true,
  title = "Wir arbeiten mit den besten Marken",
  subtitle = "Als zertifizierter Partner führender Hersteller garantieren wir Ihnen höchste Qualität und professionellen Service.",
}: PartnersProps) {
  const [isPaused, setIsPaused] = useState(false);

  // Double the partners array for seamless marquee loop
  const marqueePartners = [...partners, ...partners];

  if (variant === "marquee") {
    return (
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="container-custom">
          {showTitle && (
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Unsere Partner
              </span>
              <h2 className="heading-md text-dark mb-4">{title}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
            </div>
          )}
        </div>

        {/* Marquee container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          {/* Marquee track */}
          <div
            className={cn(
              "flex gap-8 animate-marquee",
              isPaused && "[animation-play-state:paused]"
            )}
            style={{ width: "fit-content" }}
          >
            {marqueePartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center h-24 w-40"
              >
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  width={120}
                  height={60}
                  className="object-contain max-h-12 w-auto grayscale-[0.3] hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Grid variant (default)
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        {showTitle && (
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Unsere Partner
            </span>
            <h2 className="heading-md text-dark mb-4">{title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={cn(
                "bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center h-24",
                "animate-fade-up opacity-0"
              )}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              <Image
                src={partner.logo}
                alt={partner.alt}
                width={120}
                height={60}
                className="object-contain max-h-12 w-auto grayscale-[0.3] hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
