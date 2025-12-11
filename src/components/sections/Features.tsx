interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeaturesProps {
  features: Feature[];
  title?: string;
  subtitle?: string;
  columns?: 2 | 3 | 4;
}

export default function Features({
  features,
  title,
  subtitle,
  columns = 3,
}: FeaturesProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="heading-md text-dark mb-4">{title}</h2>}
            {subtitle && (
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
            )}
          </div>
        )}

        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-8`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <div className="text-primary group-hover:text-dark transition-colors">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
