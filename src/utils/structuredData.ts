import { SITE_CONFIG, getAbsoluteUrl, getLanguageSpecific } from '../config/settings';

export const getHackathonStructuredData = (language: string) => {
  const isKazakh = language === 'kk';
  
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": isKazakh 
      ? `${SITE_CONFIG.eventName} - Жоғары жүктемелі жүйелер бойынша хакатон`
      : `${SITE_CONFIG.eventName} - Хакатон по высоконагруженным системам`,
    "description": isKazakh
      ? "Қазақстандағы алғашқы жоғары жүктемелі жүйелер бойынша хакатон. 100 000 сұратуды өңдей алатын билет қызметін жасаңыз."
      : "Первый в Казахстане хакатон, посвященный высоконагруженным системам. Создайте билетный сервис, способный обработать 100 000 запросов.",
    "startDate": SITE_CONFIG.eventDate.start,
    "endDate": SITE_CONFIG.eventDate.end,
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": SITE_CONFIG.venue.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": SITE_CONFIG.venue.address.street,
        "addressLocality": SITE_CONFIG.venue.address.city,
        "addressCountry": SITE_CONFIG.venue.address.country
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": SITE_CONFIG.organizer.name,
      "url": SITE_CONFIG.baseUrl
    },
    "url": SITE_CONFIG.baseUrl,
    "image": getAbsoluteUrl(SITE_CONFIG.ogImage),
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "KZT",
      "availability": "https://schema.org/InStock",
      "url": SITE_CONFIG.registrationUrl
    },
    "performer": {
      "@type": "Organization",
      "name": SITE_CONFIG.organizer.name
    },
    "inLanguage": [language === 'kk' ? 'kk-KZ' : 'ru-RU'],
    "keywords": getLanguageSpecific(SITE_CONFIG.defaultKeywords, language)
  };
};

export const getNewsArticleStructuredData = (
  title: string,
  description: string,
  publishedDate: string,
  url: string,
  language: string
) => {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": title,
    "description": description,
    "datePublished": publishedDate,
    "dateModified": publishedDate,
    "author": {
      "@type": "Organization",
      "name": SITE_CONFIG.organizer.name
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_CONFIG.eventName,
      "logo": {
        "@type": "ImageObject",
        "url": getAbsoluteUrl(SITE_CONFIG.ogImage)
      }
    },
    "url": getAbsoluteUrl(url),
    "mainEntityOfPage": getAbsoluteUrl(url),
    "inLanguage": language === 'kk' ? 'kk-KZ' : 'ru-RU'
  };
};

export const getTeamStructuredData = (language: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_CONFIG.organizer.name,
    "description": getLanguageSpecific(SITE_CONFIG.organizer.description, language),
    "url": SITE_CONFIG.baseUrl,
    "logo": getAbsoluteUrl(SITE_CONFIG.ogImage),
    "sameAs": [
      SITE_CONFIG.githubUrl
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": SITE_CONFIG.contactEmail
    }
  };
};

export const getResultsStructuredData = (language: string) => {
  const isKazakh = language === 'kk';
  
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": isKazakh ? `${SITE_CONFIG.eventName} нәтижелері` : `Результаты ${SITE_CONFIG.eventName}`,
    "description": isKazakh 
      ? `${SITE_CONFIG.eventName} хакатонының нәтижелері, қатысушы командалар және олардың шешімдері`
      : `Результаты хакатона ${SITE_CONFIG.eventName}, команды участников и их решения`,
    "url": getAbsoluteUrl("/results"),
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": SITE_CONFIG.eventName,
          "item": SITE_CONFIG.baseUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": isKazakh ? "Нәтижелер" : "Результаты",
          "item": getAbsoluteUrl("/results")
        }
      ]
    },
    "mainEntity": {
      "@type": "Competition",
      "name": SITE_CONFIG.eventName,
      "description": isKazakh
        ? "Жоғары жүктемелі жүйелер бойынша хакатон"
        : "Хакатон по высоконагруженным системам"
    }
  };
};