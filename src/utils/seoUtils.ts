// SEO and Accessibility utility functions
export const generatePageTitle = (pageTitle?: string): string => {
  return pageTitle ? `${pageTitle} - HackLoad 2025` : 'HackLoad 2025';
};

export const sanitizeTitle = (title: string): string => {
  return title.replace(/<[^>]*>/g, '');
};

export const createBreadcrumbStructuredData = (breadcrumbs: Array<{name: string, item: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": `https://hackload.kz${breadcrumb.item}`
    }))
  };
};

export const addHrefLang = (languages: string[]) => {
  languages.forEach(lang => {
    const existing = document.querySelector(`link[hreflang="${lang}"]`);
    if (!existing) {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = `https://hackload.kz${window.location.pathname}`;
      document.head.appendChild(link);
    }
  });
};

export const optimizeImageForSEO = (imagePath: string, alt: string, width?: number, height?: number) => {
  return {
    src: imagePath,
    alt,
    width,
    height,
    loading: 'lazy' as const,
    decoding: 'async' as const
  };
};

export const createFAQStructuredData = (faqs: Array<{question: string, answer: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};