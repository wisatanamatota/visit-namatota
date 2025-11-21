import { useLanguage } from "@/contexts/LanguageContext";

const VideoSection = () => {
  const { t } = useLanguage();

  const videos = [
    {
      id: "zxXazwUck8Q",
      title: "Namatota Tourism Experience"
    },
    {
      id: "hwx4Ws_MILc",
      title: "Namatota Underwater Paradise"
    }
  ];

  return (
    <section id="video" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">{t('video.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('video.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div key={video.id}>
              <div className="aspect-video rounded-lg overflow-hidden shadow-elegant bg-black/5">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
          {t('video.footerCaption')}
        </p>
      </div>
    </section>
  );
};

export default VideoSection;