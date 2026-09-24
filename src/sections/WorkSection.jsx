import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import projects from "@/data/projects.json";
import { asset } from "@/data/links";

export function WorkSection() {
  const { t } = useTranslation();
  const copy = t("projects", { returnObjects: true });

  return (
    <section id="work" className="section">
      <div className="kicker mb-3.5">{t("ui.workKicker")}</div>
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-5">
        <h2 className="h-section">
          {t("ui.workTitle")}
          <span className="text-accent">{t("ui.workTitle2")}</span>
        </h2>
        <span className="mono-label">{t("ui.workHint")}</span>
      </div>
      <p className="m-0 mb-10 max-w-[60ch] text-base leading-[1.65] opacity-75">{t("ui.workIntro")}</p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-[18px]">
        {projects.map((p, i) => (
          <Link
            key={p.slug}
            to={`/projects/${p.slug}`}
            className="flex flex-col overflow-hidden rounded-[24px] border border-line bg-card transition-[transform,border-color] duration-[.35s] ease-[cubic-bezier(.2,.8,.2,1)] hover:-translate-y-1.5 hover:border-accent"
          >
            <div
              className="aspect-[16/10] border-b border-line bg-bg bg-cover bg-top"
              style={{ backgroundImage: `url(${asset(p.cardImage)})` }}
            />
            <div className="flex flex-col gap-[11px] p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="m-0 font-display text-[22px] font-semibold tracking-[-.02em]">
                  {copy[i].title}
                </h3>
                <span className="font-mono text-[11px] opacity-[.68]">{p.meta}</span>
              </div>
              <p className="m-0 text-[15px] leading-[1.55] opacity-75">{copy[i].description}</p>
              <div className="flex flex-wrap gap-[7px] pt-[3px]">
                {p.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
