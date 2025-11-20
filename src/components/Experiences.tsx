import { useLanguage } from "@/contexts/LanguageContext";
import whaleSharkImage from "@/assets/whale-shark.jpg";
import rockArtImage from "@/assets/rock-art.jpg";
import villageImage from "@/assets/village.jpg";
import divingImage from "@/assets/diving.jpg";

const Experiences = () => {
  const { t } = useLanguage();
  
  const experiences = [
    {
      id: "whale-sharks",
      image: whaleSharkImage,
      heading: t('experiences.whaleSharkTitle'),
      description: t('experiences.whaleSharkDesc'),
    },
    {
      id: "rock-art",
      image: rockArtImage,
      heading: t('experiences.rockArtTitle'),
      description: t('experiences.rockArtDesc'),
    },
    {
      id: "village",
      image: villageImage,
      heading: t('experiences.villageTitle'),
      description: t('experiences.villageDesc'),
    },
    {
      id: "diving",
      image: divingImage,
      heading: t('experiences.divingTitle'),
      description: t('experiences.divingDesc'),
    },
  ];

  return (
    <section id="experiences" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">{t('experiences.title')}</h2>
          <p className="text-xl text-muted-foreground">{t('experiences.subtitle')}</p>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`rounded-lg overflow-hidden shadow-elegant ${
                index % 2 === 1 ? 'md:order-2' : ''
              }`}>
                <img
                  src={exp.image}
                  alt={exp.heading}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className={`space-y-4 ${
                index % 2 === 1 ? 'md:order-1' : ''
              }`}>
                <h3 className="text-3xl font-bold text-foreground">{exp.heading}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
