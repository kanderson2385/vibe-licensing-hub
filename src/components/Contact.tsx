import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Instagram, Linkedin } from "lucide-react";
import threadsLogo from "@/assets/social/threads.png";
import tiktokLogo from "@/assets/social/tiktok.png";
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
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Contact</h2>
        
        <Card className="p-8 md:p-12 shadow-[var(--shadow-elegant)]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Message
            </Button>
          </form>

          <div className="mt-12 pt-8 border-t">
            <p className="text-center text-sm font-semibold mb-6">
              Or reach out directly
            </p>
            <div className="text-center mb-6">
              <a 
                href="mailto:info@k3lvinkaosmusic.com" 
                className="text-accent hover:underline font-medium"
              >
                info@k3lvinkaosmusic.com
              </a>
            </div>
            <div className="flex justify-center gap-4">
              {[
                { icon: Instagram, url: "https://instagram.com/k3lvinkaos", label: "Instagram" },
                { icon: Linkedin, url: "https://linkedin.com/in/keithanderson1985", label: "LinkedIn" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                );
              })}
              <Button variant="outline" size="icon" asChild>
                <a href="https://threads.net/@k3lvinkaos" target="_blank" rel="noopener noreferrer" aria-label="Threads" className="inline-flex items-center justify-center">
                  <img src={threadsLogo} alt="Threads" className="h-5 w-5 object-contain dark:invert" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://tiktok.com/@k3lvinkaos" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="inline-flex items-center justify-center">
                  <img src={tiktokLogo} alt="TikTok" className="h-5 w-5 object-contain" />
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