import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationUa from './locales/ua/translation.json';
import translationEn from './locales/en/translation.json';

const resources = {
  ua: {
    translation: translationUa,
  },
  en: {
    translation: translationEn,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
