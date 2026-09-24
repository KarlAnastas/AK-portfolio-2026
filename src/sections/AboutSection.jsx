import { useTranslation } from "react-i18next";
import { useSectionLink } from "@/hooks/useSectionLink";
import { CV_URL, asset } from "@/data/links";

const HIGHLIGHTS = [
  ["ui.hl1", "ui.hl1b"],
  ["ui.hl2", "ui.hl2b"],
  ["ui.hl3", "ui.hl3b"],
];

export function AboutSection() {
  const { t } = useTranslation();
  const sectionLink = useSectionLink();

  return (
    <section id="about" className="section">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,290px),1fr))] items-start gap-[52px]">
        <div className="flex flex-col gap-4">
          <span className="kicker">{t("ui.aboutKicker")}</span>
          <div
            className="aspect-[4/5] max-w-[380px] rounded-[24px] border border-line bg-card bg-cover bg-[center_30%]"
            style={{ backgroundImage: `url(${asset("profile3.jpg")})` }}
          />
        </div>

        <div className="flex flex-col gap-[18px]">
          <h2 className="m-0 max-w-[26ch] font-display text-[clamp(25px,3.1vw,42px)] font-semibold leading-[1.12] tracking-[-.03em]">
            {t("ui.aboutSubtitle")}
            <span className="text-accent">{t("ui.aboutSubtitle2")}</span>
          </h2>
          <p className="m-0 max-w-[60ch] text-base leading-[1.75] opacity-75">{t("ui.aboutP1")}</p>
          <p className="m-0 max-w-[60ch] text-base leading-[1.75] opacity-75">{t("ui.aboutP2")}</p>
          <p className="m-0 max-w-[60ch] text-base leading-[1.75] opacity-75">{t("ui.aboutP3")}</p>
          <p className="quote mt-1.5 max-w-[60ch] text-[17px] leading-[1.65]">{t("ui.aboutMission")}</p>

          <div className="mt-2 grid grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))] gap-3.5">
            {HIGHLIGHTS.map(([title, body]) => (
              <div key={title} className="flex flex-col gap-2 rounded-[18px] border border-line bg-card p-5">
                <span className="text-[15px] font-medium">{t(title)}</span>
                <span className="text-sm leading-[1.6] opacity-[.72]">{t(body)}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2.5">
            <a href="#contact" onClick={sectionLink("contact")} className="btn btn-primary">
              {t("ui.aboutBtn1")}
            </a>
            <a href={CV_URL} target="_blank" rel="noopener" className="btn btn-secondary">
              {t("ui.aboutBtn2")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
