"use client";

import { useEffect } from "react";
import Link from "next/link";
import { companyInfo } from "@/lib/config";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        {/* Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">
          Etwas ist schiefgelaufen
        </h1>
        <p className="text-lg text-dark-lighter mb-8 max-w-md mx-auto">
          Es ist ein unerwarteter Fehler aufgetreten. Bitte versuchen Sie es
          erneut oder kontaktieren Sie uns, falls das Problem weiterhin besteht.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => reset()}
            className="btn-primary text-lg"
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
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Erneut versuchen
          </button>
          <Link
            href="/"
            className="btn-secondary text-lg"
          >
            Zur Startseite
          </Link>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
          <p className="text-sm text-dark-lighter mb-3">
            Benötigen Sie Hilfe? Kontaktieren Sie uns:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={companyInfo.contact.phoneLink}
              className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-semibold"
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
              {companyInfo.contact.phone}
            </a>
            <a
              href={companyInfo.contact.emailLink}
              className="flex items-center gap-2 text-dark hover:text-primary transition-colors"
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {companyInfo.contact.email}
            </a>
          </div>
        </div>

        {/* Error ID for debugging */}
        {error.digest && (
          <p className="mt-8 text-xs text-dark-lighter/50">
            Fehler-ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
