"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import locationsData from "@/data/locations.json";
import { getCantonAbbreviation, cn } from "@/lib/utils";

interface RegionsGridProps {
  limit?: number;
  showTitle?: boolean;
  title?: string;
  subtitle?: string;
  groupByCanton?: boolean;
  showSearch?: boolean;
  showCantonTabs?: boolean;
  compactView?: boolean;
}

export default function RegionsGrid({
  limit,
  showTitle = true,
  title = "Unsere Serviceregionen",
  subtitle = "Wir sind in der gesamten Region Zürich und Umgebung für Sie da",
  groupByCanton = false,
  showSearch = false,
  showCantonTabs = false,
  compactView = false,
}: RegionsGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCantons, setActiveCantons] = useState<string[]>([]);

  // Get all unique cantons with counts
  const cantonCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    locationsData.locations.forEach((loc) => {
      counts[loc.canton] = (counts[loc.canton] || 0) + 1;
    });
    return counts;
  }, []);

  const cantons = useMemo(() => Object.keys(cantonCounts).sort(), [cantonCounts]);

  // Filter locations based on search and canton filters
  const filteredLocations = useMemo(() => {
    let results = locationsData.locations;

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (loc) =>
          loc.name.toLowerCase().includes(query) ||
          loc.plz.toString().includes(query)
      );
    }

    // Apply canton filter
    if (activeCantons.length > 0) {
      results = results.filter((loc) => activeCantons.includes(loc.canton));
    }

    // Apply limit
    if (limit && !searchQuery && activeCantons.length === 0) {
      results = results.slice(0, limit);
    }

    return results;
  }, [searchQuery, activeCantons, limit]);

  const hasActiveFilters = searchQuery.trim() || activeCantons.length > 0;

  const toggleCanton = (canton: string) => {
    setActiveCantons((prev) =>
      prev.includes(canton)
        ? prev.filter((c) => c !== canton)
        : [...prev, canton]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setActiveCantons([]);
  };

  // Group locations by canton if requested
  const groupedLocations = groupByCanton
    ? filteredLocations.reduce(
        (acc, location) => {
          const canton = location.canton;
          if (!acc[canton]) {
            acc[canton] = [];
          }
          acc[canton].push(location);
          return acc;
        },
        {} as Record<string, typeof filteredLocations>
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

          {/* Search and filters */}
          {(showSearch || showCantonTabs) && (
            <div className="mb-8 space-y-4">
              {showSearch && (
                <div className="relative max-w-md mx-auto">
                  <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Ort oder PLZ suchen..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              )}

              {showCantonTabs && (
                <div className="flex flex-wrap justify-center gap-2">
                  {cantons.map((canton) => (
                    <button
                      key={canton}
                      onClick={() => toggleCanton(canton)}
                      className={cn(
                        "px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                        activeCantons.includes(canton)
                          ? "bg-primary text-dark"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      )}
                    >
                      {getCantonAbbreviation(canton)}{" "}
                      <span className="text-xs opacity-70">
                        ({cantonCounts[canton]})
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {hasActiveFilters && (
                <div className="flex items-center justify-center gap-4">
                  <span className="text-sm text-gray-600">
                    {filteredLocations.length} Ergebnisse
                  </span>
                  <button
                    onClick={clearFilters}
                    className="text-sm text-primary hover:text-primary-dark font-medium"
                  >
                    Filter zurücksetzen
                  </button>
                </div>
              )}
            </div>
          )}

          {filteredLocations.length === 0 ? (
            <div className="text-center py-12">
              <svg
                className="w-16 h-16 mx-auto text-gray-300 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
              </svg>
              <p className="text-gray-500">Keine Orte gefunden</p>
              <button
                onClick={clearFilters}
                className="mt-4 text-primary hover:text-primary-dark font-medium"
              >
                Filter zurücksetzen
              </button>
            </div>
          ) : (
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
          )}
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

        {/* Search and filters */}
        {(showSearch || showCantonTabs) && (
          <div className="mb-8 space-y-4">
            {showSearch && (
              <div className="relative max-w-md mx-auto">
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Ort oder PLZ suchen..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
            )}

            {showCantonTabs && (
              <div className="flex flex-wrap justify-center gap-2">
                {cantons.map((canton) => (
                  <button
                    key={canton}
                    onClick={() => toggleCanton(canton)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                      activeCantons.includes(canton)
                        ? "bg-primary text-dark"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    )}
                  >
                    {getCantonAbbreviation(canton)}{" "}
                    <span className="text-xs opacity-70">
                      ({cantonCounts[canton]})
                    </span>
                  </button>
                ))}
              </div>
            )}

            {hasActiveFilters && (
              <div className="flex items-center justify-center gap-4">
                <span className="text-sm text-gray-600">
                  {filteredLocations.length} Ergebnisse
                </span>
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary hover:text-primary-dark font-medium"
                >
                  Filter zurücksetzen
                </button>
              </div>
            )}
          </div>
        )}

        {filteredLocations.length === 0 ? (
          <div className="text-center py-12">
            <svg
              className="w-16 h-16 mx-auto text-gray-300 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
            </svg>
            <p className="text-gray-500">Keine Orte gefunden</p>
            <button
              onClick={clearFilters}
              className="mt-4 text-primary hover:text-primary-dark font-medium"
            >
              Filter zurücksetzen
            </button>
          </div>
        ) : (
          <>
            <div
              className={cn(
                "grid gap-4",
                compactView
                  ? "grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8"
                  : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
              )}
            >
              {filteredLocations.map((location, index) => (
                <Link
                  key={location.slug}
                  href={`/regionen/${location.slug}`}
                  className={cn(
                    "group block bg-white rounded-xl border border-gray-100 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
                    compactView ? "p-3" : "p-4",
                    "animate-fade-up opacity-0"
                  )}
                  style={{
                    animationDelay: `${Math.min(index * 30, 300)}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  {!compactView && (
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
                      {Number(location.distance) <= 10 && (
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                          Nähe
                        </span>
                      )}
                    </div>
                  )}
                  <span
                    className={cn(
                      "text-dark group-hover:text-primary font-semibold transition-colors block",
                      compactView && "text-sm"
                    )}
                  >
                    {location.name}
                  </span>
                  <div
                    className={cn(
                      "flex items-center justify-between mt-2 text-xs text-gray-500",
                      compactView && "mt-1"
                    )}
                  >
                    <span>{location.plz}</span>
                    {!compactView && <span>{location.distance} km</span>}
                  </div>
                </Link>
              ))}
            </div>

            {limit &&
              !hasActiveFilters &&
              locationsData.locations.length > limit && (
                <div className="text-center mt-10">
                  <Link href="/regionen" className="btn-primary">
                    Alle {locationsData.locations.length} Regionen anzeigen
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
          </>
        )}
      </div>
    </section>
  );
}
