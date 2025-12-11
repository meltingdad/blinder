import Link from "next/link";
import locationsData from "@/data/locations.json";
import { getCantonAbbreviation } from "@/lib/utils";

interface RegionsGridProps {
  limit?: number;
  showTitle?: boolean;
  title?: string;
  subtitle?: string;
  groupByCanton?: boolean;
}

export default function RegionsGrid({
  limit,
  showTitle = true,
  title = "Unsere Serviceregionen",
  subtitle = "Wir sind in der gesamten Region Zürich und Umgebung für Sie da",
  groupByCanton = false,
}: RegionsGridProps) {
  const locations = limit
    ? locationsData.locations.slice(0, limit)
    : locationsData.locations;

  // Group locations by canton if requested
  const groupedLocations = groupByCanton
    ? locations.reduce(
        (acc, location) => {
          const canton = location.canton;
          if (!acc[canton]) {
            acc[canton] = [];
          }
          acc[canton].push(location);
          return acc;
        },
        {} as Record<string, typeof locations>
      )
    : null;

  if (groupByCanton && groupedLocations) {
    return (
      <section className="section-padding">
        <div className="container-custom">
          {showTitle && (
            <div className="text-center mb-12">
              <h2 className="heading-lg text-dark mb-4">{title}</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
            </div>
          )}

          <div className="space-y-12">
            {Object.entries(groupedLocations).map(([canton, locs]) => (
              <div key={canton}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-sm font-bold text-white bg-primary px-3 py-1 rounded">
                    {getCantonAbbreviation(canton)}
                  </span>
                  <h3 className="text-2xl font-bold text-dark">Kanton {canton}</h3>
                  <span className="text-gray-500">({locs.length} Orte)</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {locs.map((location) => (
                    <Link
                      key={location.slug}
                      href={`/regionen/${location.slug}`}
                      className="group block p-4 bg-white rounded-lg border border-gray-100 hover:border-primary hover:shadow-lg transition-all duration-200"
                    >
                      <span className="text-dark group-hover:text-primary font-medium transition-colors">
                        {location.name}
                      </span>
                      <span className="block text-xs text-gray-500 mt-1">
                        {location.plz}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="heading-lg text-dark mb-4">{title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {locations.map((location) => (
            <Link
              key={location.slug}
              href={`/regionen/${location.slug}`}
              className="group block p-4 bg-white rounded-xl border border-gray-100 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 mb-2">
                <svg
                  className="w-4 h-4 text-primary"
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
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                  {getCantonAbbreviation(location.canton)}
                </span>
              </div>
              <span className="text-dark group-hover:text-primary font-semibold transition-colors block">
                {location.name}
              </span>
              <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                <span>{location.plz}</span>
                <span>{location.distance} km</span>
              </div>
            </Link>
          ))}
        </div>

        {limit && locations.length >= limit && (
          <div className="text-center mt-10">
            <Link href="/regionen" className="btn-primary">
              Alle Regionen anzeigen
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
          </div>
        )}
      </div>
    </section>
  );
}
