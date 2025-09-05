// Centralized configuration settings
export const SITE_CONFIG = {
  // Base URLs
  baseUrl: 'https://hackload.kz',
  registrationUrl: 'https://hub.hackload.kz',
  
  // Social and Contact
  telegramUrl: 'https://t.me/teamleads_kz',
  githubUrl: 'https://github.com/hackload-kz',
  contactEmail: 'hackload@belyaev.live',
  
  // SEO Assets
  ogImage: '/og-image.png',
  favicon: '/favicon.svg',
  
  // Event Details
  eventName: 'HackLoad 2025',
  eventDate: {
    start: '2025-08-24T09:00:00+06:00',
    end: '2025-08-24T21:00:00+06:00'
  },
  
  // Location
  venue: {
    name: 'SmartPoint',
    address: {
      street: 'Қабанбай батыр даңғылы 53',
      city: 'Алматы',
      country: 'KZ'
    }
  },
  
  // Organization
  organizer: {
    name: 'HackLoad Team',
    description: {
      ru: 'Команда организаторов хакатона по высоконагруженным системам',
      kk: 'Жоғары жүктемелі жүйелер бойынша хакатон ұйымдастырушы команда'
    }
  },
  
  // SEO Meta
  defaultKeywords: {
    ru: 'хакатон, высоконагруженные системы, Казахстан, билетный сервис, разработчики, программирование',
    kk: 'хакатон, жоғары жүктемелі жүйелер, Қазақстан, билет қызметі, әзірлеушілер, программалау',
    en: 'hackathon, high-load systems, Kazakhstan, ticketing service, developers, programming'
  }
};

// Helper functions
export const getAbsoluteUrl = (path: string): string => {
  return `${SITE_CONFIG.baseUrl}${path}`;
};

export const getLanguageSpecific = <T>(obj: {ru: T, kk: T}, language: string, fallback?: T): T => {
  if (language === 'kk' && obj.kk) return obj.kk;
  if (obj.ru) return obj.ru;
  return fallback || obj.ru;
};