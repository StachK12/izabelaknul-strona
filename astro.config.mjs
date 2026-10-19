// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://izabelaknul.pl',
  // Adresy bez ukośnika na końcu, tak jak na starej stronie (np. /czas-do-lasu).
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/dziekuje') && !page.endsWith('/404'),
    }),
  ],
});
