import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Music } from "lucide-react";

const Catalog = () => {
  return (
    <section id="catalog" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Catalog</h2>
        
        <Card className="p-12 text-center bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
          <Music className="w-16 h-16 mx-auto mb-6 text-accent" />
          
          <h3 className="text-3xl font-bold mb-4">
            Browse My Full Catalog on DISCO
          </h3>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Access hundreds of production-ready tracks across multiple genres. Stream, download, and license music for your next project.
          </p>
          
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            asChild
          >
            <a href="https://disco.ac/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              Open Catalog on DISCO
            </a>
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default Catalog;
