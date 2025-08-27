'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface InternalProcess {
  id: string;
  description: string;
  status: 'pending' | 'processing' | 'completed';
  timestamp: Date;
}

interface ChatWidgetProps {
  businessType: 'beauty' | 'restaurant' | 'delivery' | 'barbershop' | 'autorepair' | 'courses';
  isDemo?: boolean;
  onProcessUpdate?: (processes: InternalProcess[]) => void;
}

export default function ChatWidget({ businessType, isDemo = false, onProcessUpdate }: ChatWidgetProps) {
  const { language, t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: t(`chat.welcome.${businessType}`)
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [internalProcesses, setInternalProcesses] = useState<InternalProcess[]>([]);

  // Сбрасываем сообщения при изменении типа бизнеса или языка
  useEffect(() => {
    setMessages([
      {
        role: 'assistant',
        content: t(`chat.welcome.${businessType}`)
      }
    ]);
    setInternalProcesses([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [businessType, language]);

  // Уведомляем родительский компонент об изменениях в процессах
  useEffect(() => {
    if (onProcessUpdate) {
      onProcessUpdate(internalProcesses);
    }
  }, [internalProcesses, onProcessUpdate]);

  const simulateInternalProcesses = (userMessage: string) => {
    const processTemplates = getProcessTemplates(businessType, userMessage);
    const newProcesses: InternalProcess[] = [];

    processTemplates.forEach((template, index) => {
      const process: InternalProcess = {
        id: `${Date.now()}-${index}`,
        description: template.description,
        status: 'pending',
        timestamp: new Date()
      };
      newProcesses.push(process);
    });

    setInternalProcesses(prev => [...prev, ...newProcesses]);

    // Симулируем выполнение процессов с задержками
    newProcesses.forEach((process, index) => {
      setTimeout(() => {
        setInternalProcesses(prev => 
          prev.map(p => 
            p.id === process.id 
              ? { ...p, status: 'processing' }
              : p
          )
        );
      }, (index + 1) * 500);

      setTimeout(() => {
        setInternalProcesses(prev => 
          prev.map(p => 
            p.id === process.id 
              ? { ...p, status: 'completed' }
              : p
          )
        );
      }, (index + 1) * 1000 + Math.random() * 1000);
    });
  };

  const addSuccessMessage = (botResponse: string) => {
    // Проверяем, содержит ли ответ бота подтверждение записи/бронирования
    if (isBookingConfirmation(botResponse, businessType)) {
      setTimeout(() => {
        const finalProcess: InternalProcess = {
          id: `${Date.now()}-final`,
          description: getFinalMessage(businessType),
          status: 'completed',
          timestamp: new Date()
        };
        setInternalProcesses(prev => [...prev, finalProcess]);
      }, 1000);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user' as const, content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    // Запускаем симуляцию внутренних процессов
    simulateInternalProcesses(userMessage.content);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: newMessages,
          businessType,
          language
        }),
      });

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      setMessages([...newMessages, { role: 'assistant', content: data.message }]);
      
      // Проверяем ответ бота на подтверждение записи
      addSuccessMessage(data.message);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages([...newMessages, { 
        role: 'assistant', 
        content: t('chat.error') || 'Извините, произошла ошибка. Попробуйте еще раз.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full">
      {/* Header */}
      <div className="flex items-center mb-4">
        <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
        <span className="ml-2 text-sm text-gray-500">
          {isDemo ? 'AI ChatBot Demo' : t(`chat.title.${businessType}`)}
        </span>
      </div>
      
      {/* Messages */}
      <div className="h-80 overflow-y-auto bg-gray-50 rounded-lg p-4 mb-4 space-y-4 text-black">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start ${
              message.role === 'user' ? 'justify-end' : ''
            }`}
          >
            {message.role === 'assistant' && (
              <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                <i className="fas fa-robot text-sm"></i>
              </div>
            )}
            <div
              className={`rounded-lg p-3 max-w-xs ${
                message.role === 'user'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white shadow-sm'
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex items-start">
            <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
              <i className="fas fa-robot text-sm"></i>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Input */}
      <div className="flex text-black">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={t('chat.placeholder')}
          disabled={isLoading}
          className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:border-indigo-600 disabled:opacity-50"
        />
        <button
          onClick={sendMessage}
          disabled={isLoading || !input.trim()}
          className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
}



function getProcessTemplates(businessType: string, userMessage: string): { description: string }[] {
  const lowerMessage = userMessage.toLowerCase();
  
  const processMap = {
    beauty: [
      { description: '🔍 Анализ запроса клиента' },
      { description: '📊 Запрос данных из CRM о свободных мастерах' },
      { description: '⏰ Проверка расписания на ближайшие дни' },
      { description: '💰 Получение актуальных цен на услуги' },
      { description: '📅 Поиск оптимального времени записи' },
      { description: '✅ Формирование предложения для клиента' }
    ],
    barbershop: [
      { description: '🔍 Обработка запроса на услуги барбершопа' },
      { description: '👨‍💼 Запрос списка доступных барберов' },
      { description: '⏰ Проверка свободных слотов в расписании' },
      { description: '✂️ Получение информации о типах стрижек' },
      { description: '💵 Расчет стоимости услуг' },
      { description: '📝 Подготовка вариантов записи' }
    ],
    restaurant: [
      { description: '🍽️ Анализ запроса на бронирование' },
      { description: '🏪 Проверка загруженности ресторана' },
      { description: '🪑 Поиск свободных столиков' },
      { description: '📋 Проверка актуального меню' },
      { description: '🎉 Учет особых пожеланий (банкет, день рождения)' },
      { description: '📞 Подготовка предложения по бронированию' }
    ],
    delivery: [
      { description: '🍕 Обработка заказа на доставку' },
      { description: '📦 Проверка наличия блюд в меню' },
      { description: '🏠 Расчет времени доставки по адресу' },
      { description: '💳 Обработка способа оплаты' },
      { description: '🛵 Поиск свободного курьера' },
      { description: '📱 Формирование итогового заказа' }
    ],
    autorepair: [
      { description: '🔧 Анализ проблемы с автомобилем' },
      { description: '🚗 Определение модели и года выпуска' },
      { description: '📋 Проверка наличия запчастей на складе' },
      { description: '👨‍🔧 Поиск свободного мастера' },
      { description: '💰 Расчет стоимости работ и запчастей' },
      { description: '📅 Поиск оптимального времени для записи' }
    ],
    courses: [
      { description: '📚 Определение уровня английского языка' },
      { description: '🎯 Анализ целей изучения языка' },
      { description: '👩‍🏫 Поиск подходящего преподавателя' },
      { description: '📅 Проверка расписания групп' },
      { description: '💳 Расчет стоимости курса' },
      { description: '✅ Формирование предложения по обучению' }
    ]
  };

  // Добавляем специфичные процессы в зависимости от содержания сообщения
  const baseProcesses = [...(processMap[businessType as keyof typeof processMap] || processMap.beauty)];
  const processes = [...baseProcesses];
  
  if (lowerMessage.includes('цена') || lowerMessage.includes('стоимость') || lowerMessage.includes('сколько')) {
    processes.push({ description: '💰 Дополнительный расчет скидок и акций' });
  }
  
  if (lowerMessage.includes('срочно') || lowerMessage.includes('быстро')) {
    processes.push({ description: '⚡ Поиск экстренных слотов' });
  }

  return processes.slice(0, 4); // Ограничиваем количество процессов
}

function getFinalMessage(businessType: string): string {
  const messages = {
    beauty: '🎉 Клиент успешно записан в салон красоты!',
    barbershop: '🎉 Клиент успешно записан в барбершоп!',
    restaurant: '🎉 Столик успешно забронирован в ресторане!',
    delivery: '🎉 Заказ принят и передан на кухню!',
    autorepair: '🎉 Клиент записан на ремонт автомобиля!',
    courses: '🎉 Клиент записан на курсы английского языка!'
  };
  
  return messages[businessType as keyof typeof messages] || messages.beauty;
}

function isBookingConfirmation(botResponse: string, businessType: string): boolean {
  const lowerResponse = botResponse.toLowerCase();
  
  // Ключевые слова для подтверждения записи
  const confirmationKeywords = [
    'записал', 'записала', 'записан', 'записана', 'записаны', 'записываю',
    'забронировал', 'забронировала', 'забронирован', 'забронирована', 
    'подтверждаю', 'подтверждена', 'подтвержден', 'подтверждение',
    'заказ принят', 'заказ оформлен', 'заказ подтвержден',
    'ваша запись', 'ваше бронирование', 'ваш заказ',
    'успешно', 'готово', 'оформлено', 'принято',
    'запись:', 'запись создается', 'запись создана'
  ];
  
  // Специфичные ключевые слова для каждого типа бизнеса
  const businessSpecificKeywords = {
    beauty: ['на маникюр', 'на педикюр', 'на стрижку', 'к мастеру', 'в салон', 'мужская стрижка', 'женская стрижка'],
    barbershop: ['к барберу', 'на стрижку', 'на бороду', 'в барбершоп', 'мужская стрижка'],
    restaurant: ['столик', 'стол', 'место', 'бронирование', 'ресторан'],
    delivery: ['доставка', 'курьер', 'заказ', 'привезем', 'доставим'],
    autorepair: ['на ремонт', 'в автосервис', 'к мастеру', 'автомобиль', 'машина', 'ремонт'],
    courses: ['на курсы', 'на занятия', 'к преподавателю', 'английский', 'обучение', 'урок']
  };
  
  // Проверяем общие ключевые слова подтверждения
  const hasConfirmation = confirmationKeywords.some(keyword => 
    lowerResponse.includes(keyword)
  );
  
  // Проверяем специфичные для бизнеса ключевые слова
  const businessKeywords = businessSpecificKeywords[businessType as keyof typeof businessSpecificKeywords] || [];
  const hasBusinessContext = businessKeywords.some(keyword => 
    lowerResponse.includes(keyword)
  );
  
  // Дополнительная проверка на наличие времени/даты (признак подтверждения)
  const hasTimeReference = /\b\d{1,2}:\d{2}\b|\b\d{1,2}\s*(час|утра|дня|вечера|завтра|сегодня|понедельник|вторник|среда|четверг|пятница|суббота|воскресенье)\b/i.test(lowerResponse);
  
  // Возвращаем true если есть подтверждение И (контекст бизнеса ИЛИ временная ссылка)
  return hasConfirmation && (hasBusinessContext || hasTimeReference);
}
