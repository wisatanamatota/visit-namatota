import { Heart, Shield, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">About Namatota Eco-Adventures</h2>
            <p className="text-xl text-muted-foreground">Your trusted local partner in paradise</p>
          </div>

          <div className="space-y-8">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                We are a 100% locally-owned and operated tour company based in Kaimana, West Papua. 
                Our team consists of experienced local guides who grew up in these waters and know 
                every hidden bay, every whale shark gathering spot, and every ancient story carved 
                into the limestone cliffs.
              </p>
              
              <p className="text-lg leading-relaxed">
                Founded by members of the Namatota community, we believe that the best way to preserve 
                our paradise is to share it responsibly. Every tour we run directly supports local 
                families, funds conservation efforts, and helps protect the marine environment that 
                makes Triton Bay so special.
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
