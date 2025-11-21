import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/tangga-seribu.jpg";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust this value based on your navigation bar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)'
          }}
        />
      </div>

      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl space-y-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg">
            {t('hero.mainTitle')}
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-white/95 drop-shadow-md">
            {t('hero.subtitle')}
          </h2>
          <p className="text-lg md:text-xl text-white/90 drop-shadow-md max-w-2xl mx-auto mt-6">
            {t('hero.description')}
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection("about")}
            className="mt-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105"
          >
            {t('hero.explore')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
