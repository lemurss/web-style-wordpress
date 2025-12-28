const FormatSection = () => {
  return (
    <section id="format" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section title */}
          <div className="mb-12 animate-fade-up">
            <h2 className="section-title">
              <span className="font-light">/</span>ФОРМАТ ВСТРЕЧИ<span className="font-light">/</span>
            </h2>
          </div>

          {/* Online format */}
          <div className="animate-fade-up delay-100">
            <p className="font-script text-4xl md:text-5xl lg:text-6xl italic text-primary mb-8">
              Онлайн
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed max-w-xl mx-auto">
              Удобный способ получить необходимую помощь психолога без дополнительных 
              временных затрат на посещение кабинета
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormatSection;
