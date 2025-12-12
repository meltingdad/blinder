"use client";

import Link from "next/link";
import { companyInfo } from "@/lib/config";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  showPhone?: boolean;
  variant?: "default" | "dark" | "gradient" | "urgent" | "stats" | "minimal";
  stats?: Array<{
    value: string;
    label: string;
  }>;
}

export default function CTASection({
  title = "Bereit für Ihre neue Storenanlage?",
  description = "Kontaktieren Sie uns für eine kostenlose Beratung und ein unverbindliches Angebot.",
  primaryCta = { text: "Offerte anfordern", href: "/kontakt" },
  secondaryCta,
  showPhone = true,
  variant = "default",
  stats,
}: CTASectionProps) {
  // Variant-specific styles
  const variantStyles = {
    default: {
      bg: "bg-primary",
      text: "text-dark",
      subtext: "text-dark/80",
      button: "bg-dark text-white hover:bg-dark-light hover:scale-105",
      outline: "text-dark border-dark hover:bg-dark hover:text-white",
    },
    dark: {
      bg: "bg-dark",
      text: "text-white",
      subtext: "text-white/80",
      button: "bg-primary text-dark hover:bg-primary-light hover:scale-105",
      outline: "text-white border-white hover:bg-white hover:text-dark",
    },
    gradient: {
      bg: "bg-gradient-to-br from-dark via-dark-light to-dark",
      text: "text-white",
      subtext: "text-white/80",
      button: "bg-primary text-dark hover:bg-primary-light hover:scale-105",
      outline: "text-white border-white hover:bg-white hover:text-dark",
    },
    urgent: {
      bg: "bg-gradient-to-r from-accent via-accent-dark to-accent",
      text: "text-white",
      subtext: "text-white/90",
      button: "bg-white text-accent hover:bg-gray-100 hover:scale-105",
      outline: "text-white border-white hover:bg-white hover:text-accent",
    },
    stats: {
      bg: "bg-cream",
      text: "text-dark",
      subtext: "text-dark-lighter",
      button: "bg-primary text-dark hover:bg-primary-dark hover:text-white hover:scale-105",
      outline: "text-dark border-dark hover:bg-dark hover:text-white",
    },
    minimal: {
      bg: "bg-white border-y border-gray-200",
      text: "text-dark",
      subtext: "text-gray-600",
      button: "bg-primary text-dark hover:bg-primary-dark hover:text-white hover:scale-105",
      outline: "text-dark border-dark/30 hover:border-dark hover:bg-dark hover:text-white",
    },
  };

  const styles = variantStyles[variant];

  // Default stats for the stats variant
  const defaultStats = [
    { value: "15+", label: "Jahre Erfahrung" },
    { value: "1000+", label: "Zufriedene Kunden" },
    { value: "100%", label: "Swiss Made" },
    { value: "24h", label: "Service" },
  ];

  const displayStats = stats || defaultStats;

  return (
    <section className={cn(styles.bg, "py-16 md:py-20 relative overflow-hidden")}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {variant === "gradient" && (
          <>
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
          </>
        )}

        {variant === "default" && (
          <>
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            {/* Floating shapes */}
            <div className="absolute top-8 left-1/4 w-16 h-16 bg-dark/5 rounded-full animate-float" />
            <div className="absolute bottom-8 right-1/4 w-12 h-12 bg-dark/5 rounded-lg rotate-45 animate-float" style={{ animationDelay: "1s" }} />
          </>
        )}

        {variant === "urgent" && (
          <>
            {/* Pulsing circles for urgency */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full animate-ping opacity-20" style={{ animationDuration: "3s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-white/20 rounded-full animate-ping opacity-30" style={{ animationDuration: "2.5s" }} />
            {/* Diagonal stripes */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 10px,
                  white 10px,
                  white 20px
                )`,
              }}
            />
          </>
        )}

        {variant === "stats" && (
          <>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </>
        )}

        {variant === "dark" && (
          <>
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-56 h-56 bg-primary/5 rounded-full blur-2xl" />
          </>
        )}
      </div>

      <div className="container-custom relative z-10">
        {/* Stats variant layout */}
        {variant === "stats" ? (
          <div className="text-center">
            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {displayStats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2 transition-transform duration-300 group-hover:scale-110">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-dark-lighter font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Content */}
            <h2 className={cn("heading-md mb-4", styles.text)}>{title}</h2>
            <p className={cn("text-lg max-w-2xl mx-auto mb-8", styles.subtext)}>
              {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={primaryCta.href}
                className={cn(
                  styles.button,
                  "font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
                )}
              >
                {primaryCta.text}
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              {showPhone && (
                <a
                  href={companyInfo.contact.phoneLink}
                  className={cn(
                    styles.outline,
                    "border-2 font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center gap-2"
                  )}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {companyInfo.contact.phone}
                </a>
              )}
            </div>
          </div>
        ) : (
          /* Standard layout for other variants */
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-2xl">
              {/* Urgent badge */}
              {variant === "urgent" && (
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="text-white text-sm font-semibold">Jetzt handeln</span>
                </div>
              )}

              <h2 className={cn("heading-md mb-4", styles.text)}>{title}</h2>
              <p className={cn("text-lg", styles.subtext)}>
                {description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href={primaryCta.href}
                className={cn(
                  styles.button,
                  "group font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
                )}
              >
                {primaryCta.text}
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className={cn(
                    styles.outline,
                    "border-2 font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center gap-2"
                  )}
                >
                  {secondaryCta.text}
                </Link>
              )}

              {showPhone && !secondaryCta && (
                <a
                  href={companyInfo.contact.phoneLink}
                  className={cn(
                    styles.outline,
                    "group border-2 font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center gap-2"
                  )}
                >
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {companyInfo.contact.phone}
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
