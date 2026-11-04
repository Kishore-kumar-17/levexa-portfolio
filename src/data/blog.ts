// Blog articles (app/blog). Newest first is worked out from `date`, so order here doesn't matter.
//
// To publish an article, add an entry to POSTS:
//   slug      – the web address: levexa.in/blog/<slug> (lowercase words joined by hyphens)
//   title     – headline
//   excerpt   – one or two sentences shown on the blog page and in Google / link previews
//   date      – publish date, "YYYY-MM-DD"
//   category  – e.g. "Strategy", "Branding", "Sales", "Automation", "Content"
//   cover     – image in /public/images/blog/ (landscape, about 1600 × 900)
//   body      – the article: paragraphs ("p"), sub-headings ("h2"), bullet lists ("ul") and
//               pull quotes ("quote")
//
// While POSTS is empty the live blog shows a "first articles coming soon" message; local
// development shows a clearly marked sample article so the layout can be reviewed.

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  cover: string;
  author?: string;
  body: BlogBlock[];
}

export const POSTS: BlogPost[] = [];

// Layout preview only — never shown on the live site
const SAMPLE_POSTS: BlogPost[] = [
  {
    slug: "sample-article",
    title: "Sample article: the headline goes here",
    excerpt: "Sample text. One or two sentences that sum up the article appear on the blog page and in link previews.",
    date: "2026-11-01",
    category: "Strategy",
    cover: "/images/process/02-strategy.jpg",
    body: [
      { type: "p", text: "Sample text. This is where the opening paragraph of the article goes." },
      { type: "h2", text: "A sub-heading" },
      { type: "p", text: "Sample text. Articles are made of paragraphs, sub-headings, bullet lists and pull quotes." },
      { type: "ul", items: ["A first point", "A second point", "A third point"] },
      { type: "quote", text: "A pull quote that highlights one line from the article." },
      { type: "p", text: "Sample text. A closing paragraph, followed by the call to action below." },
    ],
  },
];

const showSamples = POSTS.length === 0 && process.env.NODE_ENV !== "production";

/** Published articles, newest first */
export function getPosts(): BlogPost[] {
  const list = showSamples ? SAMPLE_POSTS : POSTS;
  return [...list].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): BlogPost | undefined {
  return getPosts().find((post) => post.slug === slug);
}

export const isSamplePost = (post: BlogPost) => SAMPLE_POSTS.includes(post);

export function formatPostDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Rough reading time at 220 words a minute */
export function readingMinutes(post: BlogPost): number {
  const words = post.body
    .map((block) => ("items" in block ? block.items.join(" ") : block.text))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}
