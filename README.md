# Portfolio — Álvaro Gómez

Personal portfolio built with **Astro 6** and **Tailwind CSS v4**.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-porfolio--alvaro--gomez.vercel.app-black?style=for-the-badge&logo=vercel)](https://porfolio-alvaro-gomez.vercel.app/)

## Stack

![Astro](https://img.shields.io/badge/Astro-6-FF5D01?style=flat-square&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=flat-square&logo=pnpm&logoColor=white)

## Features

- Bilingual (ES / EN) with language toggle persisted in localStorage
- Dark / Light theme toggle persisted in localStorage
- Dynamic Island fixed navbar with availability status
- Sections: About, Projects, Education & Certifications, Skills, Contact
- Image optimization with Sharp
- Full SEO (Open Graph tags, hreflang, canonical URL)

## Project Structure

```
src/
├── assets/
│   └── icons/
│       ├── Habilidades/          # Tech skill SVG icons
│       └── *.astro               # UI icons
├── components/
│   ├── Badge.astro
│   ├── Contacto.astro
│   ├── DynamicIsland.astro
│   ├── EducacionCertificaciones.astro
│   ├── Footer.astro
│   ├── Habilidades.astro
│   ├── Nav.astro
│   ├── Proyectos.astro
│   ├── SectionTitle.astro
│   └── SobreMi.astro
├── layouts/
│   └── Layout.astro
└── pages/
    ├── index.astro               # Spanish version
    └── en/
        └── index.astro           # English version
```

## Commands

| Command        | Action                             |
| :------------- | :--------------------------------- |
| `pnpm install` | Install dependencies               |
| `pnpm dev`     | Start dev server at localhost:4321 |
| `pnpm build`   | Build for production to `./dist/`  |
| `pnpm preview` | Preview production build locally   |
