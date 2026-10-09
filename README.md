# Portfolio — Olexii Mormul

Personal portfolio: skills, experience and four projects with live demos.
Angular 21 (standalone, signals, zoneless, OnPush), EN/UA without an i18n library.

```bash
npm install
npm start        # http://localhost:4200
npm run build    # dist/portfolio/browser
```

## Where things live

| What | File |
| --- | --- |
| All texts, English | `src/app/content/content.en.ts` |
| All texts, Ukrainian | `src/app/content/content.uk.ts` |
| Demo and GitHub links, email | `src/app/content/links.ts` |
| Project screenshots (1280×800 webp) | `public/projects/` |
| Colours and fonts | `src/styles.scss` |

Language: `?lang=uk` / `?lang=en` in the URL, then the saved choice, then the browser language.

## Deploy (Vercel)

Import the repo in Vercel; `vercel.json` sets the build command and output folder. No environment variables.
