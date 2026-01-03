import "../i18next.js";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/Button";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
    {href: "#about", label: "About"},
    {href: "#experiences", label: "Experiences"},
    {href: "#projects", label: "Projects"},
];

export const Navbar = () => {
    const { t} = useTranslation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      } z-50`}>
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" 
                    className="text-xl font-semibold tracking-tight hover:text-primary">
                    AK<span className="text-primary">.</span>
                </a>

                {/* Desktop Nav */}  
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                                {link.label}
                            </a>
                        ))}
                    </div>
                    
                </div>

                {/* CTA Button */} 
                <div className="inline-flex items-center justify-center gap-6">
                    {/* Launguage */}
                    <LanguageSelector />

                    <div className="hidden md:block">
                        <a href="mailto:karlovaanastasia9@gmail.com">
                            <Button size="default">{t("NavContactButton")} <ArrowRight className="w-5 h-5" /></Button>
                        </a>
                    </div>
                    
                </div>
                

                {/* Mobile Menu Button */}    
                <button
                    className="md:hidden p-2 text-foreground cursor-pointer"
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in">

                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        
                        {navLinks.map((link, index) => (
                            <a 
                                href={link.href} 
                                key={index}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg text-muted-foreground hover:text-foreground py-2">
                                {link.label}
                            </a>
                        ))}

                        <a href="mailto:karlovaanastasia9@gmail.com">
                            <Button onClick={() => setIsMobileMenuOpen(false)}>{t("NavContactButton")} <ArrowRight className="w-5 h-5" /></Button>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};