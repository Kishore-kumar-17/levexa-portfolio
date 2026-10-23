import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { WorkClient } from "./WorkClient";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Our Work & Case Studies — Strategic Growth Initiatives",
  description:
    "Explore Levexa's illustrative case studies and commercial frameworks across enterprise strategy, demand generation, sales velocity, and retention economics.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <div className="pt-28 pb-0 bg-white">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-white relative border-b border-slate-200">
        <Container>
          <div className="max-w-3xl space-y-6">
            <AnimatedSection direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[#059669] text-xs font-mono font-bold uppercase tracking-[0.2em] shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span>Our Work &amp; Case Studies</span>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-medium text-[#07192F] tracking-[-0.03em] leading-[1.08]">
                Proven frameworks engineered to{" "}
                <span className="text-[#78716C]">break growth plateaus.</span>
              </h1>
            </AnimatedSection>

            {/* Signature Horizontal Accent Line */}
            <div
              className="w-12 h-[3.5px] bg-[#10B981] rounded-full my-5"
              aria-hidden="true"
            />

            <AnimatedSection direction="up" delay={0.2}>
              <p className="text-xl sm:text-2xl text-slate-700 font-normal leading-[1.4] tracking-tight">
                Review our structured engagement models demonstrating how Levexa
                diagnoses commercial friction points, aligns go-to-market motions, and
                deploys high-velocity sales playbooks.
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Interactive Case Studies Grid with Filters */}
      <WorkClient />

      {/* Closing CTA */}
      <CTASection
        title="Facing a similar commercial challenge in your"
        highlight="market segment?"
        subtitle="Contact Levexa today to discuss an executive consultation and tailored growth diagnostic."
      />
    </div>
  );
}
