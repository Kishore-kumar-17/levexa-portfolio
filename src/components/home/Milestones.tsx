import React from "react";
import Link from "next/link";
import { ArrowRight, Eye, Heart, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Underline } from "@/components/ui/Underline";
import { reelBests } from "@/lib/reelStats";
import { GoldArcs } from "@/components/ui/GoldArcs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PRIMARY_CTA } from "@/data/navigation";

// Best single-reel results, taken from the reel data
const MILESTONES = [
  { icon: Eye, value: reelBests.views, label: "views on a single reel" },
  { icon: Heart, value: reelBests.likes, label: "likes on one reel" },
  { icon: MessageCircle, value: reelBests.comments, label: "comments on one reel" },
];

export const Milestones: React.FC = () => (
  <section data-theme="navy" className="relative overflow-hidden bg-page text-fg py-20 sm:py-24">
    <GoldArcs flip />
    <Container className="relative">
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
        <Eyebrow>Best results</Eyebrow>
        <h2 className="type-h2">
          Key <Underline>milestones</Underline> we&apos;ve reached
        </h2>
        <p className="mt-6 text-lg text-fg-2 leading-relaxed">
          Views, engagement and real conversations: here&apos;s what the reels we&apos;ve scripted have
          delivered.
        </p>
      </div>

      <dl className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 max-w-4xl mx-auto text-center">
        {MILESTONES.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="flex flex-col items-center">
              <Icon className="w-9 h-9 text-accent mb-4" aria-hidden="true" />
              <dd className="text-5xl sm:text-6xl font-extrabold tracking-tight font-display text-gold-deep">{item.value}</dd>
              <dt className="mt-3 text-base text-fg-2">{item.label}</dt>
            </div>
          );
        })}
      </dl>

      <div className="text-center mt-12">
        <Link href="/contact" className="group btn-primary">
          {PRIMARY_CTA}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </Container>
  </section>
);
