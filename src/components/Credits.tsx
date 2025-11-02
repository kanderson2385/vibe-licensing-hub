import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Award } from "lucide-react";

const Credits = () => {
  const placements = [
    { brand: "Netflix", project: "Multiple Series" },
    { brand: "ESPN", project: "Sports Promos" },
    { brand: "Discovery", project: "Documentary Features" },
    { brand: "Showtime", project: "Original Programming" }
  ];

  return (
    <section id="credits" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Credits</h2>
        
        <div className="text-center mb-12">
          <Award className="w-16 h-16 mx-auto mb-6 text-accent" />
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Music featured across major television networks, streaming platforms, and advertising campaigns. View the complete production and placement history on IMDb.
          </p>
          
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            asChild
          >
            <a href="https://www.imdb.com/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              View Full Credits on IMDb
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {placements.map((placement, index) => (
            <Card key={index} className="p-6 bg-muted/30">
              <h3 className="text-xl font-bold mb-2">{placement.brand}</h3>
              <p className="text-muted-foreground">{placement.project}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credits;
