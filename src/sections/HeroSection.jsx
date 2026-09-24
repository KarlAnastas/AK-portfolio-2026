import { useTranslation } from "react-i18next";
import { useSectionLink } from "@/hooks/useSectionLink";
import { CV_URL } from "@/data/links";

export function HeroSection() {
  const { t } = useTranslation();
  const sectionLink = useSectionLink();

  return (
    <section
      id="top"
      className="mx-auto flex max-w-[1320px] flex-col gap-[26px] px-[5vw] pb-[9vh] pt-[13vh]"
    >
      <div className="flex items-center gap-[9px] self-start rounded-full border border-line bg-chip px-3.5 py-[7px] font-mono text-[11px] uppercase tracking-[.1em] opacity-85">
        <span className="size-[7px] animate-blink-fast rounded-full bg-accent" />
        {t("ui.badge")}
      </div>

      <h1 className="m-0 max-w-[20ch] font-display text-[clamp(40px,7.4vw,116px)] font-semibold leading-[.96] tracking-[-.045em]">
        {t("ui.h1a")}
        <span className="text-accent">{t("ui.h1b")}</span>
        {t("ui.h1c")}
      </h1>

      <p className="m-0 max-w-[56ch] text-[clamp(17px,1.6vw,21px)] font-medium leading-[1.6]">
        {t("ui.lede")}
      </p>
      <p className="m-0 max-w-[60ch] text-[clamp(15px,1.35vw,18px)] leading-[1.7] opacity-75">
        {t("ui.lede2")}
      </p>

      <div className="flex flex-wrap gap-3 pt-1.5">
        <a href="#work" onClick={sectionLink("work")} className="btn btn-primary btn-lift">
          {t("ui.ctaWork")} →
        </a>
        <a href={CV_URL} target="_blank" rel="noopener" className="btn btn-secondary">
          {t("ui.downloadCV")} ↓
        </a>
      </div>

      <div className="flex flex-wrap gap-[34px] pt-[34px] font-mono text-[11px] uppercase tracking-[.1em] opacity-[.68]">
        <span>{t("ui.stat1")}</span>
        <span>{t("ui.stat2")}</span>
        <span>{t("ui.stat3")}</span>
      </div>
    </section>
  );
}
