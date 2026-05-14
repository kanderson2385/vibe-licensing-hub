import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";
import { sectionToPath } from "@/lib/sectionNav";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavClick = (id: string) => {
    const path = sectionToPath(id);
    if (path !== window.location.pathname) {
      navigate(path);
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = ["Home", "Catalog", "Shop", "Credits", "Contact"];

  return (
    <footer className="border-t py-12 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6">
          <img 
            src={logo} 
            alt="K3lvin Kaos" 
            className="h-12 w-auto opacity-80"
          />
          
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleNavClick(link.toLowerCase())}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                {link}
              </button>
            ))}
          </nav>
          
          <div className="text-center">
            <p className="text-sm font-semibold mb-1">
              © 2026 K3lvin Kaos
            </p>
            <p className="text-xs text-muted-foreground">
              Producer & Composer • These tracks hit different.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
