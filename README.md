# Maksym Baluiev — портфоліо

Статичний сайт на [Astro](https://astro.build). Публікується на GitHub Pages автоматично після кожного push у `main`.

## Запуск локально

```bash
npm install      # один раз
npm run dev      # http://localhost:4321, оновлюється при збереженні
npm run build    # збірка в dist/
npm run preview  # перегляд зібраного сайту
```

## Як додати проєкт

1. Створи папку `src/content/projects/<назва>/`. Назва папки = адреса сторінки (`/work/<назва>/`).
2. Поклади туди `index.md` (скопіюй з іншого проєкту) і картинки.
3. Обкладинка для головної: файл, назва якого починається з `cover` (напр. `Cover for main.jpg`, 4:3, 2400×1800). У галереї проєкту вона не показується. Решта картинок показуються на сторінці проєкту за назвою файлу: `01.jpg`, `02.jpg` … Якщо файлу `cover…` немає, обкладинкою стає перша картинка.
4. Підписи для картинок (alt) — у полі `alts`:
   ```yaml
   alts:
     01.jpg: Logo on a poster
   ```

Оригінали картинок ніхто не змінює: збірка робить з них оптимізовані AVIF/WebP у `dist/`.

Поля `index.md`: `title`, `summary` (коротко, для соцмереж), `services`, `year`, `credits` (рядки таблиці, напр. `- { label: Client, value: University of Zurich }`), `links` (перше посилання стоїть біля назви, напр. `- { label: Download, url: https://... }`), `order` (порядок у сітці), `cover`, `coverAlt`, `alts`, `draft: true` (сховати).

## Де що міняти

| Що | Де |
|---|---|
| Кольори, шрифти, відступи, сітка | `src/styles/tokens.css` |
| Ім'я, інтро, послуги, email, соцмережі, адреса сайту | `src/site.config.ts` |
| Шапка / футер | `src/components/Header.astro`, `Footer.astro` |
| Картка і сітка проєктів | `src/components/ProjectCard.astro`, `ProjectGrid.astro` |
| Сторінки | `src/pages/` |
| Favicon, OG-картинка | `public/` |
