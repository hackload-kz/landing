import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ukJSON from './locales/kk.json';
import enJSON from './locales/ru.json';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'kk',
        supportedLngs: ['kk', 'ru'],
        lookupCookie: 'lang',
        lookupLocalStorage: 'lang',
        resources: {
            kk: { translations: { ...ukJSON } },
            ru: { translations: { ...enJSON } },
        },
        ns: ['translations'],
        defaultNS: 'translations'
    });

i18n.languages = ['ru', 'kk'];
export default i18n;