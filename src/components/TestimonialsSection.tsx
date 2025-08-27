export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Анна Петрова",
      business: "Салон красоты «Элегант»",
      avatar: "👩‍💼",
      rating: 5,
      text: "AI бот увеличил нашу конверсию на 40%! Клиенты записываются даже ночью, а бот автоматически отвечает на все вопросы о процедурах и ценах.",
      result: "+40% конверсия"
    },
    {
      id: 2,
      name: "Дмитрий Козлов",
      business: "Ресторан «Итальянский дворик»",
      avatar: "👨‍🍳",
      rating: 5,
      text: "Забыли про потерянные заказы! Бот принимает заказы на доставку, отвечает на вопросы о меню и даже предлагает дополнительные блюда.",
      result: "+25% заказов"
    },
    {
      id: 3,
      name: "Елена Смирнова",
      business: "Барбершоп «Джентльмен»",
      avatar: "💇‍♀️",
      rating: 5,
      text: "Клиенты в восторге от быстрых ответов! Бот помогает записаться, напоминает о визитах и рассказывает о наших услугах. Экономим 3 часа в день.",
      result: "-3 часа работы администратора"
    },
    {
      id: 4,
      name: "Михаил Волков",
      business: "Доставка еды «Быстро&Вкусно»",
      avatar: "🏍️",
      rating: 5,
      text: "Автоматизировали 80% обращений клиентов. Бот отслеживает заказы, отвечает на вопросы о доставке и помогает с оформлением.",
      result: "80% автоматизация"
    },
    {
      id: 5,
      name: "Ольга Иванова",
      business: "Фитнес-центр «Энергия»",
      avatar: "🏋️‍♀️",
      rating: 5,
      text: "Записи на тренировки теперь идут автоматически. Бот консультирует по программам, расписанию и ценам. Освободили время тренеров.",
      result: "+60% записей"
    },
    {
      id: 6,
      name: "Артем Соколов",
      business: "Автосервис «Мастер»",
      avatar: "🔧",
      rating: 5,
      text: "Клиенты могут записаться на диагностику и узнать стоимость услуг в любое время. Бот даже объясняет, что включено в каждый вид ремонта.",
      result: "+50% заявок"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Что говорят наши клиенты
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Более 500+ бизнесов уже автоматизировали общение с клиентами и увеличили продажи
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Header */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-xl mr-4">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.business}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Result badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200">
                <span className="mr-1">📈</span>
                {testimonial.result}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">500+</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Остаются с нами</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">45%</div>
              <div className="text-gray-600">Средний рост продаж</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Поддержка клиентов</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Присоединяйтесь к успешным бизнесам уже сегодня
          </p>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200">
            Начать бесплатно
          </button>
        </div>
      </div>
    </section>
  );
}
