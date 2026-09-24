import { useLanguage } from "@/hooks/useLanguage";

const OPTIONS = [
  ["en", "EN"],
  ["ja", "日本語"],
  ["ru", "RU"],
];

// Pill group in the desktop header; full-width buttons inside the mobile menu.
export function LanguageSwitch({ stacked = false, className = "" }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={
        stacked
          ? `flex gap-1.5 ${className}`
          : `flex items-center gap-0.5 rounded-full border border-line bg-chip p-[3px] ${className}`
      }
    >
      {OPTIONS.map(([lang, label]) => {
        const active = language === lang;
        return (
          <button
            key={lang}
            type="button"
            onClick={() => setLanguage(lang)}
            aria-pressed={active}
            lang={lang}
            className={`rounded-full font-mono ${
              stacked
                ? "flex-1 border border-line p-[11px] text-xs"
                : "border-0 px-[11px] py-[5px] text-[11px] tracking-[.06em]"
            } ${active ? "bg-accent text-white" : "bg-transparent text-ink"}`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
