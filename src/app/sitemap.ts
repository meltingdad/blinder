import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import servicesData from "@/data/services.json";
import locationsData from "@/data/locations.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/angebote`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/showroom`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/occasionen`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/regionen`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/agb`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = servicesData.services.map(
    (service) => ({
      url: `${baseUrl}/angebote/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  // Region pages
  const regionPages: MetadataRoute.Sitemap = locationsData.locations.map(
    (location) => ({
      url: `${baseUrl}/regionen/${location.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  // Service + Location combination pages (for local SEO)
  const serviceLocationPages: MetadataRoute.Sitemap = [];
  for (const service of servicesData.services) {
    for (const location of locationsData.locations) {
      serviceLocationPages.push({
        url: `${baseUrl}/${service.slug}-${location.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.75,
      });
    }
  }

  return [...staticPages, ...servicePages, ...regionPages, ...serviceLocationPages];
}
