"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { companyInfo, navigation } from "@/lib/config";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
            : "bg-white/80 backdrop-blur-sm py-4"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <div className="flex items-center gap-3">
                {/* Logo icon */}
                <div className="relative">
                  <div className={cn(
                    "w-12 h-12 bg-primary rounded-lg flex items-center justify-center transition-all duration-300",
                    "group-hover:scale-105 group-hover:rotate-3 group-hover:shadow-lg"
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

                {/* Full logo text - hidden on small mobile */}
                <div className="hidden sm:block">
                  <span className="text-xl font-bold text-dark leading-tight block tracking-tight">
                    Swiss Quality
                  </span>
                  <span className="text-sm text-primary font-semibold tracking-wider uppercase">
                    Storen GmbH
                  </span>
                </div>

                {/* Abbreviated logo text - visible only on small mobile */}
                <div className="block sm:hidden">
                  <span className="text-lg font-bold text-dark tracking-tight">
                    SQS
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.main.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 text-dark font-medium transition-colors relative",
                      "hover:text-primary",
                      "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300",
                      "hover:after:w-full"
                    )}
                  >
                    <span className="flex items-center gap-1">
                      {item.name}
                      {item.children && (
                        <svg
                          className={cn(
                            "w-4 h-4 transition-transform duration-300",
                            openDropdown === item.name && "rotate-180"
                          )}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </span>
                  </Link>

                  {/* Dropdown with improved animation */}
                  {item.children && (
                    <div
                      className={cn(
                        "absolute top-full left-0 pt-2 transition-all duration-300",
                        "opacity-0 invisible translate-y-2 scale-95 origin-top",
                        "group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100"
                      )}
                    >
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[240px] overflow-hidden">
                        {item.children.map((child, index) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={cn(
                              "block px-4 py-3 text-dark transition-all duration-200",
                              "hover:bg-primary/10 hover:text-primary hover:pl-6"
                            )}
                            style={{ transitionDelay: `${index * 30}ms` }}
                          >
                            <span className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
                              {child.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA & Phone */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={companyInfo.contact.phoneLink}
                className="group flex items-center gap-2 text-dark hover:text-primary transition-colors"
              >
                <div className={cn(
                  "w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center transition-all duration-300",
                  "group-hover:bg-primary group-hover:scale-110"
                )}>
                  <svg
                    className="w-5 h-5 text-primary group-hover:text-white transition-colors"
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
                <span className="font-semibold">{companyInfo.contact.phone}</span>
              </a>
              <Link
                href="/kontakt"
                className={cn(
                  "btn-primary transition-all duration-300",
                  "hover:scale-105 hover:shadow-lg"
                )}
              >
                Offerte anfordern
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden p-2 text-dark transition-all duration-300 rounded-lg",
                "hover:text-primary hover:bg-primary/10",
                isMobileMenuOpen && "bg-primary/10"
              )}
              aria-label={isMobileMenuOpen ? "Menü schliessen" : "Menü öffnen"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-6 h-6 relative">
                <span
                  className={cn(
                    "absolute left-0 w-6 h-0.5 bg-current transition-all duration-300",
                    isMobileMenuOpen
                      ? "top-1/2 -translate-y-1/2 rotate-45"
                      : "top-1"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-current transition-all duration-300",
                    isMobileMenuOpen && "opacity-0 scale-0"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 w-6 h-0.5 bg-current transition-all duration-300",
                    isMobileMenuOpen
                      ? "top-1/2 -translate-y-1/2 -rotate-45"
                      : "bottom-1"
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-dark/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel - Slide from right */}
      <div
        id="mobile-menu"
        aria-hidden={!isMobileMenuOpen}
        className={cn(
          "fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 lg:hidden",
          "transform transition-transform duration-300 ease-out",
          "shadow-2xl",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Mobile menu header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-dark"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="11" x2="21" y2="11" />
                <line x1="3" y1="15" x2="21" y2="15" />
              </svg>
            </div>
            <span className="font-bold text-dark">Swiss Quality</span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-dark hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
            aria-label="Menü schliessen"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile menu content */}
        <nav className="flex flex-col h-[calc(100%-80px)] overflow-y-auto">
          <div className="flex-1 py-4">
            {navigation.main.map((item, index) => (
              <div
                key={item.name}
                className="animate-slide-up"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: "forwards",
                  opacity: 0
                }}
              >
                <Link
                  href={item.href}
                  onClick={() => !item.children && setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-6 py-4 text-dark font-medium",
                    "hover:bg-primary/10 hover:text-primary transition-colors"
                  )}
                >
                  {item.name}
                  {item.children && (
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {item.children && (
                  <div className="bg-gray-50 py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-8 py-3 text-dark/80 hover:text-primary transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu footer CTAs */}
          <div className="p-4 border-t border-gray-100 space-y-3">
            <a
              href={companyInfo.contact.phoneLink}
              className={cn(
                "flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg",
                "bg-gray-100 text-dark font-semibold transition-colors",
                "hover:bg-gray-200"
              )}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {companyInfo.contact.phone}
            </a>
            <Link
              href="/kontakt"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-primary text-dark font-semibold hover:bg-primary-dark hover:text-white transition-colors"
            >
              Offerte anfordern
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
