// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // For GitHub Pages project site use base: '/chuachien-wiki/'
  site: 'https://example.com',
  base: '/',
});
