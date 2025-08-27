import TrialForm from '@/components/TrialForm';

export default function TrialSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 border border-gray-100">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-6">
              <span className="text-2xl">🎁</span>
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Бесплатный пробный период 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> 7 дней</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Оставьте контакт и мы свяжемся с вами для настройки AI бота
            </p>
          </div>
          
          <TrialForm />
        </div>
      </div>
    </section>
  );
}
