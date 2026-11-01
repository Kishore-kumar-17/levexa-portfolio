import React from "react";
import { IntroReveal } from "@/components/ui/IntroReveal";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhoWeAreSection } from "@/components/sections/WhoWeAreSection";
import { FourPillarsPath } from "@/components/sections/FourPillarsPath";
import { GrowthProcess } from "@/components/sections/GrowthProcess";
import { RecentWork } from "@/components/sections/RecentWork";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      {/* Loading & Intro Animation */}
      <IntroReveal />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Who We Are Section */}
      <WhoWeAreSection />

      {/* 3. What We Do / Services Section */}
      <FourPillarsPath />

      {/* 4. Recent Work: proof from client reels */}
      <RecentWork />

      {/* 5. Our Process / From Ideas to Impact */}
      <GrowthProcess />

      {/* 6. Closing Call To Action */}
      <CTASection
        title="Ready to turn your marketing"
        highlight="into revenue?"
        subtitle="Book a free consultation and we'll map out the fastest way to grow your leads and sales."
        primaryCtaText="Book a Free Consultation"
        secondaryCtaText="See Our Work"
        secondaryCtaHref="/work"
      />
    </>
  );
}
