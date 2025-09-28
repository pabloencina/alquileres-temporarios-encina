import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import spanishTranslation from "./es.json";
import englishTranslation from "./en.json";

const resources = {
  en: { translation: englishTranslation },
  es: { translation: spanishTranslation },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es", // idioma por defecto
  fallbackLng: "en", // idioma de respaldo
  interpolation: {
    escapeValue: false, // React ya escapa los valores
  },
});

export default i18n;
