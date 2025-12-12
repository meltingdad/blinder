export default function ServicesLoading() {
  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero Skeleton */}
      <div className="bg-dark pt-32 pb-16">
        <div className="container-custom">
          <div className="max-w-2xl space-y-4">
            <div className="h-8 w-32 bg-white/10 rounded-full animate-pulse" />
            <div className="h-12 w-3/4 bg-white/10 rounded-lg animate-pulse" />
            <div className="h-5 w-full bg-white/5 rounded animate-pulse" />
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="h-8 w-2/3 bg-dark/10 rounded-lg animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-dark/5 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-dark/5 rounded animate-pulse" />
                <div className="h-4 w-4/5 bg-dark/5 rounded animate-pulse" />
              </div>
            </div>

            {/* Benefits skeleton */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-20 bg-cream rounded-lg animate-pulse"
                  style={{ animationDelay: `${i * 100}ms` }}
                />
              ))}
            </div>
          </div>

          {/* Sidebar skeleton */}
          <div className="space-y-6">
            <div className="h-48 bg-dark rounded-2xl animate-pulse" />
            <div className="h-32 bg-cream rounded-2xl animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
