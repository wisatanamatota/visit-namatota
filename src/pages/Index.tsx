import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Experiences from "@/components/Experiences";
import VideoSection from "@/components/VideoSection";
import Gallery from "@/components/Gallery";
import LocalProducts from "@/components/LocalProducts";
import InstagramFeed from "@/components/InstagramFeed";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <ValueProposition />
      <Experiences />
      <VideoSection />
      <Gallery />
      <LocalProducts />
      <InstagramFeed />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
