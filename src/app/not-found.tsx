import Link from "next/link";
import { companyInfo } from "@/lib/config";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Decorative 404 */}
        <div className="relative mb-8">
          <span className="text-[180px] md:text-[240px] font-extrabold text-primary/10 leading-none select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center transform rotate-12 shadow-xl">
              <svg
                viewBox="0 0 24 24"
                className="w-14 h-14 text-dark"
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
          </div>
        </div>

        {/* Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">
          Seite nicht gefunden
        </h1>
        <p className="text-lg text-dark-lighter mb-8 max-w-md mx-auto">
          Die gewünschte Seite existiert leider nicht oder wurde verschoben.
          Keine Sorge, wir helfen Ihnen gerne weiter!
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Zur Startseite
          </Link>
          <Link
            href="/kontakt"
            className="btn-secondary text-lg"
          >
            Kontakt aufnehmen
          </Link>
        </div>

        {/* Quick Contact */}
        <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
          <p className="text-sm text-dark-lighter mb-2">
            Oder rufen Sie uns direkt an:
          </p>
          <a
            href={companyInfo.contact.phoneLink}
            className="text-xl font-bold text-primary hover:text-primary-dark transition-colors"
          >
            {companyInfo.contact.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
