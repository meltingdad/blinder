import Link from "next/link";
import { companyInfo, navigation } from "@/lib/config";
import { cn } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white relative overflow-hidden">
      {/* Decorative wave separator */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-cream"
          />
        </svg>
      </div>

      {/* Main Footer */}
      <div className="container-custom pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Company Info - Larger section */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className={cn(
                  "w-12 h-12 bg-primary rounded-lg flex items-center justify-center",
                  "transition-all duration-300 group-hover:scale-105 group-hover:rotate-3"
                )}>
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
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-sm flex items-center justify-center">
                  <span className="text-white text-[8px] font-bold">CH</span>
                </div>
              </div>
              <div>
                <span className="text-xl font-bold text-white leading-tight block">
                  Swiss Quality
                </span>
                <span className="text-sm text-primary font-semibold tracking-wider uppercase">
                  Storen GmbH
                </span>
              </div>
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed">
              Ihr Spezialist für hochwertige Storen, Lamellenstoren, Rollladen
              und Sonnenschutz in Bülach und der Region Zürich. Seit Jahren
              vertrauen uns Kunden für Qualität und Service.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                <div className="w-8 h-5 bg-accent flex items-center justify-center rounded-sm">
                  <span className="text-white text-xs font-bold">+</span>
                </div>
                <span className="text-xs text-white/70">Swiss Made</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-xs text-white/70">Garantie</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <span className="text-xs text-white/70">5.0 Bewertung</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary rounded-full" />
              Unsere Angebote
            </h3>
            <ul className="space-y-3">
              {navigation.main
                .find((item) => item.name === "Angebote")
                ?.children?.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-white/70 hover:text-primary transition-all duration-300 inline-flex items-center gap-2 group hover:translate-x-1"
                    >
                      <svg
                        className="w-4 h-4 text-primary transition-transform duration-300 group-hover:translate-x-1"
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
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary rounded-full" />
              Kontakt
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="text-white/70 text-sm">
                  <p className="font-semibold text-white">{companyInfo.name}</p>
                  <p>{companyInfo.address.street}</p>
                  <p>
                    {companyInfo.address.plz} {companyInfo.address.city}
                  </p>
                </div>
              </li>
              <li>
                <a
                  href={companyInfo.contact.phoneLink}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
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
                  </div>
                  <span className="text-white/70 group-hover:text-primary transition-colors">
                    {companyInfo.contact.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={companyInfo.contact.emailLink}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
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
                  </div>
                  <span className="text-white/70 group-hover:text-primary transition-colors text-sm">
                    {companyInfo.contact.email}
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours & CTA */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary rounded-full" />
              Öffnungszeiten
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <div>
                  <p className="text-white font-medium">Mo - Fr</p>
                  <p className="text-white/60">7:00 - 12:00</p>
                  <p className="text-white/60">13:00 - 17:00</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                <div className="w-2 h-2 bg-white/30 rounded-full" />
                <div>
                  <p className="text-white/70 font-medium">Sa - So</p>
                  <p className="text-white/50">Geschlossen</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/kontakt"
                className={cn(
                  "inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg",
                  "bg-primary text-dark font-semibold transition-all duration-300",
                  "hover:bg-primary-light hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                )}
              >
                Offerte anfordern
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

      {/* Decorative background elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/3 rounded-full blur-2xl -z-10" />
    </footer>
  );
}
