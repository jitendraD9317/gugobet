// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import translationEN from '../public/locales/en/translation.json';
import transalationHN from  '../public/locales/hi/translation.json';
import transalationBN from  '../public/locales/bn/translation.json'
const preferredLanguage = localStorage.getItem('preferredLanguage');
// Configure i18n
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      hi: {
        translation: transalationHN,
      },
      bn: {
        translation: transalationBN,
      },
    },
    
    lng: preferredLanguage||'en', // Default language
    fallbackLng:preferredLanguage|| 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
