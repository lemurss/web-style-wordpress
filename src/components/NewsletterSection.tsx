import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to SoleCraft!",
        description: "You've been added to our exclusive list.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-24 hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-up">
          <div className="space-y-4">
            <p className="text-primary font-medium tracking-widest uppercase text-sm">
              Stay Connected
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Join the <span className="text-gradient">SoleCraft</span> Family
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Subscribe to receive exclusive offers, early access to new collections, 
              and insider styling tips.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              required
            />
            <Button type="submit" variant="hero" size="xl" className="shrink-0">
              Subscribe
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </form>

          <p className="text-muted-foreground text-sm">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
