const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Decorative brushstroke */}
      <div className="absolute top-20 right-10 w-28 h-7 brushstroke hidden md:block" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section title */}
          <div className="mb-16 animate-fade-up">
            <h2 className="section-title text-center md:text-left">
              <span className="font-light">/</span>ОБО МНЕ<span className="font-light">/</span>
            </h2>
          </div>

          {/* Content */}
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -top-10 -left-10 w-px h-32 bg-foreground/10 hidden md:block" />
            <div className="absolute -bottom-10 -right-10 w-px h-32 bg-foreground/10 hidden md:block" />
            
            <div className="space-y-8 animate-fade-up delay-200">
              <p className="font-script text-2xl md:text-3xl italic text-primary leading-relaxed">
                Говорят, со мной легко и не страшно говорить о сложном, 
                встречаться с собой настоящим...
              </p>

              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  Я Анна Ван, практикующий психолог с опытом более 16 лет.
                </p>
                <p>
                  Если описать себя коротко, я — женщина, которая умеет чувствовать и понимать 
                  других, но при этом оставаться устойчивой и рациональной. Мне важна свобода, 
                  жизнь, люди и отношения — я ценю их и помогаю развивать это в своих клиентах.
                </p>
              </div>

              <div className="pt-8 space-y-4">
                <h3 className="font-display text-xl tracking-wide text-primary">
                  Вот что важно для меня в работе:
                </h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Я принимаю вас такими, какие вы есть</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Я всегда стараюсь понять и поддержать ваши чувства</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Я искренна и открыта в общении</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
