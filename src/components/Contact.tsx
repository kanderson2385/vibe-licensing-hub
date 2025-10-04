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
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4 relative">
            <div className="absolute inset-0 bg-foreground/5 clip-angular" />
            <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider px-12 py-4">
              GET IN TOUCH
            </h2>
          </div>
          <div className="w-24 h-1 bg-foreground mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Ready to license music for your project? Let's discuss how my productions can elevate your content.
          </p>
        </div>

        <Card className="bg-background border-2 border-foreground/10 p-8 md:p-12 shadow-[var(--shadow-sharp)] clip-corner">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold mb-2 tracking-wide uppercase">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-muted/50 border-2 border-foreground/10 focus:border-foreground font-light rounded-none h-12"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold mb-2 tracking-wide uppercase">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-muted/50 border-2 border-foreground/10 focus:border-foreground font-light rounded-none h-12"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold mb-2 tracking-wide uppercase">
                Project Details
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project, timeline, budget, and licensing requirements..."
                rows={8}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="bg-muted/50 border-2 border-foreground/10 focus:border-foreground resize-none font-light rounded-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-foreground hover:bg-foreground/90 text-background font-bold py-7 tracking-wider clip-corner shadow-[var(--shadow-sharp)] hover:shadow-[var(--shadow-lift)] transition-all"
            >
              <Mail className="mr-2 h-5 w-5" />
              SEND MESSAGE
            </Button>
          </form>

          {/* Social Links */}
          <div className="mt-12 pt-8 border-t-2 border-foreground/10">
            <p className="text-center text-sm font-bold tracking-wider mb-6 uppercase">
              Connect
            </p>
            <div className="flex justify-center gap-4">
              {[
                { icon: Instagram, url: "https://instagram.com" },
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Youtube, url: "https://youtube.com" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="border-2 border-foreground/10 hover:border-foreground hover:bg-foreground hover:text-background transition-all clip-corner w-12 h-12"
                    asChild
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;