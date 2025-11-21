import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logoImage from "@/assets/logo.jpg";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 40; // Adjust this value based on navigation bar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={logoImage}
            alt="Visit Namatota"
            className="h-12 w-12 rounded-full object-cover border-2 border-white/50 shadow-elegant"
          />
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className={`transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-white/80"
            }`}
          >
            {t('nav.about')}
          </button>
          <button
            onClick={() => scrollToSection("experiences")}
            className={`transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-white/80"
            }`}
          >
            {t('nav.experiences')}
          </button>
          <button
            onClick={() => scrollToSection("video")}
            className={`transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-white/80"
            }`}
          >
            {t('nav.video')}
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className={`transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-white/80"
            }`}
          >
            {t('nav.gallery')}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-white/80"
            }`}
          >
            {t('nav.contact')}
          </button>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
            className={`hidden md:flex items-center gap-2 transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-white/80"
            }`}
          >
            <Languages className="w-4 h-4" />
            {language === 'en' ? 'ID' : 'EN'}
          </Button>
          <Button onClick={() => scrollToSection("contact")} variant="default">
            {t('nav.planTrip')}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
