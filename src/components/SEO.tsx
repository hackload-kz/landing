import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SITE_CONFIG, getAbsoluteUrl } from '../config/settings';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  structuredData
}) => {
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    const currentLang = i18n.language;
    
    // Set page title
    const pageTitle = title ? `${title} - ${SITE_CONFIG.eventName}` : `${SITE_CONFIG.eventName} - ${t("hero.tagline")}`;
    document.title = pageTitle;
    
    // Set meta description
    const metaDescription = description || t("hero.description");
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', metaDescription);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = metaDescription;
      document.head.appendChild(meta);
    }

    // Set keywords
    const setMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    if (keywords) {
      setMetaTag('keywords', keywords);
    }
    
    setMetaTag('author', SITE_CONFIG.organizer.name);
    setMetaTag('robots', 'index, follow');
    
    // Set language meta
    document.documentElement.lang = currentLang;
    setMetaTag('language', currentLang);

    // Set Open Graph meta tags
    const setOGMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const currentUrl = url ? getAbsoluteUrl(url) : window.location.href;
    const ogImage = image ? getAbsoluteUrl(image) : getAbsoluteUrl(SITE_CONFIG.ogImage);

    setOGMeta('og:title', pageTitle);
    setOGMeta('og:description', metaDescription);
    setOGMeta('og:type', type);
    setOGMeta('og:url', currentUrl);
    setOGMeta('og:site_name', SITE_CONFIG.eventName);
    setOGMeta('og:locale', currentLang === 'kk' ? 'kk_KZ' : 'ru_RU');
    setOGMeta('og:image', ogImage);
    setOGMeta('og:image:alt', pageTitle);
    setOGMeta('og:image:width', '1200');
    setOGMeta('og:image:height', '630');

    // Set Twitter Card meta tags
    const setTwitterMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    setTwitterMeta('twitter:card', 'summary_large_image');
    setTwitterMeta('twitter:title', pageTitle);
    setTwitterMeta('twitter:description', metaDescription);
    setTwitterMeta('twitter:image', ogImage);

    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', currentUrl);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', currentUrl);
      document.head.appendChild(canonical);
    }

    // Add structured data if provided
    if (structuredData) {
      let structuredScript = document.querySelector('script[type="application/ld+json"]');
      if (structuredScript) {
        structuredScript.textContent = JSON.stringify(structuredData);
      } else {
        structuredScript = document.createElement('script');
        structuredScript.type = 'application/ld+json';
        structuredScript.textContent = JSON.stringify(structuredData);
        document.head.appendChild(structuredScript);
      }
    }

    // Cleanup function
    return () => {
      if (canonical?.parentNode) {
        canonical.remove();
      }
    };
  }, [title, description, keywords, image, url, type, structuredData, t, i18n.language]);

  return null;
};

export default SEO;