import "../i18next.js";
import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton} from "@/components/AnimatedBorderButton";
import { Download } from "lucide-react";

const projects = [
    {
        id: 1,
        /*title: "Personal designs",
        description: "A collection of my personal or unpublished projects that show my skills when restricted by NDAs.",*/
        image: "/projects/Behance.png",
        tags: ["UI/UX design", "User research", "App design", "HCD", "Web design", "Figma", "Sketch", "Adobe Suite"],
        demoUrl: "https://www.behance.net/karlovaana",
    },
    {
        id: 2,
        /*title: "Rakuten Mobile / Symphony",
        description: "A B2B platform that brought together a variety of products designed to help businesses maintain, automate, and streamline their workflows.",*/
        image: "/projects/RS.png",
        tags: ["UI/UX design", "Platform design", "Web application", "Figma", "B2B", "Design system"],
        demoUrl: "https://symphony.rakuten.com/",
    },
    {
        id: 3,
        title: "Woven by Toyota",
        description: "Variety of projects and products, both B2C and B2B. Most recently released is the Woven City App.",
        image: "/project/WCA.png",
        tags: ["UI/UX design", "App design", "Web design", "Figma", "B2B", "B2C", "Web platform", "Design system"],
        demoUrl: "https://apps.apple.com/jp/app/woven-city-%E3%82%A2%E3%83%97%E3%83%AA/id6743425736",
    },
    {
        id: 4,
        title: ["Wellna Inc."],
        description: "A wellness and health company focused on fertility, offering a range of products. I have been involved since the company’s founding and designed multiple products.",
        image: "/projects/Wellna.png",
        tags: ["UI/UX design", "User research", "App design", "Web design", "Figma", "B2B", "B2C", "Web platform", "MUI"],
        demoUrl: "https://wellna.jp/en",
    },
];

export const ProjectsSection = () => {
    const { t} = useTranslation();

    return (
        <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                {t("ProjectTitleMain1")}
            <span className="font-serif italic font-normal text-white">
              {t("ProjectTitleMain2")}
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            {t("ProjectBody")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div
                id="1"
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 animation-delay-200"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src="/projects/Behance.png"
                  alt="Behance"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="https://www.behance.net/karlovaana"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {t("ProjectTitle1")}
                  </h3>
                  <ArrowUpRight 
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {t("ProjectDescription1")}
                </p>
                <div className="flex flex-wrap gap-2">
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      UI/UX design
                    </span>
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      User research
                    </span>
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      App design
                    </span>
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      HCD
                    </span>
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      Web design
                    </span>
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      Figma
                    </span>
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      Sketch
                    </span>
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      Adobe Suite
                    </span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div
                id="2"
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 animation-delay-200"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src="/projects/RS.png"
                  alt="Rakuten Mobile / Symphony"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="https://symphony.rakuten.com/"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {t("ProjectTitle2")}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {t("ProjectDescription2")}
                </p>
                <div className="flex flex-wrap gap-2">
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      UI/UX design
                    </span>
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      Platform design
                    </span>
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      Web application
                    </span>
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      B2B
                    </span>
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      Figma
                    </span>
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      Design system
                    </span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div
                id="3"
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 animation-delay-200"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src="/projects/WCA.png"
                  alt="Woven by Toyota"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="https://apps.apple.com/jp/app/woven-city-%E3%82%A2%E3%83%97%E3%83%AA/id6743425736"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {t("ProjectTitle3")}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {t("ProjectDescription3")}
                </p>
                <div className="flex flex-wrap gap-2">
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      UI/UX design
                    </span>
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      Web design
                    </span>
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      App design
                    </span>
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      Figma
                    </span>
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      B2B
                    </span>
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      B2C
                    </span>
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      Design system
                    </span>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div
                id="4"
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 animation-delay-200"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src="/projects/Wellna.png"
                  alt="Wellna Inc."
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="https://wellna.jp/ja"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {t("ProjectTitle4")}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {t("ProjectDescription4")}
                </p>
                <div className="flex flex-wrap gap-2">
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      UI/UX design
                    </span>
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      User research
                    </span>
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      Add design
                    </span>
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      Web design
                    </span>
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      Figma
                    </span>
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      B2B
                    </span>
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      B2C
                    </span>
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      MUI
                    </span>
                </div>
              </div>
            </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <a href="https://drive.google.com/file/d/1aiU1112sSLKNvvjU2vSkyciI9r_efmc8/view?usp=drive_link"
                target="_blank">
                <AnimatedBorderButton>
                    {t("DownloadPortfolioButton")}
                    <Download className="w-5 h-5" />
                </AnimatedBorderButton>
            </a>
          
        </div>
      </div>
    </section>
    );    
};