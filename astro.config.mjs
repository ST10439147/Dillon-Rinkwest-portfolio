import { defineConfig } from 'astro/config';

// SITE and BASE_PATH are set by the deploy workflow from GitHub Pages settings,
// so this works for both <user>.github.io and project repos (and custom domains).
export default defineConfig({
  site: process.env.SITE,
  base: process.env.BASE_PATH || '/',
});
