'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">{t('contact.title')}</h2>
        <p className="text-lg mb-8 opacity-90">{t('contact.subtitle')}</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {t('contact.startFree')}
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
            {t('contact.contactUs')}
          </button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <i className="fas fa-envelope text-2xl mb-2"></i>
            <p className="opacity-90">hello@aichatbot.ru</p>
          </div>
          <div>
            <i className="fas fa-phone text-2xl mb-2"></i>
            <p className="opacity-90">+7 (999) 123-45-67</p>
          </div>
          <div>
            <i className="fab fa-telegram text-2xl mb-2"></i>
            <p className="opacity-90">@aichatbot_support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
