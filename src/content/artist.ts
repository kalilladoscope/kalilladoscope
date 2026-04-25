// ============================================================
// artist.ts — Edit this file to change artist content
// ============================================================

export const artist = {
  name: 'Lilla',

  shortBio:
    'Patternist painter originally from Hungary, now based in Australia, exploring mandalas, symmetry, and psychedelic textures through oil painting.',

  // Each string is rendered as a separate paragraph
  bio: [
    'I am originally from Hungary and currently based in Australia, where I continue to develop my practice as a patternist painter in the abstract space.',
    'My work is rooted in a fascination with patterns — the intricate geometry of mandalas, the rhythm of repeating textures, and the way symmetry can emerge from what feels like unstructured chaos. I am drawn to psychedelic expression and the idea that beauty can arise spontaneously from within.',
    'I work primarily in oil painting, exploring shapes and structures in an ad hoc, intuitive way — letting each composition evolve organically rather than following a fixed plan.',
  ],

  // Path relative to the public directory, or an absolute URL
  profileImagePath: './assets/artworks/artist-profile.jpg',
  profileImageAlt: 'Lilla in her studio',

  statement: {
    heading: 'Artist Statement',
    body: [
      'I am drawn to beautiful patterns that can express structure and symmetry from a flow of unstructured chaos, and am currently exploring mandala inspired styles.',
      'I paint to embody a state of flow and express what naturally comes from within.',
    ],
  },

  process: {
    heading: 'My Process',
    steps: [
      {
        number: '01',
        title: 'Shape Exploration',
        description:
          'Every piece begins with exploring shapes — playing with forms, curves, and repetitions until a visual language starts to emerge. There are no rules at this stage, only curiosity.',
      },
      {
        number: '02',
        title: 'Ad Hoc Structure Planning',
        description:
          'Rather than a fixed blueprint, I plan structure intuitively — responding to what the shapes suggest. Symmetry and pattern guide the composition as it reveals itself.',
      },
      {
        number: '03',
        title: 'Oil Painting',
        description:
          'I build the work in oil paint, layering colour and texture with depth and richness. Oil allows for slow, deliberate transitions and a luminosity that suits the psychedelic quality of the patterns.',
      },
      {
        number: '04',
        title: 'Refinement & Finishing',
        description:
          'Final passes bring definition to edges, deepen contrasts, and unify the composition. The piece is finished when the pattern feels complete — balanced yet alive.',
      },
    ],
  },

  milestones: {
    heading: 'Exhibitions & Milestones',
    items: [
      {
        year: '1999',
        title: 'Painting Furniture for a Tai Chi Community',
        description:
          'As a child, painted furniture with patterns for a local tai chi community — an early encounter with the meditative quality of pattern-making.',
        type: 'milestone' as const,
      },
      {
        year: '2006',
        title: 'Developing Ad Hoc Pattern Art and Human Structures',
        description:
          'Began developing a more personal language of ad hoc pattern art, incorporating organic human structures and freeform composition.',
        type: 'milestone' as const,
      },
      {
        year: '2013',
        title: 'Exploring Themes of Colour',
        description:
          'A focused period of exploring how colour interacts with pattern — experimenting with palettes, contrast, and the emotional resonance of hue.',
        type: 'milestone' as const,
      },
      {
        year: '2019',
        title: 'Multiple Painting Patterns',
        description:
          'Created a body of work spanning multiple pattern styles — deepening the practice and establishing a consistent artistic voice.',
        type: 'event' as const,
      },
      {
        year: '2026',
        title: 'Building Beautiful Mandala Paintings',
        description:
          'Currently focused on creating mandala-inspired paintings that embody symmetry, psychedelic expression, and the flow of structured chaos.',
        type: 'milestone' as const,
      },
    ],
  },

  commissions: {
    heading: 'Commissions',
    intro:
      'I take on a small number of commissions each year to ensure each piece receives the time and attention it deserves.',
    // Change to 'open', 'closed', or 'waitlist'
    status: 'open' as 'open' | 'closed' | 'waitlist',
    statusNote: 'Currently accepting commissions — estimated 6–8 week turnaround.',
    tiers: [
      {
        title: 'Small Original',
        size: 'A5 (14.8 × 21 cm)',
        price: 'From £120',
        description:
          'A single mandala or pattern study. Ideal as a personal gift or small wall piece.',
        includes: [
          'Original oil painting on 300gsm paper',
          'Certificate of authenticity',
          'Unframed, posted flat',
        ],
      },
      {
        title: 'Medium Original',
        size: 'A4 (21 × 29.7 cm)',
        price: 'From £220',
        description:
          'A more detailed composition — a mandala portrait, pattern study, or mixed-element piece.',
        includes: [
          'Original oil painting on 300gsm paper',
          'Certificate of authenticity',
          'Unframed, posted flat',
        ],
      },
      {
        title: 'Large / Bespoke',
        size: 'A3+ (42 × 60 cm or custom)',
        price: 'From £450',
        description:
          'A significant, bespoke work. Includes full consultation, reference gathering, and revision stages.',
        includes: [
          'Original oil painting with mixed media',
          'Full consultation process',
          'Progress photographs',
          'Certificate of authenticity',
          'Unframed or framed (discuss)',
        ],
      },
    ],
    note: 'To enquire about a commission, please use the contact form below or email directly.',
  },

  contact: {
    heading: 'Get in Touch',
    intro:
      "Whether you're interested in a commission, an original work, or simply want to say hello — I'd love to hear from you.",
    email: 'hello@lilla.art',
    location: 'Australia',
    social: [
      {
        platform: 'Instagram',
        handle: '@lillareadsminds',
        href: 'https://instagram.com/lillareadsminds',
      },
      {
        platform: 'Etsy',
        handle: 'LillaArt',
        href: 'https://etsy.com/shop/LillaArt',
      },
    ],
    formNote: "Fill in the form below and I'll get back to you within 2–3 working days.",
  },
};
