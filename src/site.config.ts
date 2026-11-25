// Загальні дані сайту. Міняй тут, а не у верстці.

export const SITE = {
  // Адреса сайту. Якщо колись буде свій домен, міняй тут.
  url: 'https://maksymbaluiev.github.io',
  name: 'Maksym Baluiev',
  lang: 'en',
  description:
    'Designer from Kyiv, based in Zurich. Brand identity, graphic design, motion, 3D, packaging and illustration.',
  intro:
    'Designer from Kyiv, currently based in Zurich, with 15 years of experience. My expertise spans brand identity, graphic design, motion, 3D, packaging, and illustration. I also experiment with product design and architecture, exploring new creative possibilities at the intersection of form and function.',
  location: 'Zurich, Switzerland',
  email: 'maksymbaluiev@gmail.com',
  services: [
    'Brand Identity',
    'Graphic Design',
    'Art Direction',
    'Packaging Design',
    'Illustration',
    'Motion Design',
    '3D Design',
    'UX / UI Design',
  ],
  // Сторінка About. Порожні поля не показуються.
  about: {
    // 2. Approach: як ти працюєш (кілька речень). TODO: текст від Максима
    approach: '',
    // 3. Info: списки. TODO: дані від Максима
    clients: [] as string[],
    recognition: [] as string[],
    industries: [] as string[],
    experience: [] as string[],
  },
  // Порожній url = посилання не показується. TODO: додати адреси профілів.
  social: [
    { label: 'Behance', url: '' },
    { label: 'Instagram', url: '' },
    { label: 'Dribbble', url: '' },
    { label: 'LinkedIn', url: '' },
  ],
  nav: [
    { label: 'Work', href: '/' },
    { label: 'About', href: '/about/' },
  ],
};
