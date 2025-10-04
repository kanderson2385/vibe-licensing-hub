import { Button } from "@/components/ui/button";
import { Play, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, black 0, black 2px, transparent 0, transparent 50%), repeating-linear-gradient(-45deg, black 0, black 2px, transparent 0, transparent 50%)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Angular Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-2 bg-foreground transform -skew-y-1" />
      <div className="absolute bottom-0 right-0 w-full h-2 bg-foreground transform skew-y-1" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo - Hero Element */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-foreground/5 blur-3xl" />
              <img 
                src={logo} 
                alt="K3lvin Kaos - The Melodik One" 
                className="relative h-48 md:h-64 lg:h-80 w-auto mx-auto"
              />
            </div>
          </div>

          {/* Tagline */}
          <div className="mb-8 inline-block relative">
            <div className="absolute -inset-4 bg-foreground/5 clip-corner" />
            <h1 className="relative text-2xl md:text-3xl font-bold tracking-[0.3em] uppercase px-8 py-3">
              Sync Licensing Specialist
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Premium music production for film, television, advertising, and digital media.
            <br />
            <span className="font-medium">Hip Hop • R&B • Cinematic • Commercial</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90 font-bold px-10 py-7 text-base tracking-wide clip-corner group shadow-[var(--shadow-sharp)] hover:shadow-[var(--shadow-lift)] transition-all"
              onClick={() => scrollToSection('demos')}
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              LISTEN TO DEMOS
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-bold px-10 py-7 text-base tracking-wide clip-corner shadow-[var(--shadow-sharp)] hover:shadow-[var(--shadow-lift)] transition-all"
              onClick={() => scrollToSection('contact')}
            >
              START A PROJECT
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection('demos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group"
      >
        <ChevronDown className="w-8 h-8 text-foreground/30 group-hover:text-foreground transition-colors" />
      </button>
    </section>
  );
};

export default Hero;