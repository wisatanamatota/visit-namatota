import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">
          Namatota
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("experiences")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Experiences
          </button>
          <button
            onClick={() => scrollToSection("packages")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Tour Packages
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-primary transition-colors"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-foreground hover:text-primary transition-colors"
          >
            FAQ
          </button>
        </div>

        <Button onClick={() => scrollToSection("contact")} variant="default">
          Plan Your Trip
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
