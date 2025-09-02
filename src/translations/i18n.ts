import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationUa from './locales/ua/translation.json';
import translationEn from './locales/en/translation.json';
import translationNl from './locales/nl/translation.json';

const resources = {
  ua: {
    translation: translationUa,
  },
  en: {
    translation: translationEn,
  },
  nl: {
    translation: translationNl,
  },
};

const path = window.location.pathname;
let pathLang: 'ua' | 'en' | 'nl' = 'nl';

if (path.startsWith('/ua')) {
  pathLang = 'ua';
} else if (path.startsWith('/en')) {
  pathLang = 'en';
}

i18n.use(initReactI18next).init({
  resources,
  lng: pathLang,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
