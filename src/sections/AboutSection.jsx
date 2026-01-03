import "../i18next.js";
import { useTranslation } from "react-i18next";
import { Smartphone, User, Briefcase } from "lucide-react";


export const AboutSection = () => {
    const { t} = useTranslation();

    return  (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left column - About me */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                {t("AboutSection")}
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-normal leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        {t("AboutTitle1")}
                            <span className="font-serif italic font-normal text-white">
                                {" "}
                                {t("AboutTitle2")}
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                {t("AboutBody1")}
                            </p>
                            <p>
                                {t("AboutBody2")}
                            </p>
                            <p>
                                {t("AboutBody3")}
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                "{t("AboutMission")}"
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Highlights */}
                    <div className="grid grid-cols-1 gap-6">
                        <div className="glass p-6 rounded-2xl animate-fade-in animation-delay-100">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">{t("HighlightTitle1")}</h4>
                                    <p className="text-muted-foreground">{t("HighlightBody1")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="glass p-6 rounded-2xl animate-fade-in animation-delay-300">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Smartphone className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">{t("HighlightTitle2")}</h4>
                                    <p className="text-muted-foreground">{t("HighlightBody2")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="glass p-6 rounded-2xl animate-fade-in animation-delay-500">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">{t("HighlightTitle3")}</h4>
                                    <p className="text-muted-foreground">{t("HighlightBody3")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};