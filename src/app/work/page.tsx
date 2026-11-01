import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { InstagramProfileShowcase } from "@/components/portfolio/InstagramProfileShowcase";
import { clientReels } from "@/data/instagram-works";
import { constructMetadata } from "@/lib/metadata";
import { ShinyText } from "@/components/ui/ShinyText";

export const metadata: Metadata = constructMetadata({
  title: "Our Work — Instagram Scripts & Reels",
  description:
    "Instagram reels scripted by Levexa for founders and brands: real view, like and comment results from client campaigns.",
  path: "/work",
});

// Parses Instagram-style counts such as "2,758", "485K" or "2.8M"
function parseCount(value: string): number {
  const clean = value.replace(/,/g, "").trim();
  const multiplier = clean.endsWith("M") ? 1_000_000 : clean.endsWith("K") ? 1_000 : 1;
  return parseFloat(clean) * multiplier;
}

function formatCount(total: number): string {
  if (total >= 1_000_000) return `${Math.floor(total / 100_000) / 10}M+`;
  if (total >= 1_000) return `${Math.floor(total / 100) / 10}K+`;
  return String(total);
}

export default function WorkPage() {
  // Totals are computed from the featured reels so they always match the cards below
  const stats = [
    { value: String(clientReels.length), label: "Featured reels" },
    {
      value: formatCount(clientReels.reduce((sum, reel) => sum + parseCount(reel.views), 0)),
      label: "Combined views",
    },
    {
      value: formatCount(clientReels.reduce((sum, reel) => sum + parseCount(reel.likes), 0)),
      label: "Combined likes",
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 bg-[#FAF8F5] text-[#07192F] min-h-screen">
      {/* 1. Hero */}
      <section className="pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 border-b border-[#D7D3CB]">
        <Container>
          <div className="max-w-4xl">

            <h1 className="text-5xl sm:text-7xl lg:text-[5rem] font-bold tracking-[-0.035em] leading-[0.98] mb-8">
              <span>Our</span> <ShinyText text="Work." variant="gold" speed={4} />
            </h1>

            <div className="w-12 h-[3px] bg-[#C88A1A] rounded-full mb-8" aria-hidden="true" />

            <p className="text-xl sm:text-2xl text-slate-800 leading-[1.45] max-w-3xl tracking-tight mb-10">
              Reels we scripted for founders and brands. Watch them right here, or open them
              on Instagram.
            </p>

            <dl className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-[#D7D3CB] max-w-2xl">
              {stats.map((stat, idx) => (
                <div key={stat.label} className={idx > 0 ? "border-l border-[#D7D3CB] pl-4 sm:pl-6" : ""}>
                  <dd className="text-2xl sm:text-3xl font-bold font-mono">{stat.value}</dd>
                  <dt className="text-[11px] font-mono font-semibold text-slate-600 uppercase tracking-wider mt-1">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* 2. Instagram Profile & Client Reels */}
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <InstagramProfileShowcase />
        </Container>
      </section>

      {/* 3. CTA */}
      <CTASection
        title="Want reels that"
        highlight="bring in leads?"
        subtitle="Tell us about your brand and goals, and we'll show you how scripted content can turn views into enquiries."
        primaryCtaText="Start a Project"
        secondaryCtaText="Explore Our Services"
      />
    </div>
  );
}
