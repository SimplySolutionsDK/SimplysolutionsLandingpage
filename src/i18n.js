import i18n from 'i18next';
    import { initReactI18next } from 'react-i18next';

    import enTranslations from './locales/en.json';
    import daTranslations from './locales/da.json';
    import deTranslations from './locales/de.json';
    import esTranslations from './locales/es.json';

    const resources = {
      en: { translation: enTranslations },
      da: { translation: daTranslations },
      de: { translation: deTranslations },
      es: { translation: esTranslations },
    };

    i18n
      .use(initReactI18next)
      .init({
        resources,
        lng: 'da', // default language
        fallbackLng: 'da',
        interpolation: {
          escapeValue: false,
        },
        supportedLngs: ['en', 'da', 'de', 'es'],
        detection: {
          order: ['localStorage', 'navigator'],
          caches: ['localStorage'],
        },
      });

    export default i18n;
