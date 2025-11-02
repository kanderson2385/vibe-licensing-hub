import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Catalog from "@/components/Catalog";
import Shop from "@/components/Shop";
import Credits from "@/components/Credits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background smooth-scroll">
      <Navigation />
      <Hero />
      <About />
      <Catalog />
      <Shop />
      <Credits />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
