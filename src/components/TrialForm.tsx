'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TrialForm() {
  const { t } = useLanguage();
  useEffect(() => {
    const form = document.getElementById('trial-form') as HTMLFormElement;
    if (!form) return;

    const handleSubmit = async (e: Event) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const data = {
        name: formData.get('name') as string,
        phone: formData.get('phone') as string,
        telegram: formData.get('telegram') as string,
        businessType: formData.get('businessType') as string,
        message: formData.get('message') as string,
      };

      // Валидация на клиенте
      if (!data.name || !data.businessType) {
        alert(t('trial.errorRequired') || 'Пожалуйста, заполните имя и выберите тип бизнеса');
        return;
      }

      if (!data.phone && !data.telegram) {
        alert(t('trial.errorContact') || 'Пожалуйста, укажите телефон или Telegram для связи');
        return;
      }

      const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
      const originalText = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = t('trial.sending') || 'Отправляем...';

      try {
        const response = await fetch('/api/trial', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
          alert(result.message);
          form.reset();
        } else {
          alert(result.error || t('trial.errorSending') || 'Произошла ошибка при отправке заявки');
        }
      } catch (error) {
        console.error('Form submission error:', error);
        alert(t('trial.errorSending') || 'Произошла ошибка при отправке заявки');
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }
    };

    form.addEventListener('submit', handleSubmit);
    
    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, [t]);

  return (
    <div className="max-w-lg mx-auto">
      <form id="trial-form" className="space-y-6">
        {/* Обязательное поле */}
        <div className="relative group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('trial.name')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder={t('trial.namePlaceholder') || 'Введите ваше имя'}
            required
            className="w-full px-4 py-4 rounded-xl text-gray-900 placeholder-gray-400 bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:bg-gray-100"
          />
        </div>
        
        {/* Необязательное поле */}
        <div className="relative group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('trial.phone')}
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="+7 999 123 45 67"
            className="w-full px-4 py-4 rounded-xl text-gray-900 placeholder-gray-400 bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:bg-gray-100"
          />
        </div>
        
        {/* Необязательное поле */}
        <div className="relative group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Telegram
          </label>
          <input
            type="text"
            name="telegram"
            placeholder="@username"
            className="w-full px-4 py-4 rounded-xl text-gray-900 placeholder-gray-400 bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:bg-gray-100"
          />
        </div>
        
        {/* Обязательное поле */}
        <div className="relative group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('trial.business')} <span className="text-red-500">*</span>
          </label>
          <select
            name="businessType"
            required
            className="w-full px-4 py-4 rounded-xl text-gray-900 bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:bg-gray-100 appearance-none cursor-pointer"
          >
            <option value="">{t('trial.businessPlaceholder') || 'Выберите тип бизнеса'}</option>
            <option value="beauty">{t('examples.beauty')}</option>
            <option value="barbershop">{t('examples.barbershop')}</option>
            <option value="restaurant">{t('examples.restaurant')}</option>
            <option value="delivery">{t('examples.delivery')}</option>
            <option value="other">{t('trial.businessOther') || 'Другой'}</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none mt-8">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        
        {/* Необязательное поле */}
        <div className="relative group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('trial.businessDescription') || 'О вашем бизнесе (необязательно)'}
          </label>
          <textarea
            name="message"
            placeholder={t('trial.businessDescriptionPlaceholder') || 'Расскажите кратко о вашем бизнесе...'}
            rows={4}
            className="w-full px-4 py-4 rounded-xl text-gray-900 placeholder-gray-400 bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:bg-gray-100 resize-none"
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          {t('trial.submit')}
        </button>
      </form>
      
      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-center text-sm text-gray-500">
          <span className="text-red-500 mr-1 font-medium">*</span>
          <span>{t('trial.requiredFields') || '— обязательные поля'}</span>
        </div>
        <p className="text-center text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-lg">
          💬 {t('trial.contactNote') || 'Укажите телефон или Telegram для связи'}
        </p>
      </div>
    </div>
  );
}
