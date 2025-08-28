'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <i className="fas fa-robot text-xl mr-2"></i>
            <span className="font-bold">AI ChatBot</span>
          </div>
          <div className="text-sm text-gray-400">
            © 2024 AI ChatBot. {t('footer.rights')}
          </div>
        </div>
      </div>
    </footer>
  );
}
