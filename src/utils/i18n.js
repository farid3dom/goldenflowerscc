import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
   .use(initReactI18next)
   .use(Backend)
   .use(LanguageDetector)
   .init({
      fallbackLng: 'ru',
      debug: true,
      detection: {
         // Custom function to modify detected language
         order: ['localStorage'],
         caches: ['localStorage'],
         lookupLocalStorage: 'i18nextLng',

         // Override the language detection process to return only the language code
         checkWhitelist: true,
         lookup: function (options) {
            const detected = i18n.services.languageDetector.detect();
            const languageCode = detected.split('-')[0]; // Extract language code only
            return languageCode;
         }
      },
      whitelist: ['en', 'ru'],
      // resources
   })


export default i18n