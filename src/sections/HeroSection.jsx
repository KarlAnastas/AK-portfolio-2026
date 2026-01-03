import "../i18next.js";
import { Button } from "@/components/Button";
import { ArrowRight, Linkedin, BriefcaseBusiness, ChevronDown, Download } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton.jsx";
import profile from "/public/profile3.jpg";

const skills = [
    "HCD",
    "User research",
    "Interaction design",
    "Responsive desing",
    "Typography",
    "Wireframing / Prototyping",
    "Design system management",
    "Adobe Suite",
    "Miro",
    "Sketch",
    "Figma",
    "InVision",
    "Material Design",
    "iOS Hig",
    "HTML / CSS",
    "Sass / Less",
];

export const HeroSection = () => {
    const { t} = useTranslation();

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* BG */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 ng-gradient-to-b fron-background/20 via-background/80 to-background" />
            </div>

            {/* Pink Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60 blur-xs" 
                        style={{
                            backgroundColor: "#D92E90",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}/>
                ))}
            </div>
            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                    {t("HeroBadge")}
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl sm:text-7xl leading-tight animate-fade-in animation-delay-100">{t("HeroTitle1")}
                                <br/>
                                <span className=" text-primary font-normal glow-text">{t("HeroTitle2")}</span>
                                <br />
                                <span className="font-serif italic font-normal text-white">{t("HeroTitle3")}</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                {t("HeroDescription1")}
                                <br />
                                {t("HeroDescription2")}
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className=" flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <a href="mailto:karlovaanastasia9@gmail.com">
                                <Button size="lg">
                                    {t("NavContactButton")} <ArrowRight className="w-5 h-5" />
                                </Button>
                            </a>
                            <a href="https://drive.google.com/file/d/1LiXbVt4lz4-91AdZqHGFfcLchPsh1vLH/view?usp=sharing"
                                target="_blank">
                                <AnimatedBorderButton>
                                    {t("DownloadCVButton")} <Download className="w-5 h-5" />
                                </AnimatedBorderButton>
                            </a>
                            
                        </div>

                        {/* Social Media Links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">{t("HeroFollow")}</span>
                            {[
                                { icon: Linkedin, href: "https://www.linkedin.com/in/anastasiia-karlova-51b419187/" },
                                { icon: BriefcaseBusiness, href: "https://www.behance.net/karlovaana" },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                    >
                                    {<social.icon className="w-5 h-5" />}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* Right Column - Profile Image */}
                    <div className="relative animate-fade-in animation-delay-300">
                        {/* Profile Image */}
                        <div className="relative max-w-md mx-auto">
                            <div
                                className="absolute inset-0
                                rounded-3xl bg-linear-to-br
                                from-primary/30 via-transparent
                                to-primary/10 blur 2xl animate-pulse"
                            />
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img 
                                    src={profile} 
                                    alt="Anastasiia Karlova" 
                                    className="w-full aspect-4/5 object-cover rounded-2xl"
                                />

                                {/* Floating Badge */}
                                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-sm font-medium">{t("HeroAvailable")}</span>
                                    </div>
                                </div>
                                {/* Stats Badge */}
                                <div className="absolute -top-5 -left-4 glass rounded-xl px-3 py-3 animate-float animation-delay-200">
                                    <div className="text-2xl font-bold text-primary">{t("HeroStats1")}</div>
                                    <div className="text-xs text-muted-foreground">{t("HeroStats2")}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mt-20 pb-8 animate-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground mb-6 text-center">
                        {t("SkillsTitle")}
                    </p>
                    <div className="relative overflow-hidden">
                        <div
                        className="absolute left-0 top-0 bottom-0 w-32
                        bg-linear-to-r from-background to-transparent z-10"
                        />
                        <div
                        className="absolute right-0 top-0 bottom-0 w-32
                        bg-linear-to-l from-background to-transparent z-10"
                        />
                        <div className="flex animate-marquee">
                        {[...skills, ...skills].map((skill, idx) => (
                            <div key={idx} className="shrink-0 px-8 py-4">
                            <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                {skill}
                            </span>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 
            animate-fade-in animation-delay-800"
            >
                <a
                href="#about"
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                    <span className="text-xs uppercase tracking-wider">{t("Scroll")}</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>
        </section>
    );
};