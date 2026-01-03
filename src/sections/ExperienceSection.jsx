import "../i18next.js";
import { useTranslation } from "react-i18next";

export const ExperienceSection = () => {
    const { t} = useTranslation();

    return (
        <section id="experiences" className="py-32 relative overflow-hidden">
            <div
                className="absolute top-1/2 left-1/4 w-96
            h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                <span
                    className="text-secondary-foreground text-sm
                font-medium tracking-wider uppercase animate-fade-in"
                >
                    {t("ExpSubtitle")}
                </span>
                <h2
                    className="text-4xl md:text-5xl font-bold
                mt-4 mb-6 animate-fade-in animation-delay-100
                    text-secondary-foreground"
                >
                    {t("ExpTitle1")}
                    <span className="font-serif italic font-normal text-white">
                    {t("ExpTitle2")}
                    </span>
                </h2>

                <p
                    className="text-muted-foreground
                animate-fade-in animation-delay-200"
                >
                    {t("ExpBody")}
                </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(217,46,144,0.8)]" />

                {/* Experience Items */}
                {/* Item 1 Current */}
                <div className="space-y-12 pb-12">
                    <div
                        className="relative grid md:grid-cols-2 gap-8 animate-fade-in animation-delay-200"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                        </div>

                        {/* Content */}
                        <div
                        className="pl-8 md:pl-0 md:pr-16 md:text-right"
                        >
                        <div
                            className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                        >
                            <span className="text-sm text-primary font-medium">
                            {t("ExpPeriod1")}
                            </span>
                            <h3 className="text-xl font-semibold mt-2">{t("ExpRole1")}</h3>
                            <p className="text-muted-foreground">{t("ExpCompany1")}</p>
                            <p className="text-sm text-muted-foreground mt-4">
                            {t("ExpDesc1")}
                            </p>
                            <div
                            className={`flex flex-wrap gap-2 mt-4`}
                            >
                                <span
                                className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                >
                                    Figma
                                </span>
                                <span
                                className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                >
                                    FigJam
                                </span>
                                <span
                                className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                >
                                    Jira
                                </span>
                                <span
                                className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                >
                                    Confluence
                                </span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="space-y-12 pb-12">
                    <div
                        className="relative grid md:grid-cols-2 gap-8 animate-fade-in animation-delay-200"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                        </div>

                        {/* Content */}
                        <div
                        className="pl-8 md:pl-0 md:col-start-2"
                        >
                        <div
                            className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                        >
                            <span className="text-sm text-primary font-medium">
                            {t("ExpPeriod2")}
                            </span>
                            <h3 className="text-xl font-semibold mt-2">{t("ExpRole2")}</h3>
                            <p className="text-muted-foreground">{t("ExpCompany2")}</p>
                            <p className="text-sm text-muted-foreground mt-4">
                            {t("ExpDesc2")}
                            </p>
                            <div
                            className={`flex flex-wrap gap-2 mt-4`}
                            >
                                <span
                                className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                >
                                    Figma
                                </span>
                                <span
                                className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                >
                                    FigJam
                                </span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="space-y-12 pb-12">
                    <div
                        className="relative grid md:grid-cols-2 gap-8 animate-fade-in animation-delay-200"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                        </div>

                        {/* Content */}
                        <div
                        className="pl-8 md:pl-0 md:pr-16 md:text-right"
                        >
                        <div
                            className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                        >
                            <span className="text-sm text-primary font-medium">
                            {t("ExpPeriod3")}
                            </span>
                            <h3 className="text-xl font-semibold mt-2">{t("ExpRole3")}</h3>
                            <p className="text-muted-foreground">{t("ExpCompany3")}</p>
                            <p className="text-sm text-muted-foreground mt-4">
                            {t("ExpDesc3")}
                            </p>
                            <div
                            className={`flex flex-wrap gap-2 mt-4`}
                            >
                                <span
                                className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                >
                                    Figma
                                </span>
                                <span
                                className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                >
                                    Miro
                                </span>
                                <span
                                className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                >
                                    Jira
                                </span>
                                <span
                                className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                >
                                    Confluence
                                </span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                {/* Item 4 */}
                <div className="space-y-12 pb-12">
                    <div
                        className="relative grid md:grid-cols-2 gap-8 animate-fade-in animation-delay-200"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                            {/*<span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />*/}
                        </div>

                        {/* Content */}
                        <div
                        className="pl-8 md:pl-0 md:col-start-2"
                        >
                        <div
                            className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                        >
                            <span className="text-sm text-primary font-medium">
                            {t("ExpPeriod4")}
                            </span>
                            <h3 className="text-xl font-semibold mt-2">{t("ExpRole4")}</h3>
                            <p className="text-muted-foreground">{t("ExpCompany4")}</p>
                            <p className="text-sm text-muted-foreground mt-4">
                            {t("ExpDesc4")}
                            </p>
                            <div
                            className={`flex flex-wrap gap-2 mt-4`}
                            >
                                <span
                                className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                >
                                    Figma
                                </span>
                                <span
                                className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                >
                                    Sketch
                                </span>
                                <span
                                className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                >
                                    Adobe Suite
                                </span>
                                <span
                                className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                >
                                    HTML / CSS
                                </span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </section>
    );
};