/**
 * The site's public address, used for canonical links, share previews, the sitemap and robots.txt.
 *
 * Order: NEXT_PUBLIC_SITE_URL (set this once a custom domain is live) → the production
 * address Vercel provides automatically → localhost for local development.
 * Never fall back to a domain we don't own: search engines and link previews would follow it.
 */
export function resolveSiteUrl(env: Record<string, string | undefined>): string {
  const explicit = env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercel = env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "").replace(/\/+$/, "")}`;

  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl(process.env);
