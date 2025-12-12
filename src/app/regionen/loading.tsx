export default function RegionsLoading() {
  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero Skeleton */}
      <div className="bg-dark pt-32 pb-16">
        <div className="container-custom">
          <div className="max-w-2xl space-y-4">
            <div className="h-8 w-40 bg-white/10 rounded-full animate-pulse" />
            <div className="h-12 w-2/3 bg-white/10 rounded-lg animate-pulse" />
            <div className="h-5 w-full bg-white/5 rounded animate-pulse" />
          </div>
        </div>
      </div>

      {/* Regions Grid Skeleton */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={i}
              className="h-24 bg-white rounded-xl border border-gray-100 animate-pulse"
              style={{ animationDelay: `${(i % 6) * 50}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
