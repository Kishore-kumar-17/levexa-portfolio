import React from "react";
import { IntroReveal } from "@/components/ui/IntroReveal";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhoWeAreSection } from "@/components/sections/WhoWeAreSection";
import { FourPillarsPath } from "@/components/sections/FourPillarsPath";
import { GrowthProcess } from "@/components/sections/GrowthProcess";

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

      {/* 4. Our Process / From Ideas to Impact */}
      <GrowthProcess />
    </>
  );
}
