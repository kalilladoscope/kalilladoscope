// ============================================================
// artworks.ts — Edit this file to add, remove, or change artworks
// ============================================================
// Image paths are relative to the public directory.
// Place artwork images in: public/assets/artworks/
//
// Artwork status options: 'available' | 'sold' | 'personal collection' | 'not for sale'
// Collection options: any string — new collections appear automatically in the gallery filter

export type ArtworkStatus = 'available' | 'sold' | 'personal collection' | 'not for sale';

export interface Artwork {
  id: string;
  title: string;
  year: number;
  medium: string;
  size: string;
  description: string;
  imagePath: string;
  altText: string;
  collection: string;
  status: ArtworkStatus;
}

// ---- All collections (controls filter order in gallery) ----
export const collections: string[] = ['Mandala Studies', 'Geometric Meditations', 'Pattern Explorations'];

// ---- Artworks ----
export const artworks: Artwork[] = [
  {
    id: 'm-001',
    title: 'Ice Square',
    year: 2026,
    medium: 'aquarelle on paper',
    size: '20 × 20 cm',
    description:
      'A study in symmetry and the shifting qualities of blue. Intricate patterns unfold from a central snowflake form.',
    imagePath: './assets/artworks/icesquare.jpg',
    altText: 'Blue and turquoise aquarelle painting with intricate, symmetrical pattern detail',
    collection: 'Mandala Studies',
    status: 'available',
  },
  {
    id: 'm-002',
    title: 'Dune',
    year: 2026,
    medium: 'aquarelle on paper',
    size: 'A4 (21 × 29.7 cm)',
    description:
      'A mandala-like painting inspired by the colour palette of the Dune movies — desert colours with a bit of blue of the iris coloured by scpice',
    imagePath: './assets/artworks/dune.jpg',
    altText: 'A mandala-like painting in desert and sand tones with fractal patterns',
    collection: 'Mandala Studies',
    status: 'available',
  },
  {
    id: 'm-003',
    title: 'Psychedelic Radiance',
    year: 2026,
    medium: 'aquarelle on paper',
    size: 'A3 (29.7 × 42 cm)',
    description:
      'A large-format mandala exploring psychedelic colour and the tension between chaos and symmetry — vivid, layered, and alive with pattern energy.',
    imagePath: './assets/artworks/rainbowa3.jpg',
    altText: 'A large psychedelic mandala painting in vivid colour with radiating symmetry',
    collection: 'Mandala Studies',
    status: 'available',
  },
  {
    id: 'gm-001',
    title: 'Rainbow Explosion Portal',
    year: 2024,
    medium: 'aquarelle on paper',
    size: 'A3 (29.7 × 42 cm)',
    description:
      'A large-format study painted in the colours of a rainbow, balancing intensity and harmony',
    imagePath: './assets/artworks/rainbowportalwithpaints.jpg',
    altText: 'A large symmetric aquarelle painting with the tones of a rainbow',
    collection: 'Geometric Meditations',
    status: 'available',
  },
  {
    id: 'gm-002',
    title: 'Grid and Circle No. 2',
    year: 2024,
    medium: 'Oil and ink on cartridge paper',
    size: 'A5 (14.8 × 21 cm)',
    description:
      'Exploring the tension between the grid and the circle — a small, precise study in charcoal grey and warm white.',
    imagePath: './assets/artworks/grid-circle-2.svg',
    altText: 'A small geometric study in grey and white exploring grid and circular forms',
    collection: 'Geometric Meditations',
    status: 'available',
  },
  {
    id: 'pe-001',
    title: 'Texture Flow I',
    year: 2023,
    medium: 'Oil on canvas',
    size: 'A4 (21 × 29.7 cm)',
    description:
      'An exploration of organic texture and flowing pattern — shapes that repeat and evolve across the surface, guided by intuition rather than a fixed plan.',
    imagePath: './assets/artworks/dried-honesty.svg',
    altText: 'An abstract oil painting of flowing organic patterns in soft tones',
    collection: 'Pattern Explorations',
    status: 'sold',
  },
  {
    id: 'pe-002',
    title: 'Symmetry Study — Dusk',
    year: 2023,
    medium: 'Oil on cold-pressed paper',
    size: 'A5 (14.8 × 21 cm)',
    description:
      'A quiet study in symmetry and balance — dusky pinks and deep blues meeting at a central axis, each half a mirror of controlled spontaneity.',
    imagePath: './assets/artworks/corner-window.svg',
    altText: 'A symmetric abstract oil painting in dusky pink and deep blue',
    collection: 'Pattern Explorations',
    status: 'available',
  },
  {
    id: 'pe-003',
    title: 'Structure & Chaos',
    year: 2022,
    medium: 'Oil on canvas',
    size: 'A4 (21 × 29.7 cm)',
    description:
      'An early exploration of the dialogue between rigid structure and free-flowing chaos — geometric anchors surrounded by expressive, unplanned mark-making.',
    imagePath: './assets/artworks/bristol-dockside.svg',
    altText: 'An abstract oil painting contrasting geometric structure with expressive marks',
    collection: 'Pattern Explorations',
    status: 'sold',
  },
];
