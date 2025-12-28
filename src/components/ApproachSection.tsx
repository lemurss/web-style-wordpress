const ApproachSection = () => {
  const principles = [
    {
      title: "Принятие",
      description: "Я принимаю вас такими, какие вы есть, без осуждений и оценок. Это пространство, где можно быть собой",
    },
    {
      title: "Эмпатия",
      description: "Я действительно слушаю и понимаю, что вы чувствуете. Даже если мы поступили бы по-разному, я поддержу ваши переживания",
    },
    {
      title: "Конгруэнтность",
      description: "Я честна и открыта в работе, что создает атмосферу доверия и безопасности",
    },
  ];

  return (
    <section id="approach" className="py-24 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-px h-40 bg-foreground/10 hidden md:block" />
      <div className="absolute bottom-20 right-10 w-28 h-7 brushstroke hidden md:block" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section title */}
          <div className="mb-16 animate-fade-up">
            <h2 className="section-title text-center">
              <span className="font-light">/</span>О МОЕМ ПОДХОДЕ<span className="font-light">/</span>
            </h2>
          </div>

          {/* Introduction */}
          <div className="mb-16 animate-fade-up delay-100">
            <p className="text-center text-foreground/80 text-lg leading-relaxed">
              Моя работа строится на принципах клиент-центрированной терапии
            </p>
          </div>

          {/* Question */}
          <div className="mb-12 animate-fade-up delay-200">
            <h3 className="font-display text-2xl md:text-3xl text-primary text-center">
              Что это значит для вас?
            </h3>
          </div>

          {/* Principles */}
          <div className="space-y-10">
            {principles.map((principle, index) => (
              <div 
                key={index}
                className="animate-fade-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <h4 className="font-display text-xl text-primary mb-2">
                      {principle.title}
                    </h4>
                    <p className="text-foreground/70 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
