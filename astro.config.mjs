// @ts-check
import { defineConfig } from 'astro/config';
import { SITE } from './src/site.config.ts';

export default defineConfig({
  site: SITE.url,
  // Для сайту виду <логін>.github.io base не потрібен.
  // Для репозиторію з іншою назвою: base: '/назва-репозиторію'
  trailingSlash: 'ignore',
});
