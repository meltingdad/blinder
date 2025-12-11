// Image configuration for Swiss Quality Storen website
// All images extracted from the current website

export const images = {
  // Logo
  logo: "/images/logo/logo-swiss-quality-storen.png",

  // Hero images
  hero: {
    main: "/images/hero-main.webp",
    main2: "/images/hero-main-2.webp",
    svg: "/images/hero-svg.webp",
  },

  // Service images
  services: {
    lamellenstoren: {
      main: "/images/services/lamellenstoren-main.webp",
      as800: "/images/services/lamellenstoren-as800.jpg",
      as900: "/images/services/lamellenstoren-as900.jpg",
      as831: "/images/services/lamellenstoren-as831.jpg",
      av750: "/images/services/lamellenstoren-av750.jpg",
      av900700: "/images/services/lamellenstoren-av900-700.jpg",
      av940740: "/images/services/lamellenstoren-av940-740.jpg",
    },
    rollladen: {
      main: "/images/services/rollladen-main.jpg",
      classic30: "/images/services/rollladen-classic30.jpg",
      ec37: "/images/services/rollladen-ec37.jpg",
      econosafe37: "/images/services/rollladen-econosafe37.jpg",
      maxi55: "/images/services/rollladen-maxi55.jpg",
      maxisafe55: "/images/services/rollladen-maxisafe55.jpg",
      rufalux37: "/images/services/rollladen-rufalux37.jpg",
    },
    markisen: {
      main: "/images/services/markisen-main.jpg",
    },
    sonnenschirme: {
      main: "/images/services/sonnenschirme-main.jpg",
    },
    insektenschutzgitter: {
      main: "/images/services/insektenschutzgitter-main.jpg",
    },
    general: {
      service02: "/images/services/service-02.jpg",
      service03: "/images/services/service-03.jpg",
      service04: "/images/services/service-04.jpg",
      occasionen: "/images/services/occasionen-main.jpg",
    },
  },

  // Team images
  team: {
    ruan: "/images/team/ruan.jpg",
    ruanWorking: "/images/team/ruan-working.jpg",
    geza: "/images/team/geza.png",
    reto: "/images/team/reto.png",
    foxie: "/images/team/foxie.jpg",
    lari: "/images/team/lari.jpg",
    placeholder: "/images/team/placeholder.jpg",
  },

  // Partner logos
  partners: {
    glatz: "/images/partners/glatz.webp",
    somfy: "/images/partners/somfy.webp",
    storosol: "/images/partners/storosol.webp",
    velux: "/images/partners/velux.webp",
    alurex: "/images/partners/alurex.webp",
    rufalex: "/images/partners/rufalex.webp",
  },

  // Showroom/CUBE images
  showroom: {
    main: "/images/showroom/cube-main.jpeg",
    gallery: [
      "/images/showroom/showroom-1.jpg",
      "/images/showroom/showroom-2.jpg",
      "/images/showroom/showroom-3.jpg",
      "/images/showroom/showroom-4.jpg",
      "/images/showroom/showroom-5.jpg",
      "/images/showroom/showroom-6.jpg",
    ],
  },
};

// Helper function to get service image by slug
export function getServiceImage(slug: string): string {
  const serviceImages: Record<string, string> = {
    lamellenstoren: images.services.lamellenstoren.main,
    rollladen: images.services.rollladen.main,
    markisen: images.services.markisen.main,
    sonnenschirme: images.services.sonnenschirme.main,
    insektenschutzgitter: images.services.insektenschutzgitter.main,
  };
  return serviceImages[slug] || images.services.general.service02;
}

// Helper function to get service gallery images
export function getServiceGallery(slug: string): string[] {
  switch (slug) {
    case "lamellenstoren":
      return [
        images.services.lamellenstoren.main,
        images.services.lamellenstoren.as800,
        images.services.lamellenstoren.as900,
        images.services.lamellenstoren.as831,
        images.services.lamellenstoren.av750,
      ];
    case "rollladen":
      return [
        images.services.rollladen.main,
        images.services.rollladen.classic30,
        images.services.rollladen.ec37,
        images.services.rollladen.maxi55,
        images.services.rollladen.rufalux37,
      ];
    case "markisen":
      return [images.services.markisen.main, images.services.general.service02];
    case "sonnenschirme":
      return [
        images.services.sonnenschirme.main,
        images.services.general.service03,
      ];
    case "insektenschutzgitter":
      return [
        images.services.insektenschutzgitter.main,
        images.services.general.service04,
      ];
    default:
      return [images.services.general.service02];
  }
}

export default images;
