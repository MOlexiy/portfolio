import type { Content } from './content.model';

const COLD_START =
  'Працює на безкоштовному сервері, який засинає без відвідувачів: перше відкриття може тривати до хвилини.';

export const UK: Content = {
  meta: {
    title: 'Олексій Мормуль — Front-end розробник',
    description:
      'Front-end розробник з досвідом понад 8 років: Angular, React, Vue і бекенд до них. Живі демо та код моїх проєктів.',
  },
  nav: { projects: 'Проєкти', skills: 'Навички', experience: 'Досвід', contact: 'Контакти' },
  langSwitch: { label: 'Мова', en: 'EN', uk: 'UA' },
  hero: {
    name: 'Олексій Мормуль',
    role: 'Front-end розробник',
    intro:
      'Вісім років створюю вебзастосунки: Angular, React і Vue на фронтенді, .NET і Node.js за ними. Можу вести фічу від початку до кінця: API, база даних та інтерфейс.',
    location: 'Черкаси, Україна. Працюю віддалено.',
    emailCta: 'Написати мені',
    githubCta: 'GitHub',
    linkedinCta: 'LinkedIn',
  },
  projects: {
    title: 'Проєкти',
    lead: 'Кожен працює наживо, а код відкритий. Відкрийте демо, а потім подивіться код того, що сподобалось.',
    live: 'Відкрити демо',
    code: 'Вихідний код',
    highlightsLabel: 'На що варто глянути',
    stackLabel: 'Технології',
    items: [
      {
        id: 'wordloop',
        name: 'WordLoop',
        tag: 'Angular + NestJS',
        summary:
          'Вебзастосунок для вивчення англійських слів. Слова зберігаються в картки, а випадкове повторення повертає кожну картку через інтервал, що зростає.',
        highlights: [
          'Алгоритм інтервального повторення винесений у спільну бібліотеку, тому гостьовий режим (у браузері) і сервер рахують таймери однаково',
          'Ролі учня й викладача, чернетка для швидкого додавання слів і посилання, що надсилає слова прямо з читалки',
          'API на NestJS із шарами (domain, application, infrastructure), авторизація через cookie з ротацією refresh-токенів',
          'Двомовний інтерфейс і озвучування тексту з підсвічуванням слова, яке звучить',
        ],
        stack: 'Angular 21 (signals, zoneless), NestJS 11, PostgreSQL, Prisma, Zod, Docker',
        access: 'Працює без реєстрації в гостьовому режимі.',
        image: 'projects/wordloop.webp',
        imageAlt: 'Картка слова у WordLoop зі значенням, прикладом і формами слова',
      },
      {
        id: 'eventpass',
        name: 'EventPass',
        tag: 'Laravel + Vue',
        summary:
          'Продаж квитків на події. Організатори публікують події, покупці платять онлайн і отримують QR-квитки на пошту, а на вході їх сканують.',
        highlights: [
          'Один платіжний інтерфейс для LiqPay, Stripe і тестового шлюзу; підписані та ідемпотентні вебхуки',
          'Без перепродажу місць: блокування рядків у транзакції і 15-хвилинне бронювання, яке звільняє планувальник',
          'Видача квитків і листи через чергу; сканер QR із камери пропускає квиток лише один раз',
          '45 тестів Pest на бекенді, Vitest і строгий vue-tsc на фронтенді',
        ],
        stack: 'Laravel 13 (PHP 8.3), Vue 3, TypeScript, Pinia, PostgreSQL, Docker',
        access: 'Покупець: buyer@eventpass.test, організатор: organizer@eventpass.test, пароль: password. Оплата через тестовий шлюз.',
        note: COLD_START,
        image: 'projects/eventpass.webp',
        imageAlt: 'Сторінка події в EventPass з типами квитків і способами оплати',
      },
      {
        id: 'aiPlatform',
        name: 'AI Commerce Platform',
        tag: 'Go + Angular',
        summary:
          'Дає AI-асистентам на кшталт ChatGPT чи Claude знайти бізнес, перевірити вільний час, забронювати й прийняти оплату, а записи потрапляють у власні системи бізнесу.',
        highlights: [
          'Бекенд на Go з конекторами до сайтів, Shopify, WooCommerce, системи бронювання і Stripe',
          'MCP-сервер, OpenAPI, товарний фід і дані schema.org з одного профілю бізнесу',
          'Кожен запит від AI відстежується: воронка, дохід за AI-каналами, попит, який не вдалося задовольнити',
          'Дашборд на Angular для власника бізнесу, зокрема сторінка, де можна спробувати все як клієнт',
        ],
        stack: 'Go, PostgreSQL, Angular 21, MCP, Stripe',
        access: 'Відкривається одразу в дашборді демо-салону. Спробуйте «Try it as a customer».',
        note: COLD_START,
        image: 'projects/ai-platform.webp',
        imageAlt: 'Дашборд AI Commerce з воронкою продажів і доходом за AI-каналами',
      },
      {
        id: 'smartSender',
        name: 'Smart Sender webhooks',
        tag: 'React',
        summary:
          'Тестове завдання на позицію Senior Frontend: вхід, список, пошук і редагування вебхуків за строгим контрактом API.',
        highlights: [
          'HTTP-клієнт із CSRF, ротацією сесії на 401 і одним спільним оновленням для паралельних запитів',
          'Сторінка й пошук зберігаються в URL, тож перезавантаження і «назад/вперед» працюють коректно',
          'Помилки валідації з сервера показуються біля відповідних полів',
          'API імітується через MSW у браузері, і ті самі моки використовуються в тестах',
        ],
        stack: 'React 19, TypeScript, TanStack Query, React Router, React Hook Form, MSW, Vitest',
        access: 'Вхід: demo@smartsender.dev, пароль: password123.',
        image: 'projects/smart-sender.webp',
        imageAlt: 'Список вебхуків Smart Sender з пошуком і пагінацією',
      },
    ],
  },
  skills: {
    title: 'Навички',
    groups: [
      {
        title: 'Фронтенд',
        items: [
          'Angular 14+: signals, zoneless, NgRx Signal Store, RxJS, CDK',
          'React і Next.js: Redux Toolkit, RTK Query, React Query',
          'Vue 3: Composition API, Pinia',
          'TypeScript, JavaScript, AngularJS (і міграція з нього)',
          'PrimeNG, NG-ZORRO, MUI, Tailwind CSS, SCSS',
          'Monaco Editor, Konva, Three.js',
        ],
      },
      {
        title: 'Бекенд',
        items: [
          '.NET, ASP.NET Core, C#, Entity Framework Core',
          'MediatR, AutoMapper, FluentValidation, Serilog',
          'Node.js, NestJS',
          'PHP, Laravel',
          'Go',
          'REST, GraphQL, Swagger і OpenAPI, MCP',
        ],
      },
      {
        title: 'Дані та інфраструктура',
        items: [
          'PostgreSQL, SQL Server: оптимізація запитів, індекси, збережені процедури',
          'Redis',
          'Prisma, Drizzle, Eloquent',
          'Docker, CI/CD',
          'Vercel, Render, Neon',
          'Платежі: Stripe, LiqPay',
        ],
      },
      {
        title: 'Як я працюю',
        items: [
          'Тести: Jest, Vitest, Playwright, Cypress, Pest',
          'Бібліотеки компонентів, спільні для кількох застосунків',
          'Спільні Zod-схеми для клієнта й сервера',
          'Agile і Scrum, Jira, Figma',
          'AI-інструменти щодня: Claude Code, GitHub Copilot, Google Antigravity',
          'Українська рідна, англійська B1 (працюю над B2)',
        ],
      },
    ],
  },
  experience: {
    title: 'Досвід',
    jobs: [
      {
        period: '07/2023 – 09/2026',
        role: 'Senior Front-End Developer',
        company: 'REHAU',
        place: 'Черкаси',
        points: [
          'Вбудував редактор коду Monaco у внутрішні інструменти з власним підсвічуванням синтаксису та діями: час на налаштування й онбординг скоротився приблизно на 25%.',
          'Створив бібліотеки компонентів на NG-ZORRO і PrimeNG для кількох застосунків; віртуальний скролінг для великих даних прискорив перший рендер приблизно на 40% і зменшив пам’ять приблизно на 30%.',
          'Unit-тести на Jest, end-to-end на Playwright і Cypress: команда досягла покриття близько 80% і на 20% менше багів після релізів.',
          'Фічі для трьох внутрішніх інструментів одночасно, на Angular 18+, Vue 3 і React, з одним REST-шаром даних.',
        ],
      },
      {
        period: '07/2021 – 06/2023',
        role: 'Middle Full Stack Developer',
        company: 'ALIQUOT',
        place: 'Київ',
        points: [
          'Керував міграцією з AngularJS на React 17 з TypeScript і React Query без простою: завантаження швидше приблизно на 35%, нові фічі виходять приблизно на 20% швидше.',
          'Оптимізував SQL-запити, збережені процедури й тригери: навантаження на базу менше приблизно на 40%.',
          'REST API на .NET 6 і EF Core: середній час відповіді менший приблизно на 25%.',
        ],
      },
      {
        period: '07/2018 – 07/2021',
        role: 'Junior Full Stack Developer',
        company: 'Luxoft',
        place: 'Київ',
        points: [
          'Рефакторинг із MediatR, AutoMapper і FluentValidation: на 30% менше дубльованого коду.',
          'UI-фічі на Angular і PrimeNG із захищеними .NET-ендпоінтами: приблизно на 15% менше повідомлень про баги в інтерфейсі.',
          'Оптимізував запити EF Core та SQL-індекси: запити в середньому швидші приблизно на 30%.',
        ],
      },
    ],
    educationTitle: 'Освіта',
    education:
      'Бакалавр і магістр комп’ютерної інженерії, Київський національний університет імені Тараса Шевченка, 2016 – 2022.',
    thesis: 'Магістерська робота: прогнозування кількості відвідувачів торговельного центру за допомогою регресійних моделей.',
    thesisLink: 'Читати роботу',
  },
  contact: {
    title: 'Поговорімо',
    text: 'Відкритий до пропозицій на front-end і full-stack ролі. Найшвидше зі мною зв’язатися поштою або в Telegram.',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    telegram: 'Telegram',
  },
  footer: 'Сайт зроблений на Angular 21. Код відкритий на GitHub.',
};
