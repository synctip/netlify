// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      title: "Hi! What's your phone?",
    },
  },
  he: {
    translation: {
      title: "אהלן! מה מספר הנייד?",
    },
  },
};

i18n.use(initReactI18next).init({
  lng: "en",
  debug: true,
  resources,
});

export default i18n;
