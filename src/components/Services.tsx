import { Card } from "@/components/ui/card";
import { Film, Tv, Radio, Briefcase } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "FILM SCORING",
    description: "Original compositions and licensed tracks for feature films, documentaries, and independent cinema projects.",
  },
  {
    icon: Tv,
    title: "TV & STREAMING",
    description: "Music supervision for episodic content, reality TV, streaming series, and broadcast programming.",
  },
  {
    icon: Radio,
    title: "ADVERTISING",
    description: "Commercial-ready productions for brand campaigns, product launches, and digital advertising platforms.",
  },
  {
    icon: Briefcase,
    title: "CORPORATE MEDIA",
    description: "Professional audio for corporate videos, presentations, training materials, and brand content.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4 relative">
            <div className="absolute inset-0 bg-foreground/5 clip-angular-reverse" />
            <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider px-12 py-4">
              SERVICES
            </h2>
          </div>
          <div className="w-24 h-1 bg-foreground mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Versatile production expertise across multiple media platforms and formats.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group bg-background border-2 border-foreground/10 hover:border-foreground p-8 transition-all cursor-pointer shadow-[var(--shadow-sharp)] hover:shadow-[var(--shadow-lift)] clip-corner relative overflow-hidden"
              >
                {/* Angular accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-foreground/5 transform translate-x-10 -translate-y-10 rotate-45" />
                
                <div className="relative">
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-foreground text-background clip-corner group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 tracking-wider">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-6 w-12 h-1 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;