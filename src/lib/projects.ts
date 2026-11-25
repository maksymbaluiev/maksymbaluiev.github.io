import { getCollection, type CollectionEntry } from 'astro:content';
import type { ImageMetadata } from 'astro';

export type Project = CollectionEntry<'projects'>;
export type ProjectImage = { src: ImageMetadata; alt: string; file: string };
// Елемент галереї сторінки проєкту: картинка або відео (mp4/webm, грає без звуку по колу)
export type ProjectVideo = { video: string; alt: string; file: string };
export type ProjectMedia = ProjectImage | ProjectVideo;
export const isVideo = (m: ProjectMedia): m is ProjectVideo => 'video' in m;

// Усі картинки з папок проєктів. Сортуються за назвою файлу (01.jpg, 02.jpg …).
const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/content/projects/*/*.{jpg,jpeg,png,webp,avif,gif,JPG,JPEG,PNG,WEBP}',
  { eager: true },
);

// Відео з папок проєктів (адреса файлу після збірки)
const videoFiles = import.meta.glob<string>('/src/content/projects/*/*.{mp4,webm,MP4,WEBM}', {
  eager: true,
  query: '?url',
  import: 'default',
});

// Тимчасові заглушки, поки в папці проєкту немає картинок.
const placeholders = Object.values(
  import.meta.glob<{ default: ImageMetadata }>('/src/assets/placeholders/*.png', { eager: true }),
).map((m) => m.default);

export async function getProjects(): Promise<Project[]> {
  const all = await getCollection('projects', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

// Обкладинка для головної: файл, назва якого починається з «cover» (напр. «Cover for main.jpg»).
// Вона не показується в галереї проєкту. Якщо такого файлу немає, обкладинкою стає перша картинка.
const isCoverFile = (file: string) => /^cover/i.test(file);

function ownImages(project: Project): ProjectImage[] {
  const prefix = `/src/content/projects/${project.id}/`;
  return Object.entries(files)
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
}

function placeholderImages(project: Project): ProjectImage[] {
  return placeholders.map((src, i) => ({
    src,
    file: `placeholder-${i + 1}`,
    alt: `${project.data.title}, placeholder image ${i + 1}`,
  }));
}

function ownVideos(project: Project): ProjectVideo[] {
  const prefix = `/src/content/projects/${project.id}/`;
  return Object.entries(videoFiles)
    .filter(([path]) => path.startsWith(prefix))
    .map(([path, url]) => {
      const file = path.slice(prefix.length);
      return { video: url, file, alt: project.data.alts[file] ?? `${project.data.title}, video` };
    });
}

/** Картинки й відео для сторінки проєкту (без окремої обкладинки), за назвою файлу */
export function getProjectImages(project: Project): ProjectMedia[] {
  const own = ownImages(project);
  const gallery: ProjectMedia[] = [...own.filter((img) => !isCoverFile(img.file)), ...ownVideos(project)];
  gallery.sort((a, b) => a.file.localeCompare(b.file, undefined, { numeric: true }));
  if (gallery.length) return gallery;
  if (own.length) return own; // є лише обкладинка: показуємо її
  return placeholderImages(project);
}

/** Обкладинка для головної */
export function getCover(project: Project): ProjectImage {
  if (project.data.cover) {
    return { src: project.data.cover, file: 'cover', alt: project.data.coverAlt ?? project.data.title };
  }
  const own = ownImages(project);
  const pick = own.find((img) => isCoverFile(img.file)) ?? own[0] ?? placeholderImages(project)[0];
  return { ...pick, alt: project.data.coverAlt ?? project.data.alts[pick.file] ?? project.data.title };
}
