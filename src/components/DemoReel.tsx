import { Card } from "@/components/ui/card";
import { Play, Music } from "lucide-react";

interface Track {
  id: number;
  title: string;
  genre: string;
  duration: string;
}

const tracks: Track[] = [
  { id: 1, title: "ROCK HIP HOP", genre: "Hip Hop / Rock Fusion", duration: "01:35" },
  { id: 2, title: "CINEMATIC HIP HOP", genre: "Cinematic / Hip Hop", duration: "01:38" },
  { id: 3, title: "MARCHING BAND HIP HOP", genre: "Hip Hop / Orchestral", duration: "01:57" },
  { id: 4, title: "R&B SOUL", genre: "R&B / Soul (feat. Letta J)", duration: "03:06" },
  { id: 5, title: "R&B POP", genre: "R&B / Pop", duration: "03:07" },
  { id: 6, title: "AGGRESSIVE HIP HOP", genre: "Hip Hop / Trap", duration: "02:20" },
  { id: 7, title: "TRAP HIP HOP", genre: "Trap / Hip Hop", duration: "01:24" },
];

const DemoReel = () => {
  return (
    <section id="demos" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4 relative">
            <div className="absolute inset-0 bg-foreground/5 clip-angular" />
            <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider px-12 py-4">
              DEMO REEL
            </h2>
          </div>
          <div className="w-24 h-1 bg-foreground mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Professional productions ready for sync licensing in film, TV, and commercial media.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {tracks.map((track) => (
            <Card
              key={track.id}
              className="group relative overflow-hidden bg-background border-2 border-foreground/10 hover:border-foreground transition-all cursor-pointer shadow-[var(--shadow-sharp)] hover:shadow-[var(--shadow-lift)] clip-corner"
            >
              <div className="p-6 flex items-center gap-4">
                {/* Play Button */}
                <div className="flex-shrink-0 w-16 h-16 bg-foreground text-background flex items-center justify-center group-hover:scale-110 transition-transform clip-corner">
                  <Play className="w-6 h-6 fill-current" />
                </div>
                
                {/* Track Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg mb-1 truncate tracking-wide">
                    {track.title}
                  </h3>
                  <p className="text-sm text-muted-foreground truncate">
                    {track.genre}
                  </p>
                </div>

                {/* Duration */}
                <div className="flex-shrink-0 text-sm font-mono text-muted-foreground">
                  {track.duration}
                </div>
              </div>

              {/* Angular Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Card>
          ))}
        </div>

        {/* Player Note */}
        <Card className="bg-foreground/5 border-2 border-foreground/10 p-6 clip-corner">
          <div className="flex items-start gap-4">
            <Music className="w-6 h-6 flex-shrink-0 mt-1" />
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Production Note:</strong> This layout showcases track organization. 
              Your actual demo tracks will be embedded with a professional audio player for immediate playback.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DemoReel;