import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Film, Trophy, Tv, Radio } from "lucide-react";

const Credits = () => {
  const placements = [
    { brand: "Netflix", project: "Multiple Series", icon: Film, accent: "from-red-500/20 to-red-900/10" },
    { brand: "ESPN", project: "Sports Promos", icon: Trophy, accent: "from-orange-500/20 to-orange-900/10" },
    { brand: "Discovery", project: "Documentary Features", icon: Radio, accent: "from-blue-500/20 to-blue-900/10" },
    { brand: "Showtime", project: "Original Programming", icon: Tv, accent: "from-purple-500/20 to-purple-900/10" }
  ];

  return (
    <section id="credits" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Credits</h2>
        
        <div className="text-center mb-16">
          <Award className="w-16 h-16 mx-auto mb-6 text-accent" />
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Music featured across major television networks, streaming platforms, and advertising campaigns. View the complete production and placement history on IMDb.
          </p>
          
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            asChild
          >
            <a href="https://m.imdb.com/name/nm13329225/?ref_=ext_shr_lnk" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              View Full Credits on IMDb
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {placements.map((placement, index) => {
            const Icon = placement.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br ${placement.accent} p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-accent/30`}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 rounded-lg bg-accent/10 p-3 group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1 tracking-tight">{placement.brand}</h3>
                    <p className="text-muted-foreground text-base">{placement.project}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Credits;
