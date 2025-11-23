import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
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
            onClick={() => scrollToSection("local-products")}
            className={`transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-white/80"
            }`}
          >
            {t('nav.localProducts')}
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
            className={`flex items-center gap-2 transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary bg-transparent hover:bg-gray-100"
                : "text-white hover:bg-white/10 hover:text-white"
            }`}
          >
            <span className="text-base">{language === 'en' ? '🇮🇩' : '🇬🇧'}</span>
            <span className="hidden sm:inline text-sm font-medium">
              {language === 'en' ? 'ID' : 'EN'}
            </span>
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
