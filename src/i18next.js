import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/locales/en.json";
import ja from "@/locales/ja.json";
import ru from "@/locales/ru.json";
import { detectLanguage, getSavedLanguage } from "@/lib/language";

const saved = getSavedLanguage();

i18n.use(initReactI18next).init({
  lng: saved ?? "en",
  fallbackLng: "en",
  supportedLngs: ["en", "ja", "ru"],
  returnObjects: true,
  interpolation: { escapeValue: false },
  resources: {
    en: { translation: en },
    ja: { translation: ja },
    ru: { translation: ru },
  },
});

i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
});
document.documentElement.lang = i18n.language;

// A saved choice always wins. Otherwise look up the country, and only apply
// the result if the visitor hasn't picked a language in the meantime.
if (!saved) {
  detectLanguage().then((lang) => {
    if (!getSavedLanguage() && lang !== i18n.language) i18n.changeLanguage(lang);
  });
}

export default i18n;
