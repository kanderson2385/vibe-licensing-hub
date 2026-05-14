import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { SECTIONS, sectionToPath, pathToSection } from "@/lib/sectionNav";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const navigate = useNavigate();
  const location = useLocation();
  const isProgrammaticScroll = useRef(false);
  const programmaticTimeout = useRef<number | null>(null);

  useEffect(() => {
    setActiveSection(pathToSection(location.pathname));
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const current = (SECTIONS as readonly string[]).find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current && current !== activeSection) {
        setActiveSection(current);
        if (!isProgrammaticScroll.current) {
          const newPath = sectionToPath(current);
          if (newPath !== window.location.pathname) {
            window.history.replaceState(null, "", newPath);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    isProgrammaticScroll.current = true;
    if (programmaticTimeout.current) window.clearTimeout(programmaticTimeout.current);
    programmaticTimeout.current = window.setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 1000);
    const path = sectionToPath(id);
    if (path !== window.location.pathname) {
      navigate(path);
    } else {
      const el = document.getElementById(id);
      if (id === "home") window.scrollTo({ top: 0, behavior: "smooth" });
      else el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Catalog", id: "catalog" },
    { label: "Shop", id: "shop" },
    { label: "Credits", id: "credits" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-[var(--shadow-elegant)] border-b"
            : "bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => handleNavClick("home")}
              className="hover:opacity-70 transition-opacity"
            >
              <img 
                src={logo} 
                alt="K3lvin Kaos" 
                className="h-10 w-auto"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-semibold transition-colors ${
                    activeSection === item.id
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-2xl font-bold transition-colors ${
                  activeSection === item.id
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
