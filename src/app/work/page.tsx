import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { InstagramProfileShowcase } from "@/components/portfolio/InstagramProfileShowcase";
import { clientReels } from "@/data/instagram-works";
import { constructMetadata } from "@/lib/metadata";
import { parseCount, formatCount } from "@/lib/counts";
import { ShinyText } from "@/components/ui/ShinyText";

export const metadata: Metadata = constructMetadata({
  title: "Our Work — Instagram Scripts & Reels",
  description:
    "Instagram reels scripted by Levexa for founders and brands: real view, like and comment results from client campaigns.",
  path: "/work",
});

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

            <h1 className="type-display mb-8">
              <span>Our</span> <ShinyText text="work" variant="gold" speed={4} />
            </h1>

            <div className="w-12 h-[3px] bg-[#C88A1A] rounded-full mb-8" aria-hidden="true" />

            <p className="type-lead max-w-3xl mb-10">
              Reels we scripted for founders and brands. Watch them right here, or open them
              on Instagram.
            </p>

            <dl className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-[#D7D3CB] max-w-2xl">
              {stats.map((stat, idx) => (
                <div key={stat.label} className={idx > 0 ? "border-l border-[#D7D3CB] pl-4 sm:pl-6" : ""}>
                  <dd className="text-2xl sm:text-3xl font-bold font-mono">{stat.value}</dd>
                  <dt className="text-xs font-mono font-semibold text-slate-600 uppercase tracking-wider mt-1">
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
        primaryCtaText="Book a growth call"
        secondaryCtaText="Explore our services"
      />
    </div>
  );
}
