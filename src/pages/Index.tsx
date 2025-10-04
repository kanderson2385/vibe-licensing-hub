import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DemoReel from "@/components/DemoReel";
import Genres from "@/components/Genres";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div id="home" className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <DemoReel />
      <Genres />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
