import { Instagram, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const InstagramFeed = () => {
  const { t } = useLanguage();

  const handleOpenProfile = () => {
    window.open('https://www.instagram.com/visit.namatota/', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Instagram className="w-8 h-8 text-pink-600 mr-2" />
            <h2 className="text-4xl font-bold text-foreground">{t('instagram.title')}</h2>
          </div>
          <p className="text-xl text-muted-foreground mb-6">{t('instagram.subtitle')}</p>
          <Button
            onClick={handleOpenProfile}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-elegant hover:shadow-glow transition-all duration-300"
            size="lg"
          >
            <Instagram className="w-5 h-5 mr-2" />
            {t('instagram.followButton')}
          </Button>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-elegant overflow-hidden">
            <div className="relative" style={{ paddingBottom: '125%' }}>
              <iframe
                src="https://www.instagram.com/visit.namatota/embed"
                className="absolute top-0 left-0 w-full h-full border-0"
                scrolling="no"
                allowTransparency={true}
                title="Instagram Feed - @visit.namatota"
                style={{
                  minHeight: '600px',
                  maxHeight: '800px'
                }}
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button
            onClick={handleOpenProfile}
            variant="outline"
            className="text-pink-600 border-pink-600 hover:bg-pink-50 font-medium"
          >
            {t('instagram.morePosts')}
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;