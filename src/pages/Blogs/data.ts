export interface BlogData {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  date: string;
  readingTime: number;
  relatedIds: string[];
}

export const blogs: BlogData[] = [
  {
    id: "b001",
    title: "Type Systems That Don’t Hurt",
    slug: "type-systems-that-dont-hurt",
    description:
      "Practical TypeScript techniques for creating APIs that feel intuitive without sacrificing safety.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    category: "Development",
    tags: ["typescript", "api-design", "developer-experience"],
    date: "2025-06-12",
    readingTime: 8,
    relatedIds: ["b003", "b002"],
  },
  {
    id: "b002",
    title: "Color Contrast in the Wild",
    slug: "color-contrast-in-the-wild",
    description:
      "A real-life look at accessible color systems tested in sunlight, motion, and imperfect screens.",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    category: "Design",
    tags: ["accessibility", "color", "UI"],
    date: "2025-05-04",
    readingTime: 6,
    relatedIds: ["b001", "b003"],
  },
  {
    id: "b003",
    title: "From 0 to 60 FPS on the Web",
    slug: "from-0-to-60fps-on-the-web",
    description:
      "A breakdown on diagnosing layout jank and delivering silky smooth animation performance.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    category: "Development",
    tags: ["performance", "animation", "frontend"],
    date: "2025-02-18",
    readingTime: 7,
    relatedIds: ["b001", "b004"],
  },
  {
    id: "b004",
    title: "Quiet Interfaces",
    slug: "quiet-interfaces",
    description:
      "Designing calm and human-friendly digital experiences that reduce cognitive load.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    category: "Design",
    tags: ["minimalism", "calm-technology", "ux"],
    date: "2025-03-30",
    readingTime: 5,
    relatedIds: ["b002", "b006"],
  },
  {
    id: "b005",
    title: "Film Emulation on a Budget",
    slug: "film-emulation-on-a-budget",
    description:
      "Achieving cinematic film looks using affordable tools and smart lighting.",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    category: "Photography",
    tags: ["film", "grading", "portrait"],
    date: "2025-07-21",
    readingTime: 4,
    relatedIds: ["b004", "b006"],
  },
  {
    id: "b006",
    title: "A Tiny ETL with Deno + SQLite",
    slug: "a-tiny-etl-with-deno-and-sqlite",
    description:
      "Building a lightweight, local analytics pipeline with Deno and SQLite.",
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
    category: "Data",
    tags: ["deno", "sqlite", "etl"],
    date: "2025-04-09",
    readingTime: 7,
    relatedIds: ["b003", "b001"],
  },
];
