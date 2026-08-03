// ============================================================
// artist.ts — Edit this file to change artist content
// ============================================================

export const artist = {
  name: 'Kalilladoscope',

  shortBio:
    'Patternist painter originally from Hungary, now based in Australia, exploring mandalas, symmetry, and psychedelic textures through aquarelle painting.',

  // Each string is rendered as a separate paragraph
  bio: [
    'Originally from Hungary and currently based in Australia, I continue to develop my practice as an abstract painter.',
    'My work is rooted in a fascination with patterns. The pieces are more about immersion than symbolism: an opportunity for me and an invitation for you to focus, slow down, and sustain attention in a world that rarely allows for either.',
    'The process of creation is very important to me because of what it offers, including experimentation with the duality of carefully controlled symmetry paired with intense and vibrant colours and all the emotions that are channeled into a work.',
    'The paintings are fully hand-painted, primarily in aquarelle. My technique is old and traditional, but the creative process and the finished work are about and for the present.',
    'Some compositions evolve freely and organically, while others reflect more my fascination with structures. Across all of them, I aim to fuse attention to detail and balance with playfulness and spontaneity. The process as a whole always feels more like listening and exploration than planning and designing.',
  ],

  // Path relative to the public directory, or an absolute URL
  profileImagePath: './assets/artworks/artist-profile.jpg',
  profileImageAlt: 'Lilla in her studio',

  statement: {
    heading: 'Artist Statement',
    body: [
      'I paint to embody a state of flow and harmony and express what naturally comes from within. Behind every painting are many hours of meditative concentration and serenity. I hope that by looking at them, my moments of inspiration and calm can turn into yours, too.',
    ],
  },

  process: {
    heading: 'My Process',
    steps: [
      {
        number: '01',
        title: 'Shape Exploration',
        description:
          'Every piece begins with exploration: starting from the centre, playing with forms, colours, and repetition until a visual language starts to emerge. At this stage, there are no strict rules, only curiosity and patience.',
      },
      {
        number: '02',
        title: 'Intuitive Structure Building',
        description:
          'Rather than following a fixed blueprint, I develop each composition intuitively, pattern by little pattern. Symmetry and rhythm guide the work as it gradually reveals itself. I build each piece using an unusual technique in aquarelle, working with minimal water to create richness, softness, and depth. The medium can hold both soft, delicate detail and vibrant intensity, qualities that suit the psychedelic quality of my patterns.',
      },
      {
        number: '03',
        title: 'Refinement & Finishing',
        description:
          'The finishing touches bring sharper definition, stronger contrast, and greater cohesion. This is usually also the stage for adding “just one” more detail. A piece is complete when it feels balanced and dense with life and movement.',
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
          'As a child, painted murals and furniture with patterns for a local tai chi community — an early encounter with the meditative quality of pattern-making.',
        type: 'milestone' as const,
      },
      {
        year: '2006',
        title: 'Developing Ad Hoc Pattern Art and Human Structures',
        description:
          'Began developing a more personal language of ad hoc pattern art, incorporating patterns of folk art, nature, and freeform composition.',
        type: 'milestone' as const,
      },
      {
        year: '2013',
        title: 'Exploring Themes of Colour',
        description:
          'A focused period of exploring how colour interacts with pattern — experimenting with contrast, emotional resonance of colours, and their potential to build structure.',
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
        title: 'Building Mandala-inspired Paintings',
        description:
          'Currently focused on creating mandala-inspired paintings that offer immersion and a calm, meditative state of mind for the viewer.',
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
    statusNote: 'Accepting commissions',
    tiers: [
      {
        title: 'Small Original',
        size: 'A5 (14.8 × 21 cm) or 15 x 15 cm',
        price: 'From $220',
        description:
          'A single mandala or pattern study. Ideal as a personal gift or small wall piece.',
        includes: [
          'Original aquarelle painting on 300gsm paper',
          'Progress photographs',
          'Certificate of authenticity',
          'Unframed, posted flat',
        ],
      },
      {
        title: 'Medium Original',
        size: 'A4 (21 × 29.7 cm) or 22 x 22 cm',
        price: 'From $440',
        description:
          'A more detailed composition — a mandala portrait, pattern study, or mixed-element piece.',
        includes: [
          'Original aquarelle painting on 300gsm paper',
          'Progress photographs',
          'Certificate of authenticity',
          'Unframed, posted flat',
        ],
      },
      {
        title: 'Large / Bespoke',
        size: 'A3+ (42 × 60 cm) or 30 x 30 cm or custom',
        price: 'From $880',
        description:
          'A significant, bespoke work. Includes full consultation, reference gathering, and revision stages.',
        includes: [
          'Original aquarelle painting',
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
      "Whether you’re interested in a commission, a collaboration, or simply would like to say hello, I’d love to hear from you.",
    email: 'kalilladoscope@gmail.com',
    location: 'Australia',
    social: [
      {
        platform: 'Instagram',
        handle: '@kalilladoscope',
        href: 'https://instagram.com/kalilladoscope',
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
