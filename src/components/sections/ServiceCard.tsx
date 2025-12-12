"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

// Accent colors for different service categories
const accentColors = {
  primary: {
    bg: "bg-primary",
    bgLight: "bg-primary/10",
    text: "text-primary",
    border: "border-primary/30",
    gradient: "from-primary to-primary-dark",
  },
  blue: {
    bg: "bg-blue-500",
    bgLight: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-200",
    gradient: "from-blue-500 to-blue-700",
  },
  amber: {
    bg: "bg-amber-500",
    bgLight: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-200",
    gradient: "from-amber-500 to-amber-700",
  },
  rose: {
    bg: "bg-rose-500",
    bgLight: "bg-rose-50",
    text: "text-rose-600",
    border: "border-rose-200",
    gradient: "from-rose-500 to-rose-700",
  },
  emerald: {
    bg: "bg-emerald-500",
    bgLight: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-200",
    gradient: "from-emerald-500 to-emerald-700",
  },
};

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  features?: string[];
  imageUrl?: string;
  variant?: "default" | "featured" | "compact";
  accent?: keyof typeof accentColors;
  index?: number; // For staggered animations
}

export default function ServiceCard({
  title,
  description,
  href,
  icon,
  features,
  imageUrl,
  variant = "default",
  accent = "primary",
  index = 0,
}: ServiceCardProps) {
  const colors = accentColors[accent];
  const animationDelay = `${index * 100}ms`;

  if (variant === "compact") {
    return (
      <Link
        href={href}
        className={cn(
          "group block p-6 bg-white rounded-xl border border-gray-100 transition-all duration-300",
          "hover:border-primary/30 hover:shadow-lg hover:-translate-y-1",
          "animate-slide-up opacity-0"
        )}
        style={{
          animationDelay,
          animationFillMode: "forwards"
        }}
      >
        <div className="flex items-start gap-4">
          {icon && (
            <div className={cn(
              "w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0",
              "transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
              colors.bgLight,
              `group-hover:${colors.bg}`
            )}>
              <div className={cn(
                "transition-colors",
                colors.text,
                "group-hover:text-white"
              )}>
                {icon}
              </div>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className={cn(
              "text-lg font-semibold text-dark mb-2 transition-colors",
              `group-hover:${colors.text}`
            )}>
              {title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
          </div>
          <svg
            className={cn(
              "w-5 h-5 flex-shrink-0 mt-1 transition-all duration-300",
              "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0",
              colors.text
            )}
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
        </div>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link
        href={href}
        className={cn(
          "group block relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500",
          "hover:shadow-2xl hover:-translate-y-2",
          "animate-slide-up opacity-0"
        )}
        style={{
          animationDelay,
          animationFillMode: "forwards"
        }}
      >
        {/* Gradient border effect on hover */}
        <div className={cn(
          "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          "bg-gradient-to-r p-[2px]",
          colors.gradient
        )}>
          <div className="w-full h-full bg-white rounded-2xl" />
        </div>

        {/* Image with clip-path reveal effect */}
        <div className="relative h-64 overflow-hidden">
          {imageUrl ? (
            <>
              <div
                className="absolute inset-0 bg-cover bg-center transform transition-all duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${imageUrl})` }}
              />
              {/* Diagonal reveal overlay */}
              <div className={cn(
                "absolute inset-0 transition-all duration-500",
                "bg-gradient-to-br opacity-30 group-hover:opacity-0",
                colors.gradient
              )} />
            </>
          ) : (
            <div className={cn(
              "absolute inset-0 bg-gradient-to-br",
              "from-dark via-dark-light to-primary/30"
            )} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />

          {/* Icon Badge with enhanced animation */}
          {icon && (
            <div className={cn(
              "absolute top-4 left-4 w-14 h-14 rounded-xl flex items-center justify-center",
              "transform transition-all duration-500",
              "group-hover:rotate-6 group-hover:scale-110",
              colors.bg
            )}>
              <div className="text-white transform transition-transform duration-300 group-hover:scale-110">
                {icon}
              </div>
            </div>
          )}

          {/* Floating badge */}
          <div className={cn(
            "absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold",
            "bg-white/90 backdrop-blur-sm",
            colors.text
          )}>
            Premium
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6 -mt-16 z-10">
          <div className="bg-white rounded-xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
            <h3 className={cn(
              "text-xl font-bold text-dark mb-3 transition-colors",
              `group-hover:${colors.text}`
            )}>
              {title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

            {features && features.length > 0 && (
              <ul className="space-y-2 mb-4">
                {features.slice(0, 3).map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <svg
                      className={cn("w-4 h-4 flex-shrink-0", colors.text)}
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
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            <div className={cn(
              "flex items-center gap-2 font-semibold transition-all duration-300",
              "group-hover:gap-4",
              colors.text
            )}>
              Mehr erfahren
              <svg
                className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
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
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Default variant with enhanced animations
  return (
    <Link
      href={href}
      className={cn(
        "group block bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500",
        "hover:shadow-2xl hover:-translate-y-3",
        "animate-slide-up opacity-0",
        "relative"
      )}
      style={{
        animationDelay,
        animationFillMode: "forwards"
      }}
    >
      {/* Gradient border on hover */}
      <div className={cn(
        "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10",
        "bg-gradient-to-r blur-sm",
        colors.gradient
      )} style={{ transform: "scale(1.02)" }} />

      {/* Header with gradient and image */}
      <div className="relative h-48 overflow-hidden">
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br",
          "from-dark via-dark-light to-primary/20"
        )} />
        {imageUrl && (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/30 transition-colors duration-500" />

        {/* Centered icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          {icon ? (
            <div className={cn(
              "w-20 h-20 rounded-2xl flex items-center justify-center",
              "transform transition-all duration-500",
              "group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl",
              colors.bg
            )}>
              <div className="text-white transform transition-transform duration-300 group-hover:scale-110">
                {icon}
              </div>
            </div>
          ) : (
            <div className={cn(
              "w-20 h-20 rounded-2xl flex items-center justify-center",
              colors.bg
            )}>
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={2} />
                <line x1="3" y1="7" x2="21" y2="7" strokeWidth={2} />
                <line x1="3" y1="11" x2="21" y2="11" strokeWidth={2} />
                <line x1="3" y1="15" x2="21" y2="15" strokeWidth={2} />
              </svg>
            </div>
          )}
        </div>

        {/* Corner accent */}
        <div className={cn(
          "absolute top-0 right-0 w-24 h-24 transform translate-x-12 -translate-y-12",
          "rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500",
          colors.bg
        )} />
      </div>

      {/* Content */}
      <div className="p-6 relative">
        {/* Accent line */}
        <div className={cn(
          "absolute top-0 left-6 right-6 h-1 rounded-full transform -translate-y-1/2",
          "scale-x-0 group-hover:scale-x-100 transition-transform duration-500",
          colors.bg
        )} />

        <h3 className={cn(
          "text-xl font-bold text-dark mb-3 transition-colors duration-300",
          `group-hover:${colors.text}`
        )}>
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

        {features && features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.slice(0, 3).map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-sm text-gray-600 transform transition-transform duration-300"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <svg
                  className={cn(
                    "w-4 h-4 flex-shrink-0 transform transition-transform duration-300",
                    "group-hover:scale-110",
                    colors.text
                  )}
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
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className={cn(
            "font-semibold transition-colors duration-300",
            colors.text
          )}>
            Mehr erfahren
          </span>
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
            "transform group-hover:scale-110",
            colors.bgLight,
            `group-hover:${colors.bg}`
          )}>
            <svg
              className={cn(
                "w-5 h-5 transition-all duration-300",
                "transform group-hover:translate-x-0.5",
                colors.text,
                "group-hover:text-white"
              )}
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
          </div>
        </div>
      </div>
    </Link>
  );
}
