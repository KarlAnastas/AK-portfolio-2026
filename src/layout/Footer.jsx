import { useTranslation } from "react-i18next";
import { EMAIL, LINKEDIN_URL, BEHANCE_URL } from "@/data/links";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-4 border-t border-line px-[5vw] py-[26px] font-mono text-[11px] uppercase tracking-[.08em] opacity-80">
      <span>{t("ui.footer")}</span>
      <div className="flex gap-5">
        <a href={LINKEDIN_URL} target="_blank" rel="noopener">
          LinkedIn
        </a>
        <a href={BEHANCE_URL} target="_blank" rel="noopener">
          Behance
        </a>
        <a href={`mailto:${EMAIL}`}>Email</a>
      </div>
    </footer>
  );
}
