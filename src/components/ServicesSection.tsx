const ServicesSection = () => {
  const services = [
    {
      number: "1.",
      title: "Преодолеть последствия травм и кризисов",
    },
    {
      number: "2.",
      title: "Вернуть уверенность и повысить самооценку",
    },
    {
      number: "3.",
      title: "Найти выход из тупика (потеря смысла, неудовлетворенность)",
    },
    {
      number: "4.",
      title: "Настроить диалог в отношениях (партнер, семья, работа, с собой)",
    },
    {
      number: "5.",
      title: "Нарушения пищевого поведения",
    },
    {
      number: "6.",
      title: "Пережить развод/расставание с меньшими потерями",
    },
    {
      number: "7.",
      title: "Найти и принять себя (сепарация, самоопределение)",
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="mb-16 animate-fade-up">
            <h2 className="section-title text-center mb-6">
              В ЧЕМ Я МОГУ ВАМ ПОМОЧЬ
            </h2>
            <p className="text-center text-foreground/70 max-w-xl mx-auto">
              Если вы сейчас внутри чувствуете, что запутались, переживаете сложные 
              эмоции или хотите лучше понять себя, я могу помочь
            </p>
          </div>

          {/* Services list */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="flex items-start gap-6 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="font-script text-4xl md:text-5xl text-primary shrink-0">
                  {service.number}
                </span>
                <p className="text-lg md:text-xl text-foreground/80 pt-3">
                  {service.title}
                </p>
              </div>
            ))}
          </div>

          {/* Diploma link */}
          <div className="mt-12 text-center animate-fade-up delay-500">
            <button className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-primary hover:bg-primary/5 transition-colors duration-300 text-sm tracking-wide">
              Ознакомиться с дипломами
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
