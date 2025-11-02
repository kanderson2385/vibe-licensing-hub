import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingBag, Music2 } from "lucide-react";

const Shop = () => {
  const products = [
    {
      category: "Merch",
      title: "K3lvin Kaos T-Shirt",
      description: "Premium cotton tee with exclusive logo design",
      price: "$29.99",
      link: "/shop"
    },
    {
      category: "Merch",
      title: "Limited Edition Hoodie",
      description: "Comfortable hoodie with embroidered branding",
      price: "$59.99",
      link: "/shop"
    },
    {
      category: "Presets",
      title: "Cinematic Hip-Hop Bank",
      description: "100+ production-ready presets for epic tracks",
      price: "$49.99",
      link: "/shop"
    },
    {
      category: "Presets",
      title: "R&B Soul Pack",
      description: "Smooth sounds and lush textures for R&B production",
      price: "$39.99",
      link: "/shop"
    }
  ];

  return (
    <section id="shop" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Shop</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                {product.category === "Merch" ? (
                  <ShoppingBag className="w-16 h-16 text-muted-foreground" />
                ) : (
                  <Music2 className="w-16 h-16 text-muted-foreground" />
                )}
              </div>
              
              <div className="p-6">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                  {product.category}
                </p>
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{product.price}</span>
                  <Button size="sm" className="bg-accent hover:bg-accent/90" asChild>
                    <a href={product.link}>Buy</a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
