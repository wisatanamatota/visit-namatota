import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-triton-bay.jpg";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            {t('hero.title')}
          </h1>
          <h2 className="text-xl md:text-2xl text-white/90 drop-shadow-md">
            {t('hero.subtitle')}
          </h2>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => scrollToSection("experiences")}
            className="mt-8"
          >
            {t('hero.explore')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
