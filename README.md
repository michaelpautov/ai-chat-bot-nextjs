# AI ChatBot - Лендинг с интеграцией OpenAI

Современный лендинг для AI чат-бота с интерактивными примерами и интеграцией OpenAI API.

## 🚀 Функции

- **Интерактивные чат-виджеты** с реальным AI (OpenAI GPT-3.5-turbo)
- **4 типа бизнеса**: Салон красоты, Ресторан, Доставка еды, Барбершоп
- **Разные роли бота** для каждого типа бизнеса
- **Адаптивный дизайн** с Tailwind CSS
- **TypeScript** для типизации
- **Next.js 14** с App Router

## 🛠️ Установка

1. **Клонируйте проект:**
```bash
git clone <repository-url>
cd ai-chat-bot-nextjs
```

2. **Установите зависимости:**
```bash
npm install
```

3. **Настройте переменные окружения:**
```bash
# Скопируйте .env.local и добавьте свой OpenAI API ключ
cp .env.local.example .env.local
```

Отредактируйте `.env.local`:
```env
OPENAI_API_KEY=your_openai_api_key_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. **Запустите проект:**
```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

## 🤖 Настройка OpenAI

### Получение API ключа:

1. Зарегистрируйтесь на [platform.openai.com](https://platform.openai.com)
2. Перейдите в раздел "API Keys"
3. Создайте новый ключ
4. Добавьте ключ в `.env.local`

### Роли ботов:

Каждый тип бизнеса имеет свою роль в `src/app/api/chat/route.ts`:

- **Салон красоты** - помогает записаться к мастеру
- **Ресторан** - бронирует столики
- **Доставка еды** - принимает заказы
- **Барбершоп** - записывает к барберу

## 📁 Структура проекта

```
src/
├── app/
│   ├── api/chat/          # OpenAI API роут
│   ├── layout.tsx         # Основной layout
│   └── page.tsx          # Главная страница
├── components/
│   └── ChatWidget.tsx    # Компонент чата
└── ...
```

## 🎨 Кастомизация

### Изменение ролей бота:

Отредактируйте `SYSTEM_PROMPTS` в `src/app/api/chat/route.ts`

### Изменение дизайна:

Все стили используют Tailwind CSS. Основные цвета:
- Primary: `indigo-600`
- Secondary: `purple-600`

### Добавление новых типов бизнеса:

1. Добавьте новый промпт в `SYSTEM_PROMPTS`
2. Обновите типы в `ChatWidget.tsx`
3. Добавьте новую кнопку в `page.tsx`

## 🚀 Деплой

### Vercel (рекомендуется):

```bash
npm run build
vercel --prod
```

### Другие платформы:

```bash
npm run build
npm start
```

## 📝 API Endpoints

### POST `/api/chat`

Отправляет сообщения в OpenAI и возвращает ответ бота.

**Body:**
```json
{
  "messages": [
    {"role": "user", "content": "Привет!"}
  ],
  "businessType": "beauty"
}
```

**Response:**
```json
{
  "message": "Привет! Я AI помощник салона красоты..."
}
```

## 🔧 Разработка

```bash
# Запуск в dev режиме
npm run dev

# Сборка
npm run build

# Линтер
npm run lint

# Проверка типов
npm run type-check
```

## 📦 Зависимости

- **Next.js 14** - React фреймворк
- **OpenAI** - API для чат-бота
- **Tailwind CSS** - Стили
- **TypeScript** - Типизация
- **Font Awesome** - Иконки

## 🤝 Поддержка

Если есть вопросы или проблемы:

1. Проверьте, что OpenAI API ключ корректный
2. Убедитесь, что у вас есть кредиты на OpenAI аккаунте
3. Проверьте консоль браузера на ошибки

## 📄 Лицензия

MIT License