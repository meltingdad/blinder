export const siteConfig = {
  name: "Swiss Quality Storen GmbH",
  shortName: "Swiss Quality Storen",
  description: "Ihr Spezialist für Lamellenstoren, Rollladen, Markisen und Sonnenschutz in Bülach und der Region Zürich. Schweizer Qualität, professionelle Montage, faire Preise.",
  url: "https://www.swissquality-storen.ch",
  ogImage: "https://www.swissquality-storen.ch/og-image.jpg",
  language: "de-CH",
  locale: "de_CH",
};

export const companyInfo = {
  name: "Swiss Quality Storen GmbH",
  address: {
    street: "Schlosserstrasse 4",
    city: "Bülach",
    plz: "8180",
    country: "Switzerland",
    countryCode: "CH",
  },
  contact: {
    phone: "062 558 98 18",
    phoneFormatted: "+41 62 558 98 18",
    phoneLink: "tel:+41625589818",
    email: "info@swissquality-storen.ch",
    emailLink: "mailto:info@swissquality-storen.ch",
  },
  openingHours: {
    weekdays: "Mo - Fr: 7:00 - 12:00, 13:00 - 17:00",
    weekend: "Sa - So: Geschlossen",
  },
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
  logo: {
    light: "/images/logo-light.png",
    dark: "/images/logo-dark.png",
    favicon: "/favicon.ico",
  },
};

export const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Über uns", href: "/ueber-uns" },
    {
      name: "Angebote",
      href: "/angebote",
      children: [
        { name: "Lamellenstoren", href: "/angebote/lamellenstoren" },
        { name: "Rollladen", href: "/angebote/rollladen" },
        { name: "Markisen", href: "/angebote/markisen" },
        { name: "Sonnenschirme", href: "/angebote/sonnenschirme" },
        { name: "Insektenschutzgitter", href: "/angebote/insektenschutzgitter" },
      ],
    },
    { name: "Showroom", href: "/showroom" },
    { name: "Occasionen", href: "/occasionen" },
    { name: "Regionen", href: "/regionen" },
    { name: "Kontakt", href: "/kontakt" },
  ],
  footer: [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
    { name: "AGB", href: "/agb" },
  ],
};

export const seoDefaults = {
  titleTemplate: "%s | Swiss Quality Storen GmbH Bülach",
  defaultTitle: "Swiss Quality Storen GmbH - Ihr Storen Spezialist in Bülach",
  description: "Hochwertige Lamellenstoren, Rollladen, Markisen und Sonnenschutz in Bülach und Umgebung. Schweizer Qualität, professionelle Beratung und Montage.",
  keywords: [
    "storen bülach",
    "lamellenstoren zürich",
    "rollladen schweiz",
    "markisen bülach",
    "sonnenschutz",
    "insektenschutzgitter",
    "raffstoren",
    "aussenstoren",
    "storen montage",
    "swiss quality storen",
  ],
};
