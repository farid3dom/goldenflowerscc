import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// const resources = {
//    ru: {
//       translation: {
//          welcome: 'Zdrastuvayte'
//       }
//    },
//    en: {
//       translation: {
//          welcome: 'Hello'
//       }
//    }
// }

i18n
   .use(initReactI18next)
   .use(Backend)
   .use(LanguageDetector)
   .init({
      fallbackLng: 'en',
      debug: true,
      // resources
      interpolation: {
         escapeValue: false, // react already safes from xss
      },
   })

export default i18n