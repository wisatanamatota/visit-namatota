import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import papuaCrownImage from "@/assets/papua-crown.jpeg";
import papayaStickImage from "@/assets/papaya-stick.jpeg";
import tomangImage from "@/assets/tomang.jpeg";

const LocalProducts = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const productKeys = [
    {
      key: 'papuaCrown',
      src: papuaCrownImage,
      alt: "Traditional Papua ceremonial crown"
    },
    {
      key: 'papayaStick',
      src: papayaStickImage,
      alt: "Artisanal papaya stick products"
    },
    {
      key: 'tomang',
      src: tomangImage,
      alt: "Traditional tomang handicraft"
    },
  ];

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % productKeys.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + productKeys.length) % productKeys.length);
  };

  return (
    <section id="local-products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">{t('localProducts.title')}</h2>
          <p className="text-xl text-muted-foreground">{t('localProducts.subtitle')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {productKeys.map((productKey, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-elegant cursor-pointer group aspect-square"
              onClick={() => openGallery(index)}
            >
              <img
                src={productKey.src}
                alt={productKey.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ocean-deep/0 group-hover:bg-ocean-deep/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold">{t(`localProducts.products.${productKey.key}.title`)}</h3>
                <p className="text-sm opacity-90">{t(`localProducts.products.${productKey.key}.description`)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {t('localProducts.supportText')}
          </p>
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-5xl w-full p-0 bg-black/95">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-50 text-white hover:text-white/70 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="relative flex items-center justify-center min-h-[70vh]">
              <button
                onClick={prevProduct}
                className="absolute left-4 z-40 text-white hover:text-white/70 transition-colors"
              >
                <ChevronLeft className="w-12 h-12" />
              </button>

              <div className="text-center text-white max-w-2xl mx-auto px-8">
                <img
                  src={productKeys[currentIndex].src}
                  alt={productKeys[currentIndex].alt}
                  className="max-h-[50vh] w-auto object-contain mx-auto mb-6 rounded-lg"
                />
                <h3 className="text-2xl font-bold mb-2">{t(`localProducts.products.${productKeys[currentIndex].key}.title`)}</h3>
                <p className="text-lg opacity-90 mb-4">{t(`localProducts.products.${productKeys[currentIndex].key}.description`)}</p>
                <p className="text-sm opacity-75">{t('localProducts.purchaseText')}</p>
              </div>

              <button
                onClick={nextProduct}
                className="absolute right-4 z-40 text-white hover:text-white/70 transition-colors"
              >
                <ChevronRight className="w-12 h-12" />
              </button>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
              {currentIndex + 1} / {productKeys.length}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default LocalProducts;