import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Instagram, Linkedin, Youtube } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Let's Work Together
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to elevate your project? Get in touch for licensing inquiries and custom productions.
          </p>
        </div>

        <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 p-8 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-muted/50 border-primary/20 focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-muted/50 border-primary/20 focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                Project Details
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project, timeline, and licensing needs..."
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="bg-muted/50 border-primary/20 focus:border-primary resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[var(--glow-gold)] hover:shadow-[var(--glow-gold)] transition-all"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Message
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-primary/20">
            <p className="text-center text-sm text-muted-foreground mb-4">
              Connect with me
            </p>
            <div className="flex justify-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 hover:text-primary transition-colors"
                asChild
              >
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 hover:text-primary transition-colors"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 hover:text-primary transition-colors"
                asChild
              >
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;