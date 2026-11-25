import { getCollection, type CollectionEntry } from 'astro:content';
import type { ImageMetadata } from 'astro';

export type Project = CollectionEntry<'projects'>;
export type ProjectImage = { src: ImageMetadata; alt: string; file: string };

// Усі картинки з папок проєктів. Сортуються за назвою файлу (01.jpg, 02.jpg …).
const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/content/projects/*/*.{jpg,jpeg,png,webp,avif,gif,JPG,JPEG,PNG,WEBP}',
  { eager: true },
);

// Тимчасові заглушки, поки в папці проєкту немає картинок.
const placeholders = Object.values(
  import.meta.glob<{ default: ImageMetadata }>('/src/assets/placeholders/*.png', { eager: true }),
).map((m) => m.default);

export async function getProjects(): Promise<Project[]> {
  const all = await getCollection('projects', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

export function getProjectImages(project: Project): ProjectImage[] {
  const prefix = `/src/content/projects/${project.id}/`;
  const own = Object.entries(files)
    .filter(([path]) => path.startsWith(prefix))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([path, mod], i) => {
      const file = path.slice(prefix.length);
      return {
        src: mod.default,
        file,
        alt: project.data.alts[file] ?? `${project.data.title}, image ${i + 1}`,
      };
    });
  if (own.length) return own;
  return placeholders.map((src, i) => ({
    src,
    file: `placeholder-${i + 1}`,
    alt: `${project.data.title}, placeholder image ${i + 1}`,
  }));
}

export function getCover(project: Project): ProjectImage {
  if (project.data.cover) {
    return {
      src: project.data.cover,
      file: 'cover',
      alt: project.data.coverAlt ?? project.data.title,
    };
  }
  const [first] = getProjectImages(project);
  return { ...first, alt: project.data.coverAlt ?? first.alt };
}
