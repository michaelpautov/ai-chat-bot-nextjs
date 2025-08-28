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
    'examples.autorepair': 'Автосервис',
    'examples.courses': 'Курсы английского',
    
    // Chat Widget
    'chat.placeholder': 'Напишите сообщение...',
    'chat.send': 'Отправить',
    'chat.thinking': 'Думаю...',
    'chat.error': 'Извините, произошла ошибка. Попробуйте еще раз.',
    'chat.title.beauty': 'AI ChatBot - Салон красоты',
    'chat.title.restaurant': 'AI ChatBot - Ресторан',
    'chat.title.delivery': 'AI ChatBot - Доставка еды',
    'chat.title.barbershop': 'AI ChatBot - Барбершоп',
    'chat.title.autorepair': 'AI ChatBot - Автосервис',
    'chat.title.courses': 'AI ChatBot - Курсы английского',
    'chat.welcome.beauty': 'Привет! Я AI помощник салона красоты. Помогу записаться на услуги. На что хотите записаться? 💇‍♀️',
    'chat.welcome.restaurant': 'Добро пожаловать в ресторан "Вкус"! Помогу забронировать столик. На какое время и сколько персон? 🍽️',
    'chat.welcome.delivery': 'Привет! Добро пожаловать в "Быструю Еду"! Что будете заказывать? 🍕',
    'chat.welcome.barbershop': 'Добро пожаловать в барбершоп "Стиль"! На какие услуги хотите записаться? ✂️',
    'chat.welcome.autorepair': 'Добро пожаловать в автосервис "Мастер"! Какие проблемы с автомобилем нужно решить? 🔧',
    'chat.welcome.courses': 'Привет! Добро пожаловать в школу английского "SpeakUp"! Помогу выбрать курс и записаться на занятия. 📚',
    
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
    
    // Testimonials data
    'testimonials.anna.name': 'Анна Петрова',
    'testimonials.anna.business': 'Салон красоты «Элегант»',
    'testimonials.anna.text': 'AI бот увеличил нашу конверсию на 40%! Клиенты записываются даже ночью, а бот автоматически отвечает на все вопросы о процедурах и ценах.',
    'testimonials.anna.result': '+40% конверсия',
    
    'testimonials.dmitry.name': 'Дмитрий Козлов',
    'testimonials.dmitry.business': 'Ресторан «Итальянский дворик»',
    'testimonials.dmitry.text': 'Забыли про потерянные заказы! Бот принимает заказы на доставку, отвечает на вопросы о меню и даже предлагает дополнительные блюда.',
    'testimonials.dmitry.result': '+25% заказов',
    
    'testimonials.elena.name': 'Елена Смирнова',
    'testimonials.elena.business': 'Барбершоп «Джентльмен»',
    'testimonials.elena.text': 'Клиенты в восторге от быстрых ответов! Бот помогает записаться, напоминает о визитах и рассказывает о наших услугах. Экономим 3 часа в день.',
    'testimonials.elena.result': '-3 часа работы администратора',
    
    'testimonials.mikhail.name': 'Михаил Волков',
    'testimonials.mikhail.business': 'Доставка еды «Быстро&Вкусно»',
    'testimonials.mikhail.text': 'Автоматизировали 80% обращений клиентов. Бот отслеживает заказы, отвечает на вопросы о доставке и помогает с оформлением.',
    'testimonials.mikhail.result': '80% автоматизация',
    
    'testimonials.olga.name': 'Ольга Иванова',
    'testimonials.olga.business': 'Фитнес-центр «Энергия»',
    'testimonials.olga.text': 'Записи на тренировки теперь идут автоматически. Бот консультирует по программам, расписанию и ценам. Освободили время тренеров.',
    'testimonials.olga.result': '+60% записей',
    
    'testimonials.artem.name': 'Артем Соколов',
    'testimonials.artem.business': 'Автосервис «Мастер»',
    'testimonials.artem.text': 'Клиенты могут записаться на диагностику и узнать стоимость услуг в любое время. Бот даже объясняет, что включено в каждый вид ремонта.',
    'testimonials.artem.result': '+50% заявок',
    
    // Integrations
    'integrations.title': 'Интеграции с популярными системами',
    'integrations.subtitle': 'Подключаем к вашим CRM и мессенджерам за несколько минут',
    'integrations.crm.title': 'CRM системы',
    'integrations.messengers.title': 'Мессенджеры',
    'integrations.crm.altegio.description': 'Для салонов красоты',
    'integrations.crm.amocrm.description': 'Универсальная CRM',
    'integrations.crm.bitrix.description': 'Для бизнеса',
    'integrations.crm.moysklad.description': 'Учет и продажи',
    'integrations.crm.retailcrm.description': 'Для ритейла',
    'integrations.crm.other.title': 'Другие',
    'integrations.crm.other.description': 'По запросу',
    'integrations.messengers.whatsapp.description': 'Personal & Business',
    'integrations.messengers.telegram.description': 'Боты и каналы',
    'integrations.messengers.instagram.description': 'Direct Messages',
    'integrations.messengers.website.title': 'Веб-сайт',
    'integrations.messengers.website.description': 'Виджет на сайт',
    
    // Footer
    'footer.rights': 'Все права защищены',
    
    // Contact Section
    'contact.title': 'Готовы попробовать?',
    'contact.subtitle': 'Запустите AI бота для вашего бизнеса уже сегодня',
    'contact.startFree': 'Начать бесплатно',
    'contact.contactUs': 'Связаться с нами',
    
    // Chat Widget Internal Processes
    'chat.process.analyzing': '🔍 Анализ запроса клиента',
    'chat.process.crm': '📊 Запрос данных из CRM о свободных мастерах',
    'chat.process.schedule': '⏰ Проверка расписания на ближайшие дни',
    'chat.process.prices': '💰 Получение актуальных цен на услуги',
    'chat.process.findTime': '📅 Поиск оптимального времени записи',
    'chat.process.proposal': '✅ Формирование предложения для клиента',
    
    // Barbershop processes
    'chat.process.barbershop.analyzing': '🔍 Обработка запроса на услуги барбершопа',
    'chat.process.barbershop.barbers': '👨‍💼 Запрос списка доступных барберов',
    'chat.process.barbershop.schedule': '⏰ Проверка свободных слотов в расписании',
    'chat.process.barbershop.services': '✂️ Получение информации о типах стрижек',
    'chat.process.barbershop.prices': '💵 Расчет стоимости услуг',
    'chat.process.barbershop.booking': '📝 Подготовка вариантов записи',
    
    // Restaurant processes
    'chat.process.restaurant.analyzing': '🍽️ Анализ запроса на бронирование',
    'chat.process.restaurant.load': '🏪 Проверка загруженности ресторана',
    'chat.process.restaurant.tables': '🪑 Поиск свободных столиков',
    'chat.process.restaurant.menu': '📋 Проверка актуального меню',
    'chat.process.restaurant.special': '🎉 Учет особых пожеланий (банкет, день рождения)',
    'chat.process.restaurant.booking': '📞 Подготовка предложения по бронированию',
    
    // Delivery processes
    'chat.process.delivery.analyzing': '🍕 Обработка заказа на доставку',
    'chat.process.delivery.availability': '📦 Проверка наличия блюд в меню',
    'chat.process.delivery.time': '🏠 Расчет времени доставки по адресу',
    'chat.process.delivery.payment': '💳 Обработка способа оплаты',
    'chat.process.delivery.courier': '🛵 Поиск свободного курьера',
    'chat.process.delivery.order': '📱 Формирование итогового заказа',
    
    // Auto repair processes
    'chat.process.autorepair.analyzing': '🔧 Анализ проблемы с автомобилем',
    'chat.process.autorepair.model': '🚗 Определение модели и года выпуска',
    'chat.process.autorepair.parts': '📋 Проверка наличия запчастей на складе',
    'chat.process.autorepair.master': '👨‍🔧 Поиск свободного мастера',
    'chat.process.autorepair.cost': '💰 Расчет стоимости работ и запчастей',
    'chat.process.autorepair.booking': '📅 Поиск оптимального времени для записи',
    
    // Courses processes
    'chat.process.courses.analyzing': '📚 Определение уровня английского языка',
    'chat.process.courses.goals': '🎯 Анализ целей изучения языка',
    'chat.process.courses.teacher': '👩‍🏫 Поиск подходящего преподавателя',
    'chat.process.courses.schedule': '📅 Проверка расписания групп',
    'chat.process.courses.cost': '💳 Расчет стоимости курса',
    'chat.process.courses.proposal': '✅ Формирование предложения по обучению',
    
    // Additional processes
    'chat.process.discounts': '💰 Дополнительный расчет скидок и акций',
    'chat.process.urgent': '⚡ Поиск экстренных слотов',
    
    // Final messages
    'chat.final.beauty': '🎉 Клиент успешно записан в салон красоты!',
    'chat.final.barbershop': '🎉 Клиент успешно записан в барбершоп!',
    'chat.final.restaurant': '🎉 Столик успешно забронирован в ресторане!',
    'chat.final.delivery': '🎉 Заказ принят и передан на кухню!',
    'chat.final.autorepair': '🎉 Клиент записан на ремонт автомобиля!',
    'chat.final.courses': '🎉 Клиент записан на курсы английского языка!',
    
    // Demo header
    'chat.demo': 'AI ChatBot Demo',
    
    // Internal Process Panel
    'internalProcess.title': 'Внутренние процессы',
    'internalProcess.noProcesses': 'Внутренние процессы появятся после отправки сообщения',
    'internalProcess.totalProcesses': 'Всего процессов',
    'internalProcess.completed': 'Завершено',

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
    'examples.autorepair': 'Auto Repair',
    'examples.courses': 'English Courses',
    
    // Chat Widget
    'chat.placeholder': 'Type your message...',
    'chat.send': 'Send',
    'chat.thinking': 'Thinking...',
    'chat.error': 'Sorry, an error occurred. Please try again.',
    'chat.title.beauty': 'AI ChatBot - Beauty Salon',
    'chat.title.restaurant': 'AI ChatBot - Restaurant',
    'chat.title.delivery': 'AI ChatBot - Food Delivery',
    'chat.title.barbershop': 'AI ChatBot - Barbershop',
    'chat.title.autorepair': 'AI ChatBot - Auto Repair',
    'chat.title.courses': 'AI ChatBot - English Courses',
    'chat.welcome.beauty': 'Hello! I\'m an AI assistant for the beauty salon. I\'ll help you book services. What would you like to book? 💇‍♀️',
    'chat.welcome.restaurant': 'Welcome to "Taste" restaurant! I\'ll help you book a table. What time and how many people? 🍽️',
    'chat.welcome.delivery': 'Hello! Welcome to "Fast Food"! What would you like to order? 🍕',
    'chat.welcome.barbershop': 'Welcome to "Style" barbershop! What services would you like to book? ✂️',
    'chat.welcome.autorepair': 'Welcome to "Master" auto repair! What car problems need to be solved? 🔧',
    'chat.welcome.courses': 'Hello! Welcome to "SpeakUp" English school! I\'ll help you choose a course and sign up for classes. 📚',
    
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
    
    // Testimonials data
    'testimonials.anna.name': 'Anna Petrova',
    'testimonials.anna.business': 'Elegant Beauty Salon',
    'testimonials.anna.text': 'AI bot increased our conversion by 40%! Clients book appointments even at night, and the bot automatically answers all questions about procedures and prices.',
    'testimonials.anna.result': '+40% conversion',
    
    'testimonials.dmitry.name': 'Dmitry Kozlov',
    'testimonials.dmitry.business': 'Italian Courtyard Restaurant',
    'testimonials.dmitry.text': 'No more lost orders! The bot takes delivery orders, answers menu questions and even suggests additional dishes.',
    'testimonials.dmitry.result': '+25% orders',
    
    'testimonials.elena.name': 'Elena Smirnova',
    'testimonials.elena.business': 'Gentleman Barbershop',
    'testimonials.elena.text': 'Clients love the quick responses! The bot helps book appointments, reminds about visits and tells about our services. We save 3 hours a day.',
    'testimonials.elena.result': '-3 hours admin work',
    
    'testimonials.mikhail.name': 'Mikhail Volkov',
    'testimonials.mikhail.business': 'Fast&Tasty Food Delivery',
    'testimonials.mikhail.text': 'Automated 80% of customer inquiries. The bot tracks orders, answers delivery questions and helps with checkout.',
    'testimonials.mikhail.result': '80% automation',
    
    'testimonials.olga.name': 'Olga Ivanova',
    'testimonials.olga.business': 'Energy Fitness Center',
    'testimonials.olga.text': 'Workout bookings are now automatic. The bot advises on programs, schedules and prices. Freed up trainers\' time.',
    'testimonials.olga.result': '+60% bookings',
    
    'testimonials.artem.name': 'Artem Sokolov',
    'testimonials.artem.business': 'Master Auto Service',
    'testimonials.artem.text': 'Clients can book diagnostics and learn service costs anytime. The bot even explains what\'s included in each type of repair.',
    'testimonials.artem.result': '+50% requests',
    
    // Integrations
    'integrations.title': 'Integrations with popular systems',
    'integrations.subtitle': 'Connect to your CRM and messengers in minutes',
    'integrations.crm.title': 'CRM Systems',
    'integrations.messengers.title': 'Messengers',
    'integrations.crm.altegio.description': 'For beauty salons',
    'integrations.crm.amocrm.description': 'Universal CRM',
    'integrations.crm.bitrix.description': 'For business',
    'integrations.crm.moysklad.description': 'Inventory & sales',
    'integrations.crm.retailcrm.description': 'For retail',
    'integrations.crm.other.title': 'Others',
    'integrations.crm.other.description': 'On request',
    'integrations.messengers.whatsapp.description': 'Personal & Business',
    'integrations.messengers.telegram.description': 'Bots & channels',
    'integrations.messengers.instagram.description': 'Direct Messages',
    'integrations.messengers.website.title': 'Website',
    'integrations.messengers.website.description': 'Website widget',
    
    // Footer
    'footer.rights': 'All rights reserved',
    
    // Contact Section
    'contact.title': 'Ready to try?',
    'contact.subtitle': 'Launch AI bot for your business today',
    'contact.startFree': 'Start for free',
    'contact.contactUs': 'Contact us',
    
    // Chat Widget Internal Processes
    'chat.process.analyzing': '🔍 Analyzing client request',
    'chat.process.crm': '📊 Querying CRM for available specialists',
    'chat.process.schedule': '⏰ Checking schedule for upcoming days',
    'chat.process.prices': '💰 Getting current service prices',
    'chat.process.findTime': '📅 Finding optimal booking time',
    'chat.process.proposal': '✅ Forming client proposal',
    
    // Barbershop processes
    'chat.process.barbershop.analyzing': '🔍 Processing barbershop service request',
    'chat.process.barbershop.barbers': '👨‍💼 Requesting list of available barbers',
    'chat.process.barbershop.schedule': '⏰ Checking available time slots',
    'chat.process.barbershop.services': '✂️ Getting haircut types information',
    'chat.process.barbershop.prices': '💵 Calculating service costs',
    'chat.process.barbershop.booking': '📝 Preparing booking options',
    
    // Restaurant processes
    'chat.process.restaurant.analyzing': '🍽️ Analyzing reservation request',
    'chat.process.restaurant.load': '🏪 Checking restaurant capacity',
    'chat.process.restaurant.tables': '🪑 Finding available tables',
    'chat.process.restaurant.menu': '📋 Checking current menu',
    'chat.process.restaurant.special': '🎉 Considering special requests (banquet, birthday)',
    'chat.process.restaurant.booking': '📞 Preparing reservation proposal',
    
    // Delivery processes
    'chat.process.delivery.analyzing': '🍕 Processing delivery order',
    'chat.process.delivery.availability': '📦 Checking dish availability in menu',
    'chat.process.delivery.time': '🏠 Calculating delivery time by address',
    'chat.process.delivery.payment': '💳 Processing payment method',
    'chat.process.delivery.courier': '🛵 Finding available courier',
    'chat.process.delivery.order': '📱 Forming final order',
    
    // Auto repair processes
    'chat.process.autorepair.analyzing': '🔧 Analyzing car problem',
    'chat.process.autorepair.model': '🚗 Determining model and year',
    'chat.process.autorepair.parts': '📋 Checking parts availability in stock',
    'chat.process.autorepair.master': '👨‍🔧 Finding available mechanic',
    'chat.process.autorepair.cost': '💰 Calculating work and parts cost',
    'chat.process.autorepair.booking': '📅 Finding optimal appointment time',
    
    // Courses processes
    'chat.process.courses.analyzing': '📚 Determining English level',
    'chat.process.courses.goals': '🎯 Analyzing language learning goals',
    'chat.process.courses.teacher': '👩‍🏫 Finding suitable teacher',
    'chat.process.courses.schedule': '📅 Checking group schedules',
    'chat.process.courses.cost': '💳 Calculating course cost',
    'chat.process.courses.proposal': '✅ Forming learning proposal',
    
    // Additional processes
    'chat.process.discounts': '💰 Additional discount and promotion calculation',
    'chat.process.urgent': '⚡ Finding emergency slots',
    
    // Final messages
    'chat.final.beauty': '🎉 Client successfully booked at beauty salon!',
    'chat.final.barbershop': '🎉 Client successfully booked at barbershop!',
    'chat.final.restaurant': '🎉 Table successfully reserved at restaurant!',
    'chat.final.delivery': '🎉 Order accepted and sent to kitchen!',
    'chat.final.autorepair': '🎉 Client booked for car repair!',
    'chat.final.courses': '🎉 Client enrolled in English courses!',
    
    // Demo header
    'chat.demo': 'AI ChatBot Demo',
    
    // Internal Process Panel
    'internalProcess.title': 'Internal Processes',
    'internalProcess.noProcesses': 'Internal processes will appear after sending a message',
    'internalProcess.totalProcesses': 'Total processes',
    'internalProcess.completed': 'Completed',

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
