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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-lg py-2"
          : "bg-white/95 backdrop-blur-sm py-4"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
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
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-swiss-red rounded-sm flex items-center justify-center">
                  <span className="text-white text-[8px] font-bold">CH</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-dark leading-tight block">
                  Swiss Quality
                </span>
                <span className="text-sm text-primary font-semibold tracking-wider uppercase">
                  Storen GmbH
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
                    "px-4 py-2 text-dark font-medium hover:text-primary transition-colors relative",
                    "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all",
                    "hover:after:w-full"
                  )}
                >
                  <span className="flex items-center gap-1">
                    {item.name}
                    {item.children && (
                      <svg
                        className={cn(
                          "w-4 h-4 transition-transform",
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

                {/* Dropdown */}
                {item.children && (
                  <div
                    className={cn(
                      "absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                    )}
                  >
                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[220px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2.5 text-dark hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {child.name}
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
              className="flex items-center gap-2 text-dark hover:text-primary transition-colors"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
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
              <span className="font-semibold">{companyInfo.contact.phone}</span>
            </a>
            <Link href="/kontakt" className="btn-primary">
              Offerte anfordern
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-dark hover:text-primary transition-colors"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-[500px] mt-4" : "max-h-0"
          )}
        >
          <nav className="flex flex-col gap-1 pb-4">
            {navigation.main.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => !item.children && setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-dark font-medium hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-6">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-2 text-dark/70 hover:text-primary transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 px-4">
              <a
                href={companyInfo.contact.phoneLink}
                className="btn-secondary w-full justify-center mb-3"
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
              <Link
                href="/kontakt"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary w-full justify-center"
              >
                Offerte anfordern
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
