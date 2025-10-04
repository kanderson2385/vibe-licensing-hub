import { Card } from "@/components/ui/card";
import { Music2, Play } from "lucide-react";

interface Track {
  id: number;
  title: string;
  genre: string;
  duration: string;
}

const tracks: Track[] = [
  { id: 1, title: "Rock Hip Hop Example", genre: "Hip Hop / Rock", duration: "01:35" },
  { id: 2, title: "Cinematic Hip Hop Example", genre: "Cinematic / Hip Hop", duration: "01:38" },
  { id: 3, title: "Marching Band Hip Hop Example", genre: "Hip Hop / Orchestral", duration: "01:57" },
  { id: 4, title: "R&B Soul Example (With Singer Letta J)", genre: "R&B / Soul", duration: "03:06" },
  { id: 5, title: "R&B Pop Example", genre: "R&B / Pop", duration: "03:07" },
  { id: 6, title: "Aggressive Hip Hop Example", genre: "Hip Hop / Trap", duration: "02:20" },
  { id: 7, title: "Trap Hip Hop Example", genre: "Trap / Hip Hop", duration: "01:24" },
];

const DemoReel = () => {
  return (
    <section id="demos" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Sync Licensing Demos
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professionally produced tracks ready for your next project. 
            All music cleared for sync licensing.
          </p>
        </div>

        <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 p-8 backdrop-blur-sm">
          <div className="space-y-3">
            {tracks.map((track, index) => (
              <div
                key={track.id}
                className="group flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-all cursor-pointer border border-transparent hover:border-primary/30"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:shadow-[var(--glow-gold)] transition-all">
                  <Play className="w-5 h-5 text-primary" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                    {track.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{track.genre}</p>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="hidden sm:inline">{track.duration}</span>
                  <Music2 className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-lg bg-muted/30 border border-primary/10">
            <p className="text-center text-sm text-muted-foreground">
              🎵 <strong>Note:</strong> This is a demo layout. Your actual tracks will be embedded here with a professional audio player.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DemoReel;