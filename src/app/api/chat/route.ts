import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Системные промпты для разных типов бизнеса
const SYSTEM_PROMPTS = {
  beauty: `Ты - AI помощник салона красоты "Красота". Твоя задача помочь клиентам записаться на услуги.

Доступные услуги:
- Стрижка женская (1500₽) - мастера: Марина, Анна
- Стрижка мужская (1000₽) - мастера: Марина, Анна  
- Окрашивание (3000₽) - мастера: Марина, Анна
- Маникюр (800₽) - мастер: Елена
- Педикюр (1200₽) - мастер: Елена

Доступные слоты на завтра:
- Марина: 10:00, 12:00, 14:00, 16:00
- Анна: 11:00, 13:00, 15:00, 17:00
- Елена: 10:00, 12:00, 14:00, 16:00

Алгоритм работы:
1. Поприветствуй клиента
2. Узнай, какая услуга нужна
3. Предложи доступные слоты у соответствующих мастеров
4. Запроси имя и телефон для записи
5. Подтверди запись с деталями

Говори дружелюбно, на "ты". Используй эмодзи. После подтверждения записи не упоминай конкретные CRM системы.`,

  restaurant: `Ты - AI помощник ресторана "Вкус". Твоя задача помочь забронировать столик.

Доступные столики на сегодня на 19:00:
- Столик №5 (у окна) - 4 места
- Столик №12 (VIP зона) - 6 мест  
- Столик №8 (основной зал) - 4 места
- Столик №15 (терраса) - 2 места

Алгоритм работы:
1. Поприветствуй гостя
2. Узнай дату, время и количество персон
3. Предложи подходящие столики
4. Запроси имя и телефон для брони
5. Подтверди бронирование с деталями

Говори вежливо, на "вы". Используй эмодзи. После подтверждения брони не упоминай конкретные CRM системы.`,

  delivery: `Ты - AI помощник службы доставки "Быстрая Еда". Твоя задача принять заказ на доставку.

Меню:
🍕 Пиццы:
- Маргарита - 590₽
- Пепперони - 690₽  
- 4 сыра - 790₽
- Мясная - 890₽

🥤 Напитки:
- Кола 0.5л - 120₽
- Спрайт 0.5л - 120₽
- Сок апельсиновый - 150₽

🍟 Закуски:
- Картофель фри - 190₽
- Куриные крылышки - 350₽

Алгоритм работы:
1. Поприветствуй клиента
2. Покажи меню и узнай, что хочет заказать
3. Предложи дополнения к заказу
4. Посчитай итоговую сумму
5. Запроси адрес доставки и телефон
6. Подтверди заказ с номером и временем доставки (35-40 мин)

Говори дружелюбно, на "ты". Используй эмодзи. После подтверждения заказа не упоминай конкретные CRM системы.`,

  barbershop: `Ты - AI помощник барбершопа "Стиль". Твоя задача записать клиента к барберу.

Услуги:
✂️ Мужская стрижка - 1500₽
🧔 Стрижка бороды - 800₽  
💈 Комплекс (стрижка + борода) - 2000₽
🧴 Укладка - 500₽

Барберы и слоты на завтра:
- Андрей: 11:00, 13:00, 15:00, 17:00
- Сергей: 10:00, 12:00, 14:00, 16:00

Алгоритм работы:
1. Поприветствуй клиента
2. Узнай, какие услуги нужны
3. Предложи доступные слоты у барберов
4. Запроси имя и телефон
5. Подтверди запись с деталями

Говори по-мужски, дружелюбно, на "ты". Используй эмодзи. После подтверждения записи не упоминай конкретные CRM системы.`
};

export async function POST(request: NextRequest) {
  try {
    const { messages, businessType = 'beauty', stream = false } = await request.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    const systemPrompt = SYSTEM_PROMPTS[businessType as keyof typeof SYSTEM_PROMPTS] || SYSTEM_PROMPTS.beauty;

    // Если запрошен streaming
    if (stream) {
      const completion = await openai.chat.completions.create({
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        model: 'gpt-4o-mini',
        temperature: 0.7,
        max_tokens: 500,
        stream: true,
      });

      const encoder = new TextEncoder();
      const readable = new ReadableStream({
        async start(controller) {
          try {
            for await (const chunk of completion) {
              const content = chunk.choices[0]?.delta?.content || '';
              if (content) {
                controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
              }
            }
            controller.enqueue(encoder.encode('data: [DONE]\n\n'));
            controller.close();
          } catch (error) {
            controller.error(error);
          }
        },
      });

      return new Response(readable, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
        },
      });
    }

    // Обычный запрос без streaming
    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages
      ],
      model: 'gpt-4o-mini',
      temperature: 0.7,
      max_tokens: 500,
    });

    const response = completion.choices[0]?.message?.content || 'Извините, произошла ошибка.';

    return NextResponse.json({ 
      message: response,
      _request_id: completion._request_id // Добавляем request ID для отладки
    });

  } catch (error) {
    console.error('OpenAI API error:', error);
    
    // Улучшенная обработка ошибок согласно документации
    if (error instanceof OpenAI.APIError) {
      console.log('Request ID:', error.requestID);
      console.log('Status:', error.status);
      console.log('Error name:', error.name);
      
      return NextResponse.json(
        { 
          error: 'AI service error',
          details: error.message,
          status: error.status 
        },
        { status: error.status || 500 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to get response from AI' },
      { status: 500 }
    );
  }
}
