

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Интеграции с популярными системами</h2>
          <p className="text-lg text-black">Подключаем к вашим CRM и мессенджерам за несколько минут</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* CRM Systems */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              <i className="fas fa-database text-indigo-600 mr-3"></i>
              CRM системы
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-cut text-blue-600 text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900">Altegio</h4>
                  <p className="text-sm text-gray-600">Для салонов красоты</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-handshake text-orange-600 text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900">amoCRM</h4>
                  <p className="text-sm text-gray-600">Универсальная CRM</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-briefcase text-blue-600 text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900">Bitrix24</h4>
                  <p className="text-sm text-gray-600">Для бизнеса</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-chart-line text-green-600 text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900">МойСклад</h4>
                  <p className="text-sm text-gray-600">Учет и продажи</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-store text-purple-600 text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900">RetailCRM</h4>
                  <p className="text-sm text-gray-600">Для ритейла</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-plus text-red-600 text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900">Другие</h4>
                  <p className="text-sm text-gray-600">По запросу</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Messengers */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              <i className="fas fa-comments text-green-600 mr-3"></i>
              Мессенджеры
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <i className="fab fa-whatsapp text-green-600 text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                  <p className="text-sm text-gray-600">Personal & Business</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <i className="fab fa-telegram text-blue-600 text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900">Telegram</h4>
                  <p className="text-sm text-gray-600">Боты и каналы</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <i className="fab fa-instagram text-pink-600 text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900">Instagram</h4>
                  <p className="text-sm text-gray-600">Direct Messages</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-globe text-gray-600 text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900">Веб-сайт</h4>
                  <p className="text-sm text-gray-600">Виджет на сайт</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
