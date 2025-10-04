import { Card } from "@/components/ui/card";
import { Music, Mic2, Film, Radio } from "lucide-react";

const genres = [
  {
    icon: Music,
    title: "Hip Hop & Trap",
    description: "Hard-hitting beats with modern production techniques perfect for urban content and commercials.",
    tracks: "50+ tracks"
  },
  {
    icon: Mic2,
    title: "R&B & Soul",
    description: "Smooth, emotive productions with professional vocalists for lifestyle and romantic scenes.",
    tracks: "30+ tracks"
  },
  {
    icon: Film,
    title: "Cinematic",
    description: "Epic orchestral arrangements and atmospheric soundscapes for trailers and dramatic content.",
    tracks: "25+ tracks"
  },
  {
    icon: Radio,
    title: "Pop & Commercial",
    description: "Radio-ready productions optimized for advertising, podcasts, and promotional content.",
    tracks: "40+ tracks"
  },
];

const Genres = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
              Genre Expertise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Versatile production across multiple genres, all professionally mixed and mastered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {genres.map((genre, index) => {
            const Icon = genre.icon;
            return (
              <Card
                key={index}
                className="group bg-gradient-to-br from-card to-card/30 border-primary/20 p-8 hover:border-primary/50 transition-all hover:shadow-[var(--glow-purple)] cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:shadow-[var(--glow-gold)] transition-all">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {genre.title}
                    </h3>
                    <p className="text-muted-foreground mb-3 leading-relaxed">
                      {genre.description}
                    </p>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {genre.tracks}
                    </span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Genres;