import Link from "next/link";
import { companyInfo } from "@/lib/config";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  showPhone?: boolean;
  variant?: "default" | "dark" | "gradient";
}

export default function CTASection({
  title = "Bereit für Ihre neue Storenanlage?",
  description = "Kontaktieren Sie uns für eine kostenlose Beratung und ein unverbindliches Angebot.",
  primaryCta = { text: "Offerte anfordern", href: "/kontakt" },
  showPhone = true,
  variant = "default",
}: CTASectionProps) {
  const bgClasses = {
    default: "bg-primary",
    dark: "bg-dark",
    gradient: "bg-gradient-to-r from-dark via-dark-light to-dark",
  };

  const textClasses = {
    default: "text-dark",
    dark: "text-white",
    gradient: "text-white",
  };

  const buttonClasses = {
    default: "bg-dark text-white hover:bg-dark-light",
    dark: "bg-primary text-dark hover:bg-primary-dark hover:text-white",
    gradient: "bg-primary text-dark hover:bg-primary-dark hover:text-white",
  };

  return (
    <section className={`${bgClasses[variant]} py-16 relative overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {variant === "gradient" && (
          <>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
          </>
        )}
        {variant === "default" && (
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        )}
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className={`heading-md ${textClasses[variant]} mb-4`}>{title}</h2>
            <p
              className={`text-lg ${variant === "default" ? "text-dark/80" : "text-white/80"} max-w-xl`}
            >
              {description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href={primaryCta.href}
              className={`${buttonClasses[variant]} font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center gap-2`}
            >
              {primaryCta.text}
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            {showPhone && (
              <a
                href={companyInfo.contact.phoneLink}
                className={`${variant === "default" ? "text-dark border-dark hover:bg-dark hover:text-white" : "text-white border-white hover:bg-white hover:text-dark"} border-2 font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center gap-2`}
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
