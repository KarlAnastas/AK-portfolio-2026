import { useTranslation } from "react-i18next";
import { saveLanguage } from "@/lib/language";

export function useLanguage() {
  const { i18n } = useTranslation();
  const setLanguage = (lang) => {
    saveLanguage(lang);
    i18n.changeLanguage(lang);
  };
  return { language: i18n.resolvedLanguage, setLanguage };
}
