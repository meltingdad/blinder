export default function Loading() {
  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero Skeleton */}
      <div className="bg-dark h-[60vh] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-light/50 to-dark/50" />
        <div className="container-custom h-full flex items-center">
          <div className="max-w-2xl space-y-6">
            {/* Badge skeleton */}
            <div className="h-8 w-48 bg-white/10 rounded-full animate-pulse" />
            {/* Title skeleton */}
            <div className="space-y-3">
              <div className="h-12 w-full bg-white/10 rounded-lg animate-pulse" />
              <div className="h-12 w-3/4 bg-white/10 rounded-lg animate-pulse" />
            </div>
            {/* Description skeleton */}
            <div className="space-y-2">
              <div className="h-5 w-full bg-white/5 rounded animate-pulse" />
              <div className="h-5 w-5/6 bg-white/5 rounded animate-pulse" />
            </div>
            {/* Button skeletons */}
            <div className="flex gap-4 pt-4">
              <div className="h-14 w-40 bg-primary/30 rounded-lg animate-pulse" />
              <div className="h-14 w-40 bg-white/10 rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="container-custom py-16">
        {/* Section title skeleton */}
        <div className="text-center mb-12">
          <div className="h-10 w-64 bg-dark/10 rounded-lg mx-auto mb-4 animate-pulse" />
          <div className="h-5 w-96 max-w-full bg-dark/5 rounded mx-auto animate-pulse" />
        </div>

        {/* Cards grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="h-48 bg-dark/10 animate-pulse" />
              <div className="p-6 space-y-4">
                <div className="h-6 w-3/4 bg-dark/10 rounded animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-dark/5 rounded animate-pulse" />
                  <div className="h-4 w-5/6 bg-dark/5 rounded animate-pulse" />
                </div>
                <div className="flex gap-2 pt-2">
                  <div className="h-8 w-20 bg-primary/20 rounded animate-pulse" />
                  <div className="h-8 w-20 bg-primary/20 rounded animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
