export interface Author {
  id: string;
  name: string;
  description: string;
  link: string;
}

export interface ScheduleEvent {
  id: string;
  date: string; // ISO format: "2025-08-15T14:00:00+06:00" (Astana time)
  title: string;
  description: string;
  youtubeLink: string;
  authorId: string;
  duration?: number; // minutes
}

// Authors dictionary to avoid repetition
export const authors: Record<string, Author> = {
  // Placeholder authors - replace with real data
  "author4": {
    id: "author4",
    name: "Дмитрий Мельник",
    description: "Эксперт по архитектуре распределенных систем и микросервисам",
    link: "https://drim.dev/"
  },
  "author5": {
    id: "author5",
    name: "Владимир Иванов",
    description: "ex-Bolt, CTO в B2B SaaS",
    link: "https://youtube.com/live/dKulH47IwHQ?feature=share"
  },
  "author6": {
    id: "author6",
    name: "Команда PS.kz",
    description: "Облачная платформа PS.kz",
    link: "https://youtube.com/live/-hI7HJTAD-s?feature=share"
  }
};

// Schedule events
export const scheduleEvents: ScheduleEvent[] = [
  {
    id: "event0",
    date: "2025-08-04T19:30:00+05:00",
    title: "Паттерн «Сага» для распределенных транзакций",
    description: "Кратко сравним монолит и микросервисы. Разберём паттерн «Сага» для обеспечения целостности данных в микросервисах (заказ, оплата, резервирование места). В основу положим классификацию саг из книги \"Software Architecture: The Hard Parts\": Epic Saga, Phone Tag Saga, Fairy Tale Saga, Time Travel Saga, Fantasy Fiction Saga, Horror Story, Parallel Saga, Anthology Saga.",
    youtubeLink: "https://youtube.com/live/9vfuqDVWZ04",
    authorId: "author4",
    duration: 90
  },
  {
    id: "event0_5",
    date: "2025-08-05T19:30:00+05:00",
    title: "Масштабирование под высокую нагрузку",
    description: "Проектирование систем для пиковых нагрузок в момент старта продаж. Разберем вертикальное масштабирование, горизонтальное масштабирование, балансировщики нагрузки и методы оптимизации баз данных (индексы, read-реплики, шардирование), чтобы сервис не «упал» от наплыва пользователей. Также коснемся ускорения системы с помощью кеширования (Redis) и CDN.",
    youtubeLink: "https://youtube.com/live/LE5sckhMAoE?feature=share",
    authorId: "author4",
    duration: 90
  },
  {
    id: "event0_6",
    date: "2025-08-06T19:30:00+05:00",
    title: "Организация конкурентного доступа",
    description: "Научимся решать главную проблему билетных сервисов — как избежать «двойной продажи» одного и того же места. Изучим на практике разные виды конкурентности (оптимистичная и пессимистичная на уровне БД и на уровне приложения) и использование очередей для надежной обработки заказов.",
    youtubeLink: "https://youtube.com/live/S1wILEUUMKo?feature=share",
    authorId: "author4",
    duration: 90
  },
  {
    id: "event0_7",
    date: "2025-08-07T19:30:00+05:00",
    title: "Создание отказоустойчивых систем",
    description: "Научимся обеспечивать стабильность сервиса при внутренних сбоях и при сбоях внешних API (например, API стадиона). Разберем паттерны Timeouts, Retries, Bulkhead, Circuit Breaker и другие.",
    youtubeLink: "https://youtube.com/live/VQFPNT_CMuY?feature=share",
    authorId: "author4",
    duration: 90
  },
  {
    id: "event2_5",
    date: "2025-08-11T19:30:00+05:00",
    title: "Интеграция платежных провайдеров",
    description: "Практический разбор процесса приема платежей. Рассмотрим, как работают платежные шлюзы, сравним способы интеграции (редирект, iframe) и научимся обрабатывать подтверждения об оплате через вебхуки.",
    youtubeLink: "https://youtube.com/live/9MODb5vSd_Q?feature=share",
    authorId: "author4",
    duration: 90
  },
  {
    id: "event2_6",
    date: "2025-08-12T19:30:00+05:00",
    title: "Решения, которые работают",
    description: "Как не завалить бизнес-проблему тонной кода? Как сделать MVP, который реально решает задачу, а не просто красиво выглядит? Владимир расскажет, как переводить бизнес-требования в технические решения — просто, эффективно и без оверинжиниринга.\n\nЧто будет:\n– как распознать настоящую бизнес-проблему\n– как находить технические решения, которые приносят результат\n– реальные примеры из продакшн-опыта\n– подходы и инструменты: от архитектурных принципов до AI-помощников",
    youtubeLink: "https://youtube.com/live/dKulH47IwHQ?feature=share",
    authorId: "author5",
    duration: 90
  },

  {
    id: "event4_1",
    date: "2025-08-13T19:30:00+05:00",
    title: "Платформа PS.kz",
    description: "Как работать с облачной платформой и ее возможности для хостинга сервиса. Обзор платформы, сценарии.",
    youtubeLink: "https://youtube.com/live/-hI7HJTAD-s?feature=share",
    authorId: "author6",
    duration: 90
  }
];

// Helper function to get author by ID
export const getAuthor = (authorId: string): Author | undefined => {
  return authors[authorId];
};

// Helper function to get events sorted by date
export const getScheduleEventsSorted = (): ScheduleEvent[] => {
  return [...scheduleEvents].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

// Helper function to format date for display
export const formatEventDate = (dateString: string, locale: string = 'ru'): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric', 
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Yekaterinburg',
    timeZoneName: 'short'
  };
  
  return date.toLocaleDateString(locale === 'kk' ? 'kk-KZ' : 'ru-RU', options);
};