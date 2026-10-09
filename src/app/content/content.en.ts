import type { Content } from './content.model';

const COLD_START =
  'Runs on a free server that sleeps when idle: the first visit can take up to a minute.';

export const EN: Content = {
  meta: {
    title: 'Olexii Mormul — Front-end developer',
    description:
      'Front-end developer with 8+ years of experience: Angular, React, Vue, and the backends behind them. Live demos and source code of my projects.',
  },
  nav: { projects: 'Projects', skills: 'Skills', experience: 'Experience', contact: 'Contact' },
  langSwitch: { label: 'Language', en: 'EN', uk: 'UA' },
  hero: {
    name: 'Olexii Mormul',
    role: 'Front-end developer',
    intro:
      'Eight years of building web apps: Angular, React and Vue on the front, .NET and Node.js behind them. I am comfortable owning a feature end to end: the API, the database and the interface.',
    location: 'Cherkasy, Ukraine. Working remotely.',
    emailCta: 'Write to me',
    githubCta: 'GitHub',
    linkedinCta: 'LinkedIn',
  },
  projects: {
    title: 'Projects',
    lead: 'Each one runs live and has its source code public. Open a demo, then read the code behind the part you liked.',
    live: 'Open live demo',
    code: 'Source code',
    highlightsLabel: 'Worth a look',
    stackLabel: 'Built with',
    items: [
      {
        id: 'wordloop',
        name: 'WordLoop',
        tag: 'Angular + NestJS',
        summary:
          'A web app for learning English words. You collect words into cards, and a random review brings each card back on a growing interval.',
        highlights: [
          'Spaced-repetition algorithm lives in a shared library, so guest mode (in the browser) and the server compute the same timers',
          'Student and teacher roles, a quick-add inbox, and a link that sends words straight from an e-reader',
          'NestJS API in layers (domain, application, infrastructure) with cookie auth and refresh-token rotation',
          'Bilingual interface and text-to-speech with highlighting of the spoken word',
        ],
        stack: 'Angular 21 (signals, zoneless), NestJS 11, PostgreSQL, Prisma, Zod, Docker',
        access: 'Works without sign-up in guest mode.',
        image: 'projects/wordloop.webp',
        imageAlt: 'WordLoop word card with meaning, usage example and word forms',
      },
      {
        id: 'eventpass',
        name: 'EventPass',
        tag: 'Laravel + Vue',
        summary:
          'Ticket sales for events. Organizers publish events, buyers pay online and get QR tickets by email, staff scan them at the door.',
        highlights: [
          'One payment interface with LiqPay, Stripe and a test gateway; signed, idempotent webhooks',
          'No overselling: row locks inside a transaction and 15-minute seat holds released by the scheduler',
          'Ticket issuing and emails in a queue; a camera QR scanner that lets a ticket in only once',
          '45 Pest tests on the backend, Vitest and strict vue-tsc on the frontend',
        ],
        stack: 'Laravel 13 (PHP 8.3), Vue 3, TypeScript, Pinia, PostgreSQL, Docker',
        access: 'Buyer: buyer@eventpass.test, organizer: organizer@eventpass.test, password: password. Payments use the test gateway.',
        note: COLD_START,
        image: 'projects/eventpass.webp',
        imageAlt: 'EventPass event page with ticket types and payment options',
      },
      {
        id: 'aiPlatform',
        name: 'AI Commerce Platform',
        tag: 'Go + Angular',
        summary:
          'Lets AI assistants such as ChatGPT or Claude find a business, check live availability, book and take payment, while bookings land in the business’s own systems.',
        highlights: [
          'Go backend with connectors for websites, Shopify, WooCommerce, a booking system and Stripe',
          'MCP server, OpenAPI, product feed and schema.org data generated from one business profile',
          'Every AI request is tracked: funnel, revenue by AI channel, demand nobody could serve',
          'Angular dashboard for the business owner, including a page to try it as a customer',
        ],
        stack: 'Go, PostgreSQL, Angular 21, MCP, Stripe',
        access: 'Opens straight into the dashboard of a demo salon. Try "Try it as a customer".',
        note: COLD_START,
        image: 'projects/ai-platform.webp',
        imageAlt: 'AI Commerce dashboard with a sales funnel and revenue by AI channel',
      },
      {
        id: 'smartSender',
        name: 'Smart Sender webhooks',
        tag: 'React',
        summary:
          'A test assignment for a Senior Frontend role: sign in, list, search and edit webhooks against a strict API contract.',
        highlights: [
          'HTTP client with CSRF, session rotation on 401 and a single shared refresh for parallel requests',
          'Page and search kept in the URL, so reload and back/forward behave',
          'Server validation errors shown next to the right fields',
          'The API is mocked with MSW in the browser, and the same mocks drive the tests',
        ],
        stack: 'React 19, TypeScript, TanStack Query, React Router, React Hook Form, MSW, Vitest',
        access: 'Login: demo@smartsender.dev, password: password123.',
        image: 'projects/smart-sender.webp',
        imageAlt: 'Smart Sender webhook list with search and pagination',
      },
    ],
  },
  skills: {
    title: 'Skills',
    groups: [
      {
        title: 'Frontend',
        items: [
          'Angular 14+: signals, zoneless, NgRx Signal Store, RxJS, CDK',
          'React and Next.js: Redux Toolkit, RTK Query, React Query',
          'Vue 3: Composition API, Pinia',
          'TypeScript, JavaScript, AngularJS (and migrating away from it)',
          'PrimeNG, NG-ZORRO, MUI, Tailwind CSS, SCSS',
          'Monaco Editor, Konva, Three.js',
        ],
      },
      {
        title: 'Backend',
        items: [
          '.NET, ASP.NET Core, C#, Entity Framework Core',
          'MediatR, AutoMapper, FluentValidation, Serilog',
          'Node.js, NestJS',
          'PHP, Laravel',
          'Go',
          'REST, GraphQL, Swagger and OpenAPI, MCP',
        ],
      },
      {
        title: 'Data and infrastructure',
        items: [
          'PostgreSQL, SQL Server: query tuning, indexes, stored procedures',
          'Redis',
          'Prisma, Drizzle, Eloquent',
          'Docker, CI/CD',
          'Vercel, Render, Neon',
          'Payments: Stripe, LiqPay',
        ],
      },
      {
        title: 'How I work',
        items: [
          'Tests: Jest, Vitest, Playwright, Cypress, Pest',
          'Reusable component libraries shared across apps',
          'Shared Zod schemas between client and server',
          'Agile and Scrum, Jira, Figma',
          'AI tools daily: Claude Code, GitHub Copilot, Google Antigravity',
          'Ukrainian native, English B1 (working towards B2)',
        ],
      },
    ],
  },
  experience: {
    title: 'Experience',
    jobs: [
      {
        period: '07/2023 – 09/2026',
        role: 'Senior Front-End Developer',
        company: 'REHAU',
        place: 'Cherkasy',
        points: [
          'Embedded the Monaco code editor into internal tools with custom syntax highlighting and actions: setup and onboarding time down about 25%.',
          'Built reusable component libraries on NG-ZORRO and PrimeNG for several apps; virtual scrolling for large datasets cut initial render by about 40% and memory by about 30%.',
          'Unit tests in Jest, end-to-end in Playwright and Cypress: the team reached about 80% coverage and about 20% fewer post-release bugs.',
          'Features for three internal tools at once, in Angular 18+, Vue 3 and React, on one REST data layer.',
        ],
      },
      {
        period: '07/2021 – 06/2023',
        role: 'Middle Full Stack Developer',
        company: 'ALIQUOT',
        place: 'Kyiv',
        points: [
          'Led the migration from AngularJS to React 17 with TypeScript and React Query, with zero downtime: load about 35% faster, new features about 20% quicker to ship.',
          'Optimized SQL queries, stored procedures and triggers: database load down about 40%.',
          'REST APIs on .NET 6 and EF Core: average response time down about 25%.',
        ],
      },
      {
        period: '07/2018 – 07/2021',
        role: 'Junior Full Stack Developer',
        company: 'Luxoft',
        place: 'Kyiv',
        points: [
          'Refactored with MediatR, AutoMapper and FluentValidation: 30% less duplicated code.',
          'UI features on Angular and PrimeNG over secure .NET endpoints: about 15% fewer reported UI bugs.',
          'Tuned EF Core queries and SQL indexes: queries about 30% faster on average.',
        ],
      },
    ],
    educationTitle: 'Education',
    education:
      'Bachelor’s and Master’s in Computer Engineering, Taras Shevchenko National University of Kyiv, 2016 – 2022.',
    thesis: 'Master’s thesis: forecasting the number of visitors to a shopping center with regression models.',
    thesisLink: 'Read the thesis',
  },
  contact: {
    title: 'Let’s talk',
    text: 'Open to front-end and full-stack roles. Email or Telegram is the fastest way to reach me.',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    telegram: 'Telegram',
  },
  footer: 'This site is built with Angular 21. Source code is on GitHub.',
};
