import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Instagram, Linkedin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Underline } from "@/components/ui/Underline";
import { PageBanner } from "@/components/sections/PageBanner";
import { GetStartedBox } from "@/components/sections/GetStartedBox";
import { companyConfig } from "@/data/company";
import { getPosts, formatPostDate, readingMinutes, isSamplePost } from "@/data/blog";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Blog — Growth, Marketing and Sales Insights",
  description:
    "Practical articles from Levexa on growth strategy, branding, content, sales and automation for founders and growing businesses.",
  path: "/blog",
  // An empty blog stays out of search results until the first article is published
  noIndex: getPosts().length === 0,
});

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="bg-page text-fg">
      <PageBanner
        image="/images/process/03-design.jpg"
        title="Blog"
        subtitle={
          <>
            Practical <Underline>ideas</Underline> on strategy, content, sales and automation for founders who
            want marketing that brings in revenue.
          </>
        }
        ctaLabel="Talk to us"
        ctaHref="/contact"
      />

      <section className="py-20 sm:py-24">
        <Container>
          {posts.length > 0 ? (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col h-full rounded-3xl overflow-hidden bg-card border border-line shadow-card-elevated transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={post.cover}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-4 left-4 inline-block px-3 py-1 rounded-full bg-[#FEB005] text-[#04162A] text-[11px] font-bold uppercase tracking-[0.12em]">
                        {isSamplePost(post) ? "Sample" : post.category}
                      </span>
                    </div>
                    <div className="flex flex-col flex-1 p-7">
                      <p className="text-sm text-fg-3">
                        <time dateTime={post.date}>{formatPostDate(post.date)}</time> · {readingMinutes(post)} min read
                      </p>
                      <h2 className="mt-3 font-display text-xl font-bold leading-snug text-fg group-hover:text-gold-ink transition-colors">
                        {post.title}
                      </h2>
                      <p className="mt-3 text-fg-2 leading-relaxed">{post.excerpt}</p>
                      <span className="mt-auto pt-6 inline-flex items-center gap-2 font-semibold text-gold-ink">
                        Read article
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="type-h2">First articles coming soon</h2>
              <p className="mt-6 text-lg text-fg-2 leading-relaxed">
                We&apos;re preparing our first articles. Until then, follow Levexa for regular ideas on growth,
                content and sales.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <a
                  href={companyConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Instagram className="w-4 h-4" aria-hidden="true" />
                  Follow on Instagram
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
                <a
                  href={companyConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Linkedin className="w-4 h-4" aria-hidden="true" />
                  Follow on LinkedIn
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </div>
          )}
        </Container>
      </section>

      <GetStartedBox />
    </div>
  );
}
