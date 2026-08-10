// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://haydenslaughter.co.uk',
  integrations: [
    preact(),
    sitemap({
      // Keep the noindex experience/reference routes out of the sitemap.
      filter: (page) =>
        !page.includes('/desktop') && !page.includes('/styleguide'),
    }),
  ],
});