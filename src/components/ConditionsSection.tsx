import { Button } from "@/components/ui/button";

const ConditionsSection = () => {
  const recommendations = [
    {
      title: "Обеспечьте приватность",
      description: "Уединитесь в таком месте, где Вас вряд ли подслушают или потревожат.",
    },
    {
      title: "Устройтесь удобно, но не слишком расслабленно",
      description: "Лучше всего разместиться на удобном стуле или кресле. Не стоит лежать в кровати.",
    },
    {
      title: "Подготовьте необходимые мелочи",
      description: "Поставьте коробку с салфетками рядом с собой. Если хотите, налейте себе стакан воды.",
    },
    {
      title: "Одежда имеет значение",
      description: "Оденьтесь на сессию так, как оделись бы на нашу личную встречу.",
    },
    {
      title: "Минимизируйте отвлекающие факторы",
      description: "Выключите или переведите в спящий режим все девайсы, кроме того, который используете для звонка.",
    },
    {
      title: "Выделите время до и после сессии",
      description: "Постарайтесь оставить себе дополнительное время перед сессией и после нее.",
    },
  ];

  return (
    <section id="conditions" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section title */}
          <div className="mb-12 text-center animate-fade-up">
            <h2 className="section-title mb-6">
              Ознакомьтесь с условиями
            </h2>
            <p className="text-foreground/70">
              Для комфортной и плодотворной работы с вами, я разработала условия
            </p>
          </div>

          {/* Recommendations */}
          <div className="mb-12">
            <h3 className="font-display text-xl text-primary mb-8 text-center">
              РЕКОМЕНДАЦИИ К ПРОВЕДЕНИЮ ДИСТАНЦИОННОЙ СЕССИИ
            </h3>
            
            <div className="space-y-8">
              {recommendations.map((item, index) => (
                <div 
                  key={index}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="font-display text-lg text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-foreground/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Signature */}
          <div className="text-center animate-fade-up delay-500">
            <p className="font-script text-2xl italic text-primary">
              Ваша Аня Ван
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConditionsSection;
