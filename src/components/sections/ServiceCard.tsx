import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  features?: string[];
  imageUrl?: string;
  variant?: "default" | "featured" | "compact";
}

export default function ServiceCard({
  title,
  description,
  href,
  icon,
  features,
  imageUrl,
  variant = "default",
}: ServiceCardProps) {
  if (variant === "compact") {
    return (
      <Link
        href={href}
        className="group block p-6 bg-white rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
      >
        <div className="flex items-start gap-4">
          {icon && (
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <div className="text-primary group-hover:text-dark transition-colors">
                {icon}
              </div>
            </div>
          )}
          <div>
            <h3 className="text-lg font-semibold text-dark mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link
        href={href}
        className="group block relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
      >
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          {imageUrl ? (
            <div
              className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-primary/30" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />

          {/* Icon Badge */}
          {icon && (
            <div className="absolute top-4 left-4 w-14 h-14 bg-primary rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
              <div className="text-dark">{icon}</div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="relative p-6 -mt-16 z-10">
          <div className="bg-white rounded-xl p-6 shadow-lg group-hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

            {features && features.length > 0 && (
              <ul className="space-y-2 mb-4">
                {features.slice(0, 3).map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <svg
                      className="w-4 h-4 text-primary flex-shrink-0"
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

            <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
              Mehr erfahren
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
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Default variant
  return (
    <Link
      href={href}
      className="group block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      {/* Header with gradient */}
      <div className="relative h-48 bg-gradient-to-br from-dark via-dark-light to-primary/20">
        {imageUrl && (
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-50"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          {icon ? (
            <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <div className="text-dark">{icon}</div>
            </div>
          ) : (
            <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center">
              <svg
                className="w-10 h-10 text-dark"
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
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

        {features && features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.slice(0, 3).map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <svg
                  className="w-4 h-4 text-primary flex-shrink-0"
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
          <span className="text-primary font-semibold">Mehr erfahren</span>
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
            <svg
              className="w-5 h-5 text-primary group-hover:text-dark transition-colors"
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
