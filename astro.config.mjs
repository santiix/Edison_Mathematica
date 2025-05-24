import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.life-calculators.com',
  integrations: [sitemap()],
});


