import Link from "next/link";
import { companyInfo, navigation } from "@/lib/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7 text-dark"
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
              <div>
                <span className="text-xl font-bold text-primary leading-tight block">
                  Swiss Quality
                </span>
                <span className="text-sm text-white/80 font-medium tracking-wider uppercase">
                  Storen GmbH
                </span>
              </div>
            </div>
            <p className="text-white/70 mb-6">
              Ihr Spezialist für hochwertige Storen, Lamellenstoren, Rollladen
              und Sonnenschutz in Bülach und der Region Zürich.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-5 bg-swiss-red flex items-center justify-center">
                <span className="text-white text-xs font-bold">+</span>
              </div>
              <span className="text-sm text-white/70">Schweizer Qualität</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">
              Unsere Angebote
            </h3>
            <ul className="space-y-3">
              {navigation.main
                .find((item) => item.name === "Angebote")
                ?.children?.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-white/70 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                    >
                      <svg
                        className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
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
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-primary mt-0.5"
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
                <div className="text-white/70">
                  <p>{companyInfo.name}</p>
                  <p>{companyInfo.address.street}</p>
                  <p>
                    {companyInfo.address.plz} {companyInfo.address.city}
                  </p>
                </div>
              </li>
              <li>
                <a
                  href={companyInfo.contact.phoneLink}
                  className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors"
                >
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {companyInfo.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={companyInfo.contact.emailLink}
                  className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors"
                >
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {companyInfo.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">
              Öffnungszeiten
            </h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center gap-3">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{companyInfo.openingHours.weekdays}</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-primary opacity-50"
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
                <span>{companyInfo.openingHours.weekend}</span>
              </li>
            </ul>

            <div className="mt-8">
              <Link
                href="/kontakt"
                className="btn-primary"
              >
                Kostenlose Offerte
                <svg
                  className="w-4 h-4"
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
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              &copy; {currentYear} {companyInfo.name}. Alle Rechte vorbehalten.
            </p>
            <nav className="flex items-center gap-6">
              {navigation.footer.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/50 hover:text-primary text-sm transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
