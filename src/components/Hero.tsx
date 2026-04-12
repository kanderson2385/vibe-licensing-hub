import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import heroPhoto from "@/assets/hero-photo.jpg";
import logo from "@/assets/logo.png";
import mgmLogo from "@/assets/brands/mgm.png";
import netflixLogo from "@/assets/brands/netflix.png";
import showtimeLogo from "@/assets/brands/showtime.png";
import discoveryLogo from "@/assets/brands/discovery.png";
import cbsLogo from "@/assets/brands/cbs.png";
import abcLogo from "@/assets/brands/abc.png";
import nbcLogo from "@/assets/brands/nbc.png";
import espnLogo from "@/assets/brands/espn.png";

const Hero = () => {
  const brands = [
    { name: "MGM Studios", logo: mgmLogo },
    { name: "Netflix", logo: netflixLogo },
    { name: "Showtime", logo: showtimeLogo },
    { name: "Discovery", logo: discoveryLogo },
    { name: "CBS", logo: cbsLogo },
    { name: "ABC", logo: abcLogo },
    { name: "NBC", logo: nbcLogo },
    { name: "ESPN", logo: espnLogo }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/10 rounded-lg transform translate-x-4 translate-y-4" />
              <img
                src={heroPhoto}
                alt="K3lvin Kaos - Music Producer & Composer"
                className="relative w-full rounded-lg shadow-[var(--shadow-bold)] object-cover aspect-[4/5]"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <img src={logo} alt="K3lvin Kaos" className="h-48 w-auto mb-6 mx-auto lg:mx-0" />
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Producer & Composer
            </h1>
            


            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                asChild
              >
                <a href="https://k3lvinkaosmusic.disco.ac/cat/532277120" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Listen to Catalog
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 font-semibold"
                asChild
              >
                <a href="https://www.imdb.com/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Credits
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="secondary"
                className="font-semibold"
                onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Shop
              </Button>
            </div>

            {/* Brand Logos */}
            <div className="border-t border-border/50 pt-8">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-6 font-semibold">
                Trusted By
              </p>
            <div className="grid grid-cols-4 gap-6 md:gap-8 items-center">
              {brands.map((brand) => {
                const isBoosted =
                  brand.name === "Netflix" ||
                  brand.name === "MGM Studios" ||
                  brand.name === "Amazon MGM Studios";

                return (
                  <div
                    key={brand.name}
                    className="relative flex items-center justify-center bg-transparent shadow-none border-0 outline-none ring-0 filter-none backdrop-blur-none opacity-100"
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className={`block w-full h-auto max-h-16 md:max-h-20 object-contain ${isBoosted ? "scale-[1.08] md:scale-[1.1]" : ""}`}
                    />
                  </div>
                );
              })}
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
