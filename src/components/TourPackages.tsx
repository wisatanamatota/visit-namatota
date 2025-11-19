import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import karstImage from "@/assets/karst-islands.jpg";
import whaleSharkImage from "@/assets/whale-shark.jpg";
import divingImage from "@/assets/diving.jpg";

const TourPackages = () => {
  const scrollToContact = (packageName: string) => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Pre-fill form with package interest
      setTimeout(() => {
        const select = document.getElementById("package-interest") as HTMLSelectElement;
        if (select) {
          select.value = packageName;
        }
      }, 500);
    }
  };

  const packages = [
    {
      title: "5D/4N Whale Shark Discovery",
      duration: "5 Days / 4 Nights",
      image: whaleSharkImage,
      description: "The ultimate whale shark experience with multiple swimming sessions at the bagan, plus island hopping and cultural visits.",
      highlights: [
        "Whale Shark Snorkeling (3 sessions)",
        "Rock Art Tour",
        "Island Hopping",
        "Namatota Village Visit",
        "All meals & accommodation",
      ],
    },
    {
      title: "7D/6N Complete Explorer",
      duration: "7 Days / 6 Nights",
      image: karstImage,
      description: "Experience everything Triton Bay has to offer. From whale sharks to ancient art, diving to cultural immersion.",
      highlights: [
        "All Whale Shark Discovery features",
        "4 Diving/Snorkeling Sites",
        "Extended Cultural Experience",
        "Hidden Beach Exploration",
        "Sunset Cruise",
      ],
    },
    {
      title: "4D/3N Diver's Paradise",
      duration: "4 Days / 3 Nights",
      image: divingImage,
      description: "Designed for serious divers. Focus on the best dive sites in Triton Bay with experienced local dive guides.",
      highlights: [
        "6 Diving Sessions",
        "Soft Coral Gardens",
        "Manta Ray Sites",
        "Whale Shark Encounter",
        "Nitrox Available",
      ],
    },
  ];

  return (
    <section id="packages" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Tour Packages</h2>
          <p className="text-xl text-muted-foreground">Choose your adventure or customize your own</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                <CardDescription className="text-lg font-semibold text-primary">
                  {pkg.duration}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{pkg.description}</p>
                <div className="space-y-2">
                  {pkg.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={() => scrollToContact(pkg.title)}
                >
                  Get Custom Quote
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
