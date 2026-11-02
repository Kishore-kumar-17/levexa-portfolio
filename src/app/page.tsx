import React from "react";
import { IntroReveal } from "@/components/ui/IntroReveal";
import { HomeHero } from "@/components/home/HomeHero";
import { DeliveredStats } from "@/components/home/DeliveredStats";
import { SpecialiseCards } from "@/components/home/SpecialiseCards";
import { OutcomeTabs } from "@/components/home/OutcomeTabs";
import { MethodTimeline } from "@/components/home/MethodTimeline";
import { Milestones } from "@/components/home/Milestones";
import { AuthorityBanner } from "@/components/home/AuthorityBanner";
import { FounderIntro } from "@/components/home/FounderIntro";
import { GetStartedBox } from "@/components/sections/GetStartedBox";

export default function HomePage() {
  return (
    <>
      <IntroReveal />
      <HomeHero />
      <DeliveredStats />
      <SpecialiseCards />
      <OutcomeTabs />
      <MethodTimeline />
      <Milestones />
      <AuthorityBanner />
      <FounderIntro />
      <GetStartedBox />
    </>
  );
}
