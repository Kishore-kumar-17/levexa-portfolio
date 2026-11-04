import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GoldArcs } from "@/components/ui/GoldArcs";
import { GetStartedBox } from "@/components/sections/GetStartedBox";
import { getPost, getPosts, formatPostDate, readingMinutes, isSamplePost, type BlogBlock } from "@/data/blog";
import { constructMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/siteUrl";

type Props = { params: Promise<{ slug: string }> };

// Only the articles in data/blog.ts exist; any other address is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return constructMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    noIndex: isSamplePost(post),
  });
}

const Block: React.FC<{ block: BlogBlock }> = ({ block }) => {
  switch (block.type) {
    case "h2":
      return <h2 className="type-h2 !text-2xl sm:!text-3xl mt-12 mb-5">{block.text}</h2>;
    case "ul":
      return (
        <ul className="my-6 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-lg text-fg-2 leading-relaxed">
              <span className="mt-2.5 w-2 h-2 rounded-full bg-[#FEB005] shrink-0" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="my-10 border-l-4 border-[#FEB005] pl-6 font-display text-2xl font-semibold leading-snug text-fg">
          {block.text}
        </blockquote>
      );
    default:
      return <p className="my-5 text-lg text-fg-2 leading-relaxed">{block.text}</p>;
  }
};

export default async function BlogPostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const author = post.author ?? "Lavanya";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: `${SITE_URL}${post.cover}`,
    url: `${SITE_URL}/blog/${post.slug}`,
    author: { "@type": "Person", name: author },
    publisher: { "@type": "Organization", name: "Levexa", url: SITE_URL },
  };

  return (
    <div className="bg-page text-fg">
      {!isSamplePost(post) && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}

      <article>
        <header data-theme="navy" className="relative isolate overflow-hidden bg-page text-fg pt-36 sm:pt-40 pb-16 sm:pb-20">
          <GoldArcs />
          <Container className="relative">
            <div className="max-w-3xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 py-1 text-sm font-semibold text-fg-2 hover:text-fg transition-colors"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                All articles
              </Link>
              <p className="mt-8">
                <span className="inline-block px-3 py-1 rounded-full bg-[#FEB005] text-[#04162A] text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em]">
                  {isSamplePost(post) ? "Sample article" : post.category}
                </span>
              </p>
              <h1 className="type-display !text-[34px] sm:!text-[44px] lg:!text-[52px] mt-5">{post.title}</h1>
              <p className="mt-6 text-base text-fg-2">
                By {author} · <time dateTime={post.date}>{formatPostDate(post.date)}</time> ·{" "}
                {readingMinutes(post)} min read
              </p>
            </div>
          </Container>
        </header>

        <Container>
          <div className="max-w-4xl mx-auto -mt-2 pt-12">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden ring-1 ring-line shadow-card-elevated">
              <Image src={post.cover} alt="" fill priority sizes="(max-width: 1024px) 100vw, 896px" className="object-cover" />
            </div>
          </div>
          <div className="max-w-3xl mx-auto py-10 sm:py-14">
            <p className="text-xl sm:text-2xl text-fg leading-relaxed font-medium">{post.excerpt}</p>
            {post.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>
        </Container>
      </article>

      <GetStartedBox />
    </div>
  );
}
