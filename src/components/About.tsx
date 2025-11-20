import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">{t('about.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('about.subtitle')}</p>
          </div>

          <div className="space-y-8">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                {t('about.para1')}
              </p>
              
              <p className="text-lg leading-relaxed">
                {t('about.para2')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
