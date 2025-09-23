import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://alvaro-gmez.github.io/Porfolio-AlvaroGomez/',
  base: '/Porfolio-AlvaroGomez/',
  integrations: [tailwind()]
});