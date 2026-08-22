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
];
