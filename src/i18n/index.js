import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import kkJSON from './locales/kk.json';
import enJSON from './locales/ru.json';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru',
        supportedLngs: ['ru', 'kk'],
        detection: {
            order: ['cookie', 'localStorage', 'htmlTag', 'navigator'],
            caches: ['cookie', 'localStorage'],
            cookieDomain: 'hackload.kz',
            cookieMinutes: 43200 // 30 days
        },
        resources: {
            kk: { translations: kkJSON },
            ru: { translations: enJSON },
        },
        ns: ['translations'],
        defaultNS: 'translations',
        react: {
            useSuspense: true,
        },
    });

export default i18n;