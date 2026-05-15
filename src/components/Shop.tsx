import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Shop = () => {
  const products = [
    {
      category: "SERVICE",
      title: "The Creators Stack",
      description:
        "I'll build you a professional music website using the same AI-powered tech stack I use — Lovable, Claude Code, GitHub, Netlify, and Cloudflare. Clean, fast, and yours for under $100/year to maintain.",
      cta: "Book a Consult",
      link: "https://calendly.com/kaos4beats/30min",
    },
    {
      category: "DIGITAL PRODUCT",
      title: "Sync Intelligence Report",
      description:
        "Turn your placements into proof. A professionally designed data report that visualizes your sync credits, catalog strengths, and placement history. Built for music creators who want to pitch smarter.",
      cta: "Get the Report",
      link: "https://k3lvinkaos.gumroad.com/l/vpqobe",
    },
    {
      category: "THIS WEEK",
      title: "The Drop",
      description:
        "A new release every week — beats, sound packs, vinyl, and more. Check back often.\n\nTHIS WEEK: The $84/Year Website Blueprint — the exact steps I used to cut my website costs from $496 to $84/year. Free this week only.",
      cta: "Get It Now",
      link: "https://k3lvinkaos.gumroad.com/l/jhmyds",
    },
  ];

  return (
    <section id="shop" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Shop</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Featured premium teaser card */}
          <Card className="overflow-hidden bg-foreground text-background border-foreground/20 shadow-[var(--shadow-elegant)] flex flex-col">
            <div className="p-6 flex flex-col h-full">
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
                COMING SOON
              </p>
              <h3 className="text-2xl font-bold mb-3 leading-tight">
                SoundOS: Run Your Sound Like A System
              </h3>
              <p className="text-sm text-background/70 mb-6 flex-grow">
                A complete operating system for music creators — built for producers who think in systems.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  window.open("https://docs.google.com/forms/d/e/1FAIpQLSfo5qoNCFKdwIdpBtCrZi5VEHQp9dlPXnN-22Dqv0l-zm6OKA/viewform?usp=publish-editor", "_blank");
                }}
                className="space-y-3 mt-auto"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus-visible:ring-accent"
                />
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Join the Waitlist
                </Button>
              </form>
            </div>
          </Card>

          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-shadow flex flex-col"
            >
              <div className="p-6 flex flex-col h-full">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
                  {product.category}
                </p>
                <h3 className="text-2xl font-bold mb-3 leading-tight">
                  {product.title}
                </h3>
                <div className="text-sm text-muted-foreground mb-6 flex-grow space-y-3">
                  {product.description.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 mt-auto" asChild>
                  <a href={product.link}>{product.cta}</a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
