"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ConsentType = "all" | "essential" | null;

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay before showing for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
        setIsAnimating(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (type: ConsentType) => {
    if (type) {
      localStorage.setItem("cookie-consent", type);
      localStorage.setItem("cookie-consent-date", new Date().toISOString());
    }

    // Animate out
    setIsAnimating(false);
    setTimeout(() => {
      setShowBanner(false);
    }, 300);
  };

  if (!showBanner) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 inset-x-0 z-50 p-4 transition-all duration-300",
        isAnimating
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
      )}
    >
      <div className="container-custom">
        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-6 md:p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-dark text-lg">
                  Datenschutz-Einstellungen
                </h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf
                unserer Website zu bieten. Dazu gehören notwendige Cookies für
                die Grundfunktionen sowie optionale Cookies für Analysen und
                personalisierte Inhalte.{" "}
                <Link
                  href="/datenschutz"
                  className="text-primary hover:text-primary-dark font-medium underline underline-offset-2"
                >
                  Mehr erfahren
                </Link>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <button
                onClick={() => handleConsent("essential")}
                className={cn(
                  "px-5 py-3 rounded-lg font-medium text-sm transition-all duration-200",
                  "border border-gray-200 text-gray-700",
                  "hover:border-gray-300 hover:bg-gray-50",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                )}
              >
                Nur notwendige
              </button>
              <button
                onClick={() => handleConsent("all")}
                className={cn(
                  "px-5 py-3 rounded-lg font-semibold text-sm transition-all duration-200",
                  "bg-primary text-dark",
                  "hover:bg-primary-dark hover:text-white",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                )}
              >
                Alle akzeptieren
              </button>
            </div>
          </div>

          {/* Additional info */}
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Notwendige Cookies sind immer aktiv
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Analyse-Cookies verbessern unsere Website
            </span>
            <Link
              href="/impressum"
              className="text-gray-500 hover:text-primary transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-gray-500 hover:text-primary transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
