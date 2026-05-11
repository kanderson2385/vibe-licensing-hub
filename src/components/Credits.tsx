import { Button } from "@/components/ui/button";
import { ExternalLink, Award } from "lucide-react";
import loveIsland from "@/assets/credits/love-island.jpg";
import aewDynamite from "@/assets/credits/aew-dynamite.jpg";
import nflDraft from "@/assets/credits/nfl-draft.png";
import finalFour from "@/assets/credits/final-four.svg";
import redOne from "@/assets/credits/red-one.jpg";
import him from "@/assets/credits/him.jpg";
import anora from "@/assets/credits/anora.jpg";
import beatBobbyFlay from "@/assets/credits/beat-bobby-flay.jpg";

const Credits = () => {
  const placements = [
    { title: "Love Island USA", network: "Peacock", image: loveIsland },
    { title: "AEW Dynamite", network: "TBS", image: aewDynamite },
    { title: "NFL Draft 2026", network: "ESPN / NFL Network", image: nflDraft },
    { title: "NCAA Final Four", network: "CBS / TBS", image: finalFour },
    { title: "Red One", network: "Amazon MGM Studios", image: redOne },
    { title: "HIM", network: "Universal Pictures", image: him },
    { title: "Anora", network: "NEON", image: anora },
    { title: "Beat Bobby Flay", network: "Food Network", image: beatBobbyFlay },
  ];

  return (
    <section id="credits" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Credits</h2>

        <div className="text-center mb-16">
          <Award className="w-16 h-16 mx-auto mb-6 text-accent" />

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Music featured across major television networks, streaming platforms, films, and live events. View the complete production and placement history on IMDb.
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {placements.map((p, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-muted/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:border-accent/40"
            >
              <div className="aspect-[2/3] w-full overflow-hidden bg-background flex items-center justify-center">
                <img
                  src={p.image}
                  alt={`${p.title} — ${p.network}`}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/85 to-transparent p-4 pt-10">
                <h3 className="text-base font-bold leading-tight tracking-tight">{p.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{p.network}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credits;
