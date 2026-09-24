import { useTranslation } from "react-i18next";

export function ExperienceSection() {
  const { t } = useTranslation();
  const experience = t("experience", { returnObjects: true });

  return (
    <section id="experience" className="section">
      <div className="kicker mb-3.5">{t("ui.expKicker")}</div>
      <h2 className="h-section mb-4 max-w-[22ch]">
        {t("ui.expTitle")}
        <span className="text-accent">{t("ui.expTitle2")}</span>
      </h2>
      <p className="m-0 mb-10 max-w-[62ch] text-base leading-[1.7] opacity-75">{t("ui.expIntro")}</p>

      <div className="flex flex-col border-b border-line">
        {experience.map((e) => (
          <div
            key={`${e.company}-${e.period}`}
            className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-5 border-t border-line py-[26px]"
          >
            <span className="font-mono text-xs tracking-[.04em] opacity-70">{e.period}</span>
            <div className="flex flex-col gap-1.5">
              <span className="text-lg font-medium">{e.role}</span>
              <span className="text-accent text-[15px]">{e.company}</span>
            </div>
            <p className="m-0 text-[15px] leading-[1.65] opacity-75">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
