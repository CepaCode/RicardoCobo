// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://cepacode.github.io',
  base: '/RicardoCobo',
  vite: {
    plugins: [tailwindcss()]
  }
});