import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@components': resolve('./src/components'),
        '@styles': resolve('./src/styles')
      }
    }
  }
});
