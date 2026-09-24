import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { DotGrid } from "@/components/DotGrid";
import { Header } from "@/layout/Header";
import { Home } from "@/pages/Home";
import { ProjectCaseStudy } from "@/pages/ProjectCaseStudy";
import { NotFound } from "@/pages/NotFound";

function ScrollToTop() {
  const { pathname, state } = useLocation();
  useEffect(() => {
    if (!state?.section) window.scrollTo(0, 0);
  }, [pathname, state]);
  return null;
}

function App() {
  return (
    <>
      <DotGrid />
      <div className="relative z-[1]">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
