import { Heart, Shield, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Welcome to Namatota</h2>
            <p className="text-xl text-muted-foreground">A Living Legacy: Where the Namatota Kingdom's Heritage Meets Sustainable Tourism</p>
          </div>

          <div className="space-y-8">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Nestled in the heart of Kaimana Regency, West Papua, Namatota is more than just a destination—it's a journey into Indonesia's most pristine marine environment and a window into centuries of royal heritage. Our village, recognized as the 2nd place winner in the Developing Tourism Village category at ADWI 2024, offers an authentic escape from the ordinary.
              </p>
              
              <p className="text-lg leading-relaxed">
                Located just 30-45 minutes by boat from Kaimana town, Namatota welcomes you with crystal-clear waters, vibrant coral reefs rivaling Raja Ampat, and the warm hospitality of our community. Here, you can swim alongside gentle whale sharks, discover the rare endemic walking shark, explore historical sites of the ancient Namatota Kingdom, and experience true community-based sustainable tourism.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6 bg-card rounded-lg shadow-elegant">
                <Heart className="w-12 h-12 mx-auto mb-4 text-coral" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Community First</h3>
                <p className="text-muted-foreground">
                  100% of our profits support the Namatota community and local conservation projects.
                </p>
              </div>

              <div className="text-center p-6 bg-card rounded-lg shadow-elegant">
                <Shield className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Safety Standards</h3>
                <p className="text-muted-foreground">
                  All guides are certified, boats are well-maintained, and we follow strict safety protocols.
                </p>
              </div>

              <div className="text-center p-6 bg-card rounded-lg shadow-elegant">
                <Users className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Small Groups</h3>
                <p className="text-muted-foreground">
                  Maximum 8 guests per tour to ensure personalized experiences and minimal environmental impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
