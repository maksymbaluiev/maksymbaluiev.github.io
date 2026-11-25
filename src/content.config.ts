import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Один проєкт = одна папка в src/content/projects/<slug>/
// з файлом index.md і картинками поруч.
const projects = defineCollection({
  loader: glob({
    pattern: '*/index.md',
    base: './src/content/projects',
    // id = назва папки (вона ж адреса сторінки: /work/<папка>/)
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Короткий опис для картки, SEO і соцмереж
      summary: z.string(),
      services: z.array(z.string()).default([]),
      year: z.number().optional(),
      // Порядок у сітці: менше число = вище
      order: z.number().default(100),
      // Обкладинка. Якщо не вказана, береться перша картинка з папки.
      cover: image().optional(),
      coverAlt: z.string().optional(),
      // Підписи (alt) для картинок галереї за назвою файлу: { "01.jpg": "..." }
      alts: z.record(z.string(), z.string()).default({}),
      // Посилання, напр. на завантаження шрифту
      links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
      // draft: true = проєкт не публікується
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
