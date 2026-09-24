import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function NotFound() {
  const { t } = useTranslation();

  return (
    <main className="mx-auto flex max-w-[960px] flex-col items-start gap-5 px-[5vw] py-[14vh]">
      <span className="kicker">404</span>
      <h1 className="m-0 font-display text-[clamp(32px,5vw,56px)] font-semibold leading-[1.05] tracking-[-.035em]">
        {t("ui.notFoundTitle")}
      </h1>
      <p className="m-0 max-w-[48ch] text-base leading-[1.7] opacity-75">{t("ui.notFoundBody")}</p>
      <Link to="/" className="btn btn-primary mt-2">
        {t("ui.notFoundCta")}
      </Link>
    </main>
  );
}
