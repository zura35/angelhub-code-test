This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting Started

## Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Demo page is built in `pages/index.tsx`.

# Deployment

The demo page is deployed via Github Actions to Github Pages. Deployment will be triggered upon commit pushed to `main` branch. Access https://zura35.github.io/angelhub-code-test/ to view demo page.


# Project Structure
There are three new folders added to the project, namely `components`, `helpers` and `models`.

```
├── README.md
├── components - UI components that are built for reuse
├── helpers - helper functions (mainly mocking API response here)
├── models - data models
├── next-env.d.ts
├── next.config.js
├── node_modules
├── package-lock.json
├── package.json
├── pages
├── postcss.config.js
├── public
├── styles
├── tailwind.config.js
└── tsconfig.json
```