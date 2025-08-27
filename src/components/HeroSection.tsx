import ChatWidget from '@/components/ChatWidget';

export default function HeroSection() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Умный AI помощник для 
              <span className="text-indigo-600"> вашего бизнеса</span>
            </h1>
            <p className="text-xl text-black mb-8">
              Автоматизируйте общение с клиентами, отвечайте на вопросы 24/7 и увеличивайте конверсию с помощью нашего AI бота
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                Попробовать бесплатно
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Посмотреть демо
              </button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <ChatWidget businessType="beauty" isDemo={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
