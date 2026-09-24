import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "@/hooks/useSectionLink";
import { Footer } from "@/layout/Footer";
import { HeroSection } from "@/sections/HeroSection";
import { WorkSection } from "@/sections/WorkSection";
import { AboutSection } from "@/sections/AboutSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { ContactSection } from "@/sections/ContactSection";

export function Home() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Arriving from a case page via a nav link: scroll to the requested section.
  useEffect(() => {
    if (!state?.section) return;
    scrollToSection(state.section);
    navigate(".", { replace: true, state: null });
  }, [state, navigate]);

  return (
    <>
      <main>
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
