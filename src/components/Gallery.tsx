import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import heroImage from "@/assets/hero-triton-bay.jpg";
import whaleSharkImage from "@/assets/whale-shark.jpg";
import rockArtImage from "@/assets/rock-art.jpg";
import villageImage from "@/assets/village.jpg";
import divingImage from "@/assets/diving.jpg";
import karstImage from "@/assets/karst-islands.jpg";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: heroImage, alt: "Triton Bay aerial view" },
    { src: whaleSharkImage, alt: "Whale shark encounter" },
    { src: karstImage, alt: "Karst islands sunset" },
    { src: divingImage, alt: "Soft coral gardens" },
    { src: rockArtImage, alt: "Ancient rock art" },
    { src: villageImage, alt: "Namatota village" },
  ];

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Visual Gallery</h2>
          <p className="text-xl text-muted-foreground">A glimpse of paradise</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-elegant cursor-pointer group aspect-square"
              onClick={() => openGallery(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ocean-deep/0 group-hover:bg-ocean-deep/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-7xl w-full p-0 bg-black/95">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-50 text-white hover:text-white/70 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="relative flex items-center justify-center min-h-[80vh]">
              <button
                onClick={prevImage}
                className="absolute left-4 z-40 text-white hover:text-white/70 transition-colors"
              >
                <ChevronLeft className="w-12 h-12" />
              </button>
              
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="max-h-[85vh] w-auto object-contain"
              />
              
              <button
                onClick={nextImage}
                className="absolute right-4 z-40 text-white hover:text-white/70 transition-colors"
              >
                <ChevronRight className="w-12 h-12" />
              </button>
            </div>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
