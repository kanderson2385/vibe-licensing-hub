import { Button } from "@/components/ui/button";
import { ExternalLink, Instagram, Linkedin } from "lucide-react";
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
            <img src={logo} alt="K3lvin Kaos" className="h-48 w-auto mb-4 mx-auto lg:mx-0" />

            {/* Social Icons */}
            <div className="flex gap-4 mb-6 justify-center lg:justify-start">
              <a
                href="https://instagram.com/k3lvinkaos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://threads.net/@k3lvinkaos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Threads"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.58.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.473l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.776-6.538 2.242-1.55 1.59-2.406 4.054-2.483 7.13.077 3.076.933 5.539 2.483 7.13 1.425 1.465 3.63 2.22 6.54 2.242 2.11-.013 3.798-.529 5.013-1.534 1.34-1.11 2.09-2.89 2.168-5.13l.002-.612c-.03-2.298-.89-4.11-2.423-5.25-1.403-1.04-3.423-1.588-5.937-1.625l-.004.063c0 .526.05 1.065.15 1.603.075.408.307 1.044.7 1.603.09.126.184.243.282.353.205-.12.403-.26.593-.42 1.37-1.135 2.13-2.972 2.26-5.457l.023-.452-.452-.023c-2.484-.13-4.321.63-5.457 2.26-.345.417-.68.93-.88 1.46l-.07.18-.18.07c-2.31.897-5.004.488-6.81-1.036-1.33-1.124-1.984-2.83-1.954-5.022l.013-.652.652.013c2.19.044 3.896.694 5.021 1.936 1.165 1.286 1.61 3.11 1.321 5.43l-.07.556-.556-.07c-.63-.079-1.16-.23-1.62-.46-.98-.49-1.57-1.28-1.76-2.37-.32-1.87.69-3.56 1.38-4.4 1.57-1.95 4.12-2.96 7.39-2.91 1.17.02 2.3.17 3.36.45l.155.04.092.131c.96 1.37 1.61 3.23 1.84 5.29.15 1.32.1 2.6-.15 3.78-.61 2.83-2.22 4.96-4.66 6.05-.78.37-1.64.64-2.54.8l-.54.09-.09-.54c-.06-.35-.1-.71-.11-1.07-.57.02-1.14-.04-1.69-.18-.78-.2-1.46-.58-2.04-1.13-.84-.8-1.28-1.91-1.32-3.32-.04-1.32.34-2.53 1.12-3.54.93-1.2 2.32-1.91 4.04-2.06l.52-.05.05.52c.09.87.05 1.72-.11 2.5-.3 1.46-1.06 2.63-2.17 3.39l-.36.25-.34-.27c-.43-.34-.8-.74-1.1-1.19-.7-1.05-1.01-2.32-.91-3.7.1-1.41.66-2.66 1.6-3.6 1.3-1.3 3.22-1.96 5.7-1.96l.09.002c2.61.028 4.68.77 6.16 2.22 1.7 1.67 2.59 4.06 2.63 7.09v.005c-.03 2.53-.57 4.67-1.6 6.35-1.32 2.14-3.36 3.52-6.06 4.1-.8.17-1.67.26-2.58.27z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/keithanderson1985"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com/@k3lvinkaos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.57-1.48-3.99-4.64-3.5-7.53.31-1.92 1.44-3.62 3.04-4.72 1.64-1.08 3.69-1.48 5.63-1.19.01 1.79-.02 3.58-.04 5.37-.35-.07-.7-.16-1.04-.25-1.14-.34-2.17-1.09-2.82-2.1-.75-1.16-.95-2.61-.59-3.96.31-1.18 1.08-2.2 2.1-2.82.95-.58 2.09-.85 3.2-.78 1.19.08 2.33.55 3.2 1.3.01-1.82.01-3.64.01-5.46-.01-.05-.02-.09-.02-.14z"/>
                </svg>
              </a>
            </div>

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
                <a href="https://m.imdb.com/name/nm13329225/?ref_=ext_shr_lnk" target="_blank" rel="noopener noreferrer">
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
