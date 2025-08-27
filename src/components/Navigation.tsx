'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

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
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#examples" className="text-gray-700 hover:text-indigo-600 transition-colors">{t('nav.examples')}</a>
            <a href="#integrations" className="text-gray-700 hover:text-indigo-600 transition-colors">{t('nav.integrations')}</a>
            <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 transition-colors">{t('nav.testimonials')}</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-indigo-600 transition-colors">{t('nav.howItWorks')}</a>
            
            {/* Language switcher */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage('ru')}
                className={`px-2 py-1 rounded text-sm transition-colors ${
                  language === 'ru' 
                    ? 'bg-indigo-600 text-white' 
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                RU
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded text-sm transition-colors ${
                  language === 'en' 
                    ? 'bg-indigo-600 text-white' 
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                EN
              </button>
            </div>
            
            <a href="#trial" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">{t('nav.tryIt')}</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none focus:text-indigo-600 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a 
                href="#examples" 
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.examples')}
              </a>
              <a 
                href="#integrations" 
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.integrations')}
              </a>
              <a 
                href="#testimonials" 
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.testimonials')}
              </a>
              <a 
                href="#how-it-works" 
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.howItWorks')}
              </a>
              {/* Mobile Language switcher */}
              <div className="flex justify-center space-x-2 mx-3 my-2">
                <button
                  onClick={() => setLanguage('ru')}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    language === 'ru' 
                      ? 'bg-indigo-600 text-white' 
                      : 'text-gray-700 hover:text-indigo-600 border border-gray-300'
                  }`}
                >
                  RU
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    language === 'en' 
                      ? 'bg-indigo-600 text-white' 
                      : 'text-gray-700 hover:text-indigo-600 border border-gray-300'
                  }`}
                >
                  EN
                </button>
              </div>
              
              <a 
                href="#trial" 
                className="block mx-3 my-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.tryIt')}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
