import { Waves, Mountain, Landmark, Fish } from "lucide-react";

const ValueProposition = () => {
  const features = [
    {
      icon: Fish,
      title: "Swim with Whale Sharks",
      description: "A rare, year-round opportunity to encounter gentle giants at the local bagan.",
    },
    {
      icon: Mountain,
      title: "Pristine Karst Islands",
      description: "Explore the breathtaking beauty of Triton Bay, an untouched labyrinth of islands and turquoise water.",
    },
    {
      icon: Landmark,
      title: "Ancient Culture",
      description: "Discover millennia-old rock art and the living history of the Namatota Kingdom.",
    },
    {
      icon: Waves,
      title: "World-Class Diving",
      description: "Immerse yourself in vibrant soft coral gardens and unmatched marine biodiversity, far from the crowds.",
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
                <Icon className="w-12 h-12 mx-auto mb-4 text-secondary" />
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
