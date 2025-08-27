export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <i className="fas fa-robot text-2xl text-indigo-600 mr-2"></i>
              <span className="font-bold text-xl text-gray-900">AI ChatBot</span>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-indigo-600 transition-colors">Возможности</a>
            <a href="#examples" className="text-gray-700 hover:text-indigo-600 transition-colors">Примеры</a>
            <a href="#integrations" className="text-gray-700 hover:text-indigo-600 transition-colors">Интеграции</a>
            <a href="#contact" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">Связаться</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
