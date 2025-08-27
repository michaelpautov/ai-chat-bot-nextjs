'use client';

import TrialForm from '@/components/TrialForm';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TrialSection() {
  const { t } = useLanguage();
  return (
    <section id="trial" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-2xl rounded-3xl p-6 md:p-8 lg:p-12 border border-gray-100">
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-4 md:mb-6">
              <span className="text-xl md:text-2xl">🎁</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('trial.title')}
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t('trial.subtitle')}
            </p>
          </div>
          
          <TrialForm />
        </div>
      </div>
    </section>
  );
}
