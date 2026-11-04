// Client testimonials shown on the home page (components/home/Testimonials.tsx).
//
// Add only real quotes, with the client's permission. Each entry:
//   quote   – the client's words (keep it to 1–3 sentences)
//   name    – full name as they want it shown
//   role    – job title and company, e.g. "Founder, Bloom Studio"
//   result  – optional short outcome, e.g. "3× more enquiries in 60 days"
//   photo   – optional square photo in /public/images/testimonials/, e.g. "/images/testimonials/priya.jpg"
//
// While this list is empty the section is hidden on the live site; local development shows
// draft cards so the design can be reviewed. It appears on levexa.in as soon as this list has entries.

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  result?: string;
  photo?: string;
}

export const TESTIMONIALS: Testimonial[] = [];

// Local preview only: draft wording, not real clients. Never shown on the live site, because
// Testimonials.tsx only renders these outside production. Replace by filling TESTIMONIALS above.
export const SAMPLE_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Before Levexa, our marketing and sales ran separately and we couldn't tell what was working. Now every campaign connects to enquiries, and we know exactly where to spend.",
    name: "Client Name",
    role: "Founder, Company Name",
    result: "Result goes here",
  },
  {
    quote:
      "Lavanya gave us a clear content plan and stayed involved until it worked. Our reels finally started bringing in conversations with the right people, not just views.",
    name: "Client Name",
    role: "Director, Company Name",
    result: "Result goes here",
  },
  {
    quote:
      "We came in needing more leads and left with a proper system: a sharper message, a simple follow-up process and automation that saves the team hours every week.",
    name: "Client Name",
    role: "Co-founder, Company Name",
    result: "Result goes here",
  },
];
