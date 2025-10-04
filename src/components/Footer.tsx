import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t-2 border-foreground/10 py-12 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6">
          <img 
            src={logo} 
            alt="K3lvin Kaos" 
            className="h-16 w-auto opacity-80"
          />
          
          <div className="text-center">
            <p className="text-sm font-bold tracking-wider mb-1">
              © 2025 K3LVIN KAOS MUSIC
            </p>
            <p className="text-xs text-muted-foreground font-light tracking-wide">
              All Rights Reserved • Sync Licensing Specialist
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;