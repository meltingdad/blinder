"use client";

import Link from "next/link";
import { companyInfo } from "@/lib/config";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
  showTrustBadges?: boolean;
  variant?: "home" | "page" | "service";
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText = "Offerte anfordern",
  ctaLink = "/kontakt",
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
  showTrustBadges = false,
  variant = "page",
}: HeroProps) {
  const isHome = variant === "home";
  const isService = variant === "service";

  return (
    <section
      className={`relative ${isHome ? "min-h-screen" : isService ? "pt-32 pb-20" : "pt-32 pb-16"} flex items-center`}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/50" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-dark">
            {/* Decorative Elements */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
            {/* Grid Pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(rgba(154,196,52,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(154,196,52,0.5) 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
              }}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className={`max-w-3xl ${isHome ? "py-20" : ""}`}>
          {subtitle && (
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                {subtitle}
              </span>
            </div>
          )}

          <h1
            className={`${isHome ? "heading-xl" : "heading-lg"} text-white mb-6 animate-fade-up animation-delay-200`}
          >
            {title.split(" ").map((word, i) => {
              // Highlight specific keywords
              const highlights = ["Storen", "Sonnenschutz", "Qualität", "Bülach"];
              const isHighlighted = highlights.some((h) =>
                word.toLowerCase().includes(h.toLowerCase())
              );
              return (
                <span key={i}>
                  {isHighlighted ? (
                    <span className="text-primary">{word}</span>
                  ) : (
                    word
                  )}{" "}
                </span>
              );
            })}
          </h1>

          {description && (
            <p className="text-xl text-white/80 mb-8 animate-fade-up animation-delay-400 leading-relaxed">
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-600">
            <Link href={ctaLink} className="btn-primary text-lg">
              {ctaText}
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
            {secondaryCtaText && secondaryCtaLink && (
              <Link href={secondaryCtaLink} className="btn-secondary text-lg">
                {secondaryCtaText}
              </Link>
            )}
            <a
              href={companyInfo.contact.phoneLink}
              className="btn-dark text-lg"
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

          {/* Trust Badges */}
          {showTrustBadges && (
            <div className="mt-12 pt-8 border-t border-white/10 animate-fade-up animation-delay-800">
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
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
                    <p className="text-white font-semibold">Schweizer Qualität</p>
                    <p className="text-white/60 text-sm">Geprüft & zertifiziert</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
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
                    <p className="text-white font-semibold">Schnelle Montage</p>
                    <p className="text-white/60 text-sm">Termingerecht & zuverlässig</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Experten-Beratung</p>
                    <p className="text-white/60 text-sm">Persönlich & kompetent</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {isHome && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
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
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      )}
    </section>
  );
}
