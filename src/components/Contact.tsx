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
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.58.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.473l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.776-6.538 2.242-1.55 1.59-2.406 4.054-2.483 7.13.077 3.076.933 5.539 2.483 7.13 1.425 1.465 3.63 2.22 6.54 2.242 2.11-.013 3.798-.529 5.013-1.534 1.34-1.11 2.09-2.89 2.168-5.13l.002-.612c-.03-2.298-.89-4.11-2.423-5.25-1.403-1.04-3.423-1.588-5.937-1.625l-.004.063c0 .526.05 1.065.15 1.603.075.408.307 1.044.7 1.603.09.126.184.243.282.353.205-.12.403-.26.593-.42 1.37-1.135 2.13-2.972 2.26-5.457l.023-.452-.452-.023c-2.484-.13-4.321.63-5.457 2.26-.345.417-.68.93-.88 1.46l-.07.18-.18.07c-2.31.897-5.004.488-6.81-1.036-1.33-1.124-1.984-2.83-1.954-5.022l.013-.652.652.013c2.19.044 3.896.694 5.021 1.936 1.165 1.286 1.61 3.11 1.321 5.43l-.07.556-.556-.07c-.63-.079-1.16-.23-1.62-.46-.98-.49-1.57-1.28-1.76-2.37-.32-1.87.69-3.56 1.38-4.4 1.57-1.95 4.12-2.96 7.39-2.91 1.17.02 2.3.17 3.36.45l.155.04.092.131c.96 1.37 1.61 3.23 1.84 5.29.15 1.32.1 2.6-.15 3.78-.61 2.83-2.22 4.96-4.66 6.05-.78.37-1.64.64-2.54.8l-.54.09-.09-.54c-.06-.35-.1-.71-.11-1.07-.57.02-1.14-.04-1.69-.18-.78-.2-1.46-.58-2.04-1.13-.84-.8-1.28-1.91-1.32-3.32-.04-1.32.34-2.53 1.12-3.54.93-1.2 2.32-1.91 4.04-2.06l.52-.05.05.52c.09.87.05 1.72-.11 2.5-.3 1.46-1.06 2.63-2.17 3.39l-.36.25-.34-.27c-.43-.34-.8-.74-1.1-1.19-.7-1.05-1.01-2.32-.91-3.7.1-1.41.66-2.66 1.6-3.6 1.3-1.3 3.22-1.96 5.7-1.96l.09.002c2.61.028 4.68.77 6.16 2.22 1.7 1.67 2.59 4.06 2.63 7.09v.005c-.03 2.53-.57 4.67-1.6 6.35-1.32 2.14-3.36 3.52-6.06 4.1-.8.17-1.67.26-2.58.27z"/>
                  </svg>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://tiktok.com/@k3lvinkaos" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="inline-flex items-center justify-center">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.57-1.48-3.99-4.64-3.5-7.53.31-1.92 1.44-3.62 3.04-4.72 1.64-1.08 3.69-1.48 5.63-1.19.01 1.79-.02 3.58-.04 5.37-.35-.07-.7-.16-1.04-.25-1.14-.34-2.17-1.09-2.82-2.1-.75-1.16-.95-2.61-.59-3.96.31-1.18 1.08-2.2 2.1-2.82.95-.58 2.09-.85 3.2-.78 1.19.08 2.33.55 3.2 1.3.01-1.82.01-3.64.01-5.46-.01-.05-.02-.09-.02-.14z"/>
                  </svg>
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