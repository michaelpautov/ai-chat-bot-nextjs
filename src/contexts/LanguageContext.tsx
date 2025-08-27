'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ru: {
    // Navigation
    'nav.examples': 'Примеры',
    'nav.integrations': 'Интеграции', 
    'nav.testimonials': 'Отзывы',
    'nav.howItWorks': 'Как это работает',
    'nav.tryIt': 'Попробовать',
    
    // Hero Section
    'hero.title': 'Умный AI помощник для',
    'hero.titleHighlight': 'вашего бизнеса',
    'hero.subtitle': 'Автоматизируйте общение с клиентами, отвечайте на вопросы 24/7 и увеличивайте конверсию с помощью нашего AI бота',
    'hero.tryFree': 'Попробовать бесплатно',
    
    // Examples Section
    'examples.title': 'Попробуйте AI бота прямо сейчас',
    'examples.subtitle': 'Выберите тип бизнеса и пообщайтесь с умным помощником',
    'examples.beauty': 'Салон красоты',
    'examples.beautyShort': 'Салон',
    'examples.restaurant': 'Ресторан',
    'examples.delivery': 'Доставка еды',
    'examples.deliveryShort': 'Доставка',
    'examples.barbershop': 'Барбершоп',
    
    // Chat Widget
    'chat.placeholder': 'Напишите сообщение...',
    'chat.send': 'Отправить',
    'chat.thinking': 'Думаю...',
    'chat.error': 'Извините, произошла ошибка. Попробуйте еще раз.',
    'chat.title.beauty': 'AI ChatBot - Салон красоты',
    'chat.title.restaurant': 'AI ChatBot - Ресторан',
    'chat.title.delivery': 'AI ChatBot - Доставка еды',
    'chat.title.barbershop': 'AI ChatBot - Барбершоп',
    'chat.welcome.beauty': 'Привет! Я AI помощник салона красоты. Помогу записаться на услуги. На что хотите записаться? 💇‍♀️',
    'chat.welcome.restaurant': 'Добро пожаловать в ресторан "Вкус"! Помогу забронировать столик. На какое время и сколько персон? 🍽️',
    'chat.welcome.delivery': 'Привет! Добро пожаловать в "Быструю Еду"! Что будете заказывать? 🍕',
    'chat.welcome.barbershop': 'Добро пожаловать в барбершоп "Стиль"! На какие услуги хотите записаться? ✂️',
    
    // Trial Section
    'trial.title': 'Бесплатный пробный период 7 дней',
    'trial.subtitle': 'Оставьте контакт и мы свяжемся с вами для настройки AI бота',
    'trial.name': 'Имя',
    'trial.email': 'Email',
    'trial.phone': 'Телефон',
    'trial.business': 'Тип бизнеса',
    'trial.submit': 'Получить пробный период',
    'trial.namePlaceholder': 'Введите ваше имя',
    'trial.businessPlaceholder': 'Выберите тип бизнеса',
    'trial.businessOther': 'Другой',
    'trial.businessDescription': 'О вашем бизнесе (необязательно)',
    'trial.businessDescriptionPlaceholder': 'Расскажите кратко о вашем бизнесе...',
    'trial.errorRequired': 'Пожалуйста, заполните имя и выберите тип бизнеса',
    'trial.errorContact': 'Пожалуйста, укажите телефон или Telegram для связи',
    'trial.sending': 'Отправляем...',
    'trial.errorSending': 'Произошла ошибка при отправке заявки',
    'trial.requiredFields': '— обязательные поля',
    'trial.contactNote': 'Укажите телефон или Telegram для связи',
    
    // How It Works
    'howItWorks.title': 'Как это работает',
    'howItWorks.step1': 'Настройка',
    'howItWorks.step1Description': 'Анализируем ваш бизнес, изучаем FAQ, услуги и особенности работы. Настраиваем персонализированные сценарии общения с клиентами.',
    'howItWorks.step2Training': 'Обучение',
    'howItWorks.step2TrainingDescription': 'Обучаем AI на данных вашего бизнеса: прайс-листы, расписание, политика компании. Тестируем различные сценарии общения.',
    'howItWorks.step2': 'Интеграция', 
    'howItWorks.step2Description': 'Подключаем бота к вашему сайту, CRM-системе и мессенджерам. Настраиваем автоматическую синхронизацию данных.',
    'howItWorks.step3': 'Результат',
    'howItWorks.step3Description': 'Получаете умного помощника, который работает 24/7, отвечает на вопросы клиентов, принимает заказы и увеличивает продажи.',
    
    // Testimonials
    'testimonials.title': 'Что говорят наши клиенты',
    'testimonials.stats.clients': 'Довольных клиентов',
    'testimonials.stats.retention': 'Остаются с нами', 
    'testimonials.stats.growth': 'Средний рост продаж',
    'testimonials.stats.support': 'Поддержка клиентов',
    
    // Integrations
    'integrations.title': 'Интеграции с популярными системами',
    'integrations.subtitle': 'Подключаем к вашим CRM и мессенджерам за несколько минут',
    
    // Footer
    'footer.rights': 'Все права защищены'
  },
  en: {
    // Navigation
    'nav.examples': 'Examples',
    'nav.integrations': 'Integrations',
    'nav.testimonials': 'Testimonials', 
    'nav.howItWorks': 'How It Works',
    'nav.tryIt': 'Try It',
    
    // Hero Section
    'hero.title': 'Smart AI assistant for',
    'hero.titleHighlight': 'your business',
    'hero.subtitle': 'Automate customer communication, answer questions 24/7 and increase conversion with our AI bot',
    'hero.tryFree': 'Try for free',
    
    // Examples Section
    'examples.title': 'Try AI bot right now',
    'examples.subtitle': 'Choose business type and chat with smart assistant',
    'examples.beauty': 'Beauty Salon',
    'examples.beautyShort': 'Salon',
    'examples.restaurant': 'Restaurant',
    'examples.delivery': 'Food Delivery',
    'examples.deliveryShort': 'Delivery',
    'examples.barbershop': 'Barbershop',
    
    // Chat Widget
    'chat.placeholder': 'Type your message...',
    'chat.send': 'Send',
    'chat.thinking': 'Thinking...',
    'chat.error': 'Sorry, an error occurred. Please try again.',
    'chat.title.beauty': 'AI ChatBot - Beauty Salon',
    'chat.title.restaurant': 'AI ChatBot - Restaurant',
    'chat.title.delivery': 'AI ChatBot - Food Delivery',
    'chat.title.barbershop': 'AI ChatBot - Barbershop',
    'chat.welcome.beauty': 'Hello! I\'m an AI assistant for the beauty salon. I\'ll help you book services. What would you like to book? 💇‍♀️',
    'chat.welcome.restaurant': 'Welcome to "Taste" restaurant! I\'ll help you book a table. What time and how many people? 🍽️',
    'chat.welcome.delivery': 'Hello! Welcome to "Fast Food"! What would you like to order? 🍕',
    'chat.welcome.barbershop': 'Welcome to "Style" barbershop! What services would you like to book? ✂️',
    
    // Trial Section
    'trial.title': 'Free 7-day trial period',
    'trial.subtitle': 'Leave your contact and we will reach out to set up your AI bot',
    'trial.name': 'Name',
    'trial.email': 'Email',
    'trial.phone': 'Phone',
    'trial.business': 'Business Type',
    'trial.submit': 'Get Trial Period',
    'trial.namePlaceholder': 'Enter your name',
    'trial.businessPlaceholder': 'Select business type',
    'trial.businessOther': 'Other',
    'trial.businessDescription': 'About your business (optional)',
    'trial.businessDescriptionPlaceholder': 'Tell us briefly about your business...',
    'trial.errorRequired': 'Please fill in name and select business type',
    'trial.errorContact': 'Please provide phone or Telegram for contact',
    'trial.sending': 'Sending...',
    'trial.errorSending': 'Error occurred while sending request',
    'trial.requiredFields': '— required fields',
    'trial.contactNote': 'Provide phone or Telegram for contact',
    
    // How It Works
    'howItWorks.title': 'How It Works',
    'howItWorks.step1': 'Setup',
    'howItWorks.step1Description': 'We analyze your business, study FAQ, services and work specifics. Set up personalized customer communication scenarios.',
    'howItWorks.step2Training': 'Training',
    'howItWorks.step2TrainingDescription': 'Train AI on your business data: price lists, schedule, company policy. Test various communication scenarios.',
    'howItWorks.step2': 'Integration',
    'howItWorks.step2Description': 'Connect the bot to your website, CRM system and messengers. Set up automatic data synchronization.',
    'howItWorks.step3': 'Results',
    'howItWorks.step3Description': 'Get a smart assistant that works 24/7, answers customer questions, takes orders and increases sales.',
    
    // Testimonials
    'testimonials.title': 'What our clients say',
    'testimonials.stats.clients': 'Happy clients',
    'testimonials.stats.retention': 'Stay with us',
    'testimonials.stats.growth': 'Average sales growth', 
    'testimonials.stats.support': 'Customer support',
    
    // Integrations
    'integrations.title': 'Integrations with popular systems',
    'integrations.subtitle': 'Connect to your CRM and messengers in minutes',
    
    // Footer
    'footer.rights': 'All rights reserved'
  }
};

function detectBrowserLanguage(): Language {
  if (typeof window === 'undefined') return 'ru';
  
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('ru')) return 'ru';
  return 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'ru' || savedLang === 'en')) {
      setLanguage(savedLang);
    } else {
      const detectedLang = detectBrowserLanguage();
      setLanguage(detectedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
