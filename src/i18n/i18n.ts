import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import ruTranslations from './locales/ru.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    ru: { translation: ruTranslations },
  },
  lng: 'ru', // язык по умолчанию
  fallbackLng: 'ru', // если перевод не найден
  interpolation: {
    escapeValue: false, // экранирование HTML не нужно
  },
});

export default i18n;
