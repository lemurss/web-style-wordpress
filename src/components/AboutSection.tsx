const AboutSection = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <div className="relative animate-fade-up">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl card-gradient overflow-hidden card-shadow">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="font-display text-6xl text-primary/30">01</span>
                  </div>
                </div>
                <div className="aspect-square rounded-2xl card-gradient overflow-hidden card-shadow">
                  <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                    <span className="font-display text-4xl text-primary/30">02</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl card-gradient overflow-hidden card-shadow">
                  <div className="w-full h-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
                    <span className="font-display text-4xl text-primary/30">03</span>
                  </div>
                </div>
                <div className="aspect-[4/5] rounded-2xl card-gradient overflow-hidden card-shadow">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <span className="font-display text-6xl text-primary/30">04</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl card-shadow">
              <p className="font-display text-4xl font-bold">15+</p>
              <p className="text-sm opacity-80">Years of Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-widest uppercase text-sm">
                Our Story
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                Crafting Dreams,
                <br />
                <span className="text-gradient">One Step at a Time</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Since 2009, SoleCraft has been at the forefront of footwear innovation, 
                blending traditional craftsmanship with cutting-edge design to create 
                shoes that tell a story.
              </p>
              <p>
                Every pair is meticulously handcrafted by our master artisans, using 
                only the finest sustainably-sourced materials. We believe that great 
                shoes aren't just accessories—they're extensions of your personality.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-6">
              <div>
                <p className="font-display text-3xl font-bold text-foreground">100%</p>
                <p className="text-muted-foreground text-sm">Handcrafted</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-foreground">85+</p>
                <p className="text-muted-foreground text-sm">Countries</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-foreground">24/7</p>
                <p className="text-muted-foreground text-sm">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
