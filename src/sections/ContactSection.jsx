import { useTranslation } from "react-i18next";
import { EMAIL, LINKEDIN_URL, BEHANCE_URL } from "@/data/links";

export function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="mx-auto max-w-[1320px] border-t border-line px-[5vw] pb-[8vh] pt-[11vh]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-start gap-[52px]">
        <div className="flex flex-col gap-[22px]">
          <h2 className="m-0 max-w-[18ch] font-display text-[clamp(32px,5.2vw,76px)] font-semibold leading-[1.02] tracking-[-.04em]">
            {t("ui.contactH")}
          </h2>
          <p className="m-0 max-w-[48ch] text-[17px] leading-[1.65] opacity-75">{t("ui.contactP")}</p>
          <div className="flex flex-wrap gap-3 pt-1">
            <a href={`mailto:${EMAIL}`} className="btn btn-primary btn-lift">
              {t("ui.contactBtn")}
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener" className="btn btn-secondary">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-px overflow-hidden rounded-[20px] border border-line bg-line">
          <div className="flex flex-wrap justify-between gap-3 bg-card px-[22px] py-5">
            <span className="mono-label">{t("ui.labelLocation")}</span>
            <span className="text-[15px]">{t("ui.location")}</span>
          </div>
          <div className="flex flex-wrap justify-between gap-3 bg-card px-[22px] py-5">
            <span className="mono-label">{t("ui.labelBehance")}</span>
            <a href={BEHANCE_URL} target="_blank" rel="noopener" className="text-[15px]">
              behance.net/karlovaana
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
