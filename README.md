# Portfolio — Álvaro Gómez

Personal portfolio built with **Astro 6** and **Tailwind CSS v4**.

## Stack

- [Astro 6](https://astro.build) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com) — utility-first styling
- pnpm — package manager

## Features

- Dynamic Island fixed navbar with availability status
- Dark / Light theme toggle (persisted in localStorage)
- ES / EN language toggle (persisted in localStorage)

## Project Structure

```
src/
├── components/
│   └── DynamicIsland.astro   # Fixed top navbar
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css
```

## Commands

| Command        | Action                              |
| :------------- | :---------------------------------- |
| `pnpm install` | Install dependencies                |
| `pnpm dev`     | Start dev server at localhost:4321  |
| `pnpm build`   | Build for production to `./dist/`   |
| `pnpm preview` | Preview production build locally    |
