import { Button } from "@/components/ui/button";
import { Music, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-primary/30 bg-card/50 backdrop-blur-sm">
          <Music className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Premium Sync Licensing</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-secondary">
            K3LVIN KAOS
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary font-light mb-4 tracking-wider">
          THE MELODIK ONE
        </p>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          High-quality music production for film, TV, commercials, and media. 
          Specializing in Hip Hop, R&B, and Cinematic compositions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-[var(--glow-gold)] hover:shadow-[var(--glow-gold)] transition-all"
            onClick={() => scrollToSection('demos')}
          >
            <Play className="mr-2 h-5 w-5" />
            Listen to Demos
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/50 text-foreground hover:bg-primary/10 font-semibold px-8 py-6 text-lg backdrop-blur-sm"
            onClick={() => scrollToSection('contact')}
          >
            Start a Project
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;