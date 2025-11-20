import { Waves, Mountain, Landmark, Fish } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ValueProposition = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Fish,
      title: t('value.whaleShark'),
      description: t('value.whaleSharkDesc'),
    },
    {
      icon: Mountain,
      title: t('value.pristine'),
      description: t('value.pristineDesc'),
    },
    {
      icon: Landmark,
      title: t('value.ancient'),
      description: t('value.ancientDesc'),
    },
    {
      icon: Waves,
      title: t('value.diving'),
      description: t('value.divingDesc'),
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-card shadow-elegant hover:shadow-glow transition-all duration-300"
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
