// Run with: npm test
import { test } from "node:test";
import assert from "node:assert/strict";
import { resolveSiteUrl } from "./siteUrl.ts";

test("an explicit site URL wins, without a trailing slash", () => {
  assert.equal(
    resolveSiteUrl({ NEXT_PUBLIC_SITE_URL: "https://levexa.in/", VERCEL_PROJECT_PRODUCTION_URL: "x.vercel.app" }),
    "https://levexa.in",
  );
});

test("falls back to Vercel's production address", () => {
  assert.equal(
    resolveSiteUrl({ VERCEL_PROJECT_PRODUCTION_URL: "levexa-portfolio-two.vercel.app" }),
    "https://levexa-portfolio-two.vercel.app",
  );
});

test("uses localhost when nothing is set, never a domain we don't own", () => {
  assert.equal(resolveSiteUrl({}), "http://localhost:3000");
  assert.equal(resolveSiteUrl({ NEXT_PUBLIC_SITE_URL: "  " }), "http://localhost:3000");
});
