import { Navbar } from "@/layout/Navbar";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { Footer } from "@/layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>   
      <Footer />
    </div>
  );
}

export default App;
