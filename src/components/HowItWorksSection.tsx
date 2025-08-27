export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Как это работает</h2>
          <p className="text-lg text-black">Простой процесс от настройки до результата</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 className="font-semibold mb-2">Настройка</h3>
            <p className="text-black text-sm">Загружаете информацию о компании и продуктах</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 className="font-semibold mb-2">Обучение</h3>
            <p className="text-black text-sm">AI изучает вашу базу знаний и готовится отвечать</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 className="font-semibold mb-2">Интеграция</h3>
            <p className="text-black text-sm">Подключаете бота к сайту или мессенджеру</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
            <h3 className="font-semibold mb-2">Результат</h3>
            <p className="text-black text-sm">Клиенты получают мгновенные ответы 24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
}
