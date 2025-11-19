import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Experiences from "@/components/Experiences";
import TourPackages from "@/components/TourPackages";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ValueProposition />
      <Experiences />
      <TourPackages />
      <Gallery />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
