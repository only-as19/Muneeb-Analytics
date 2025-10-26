export interface Content{
  introduction: string,
  title: string
  sections:{
    heading: string,
    body: string
  }[]
}

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
  content?: Content
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
    content:{
    title: "Introduction",
    introduction:"The landscape of web development is evolving at an unprecedented pace. As we move through 2025, new technologies, frameworks, and methodologies are emerging that fundamentally change how we approach building for the web. This article explores the key trends that are shaping the future of our industry.",
  sections: [
    {
      heading: "AI-Powered Development Tools",
      body:
        "Artificial intelligence has moved from being a buzzword to an essential part of the modern developer's toolkit. AI-powered code assistants are now capable of understanding context, suggesting entire functions, and even debugging complex issues in real-time.\n\nWhat makes this particularly exciting is not that AI is replacing developers, but rather that it's amplifying our capabilities. We can now focus on solving higher-level problems while AI handles the repetitive tasks and boilerplate code.",
    },
    {
      heading: "Edge Computing and Distributed Architectures",
      body:
        "The shift toward edge computing represents one of the most significant architectural changes in recent years. By processing data closer to where it's generated, we can dramatically reduce latency and improve user experiences globally.\n\nEdge functions and distributed databases are becoming the norm rather than the exception. This paradigm shift requires us to think differently about data consistency, state management, and application architecture.",
    },
    {
      heading: "Performance as a Priority",
      body:
        "With Core Web Vitals and user experience metrics becoming increasingly important for SEO and user retention, performance is no longer optional. Modern frameworks are being built with performance in mind from the ground up.\n\nTechniques like island architecture, resumability, and fine-grained reactivity are pushing the boundaries of what's possible. We're seeing initial page loads measured in milliseconds rather than seconds.",
    },
    {
      heading: "The Rise of Type-Safe Full-Stack Development",
      body:
        "End-to-end type safety is becoming the standard for professional web development. Tools that provide type safety from database to frontend are gaining massive adoption, reducing bugs and improving developer experience.\n\nThis trend represents a maturation of the JavaScript ecosystem, bringing the benefits of static typing to the entire stack while maintaining the flexibility that made JavaScript popular in the first place.",
    },
    {
      heading: "WebAssembly and Beyond",
      body:
        "WebAssembly is opening doors that were previously closed to web developers. From running complex computations in the browser to porting entire applications from other languages, WASM is expanding what's possible on the web platform.\n\nWe're seeing everything from video editing tools to 3D modeling software running smoothly in the browser, demonstrating the incredible potential of this technology.",
    },
  ],
}
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
