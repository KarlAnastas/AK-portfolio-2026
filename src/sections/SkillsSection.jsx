import { useState } from "react";
import { useTranslation } from "react-i18next";

const CATEGORIES = [
  ["all", "ui.catAll"],
  ["design", "ui.catDesign"],
  ["tools", "ui.catTools"],
  ["frontend", "ui.catFrontend"],
];

export function SkillsSection() {
  const { t } = useTranslation();
  const [category, setCategory] = useState("all");
  const skills = t("skills", { returnObjects: true });
  const visible = skills.filter((s) => category === "all" || s.category === category);

  return (
    <section id="skills" className="section">
      <div className="mb-[34px] flex flex-wrap items-center justify-between gap-[18px]">
        <h2 className="h-section">{t("ui.skillsTitle")}</h2>
        <div className="flex flex-wrap gap-1.5">
          {CATEGORIES.map(([id, key]) => (
            <button
              key={id}
              type="button"
              onClick={() => setCategory(id)}
              className={`rounded-full border border-line px-[18px] py-[9px] text-sm transition-colors ${
                category === id ? "bg-accent text-white" : "bg-transparent text-ink"
              }`}
            >
              {t(key)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] gap-3.5">
        {visible.map((s) => (
          <div key={s.name} className="flex flex-col gap-3 rounded-[18px] border border-line bg-card p-5">
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-[15px] font-medium">{s.name}</span>
              <span className="font-mono text-xs opacity-[.68]">{s.level}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-track">
              <div
                className="h-full rounded-full bg-accent transition-[width] duration-[.6s] ease-[cubic-bezier(.2,.8,.2,1)]"
                style={{ width: `${s.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
