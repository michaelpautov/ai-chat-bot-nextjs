'use client';

import ChatWidget from '@/components/ChatWidget';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="pt-20 pb-8 md:pb-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
              {t('hero.title')} 
              <span className="text-indigo-600"> {t('hero.titleHighlight')}</span>
            </h1>
            <p className="text-lg sm:text-xl text-black mb-6 lg:mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#trial" 
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-block text-center"
              >
                {t('hero.tryFree')}
              </a>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 lg:mt-0">
            <div className="w-full max-w-md lg:max-w-none">
              <ChatWidget businessType="beauty" isDemo={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
