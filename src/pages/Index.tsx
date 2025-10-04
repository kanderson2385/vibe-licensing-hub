import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DemoReel from "@/components/DemoReel";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div id="home" className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <DemoReel />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
