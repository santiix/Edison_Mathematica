// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
//export default defineConfig({});

//import-site-map
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [sitemap()],
  site: 'https://www.life-calculators.com'
});

