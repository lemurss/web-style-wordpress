import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroShoe from "@/assets/hero-shoe.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen hero-gradient flex items-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-widest uppercase text-sm">
                Premium Collection 2024
              </p>
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
                Step Into
                <br />
                <span className="text-gradient">Luxury</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-md leading-relaxed">
                Handcrafted excellence meets modern design. Experience footwear that defines your style.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                Shop Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Explore Collection
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-12 pt-8 border-t border-border/30">
              <div>
                <p className="font-display text-3xl font-bold text-foreground">250+</p>
                <p className="text-muted-foreground text-sm">Unique Designs</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-foreground">50K+</p>
                <p className="text-muted-foreground text-sm">Happy Customers</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-foreground">4.9</p>
                <p className="text-muted-foreground text-sm">Average Rating</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center items-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 glow-shadow rounded-full blur-2xl scale-75" />
              
              {/* Shoe Image */}
              <img
                src={heroShoe}
                alt="Premium Sneaker"
                className="relative z-10 w-full max-w-2xl animate-float drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
