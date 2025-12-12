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
      className={`relative ${isHome ? "min-h-screen" : isService ? "pt-32 pb-20" : "pt-32 pb-16"} flex items-center overflow-hidden`}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center scale-105 animate-[pulse_20s_ease-in-out_infinite]"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            {/* Reduced overlay for better image visibility */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark/80 via-dark/50 to-dark/30" />
            {/* Diagonal accent line */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-dark">
            {/* Decorative Floating Elements */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "-3s" }} />
            <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-accent/5 rounded-full blur-xl animate-float" style={{ animationDelay: "-1.5s" }} />
            {/* Grid Pattern */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `linear-gradient(rgba(140,185,29,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(140,185,29,0.6) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />
          </div>
        )}
      </div>

      {/* Floating Decorative Shapes - only on home */}
      {isHome && (
        <>
          <div className="absolute top-32 right-20 w-20 h-20 border-2 border-primary/20 rounded-xl rotate-12 animate-float hidden lg:block" />
          <div className="absolute bottom-40 right-40 w-12 h-12 bg-primary/10 rounded-lg -rotate-6 animate-float hidden lg:block" style={{ animationDelay: "-2s" }} />
          <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-primary rounded-full animate-pulse hidden lg:block" />
        </>
      )}

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className={`max-w-3xl ${isHome ? "py-20" : ""}`}>
          {subtitle && (
            <div className="opacity-0 animate-fade-up" style={{ animationFillMode: "forwards" }}>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-sm font-semibold mb-6 border border-primary/20">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                {subtitle}
              </span>
            </div>
          )}

          <h1
            className={`${isHome ? "heading-xl" : "heading-lg"} text-white mb-6 opacity-0 animate-fade-up`}
            style={{
              animationDelay: "0.15s",
              animationFillMode: "forwards",
              textShadow: "0 2px 20px rgba(0,0,0,0.3)"
            }}
          >
            {title.split(" ").map((word, i) => {
              const highlights = ["Storen", "Sonnenschutz", "Qualität", "Bülach"];
              const isHighlighted = highlights.some((h) =>
                word.toLowerCase().includes(h.toLowerCase())
              );
              return (
                <span key={i}>
                  {isHighlighted ? (
                    <span className="text-primary drop-shadow-[0_2px_10px_rgba(140,185,29,0.3)]">{word}</span>
                  ) : (
                    word
                  )}{" "}
                </span>
              );
            })}
          </h1>

          {description && (
            <p
              className="text-xl text-white/90 mb-8 leading-relaxed opacity-0 animate-fade-up max-w-2xl"
              style={{
                animationDelay: "0.3s",
                animationFillMode: "forwards",
                textShadow: "0 1px 10px rgba(0,0,0,0.2)"
              }}
            >
              {description}
            </p>
          )}

          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.45s", animationFillMode: "forwards" }}
          >
            <Link
              href={ctaLink}
              className="group btn-primary text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              {ctaText}
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
              <Link
                href={secondaryCtaLink}
                className="btn-secondary text-lg backdrop-blur-sm"
              >
                {secondaryCtaText}
              </Link>
            )}
            <a
              href={companyInfo.contact.phoneLink}
              className="group btn-dark text-lg backdrop-blur-sm hover:bg-white hover:text-dark transition-all duration-300"
            >
              <svg
                className="w-5 h-5 group-hover:animate-bounce-soft"
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
            <div
              className="mt-12 pt-8 border-t border-white/10 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              <div className="flex flex-wrap items-center gap-6 lg:gap-10">
                {[
                  {
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    ),
                    title: "Schweizer Qualität",
                    subtitle: "Geprüft & zertifiziert",
                    delay: "0.7s"
                  },
                  {
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    ),
                    title: "Schnelle Montage",
                    subtitle: "Termingerecht & zuverlässig",
                    delay: "0.8s"
                  },
                  {
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    ),
                    title: "Experten-Beratung",
                    subtitle: "Persönlich & kompetent",
                    delay: "0.9s"
                  },
                ].map((badge, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 opacity-0 animate-fade-up"
                    style={{ animationDelay: badge.delay, animationFillMode: "forwards" }}
                  >
                    <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-primary/20">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {badge.icon}
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm lg:text-base">{badge.title}</p>
                      <p className="text-white/60 text-xs lg:text-sm">{badge.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {isHome && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}>
          <span className="text-white/50 text-xs uppercase tracking-widest">Mehr entdecken</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      )}

      {/* Bottom Gradient Fade */}
      {isHome && (
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-white to-transparent z-10" />
      )}
    </section>
  );
}
