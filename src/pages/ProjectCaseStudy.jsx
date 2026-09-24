import { Link, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import projects from "@/data/projects.json";
import { EMAIL, asset } from "@/data/links";
import { NotFound } from "@/pages/NotFound";

export function ProjectCaseStudy() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const index = projects.findIndex((p) => p.slug === slug);

  if (index === -1) return <NotFound />;

  const project = projects[index];
  const copy = t("projects", { returnObjects: true })[index];
  const c = t("cases", { returnObjects: true })[index];
  const labels = t("caseLabels", { returnObjects: true });
  const nextProject = projects[(index + 1) % projects.length];
  const nextCopy = t("projects", { returnObjects: true })[(index + 1) % projects.length];

  return (
    <main className="mx-auto max-w-[960px] px-[5vw] pb-[6vh] pt-[8vh]">
      <button
        type="button"
        onClick={() => navigate("/")}
        className="mb-11 inline-flex items-center gap-2.5 rounded-full border border-line px-4 py-2.5 font-mono text-[11px] uppercase tracking-[.1em] transition-colors hover:border-accent hover:bg-card hover:text-accent"
      >
        ← {t("ui.backAll")}
      </button>

      <div className="flex flex-col gap-5">
        <span className="kicker">{project.meta}</span>
        <h1 className="m-0 font-display text-[clamp(36px,6vw,78px)] font-semibold leading-[1.02] tracking-[-.04em]">
          {copy.title}
        </h1>
        <p className="m-0 max-w-[58ch] text-[clamp(17px,1.6vw,21px)] leading-[1.6] opacity-[.78]">
          {copy.description}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-2.5">
          <a href={project.liveUrl} target="_blank" rel="noopener" className="btn btn-primary">
            {t("ui.visitLive")} ↗
          </a>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))] gap-px overflow-hidden rounded-[18px] border border-line bg-line">
        <div className="flex flex-col gap-[7px] bg-card p-5">
          <span className="font-mono text-[10px] uppercase tracking-[.1em] opacity-70">{labels.role}</span>
          <span className="text-[15px]">{c.role}</span>
        </div>
        <div className="flex flex-col gap-[7px] bg-card p-5">
          <span className="font-mono text-[10px] uppercase tracking-[.1em] opacity-70">{labels.scope}</span>
          <span className="text-[15px]">{c.scope}</span>
        </div>
        <div className="flex flex-col gap-[7px] bg-card p-5">
          <span className="font-mono text-[10px] uppercase tracking-[.1em] opacity-70">{labels.tools}</span>
          <span className="text-[15px]">{project.caseTools}</span>
        </div>
      </div>

      <div
        className="my-11 aspect-[1.38] rounded-[24px] border border-line bg-card bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${asset(project.cardImage)})` }}
      />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-8 border-b border-line pb-[52px] pt-2">
        <h2 className="m-0 font-display text-[clamp(26px,3.2vw,40px)] font-semibold tracking-[-.03em]">
          {labels.problem}
        </h2>
        <div className="flex flex-col gap-5">
          {c.problem.map((body, i) => (
            <div key={i} className="grid grid-cols-[34px_1fr] gap-3.5">
              <span className="pt-[5px] font-mono text-xs text-accent">0{i + 1}</span>
              <p className="m-0 text-base leading-[1.75] opacity-[.82]">{body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-8 border-b border-line py-[52px]">
        <h2 className="m-0 font-display text-[clamp(26px,3.2vw,40px)] font-semibold tracking-[-.03em]">
          {labels.process}
        </h2>
        <div className="flex flex-col gap-4">
          {c.process.map((step, i) => (
            <div key={step.h} className="flex flex-col gap-3 rounded-[20px] border border-line bg-card p-[26px]">
              <span className="font-mono text-xs text-accent">0{i + 1}</span>
              <h3 className="m-0 font-display text-xl font-semibold leading-[1.25] tracking-[-.02em]">{step.h}</h3>
              <p className="m-0 text-[15px] leading-[1.75] opacity-[.78]">{step.body}</p>
            </div>
          ))}
        </div>
      </div>

      {project.caseMedia.length > 0 && (
        <div className="flex flex-col gap-[26px] border-b border-line py-[52px]">
          {project.caseMedia.map((m, i) => (
            <div key={m.src} className="flex flex-col gap-3">
              <div
                className="rounded-[20px] border border-line bg-card bg-contain bg-center bg-no-repeat"
                style={{ aspectRatio: m.ratio, backgroundImage: `url(${asset(m.src)})` }}
              />
              <span className="font-mono text-[11px] tracking-[.06em] opacity-70">{c.captions[i]}</span>
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-8 py-[52px]">
        <h2 className="m-0 font-display text-[clamp(26px,3.2vw,40px)] font-semibold tracking-[-.03em]">
          {labels.results}
        </h2>
        <div className="flex flex-col gap-3.5">
          {c.results.map((body, i) => (
            <p key={i} className="quote m-0 text-base leading-[1.7]">
              {body}
            </p>
          ))}
        </div>
      </div>

      <a
        href={project.caseUrl}
        target="_blank"
        rel="noopener"
        className="btn btn-secondary inline-block self-start whitespace-nowrap"
      >
        {labels.visit} ↗
      </a>

      <div className="mt-11 flex flex-wrap items-center justify-between gap-[18px] rounded-[24px] border border-line bg-card p-8">
        <div className="flex flex-col gap-1.5">
          <div className="font-display text-[22px] font-semibold tracking-[-.02em]">{t("ui.detailCtaH")}</div>
          <div className="text-[15px] opacity-75">{t("ui.detailCtaP")}</div>
        </div>
        <a href={`mailto:${EMAIL}`} className="btn btn-primary">
          {t("ui.navCta")} →
        </a>
      </div>

      <Link
        to={`/projects/${nextProject.slug}`}
        className="mt-4 flex items-center justify-between gap-[18px] rounded-[24px] border border-line p-8 transition-colors hover:border-accent hover:bg-card"
      >
        <div className="flex flex-col gap-1.5">
          <div className="font-mono text-[10px] uppercase tracking-[.12em] opacity-70">{t("ui.nextCase")}</div>
          <div className="font-display text-[22px] font-semibold tracking-[-.02em]">{nextCopy.title}</div>
        </div>
        <span className="text-2xl text-accent">→</span>
      </Link>
    </main>
  );
}
