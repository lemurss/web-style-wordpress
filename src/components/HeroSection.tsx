import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[hsl(var(--hero-bg))] pt-20 overflow-hidden">
      {/* Decorative brushstroke top-right */}
      <div className="absolute top-20 right-[55%] w-24 h-6 bg-white/60 rotate-[-15deg] hidden md:block" />
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-left animate-fade-up">
            <div className="mb-8">
              <h1 className="font-display text-5xl md:text-7xl lg:text-[97px] tracking-[0.05em] text-[hsl(var(--hero-foreground))] leading-none mb-2">
                ПСИХОЛОГ
              </h1>
              <p className="font-script text-4xl md:text-5xl lg:text-6xl text-accent italic ml-4 md:ml-8">
                Аня Ван
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-16 animate-fade-up delay-300">
              <Button 
                variant="outline"
                size="lg" 
                className="text-sm tracking-[0.15em] px-10 py-6 border-[hsl(var(--hero-foreground))] text-[hsl(var(--hero-foreground))] bg-transparent hover:bg-[hsl(var(--hero-foreground))]/10 rounded-full"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Записаться на приём
              </Button>
            </div>
          </div>

          {/* Right side - Photo placeholder with decorative frame */}
          <div className="relative animate-fade-up delay-200">
            {/* Decorative frame corners */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-white/40" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-white/40" />
            
            {/* Brushstroke decorations */}
            <div className="absolute -top-2 right-8 w-20 h-5 bg-white/60 rotate-[-20deg]" />
            <div className="absolute -bottom-2 left-8 w-16 h-4 bg-white/60 rotate-[15deg]" />
            
            {/* Photo placeholder */}
            <div className="aspect-[3/4] bg-gradient-to-br from-gray-600 to-gray-800 relative">
              <div className="absolute inset-0 flex items-center justify-center text-white/30 text-lg">
                Фото
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
