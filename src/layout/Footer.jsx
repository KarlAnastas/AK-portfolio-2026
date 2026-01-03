import { Linkedin, Briefcase, ArrowRight } from "lucide-react";
import "../i18next.js";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/Button";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/anastasiia-karlova-51b419187/", label: "LinkedIn" },
  { icon: Briefcase, href: "https://www.behance.net/karlovaana", label: "Portfolio" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#experiences", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t} = useTranslation();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              AK<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Anastasiia Karlova. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <a href="mailto:karlovaanastasia9@gmail.com">
                <Button size="sm">
                    {t("NavContactButton")} <ArrowRight className="w-5 h-5" />
                </Button>
            </a>
        </div>
      </div>
    </footer>
  );
};