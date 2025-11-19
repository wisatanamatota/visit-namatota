import whaleSharkImage from "@/assets/whale-shark.jpg";
import rockArtImage from "@/assets/rock-art.jpg";
import villageImage from "@/assets/village.jpg";
import divingImage from "@/assets/diving.jpg";

const Experiences = () => {
  const experiences = [
    {
      id: "whale-sharks",
      image: whaleSharkImage,
      heading: "The Whale Sharks of Triton Bay",
      description: "Experience the magic of swimming alongside gentle giants at the traditional bagan (fishing platforms). These majestic whale sharks visit year-round, feeding on the rich plankton attracted to the lights. Our ethical approach ensures minimal disturbance while you create memories of a lifetime. The best time to visit is during the early morning hours when visibility is perfect and the water is calm.",
    },
    {
      id: "rock-art",
      image: rockArtImage,
      heading: "The Karst Islands & Rock Art",
      description: "Journey through time as you explore ancient petroglyphs painted on limestone cliffs thousands of years ago. These sacred sites, known locally as 'lukisan purba,' tell stories of the earliest inhabitants of West Papua. Your boat tour winds through stunning karst islands, each more dramatic than the last, with hidden caves and pristine beaches waiting to be discovered.",
    },
    {
      id: "village",
      image: villageImage,
      heading: "Namatota Village & Culture",
      description: "Immerse yourself in the living culture of the Namatota Kingdom. Visit the traditional village where ancient customs are still practiced today. Meet local families, learn about traditional fishing methods, and hear stories passed down through generations. This is authentic cultural exchange at its finest, supporting the community while gaining deep insights into Papuan life.",
    },
    {
      id: "diving",
      image: divingImage,
      heading: "Snorkeling & Diving",
      description: "Dive into one of the world's most pristine underwater paradises. Triton Bay boasts incredible soft coral gardens in vibrant purples, pinks, and oranges. The marine biodiversity rivals Raja Ampat, but with far fewer visitors. Crystal-clear visibility, healthy reefs teeming with life, and the chance to spot rare species make every dive unforgettable. Perfect for both snorkelers and experienced divers.",
    },
  ];

  return (
    <section id="experiences" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Key Experiences</h2>
          <p className="text-xl text-muted-foreground">Discover what makes Namatota truly unforgettable</p>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`rounded-lg overflow-hidden shadow-elegant ${
                index % 2 === 1 ? 'md:order-2' : ''
              }`}>
                <img
                  src={exp.image}
                  alt={exp.heading}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className={`space-y-4 ${
                index % 2 === 1 ? 'md:order-1' : ''
              }`}>
                <h3 className="text-3xl font-bold text-foreground">{exp.heading}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
