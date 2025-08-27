import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, phone, telegram, businessType, message } = await request.json();

    // Валидация обязательных полей
    if (!name || !businessType) {
      return NextResponse.json(
        { error: 'Имя и тип бизнеса обязательны' },
        { status: 400 }
      );
    }

    // Проверяем, что указан хотя бы один способ связи
    if (!phone && !telegram) {
      return NextResponse.json(
        { error: 'Укажите телефон или Telegram для связи' },
        { status: 400 }
      );
    }

    // Отправляем уведомление в Telegram
    const telegramSent = await sendTelegramNotification({
      name,
      phone,
      telegram,
      businessType,
      message
    });

    if (!telegramSent) {
      console.error('Failed to send Telegram notification');
    }

    return NextResponse.json({ 
      success: true,
      message: 'Заявка отправлена! Мы свяжемся с вами в ближайшее время.'
    });

  } catch (error) {
    console.error('Trial request error:', error);
    return NextResponse.json(
      { error: 'Произошла ошибка при отправке заявки' },
      { status: 500 }
    );
  }
}

async function sendTelegramNotification(data: {
  name: string;
  phone?: string;
  telegram?: string;
  businessType: string;
  message?: string;
}) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error('Telegram credentials not configured');
    return false;
  }

  const businessTypeNames = {
    beauty: 'Салон красоты',
    barbershop: 'Барбершоп',
    restaurant: 'Ресторан',
    delivery: 'Доставка еды',
    other: 'Другой'
  };

  const businessTypeName = businessTypeNames[data.businessType as keyof typeof businessTypeNames] || data.businessType;

  let messageText = `🎯 <b>Новая заявка на пробный период!</b>\n\n`;
  messageText += `👤 <b>Имя:</b> ${data.name}\n`;
  messageText += `🏢 <b>Тип бизнеса:</b> ${businessTypeName}\n`;
  
  if (data.phone) {
    messageText += `📞 <b>Телефон:</b> ${data.phone}\n`;
  }
  
  if (data.telegram) {
    messageText += `💬 <b>Telegram:</b> ${data.telegram}\n`;
  }
  
  if (data.message) {
    messageText += `💭 <b>Сообщение:</b> ${data.message}\n`;
  }
  
  messageText += `\n⏰ <b>Время:</b> ${new Date().toLocaleString('ru-RU')}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: messageText,
        parse_mode: 'HTML'
      }),
    });

    if (!response.ok) {
      throw new Error(`Telegram API error: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error('Telegram notification error:', error);
    return false;
  }
}
