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
  location: 'Zürich, Switzerland',
  // Шапка сайту
  locations: ['Zürich, Switzerland', 'Kyiv, Ukraine'],
  headerServices: ['Brand Identity', 'Art Direction', 'Illustration', 'Graphic Design'],
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
  // Сторінка About (тексти з maksymbaluiev.figma.site/contactabout). Порожні поля не показуються.
  about: {
    // 1. Profile
    profile:
      "With 15 years of design experience, I’ve held roles such as art director, senior designer, and head of design. These positions have given me valuable office and teamwork experience. Alongside this, I’ve also worked as a freelance designer, specializing in branding, 3D, graphic design, and animation. I like to stay up to date with design innovations. My design work has been recognized with multiple international awards, in both team and individual categories.",
    // 2. Approach
    approach:
      'My goal is to create designs that are both functional and emotionally compelling, to meet users’ needs effectively.',
    // 3. Info
    services: [
      'Brand Identity Design',
      'Brand Strategy',
      'Logo Design',
      'Art Direction',
      'Packaging Design',
      'Brand Book',
      'Social Media Design',
      '3D Modeling & Animation',
      'Publishing and Print',
      'UX / UI Design',
      'Layout Design & Grid Systems',
      'Poster & Infographic Design',
      'Illustration',
      'Animation: 3D, 2D and Stop-Motion',
      'Font Design',
    ],
    clients: [
      'University of Zurich',
      'Konzertchor Harmonie Zürich',
      'Medicosearch',
      'United 24',
      'Appflame',
      'Arkis',
      'ISD Group',
      'KaKaHa',
      'Shevchenko National Prize',
      'Resolution Games',
      'Evoverse',
      'NGL Media',
      'Flywheel Film',
      'Free Radio',
    ],
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
  // Пункти меню. Головна відкривається кліком по імені.
  nav: [
    { label: 'Blog', href: '/blog/' },
    { label: 'About | Contact', href: '/about/' },
  ],
};
