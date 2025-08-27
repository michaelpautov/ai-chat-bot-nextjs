'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function HowItWorksSection() {
  const { t } = useLanguage();
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('howItWorks.title')}</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
            <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">1</div>
            <h3 className="font-bold text-xl mb-4 text-gray-900">{t('howItWorks.step1')}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{t('howItWorks.step1Description')}</p>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
            <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">2</div>
            <h3 className="font-bold text-xl mb-4 text-gray-900">{t('howItWorks.step2Training')}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{t('howItWorks.step2TrainingDescription')}</p>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
            <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">3</div>
            <h3 className="font-bold text-xl mb-4 text-gray-900">{t('howItWorks.step2')}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{t('howItWorks.step2Description')}</p>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">4</div>
            <h3 className="font-bold text-xl mb-4 text-gray-900">{t('howItWorks.step3')}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{t('howItWorks.step3Description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
