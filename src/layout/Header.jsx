import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/hooks/useTheme";
import { useSectionLink } from "@/hooks/useSectionLink";
import { LanguageSwitch } from "@/components/LanguageSwitch";

const BREAKPOINT = 780;
const NAV = [
  ["work", "ui.navWork"],
  ["about", "ui.navAbout"],
  ["experience", "ui.navExp"],
  ["skills", "ui.navSkills"],
];

const useIsNarrow = (onWiden) => {
  const query = `(max-width: ${BREAKPOINT - 0.02}px)`;
  const [narrow, setNarrow] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => {
      setNarrow(mq.matches);
      if (!mq.matches) onWiden();
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query, onWiden]);
  return narrow;
};

export function Header() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const sectionLink = useSectionLink();
  const [menuOpen, setMenuOpen] = useState(false);
  // Close the menu when the window grows past the breakpoint.
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const narrow = useIsNarrow(closeMenu);

  const goHome = () => {
    setMenuOpen(false);
    navigate("/");
    window.scrollTo(0, 0);
  };
  const menuLink = (id) => (e) => {
    setMenuOpen(false);
    sectionLink(id)(e);
  };
  const themeLabel = theme === "dark" ? t("ui.themeDark") : t("ui.themeLight");

  return (
    <>
      <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-line bg-header px-[5vw] py-3.5 backdrop-blur-[16px]">
        <button
          type="button"
          onClick={goHome}
          className="flex items-center gap-2.5 border-0 bg-transparent p-0 font-display text-[17px] font-bold tracking-[-0.02em] text-inherit"
        >
          <span className="size-[9px] animate-blink rounded-full bg-accent" />
          {t("ui.name")}
        </button>

        {narrow ? (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={themeLabel}
              className="flex size-[38px] items-center justify-center rounded-full border border-line bg-transparent"
            >
              <span className="size-[9px] rounded-full bg-accent" />
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Menu"
              aria-expanded={menuOpen}
              className={`flex size-[38px] flex-col items-center justify-center gap-1 rounded-full border border-line ${
                menuOpen ? "bg-accent" : "bg-transparent"
              }`}
            >
              <span className={`h-[1.5px] w-[15px] ${menuOpen ? "bg-white" : "bg-ink"}`} />
              <span className={`h-[1.5px] w-[15px] ${menuOpen ? "bg-white" : "bg-ink"}`} />
            </button>
          </div>
        ) : (
          <nav className="flex flex-wrap items-center justify-end gap-0.5">
            {NAV.map(([id, key]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={sectionLink(id)}
                className="rounded-full px-[13px] py-2 text-sm opacity-[.72] hover:bg-accent-tint hover:opacity-100"
              >
                {t(key)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={sectionLink("contact")}
              className="btn-primary ml-2 rounded-full px-4 py-[9px] text-sm font-medium"
            >
              {t("ui.navCta")}
            </a>
            <LanguageSwitch className="ml-2" />
            <button
              type="button"
              onClick={toggleTheme}
              className="ml-1.5 flex h-9 items-center gap-[7px] rounded-full border border-line bg-transparent px-[13px] font-mono text-[10px] uppercase tracking-[.1em] text-inherit transition-colors hover:border-accent hover:bg-card hover:text-accent"
            >
              <span className="size-[7px] rounded-full bg-accent" />
              {themeLabel}
            </button>
          </nav>
        )}
      </header>

      {narrow && menuOpen && (
        <div className="sticky top-[66px] z-[29] flex flex-col gap-1 border-b border-line bg-card px-[5vw] pb-5 pt-4">
          {NAV.map(([id, key]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={menuLink(id)}
              className="border-b border-line px-1 py-3 text-lg"
            >
              {t(key)}
            </a>
          ))}
          <a
            href="#contact"
            onClick={menuLink("contact")}
            className="btn-primary mt-3 rounded-full p-3.5 text-center text-base font-medium"
          >
            {t("ui.navCta")}
          </a>
          <LanguageSwitch stacked className="mt-3.5" />
        </div>
      )}
    </>
  );
}
