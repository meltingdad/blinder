import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .trim();
}

export function unslugify(slug: string): string {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace("ae", "ä")
    .replace("oe", "ö")
    .replace("ue", "ü");
}

export function formatPhoneNumber(phone: string): string {
  // Format Swiss phone number
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 8)} ${cleaned.slice(8)}`;
  }
  return phone;
}

export function generateMetaTitle(title: string, location?: string): string {
  if (location) {
    return `${title} in ${location} | Swiss Quality Storen GmbH`;
  }
  return `${title} | Swiss Quality Storen GmbH Bülach`;
}

export function generateMetaDescription(
  service: string,
  location?: string
): string {
  if (location) {
    return `Professionelle ${service} in ${location} und Umgebung. Schweizer Qualität, faire Preise, kompetente Beratung. Jetzt kostenlose Offerte anfordern!`;
  }
  return `Hochwertige ${service} von Swiss Quality Storen GmbH in Bülach. Professionelle Beratung und Montage. Kontaktieren Sie uns für eine kostenlose Offerte!`;
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}

export function getCantonAbbreviation(canton: string): string {
  const abbreviations: Record<string, string> = {
    "Zürich": "ZH",
    "Aargau": "AG",
    "Thurgau": "TG",
    "Schaffhausen": "SH",
    "St. Gallen": "SG",
    "Zug": "ZG",
    "Schwyz": "SZ",
    "Luzern": "LU",
  };
  return abbreviations[canton] || canton;
}
