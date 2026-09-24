import { useLocation, useNavigate } from "react-router-dom";

export const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
};

// HashRouter owns the URL hash, so "#work" anchors can't be plain links.
// On home we scroll directly; elsewhere we go home and Home scrolls on arrival.
export function useSectionLink() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (id) => (e) => {
    e?.preventDefault();
    if (pathname === "/") scrollToSection(id);
    else navigate("/", { state: { section: id } });
  };
}
