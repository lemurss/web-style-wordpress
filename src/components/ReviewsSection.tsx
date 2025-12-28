const ReviewsSection = () => {
  const reviews = [
    {
      text: "Аня помогла мне найти себя в сложный период жизни. Благодаря её поддержке я смогла преодолеть страхи и начать новую главу.",
      author: "Мария",
    },
    {
      text: "Очень комфортно и безопасно. Чувствуешь, что тебя слышат и понимают без осуждения.",
      author: "Андрей",
    },
    {
      text: "Работа с Аней изменила мой взгляд на отношения с близкими. Научилась понимать себя и других.",
      author: "Елена",
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section title */}
          <div className="mb-16 text-center animate-fade-up">
            <h2 className="section-title">
              ОТЗЫВЫ МОИХ КЛИЕНТОВ
            </h2>
          </div>

          {/* Reviews grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="bg-background p-8 soft-shadow animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <p className="text-foreground/70 leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>
                <p className="font-display text-primary">
                  — {review.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
