import ServiceCard from "./ServiceCard";
import servicesData from "@/data/services.json";

interface ServicesGridProps {
  limit?: number;
  variant?: "default" | "featured" | "compact";
  showTitle?: boolean;
  title?: string;
  subtitle?: string;
}

// Service icons mapping
const serviceIcons: Record<string, React.ReactNode> = {
  lamellenstoren: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
    >
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="15" x2="21" y2="15" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  rollladen: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
    >
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M3 7h18M3 11h18M3 15h18" />
      <circle cx="12" cy="19" r="1.5" />
    </svg>
  ),
  markisen: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
    >
      <path d="M3 7l9 4 9-4" />
      <path d="M3 7v10l9 4 9-4V7" />
      <line x1="12" y1="11" x2="12" y2="21" />
    </svg>
  ),
  sonnenschirme: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
    >
      <path d="M12 2a9 9 0 019 9H3a9 9 0 019-9z" />
      <line x1="12" y1="11" x2="12" y2="22" />
      <line x1="8" y1="22" x2="16" y2="22" />
    </svg>
  ),
  insektenschutzgitter: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
    >
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
      <line x1="9" y1="3" x2="9" y2="21" />
      <line x1="15" y1="3" x2="15" y2="21" />
    </svg>
  ),
};

export default function ServicesGrid({
  limit,
  variant = "default",
  showTitle = true,
  title = "Unsere Angebote",
  subtitle = "Hochwertige Storen und Sonnenschutz für Ihr Zuhause",
}: ServicesGridProps) {
  const services = limit
    ? servicesData.services.slice(0, limit)
    : servicesData.services;

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="heading-lg text-dark mb-4">{title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          </div>
        )}

        <div
          className={`grid gap-8 ${
            variant === "compact"
              ? "grid-cols-1 md:grid-cols-2"
              : variant === "featured"
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.name}
              description={service.shortDescription}
              href={`/angebote/${service.slug}`}
              icon={serviceIcons[service.id]}
              features={service.benefits.slice(0, 3)}
              variant={variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
