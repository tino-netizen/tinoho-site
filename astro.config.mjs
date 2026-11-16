import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://tinoho.com',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
