import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About</h2>
        
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            K3lvin Kaos is a music producer and composer specializing in sync licensing for film, television, advertising, and digital media. With a unique sonic signature that blends cinematic production with contemporary urban sounds, every track is crafted to elevate visual storytelling.
          </p>
          
          <p>
            From high-energy trailers to emotional underscore, K3lvin Kaos delivers professional, broadcast-ready music that resonates with audiences and meets the demanding standards of today's media landscape.
          </p>
          
          <p>
            Whether you need epic hip-hop for an action sequence, smooth R&B for a commercial, or aggressive trap for a sports promo, the catalog offers versatile, licensable music ready to enhance your project.
          </p>
        </div>

        <div className="mt-12 p-8 bg-background rounded-lg shadow-[var(--shadow-elegant)]">
          <h3 className="text-2xl font-bold mb-4">Specialties</h3>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Cinematic Hip-Hop",
              "Epic Hip-Hop",
              "R&B & Soul",
              "Action/Horror Trailers",
              "Commercial Pop",
              "Sports Promos"
            ].map((specialty) => (
              <li key={specialty} className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                <span className="font-medium">{specialty}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 text-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 font-semibold"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact / Book
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
