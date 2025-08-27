# AI Chat Bot для Бизнеса

Умный AI помощник для автоматизации общения с клиентами в различных сферах бизнеса.

## 🚀 Возможности

- **Мультибизнес поддержка**: Салон красоты, ресторан, доставка еды, барбершоп
- **Умные диалоги**: Контекстные ответы с использованием OpenAI GPT-4
- **Streaming ответы**: Быстрые ответы в реальном времени
- **Интеграция с Telegram**: Уведомления о заявках
- **Адаптивный дизайн**: Работает на всех устройствах

## 🛠 Технологии

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, OpenAI API
- **Деплой**: Vercel
- **Интеграции**: Telegram Bot API

## 📦 Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/michaelpautov/ai-chat-bot-nextjs.git
cd ai-chat-bot-nextjs
```

2. Установите зависимости:
```bash
npm install
```

3. Настройте переменные окружения:
```bash
cp .env.example .env.local
```

Заполните `.env.local`:
```env
OPENAI_API_KEY=your_openai_api_key_here
TELEGRAM_BOT_TOKEN=your_telegram_bot_token_here
TELEGRAM_CHAT_ID=your_telegram_chat_id_here
```

4. Запустите в режиме разработки:
```bash
npm run dev
```

## 🌐 Деплой на Vercel

### Автоматический деплой

1. Подключите репозиторий к Vercel
2. Настройте переменные окружения в Vercel Dashboard
3. Деплой произойдет автоматически

### Ручной деплой

```bash
npm install -g vercel
vercel --prod
```

### Переменные окружения для Vercel

В Vercel Dashboard добавьте:

- `OPENAI_API_KEY` - Ключ OpenAI API
- `TELEGRAM_BOT_TOKEN` - Токен Telegram бота (опционально)
- `TELEGRAM_CHAT_ID` - ID чата для уведомлений (опционально)

## 🎯 Типы бизнеса

### Салон красоты
- Запись на услуги
- Выбор мастера
- Информация о ценах

### Ресторан
- Бронирование столиков
- Информация о меню
- Выбор времени и количества гостей

### Доставка еды
- Прием заказов
- Расчет стоимости
- Информация о времени доставки

### Барбершоп
- Запись к барберу
- Выбор услуг
- Информация о мастерах

## 📱 API Endpoints

### POST /api/chat
Обработка чат сообщений с AI

**Параметры:**
```json
{
  "messages": [...],
  "businessType": "beauty|restaurant|delivery|barbershop",
  "stream": false
}
```

### POST /api/trial
Отправка заявки на пробный период

**Параметры:**
```json
{
  "name": "string",
  "phone": "string",
  "telegram": "string",
  "businessType": "string",
  "message": "string"
}
```

## 🔧 Разработка

### Структура проекта
```
src/
├── app/
│   ├── api/          # API routes
│   ├── globals.css   # Глобальные стили
│   ├── layout.tsx    # Основной layout
│   └── page.tsx      # Главная страница
└── components/       # React компоненты
    ├── ChatWidget.tsx
    ├── ExamplesSection.tsx
    └── ...
```

### Команды

```bash
npm run dev      # Запуск в режиме разработки
npm run build    # Сборка для продакшена
npm run start    # Запуск продакшен сборки
npm run lint     # Проверка кода
```

## 📄 Лицензия

MIT License

## 🤝 Вклад в проект

1. Fork репозитория
2. Создайте feature branch (`git checkout -b feature/amazing-feature`)
3. Commit изменения (`git commit -m 'Add amazing feature'`)
4. Push в branch (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📞 Поддержка

Если у вас есть вопросы или предложения, создайте issue в репозитории.