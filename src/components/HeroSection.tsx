import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Decorative brushstroke */}
      <div className="absolute top-32 left-10 w-32 h-8 brushstroke hidden md:block" />
      
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name with decorative brackets */}
          <div className="mb-16 animate-fade-up">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-[0.1em] text-primary mb-4">
              <span className="font-light">/</span>ПСИХОЛОГ<span className="font-light">/</span>
            </h1>
          </div>

          {/* Script tagline */}
          <div className="mb-12 animate-fade-up delay-200">
            <p className="font-script text-2xl md:text-3xl lg:text-4xl italic text-primary leading-relaxed">
              Говорят, со мной легко и не страшно 
              <br className="hidden md:block" />
              говорить о сложном, встречаться с собой настоящим...
            </p>
          </div>

          {/* Decorative frame with brushstroke */}
          <div className="relative py-20 mb-12 animate-fade-up delay-300">
            {/* Top-left corner */}
            <div className="absolute top-0 left-1/4 w-px h-20 bg-foreground/20" />
            <div className="absolute top-0 left-1/4 w-20 h-px bg-foreground/20" />
            
            {/* Bottom-right corner */}
            <div className="absolute bottom-0 right-1/4 w-px h-20 bg-foreground/20" />
            <div className="absolute bottom-0 right-1/4 w-20 h-px bg-foreground/20" />
            
            {/* Brushstroke accent */}
            <div className="absolute top-10 right-1/4 w-24 h-6 brushstroke" />
          </div>

          {/* CTA Button */}
          <div className="animate-fade-up delay-400">
            <Button 
              size="lg" 
              className="text-sm tracking-[0.2em] px-10 py-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              ЗАПИСАТЬСЯ
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom navigation hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in delay-500">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <div className="w-px h-10 bg-muted-foreground/30" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
