import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import papuaCrownImage from "@/assets/papua-crown.jpeg";
import papayaStickImage from "@/assets/papaya-stick.jpeg";
import tomangImage from "@/assets/tomang.jpeg";
import shellCraftsImage from "@/assets/shell-crafts.jpeg";

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
    {
      key: 'shellCrafts',
      src: shellCraftsImage,
      alt: "Handcrafted shell crafts and jewelry"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {productKeys.map((productKey, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-elegant cursor-pointer group"
              onClick={() => openGallery(index)}
            >
              <img
                src={productKey.src}
                alt={productKey.alt}
                className="w-full h-64 md:h-72 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-110"
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
          <DialogContent className="max-w-6xl w-full p-0 bg-black/95 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-50 text-white hover:text-white/70 transition-colors bg-black/50 rounded-full p-2 md:hidden"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Mobile layout - Stacked */}
            <div className="md:hidden flex flex-col">
              {/* Mobile Image */}
              <div className="relative">
                <img
                  src={productKeys[currentIndex].src}
                  alt={productKeys[currentIndex].alt}
                  className="w-full h-[50vh] object-contain"
                />

                {/* Mobile navigation buttons */}
                <button
                  onClick={prevProduct}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-40 text-white hover:text-white/70 transition-colors bg-black/50 rounded-full p-2"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextProduct}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-40 text-white hover:text-white/70 transition-colors bg-black/50 rounded-full p-2"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 z-50 text-white hover:text-white/70 transition-colors bg-black/50 rounded-full p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Text */}
              <div className="text-white p-6">
                <h3 className="text-2xl font-bold mb-3">{t(`localProducts.products.${productKeys[currentIndex].key}.title`)}</h3>
                <p className="text-lg opacity-90 mb-4 leading-relaxed">{t(`localProducts.products.${productKeys[currentIndex].key}.description`)}</p>
                <div className="border-t border-white/20 pt-4">
                  <p className="text-sm opacity-75 leading-relaxed">{t('localProducts.purchaseText')}</p>
                </div>

                <div className="flex items-center justify-center mt-6 text-white/60 text-sm font-medium">
                  {currentIndex + 1} / {productKeys.length}
                </div>
              </div>
            </div>

            {/* Desktop layout - Side by side */}
            <div className="hidden md:grid md:grid-cols-2 gap-8 p-8">
              {/* Left side - Image */}
              <div className="flex items-center justify-center relative">
                <button
                  onClick={prevProduct}
                  className="absolute left-4 z-40 text-white hover:text-white/70 transition-colors bg-black/50 rounded-full p-2"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                <img
                  src={productKeys[currentIndex].src}
                  alt={productKeys[currentIndex].alt}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
                />

                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-0 right-0 z-50 text-white hover:text-white/70 transition-colors bg-black/50 rounded-full p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Right side - Text */}
              <div className="flex flex-col justify-center text-white px-4">
                <h3 className="text-3xl font-bold mb-4">{t(`localProducts.products.${productKeys[currentIndex].key}.title`)}</h3>
                <p className="text-xl opacity-90 mb-6 leading-relaxed">{t(`localProducts.products.${productKeys[currentIndex].key}.description`)}</p>
                <div className="border-t border-white/20 pt-6">
                  <p className="text-sm opacity-75 mb-4 leading-relaxed">{t('localProducts.purchaseText')}</p>
                </div>

                {/* Navigation indicators */}
                <div className="flex items-center justify-between mt-8">
                  <button
                    onClick={prevProduct}
                    className="flex items-center gap-2 text-white hover:text-white/70 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <span className="text-sm">Previous</span>
                  </button>

                  <span className="text-white/60 text-sm font-medium">
                    {currentIndex + 1} / {productKeys.length}
                  </span>

                  <button
                    onClick={nextProduct}
                    className="flex items-center gap-2 text-white hover:text-white/70 transition-colors"
                  >
                    <span className="text-sm">Next</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default LocalProducts;