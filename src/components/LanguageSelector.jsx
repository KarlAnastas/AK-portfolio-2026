import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "English" },
  { code: "ja", label: "日本語" },
  { code: "ru", label: "Русский" },
];

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const currentLang =
    languages.find(l => i18n.language.startsWith(l.code)) || languages[0];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="glass rounded-full text-sm text-muted-foreground px-6 py-3 flex items-center gap-2"
      >
        {currentLang.label}
        <svg
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="glass absolute right-0 z-10 md:left-0 mt-2 w-40 rounded-md text-muted-foreground">
          <ul className="py-1">
            {languages.map((lng) => (
              <li key={lng.code}>
                <button
                  onClick={() => changeLanguage(lng.code)}
                  className={`px-4 py-2 text-sm text-muted-foreground hover:text-foreground w-full hover:bg-surface animate-fade-in
                    ${
                      i18n.language.startsWith(lng.code)
                        ? "bg-secondary font-medium text-primary"
                        : "text-muted-foreground"
                    }`}
                >
                  {lng.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
