import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Catalog from "@/components/Catalog";
import Shop from "@/components/Shop";
import Credits from "@/components/Credits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { pathToSection, scrollToSection } from "@/lib/sectionNav";

const Index = () => {
  const location = useLocation();
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    if (lastPath.current === location.pathname) return;
    lastPath.current = location.pathname;
    const section = pathToSection(location.pathname);
    // Defer to ensure sections are mounted
    requestAnimationFrame(() => {
      if (section === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        scrollToSection(section);
      }
    });
  }, [location.pathname]);

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
