import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { constructMetadata } from "@/lib/metadata";
import {
  Compass,
  TrendingUp,
  Target,
  Layers,
  Shield,
  Lightbulb,
  Zap,
  Award,
  Users2,
  Info,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "About Levexa — Strategic Business Growth Advisory",
  description:
    "Learn about Levexa's unified growth philosophy, our proposed methodology, core values, and mission to help businesses scale sustainably.",
  path: "/about",
});

export default function AboutPage() {
  const coreValues = [
    {
      title: "Strategic Clarity",
      desc: "We cut through superficial vanity metrics to isolate the core commercial unit economics that truly drive enterprise valuation.",
      icon: Lightbulb,
    },
    {
      title: "Measurable Impact",
      desc: "Every initiative we recommend must have a defined line of sight to qualified pipeline, conversion velocity, or revenue retention.",
      icon: Zap,
    },
    {
      title: "Extreme Ownership",
      desc: "We don't hand off theoretical slide decks. We partner alongside your team to ensure recommendations are executable in the field.",
      icon: Shield,
    },
    {
      title: "Continuous Optimization",
      desc: "Market environments are dynamic. We test, measure, and iterate ruthlessly to ensure compounding gains over time.",
      icon: Award,
    },
  ];

  return (
    <div className="pt-28 pb-0 bg-white text-slate-900">
      {/* 1. Hero Section */}
      <section className="py-16 lg:py-24 bg-white relative border-b border-slate-200">
        <Container>
          <div className="max-w-4xl space-y-6">
            <AnimatedSection direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[#059669] text-xs font-mono font-bold uppercase tracking-[0.2em] shadow-2xs">
                <span className="w-2 h-[3px] bg-[#10B981] rounded-full" />
                <span>About Levexa</span>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-medium text-[#07192F] tracking-[-0.03em] leading-[1.08]">
                Engineered for strategic,{" "}
                <span className="text-[#78716C]">sustainable business growth.</span>
              </h1>
            </AnimatedSection>

            {/* Signature Horizontal Accent Line */}
            <div
              className="w-12 h-[3.5px] bg-[#10B981] rounded-full my-5"
              aria-hidden="true"
            />

            <AnimatedSection direction="up" delay={0.2}>
              <p className="text-xl sm:text-2xl text-slate-700 font-normal leading-[1.4] max-w-3xl tracking-tight">
                Levexa is a strategic advisory founded on a simple premise: modern
                business growth requires total synchronization between high-level
                business strategy, demand generation marketing, and high-velocity
                sales execution.
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-20 bg-white relative border-b border-slate-200">
        <Container>
          {/* Client confirmation note */}
          <div className="mb-10 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
            <Info className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-900 font-semibold">Notice for Client Review:</strong>{" "}
              The following Mission & Vision statements reflect Levexa&apos;s proposed
              brand positioning. Official corporate charter wording can be tailored
              during the final asset integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="up">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 h-full space-y-4 shadow-2xs hover:shadow-sm transition-all">
                <div className="w-10 h-10 rounded-xl bg-white text-[#F59E0B] flex items-center justify-center font-mono font-bold text-sm border border-slate-200 shadow-2xs">
                  M
                </div>
                <h2 className="text-2xl font-medium text-[#07192F] tracking-tight">Our Mission</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  To empower founders, business owners, and executive teams with the
                  strategic clarity, marketing frameworks, and sales acceleration
                  tools required to systematically outpace market competitors and
                  achieve compounding revenue growth.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.1}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 h-full space-y-4 shadow-2xs hover:shadow-sm transition-all">
                <div className="w-10 h-10 rounded-xl bg-white text-[#F59E0B] flex items-center justify-center font-mono font-bold text-sm border border-slate-200 shadow-2xs">
                  V
                </div>
                <h2 className="text-2xl font-medium text-[#07192F] tracking-tight">Our Vision</h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  To become the premier growth advisory partner recognized globally
                  for transforming commercial ambiguity into predictable, scalable
                  enterprises that level up their operational excellence.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* 3. The Levexa Philosophy: Strategy, Marketing, Sales, Growth */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <Container>
          <AnimatedSection direction="up" className="mb-14">
            <SectionHeading
              eyebrow="Our Growth Philosophy"
              title="Why isolated tactics"
              highlight="fail to scale."
              subtitle="Hiring a marketing agency without strategic positioning wastes ad budget. Training sales reps without qualified pipeline produces burnout. Real growth occurs only when all four commercial engines operate in harmony."
              theme="light"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-2xs">
              <Compass className="w-7 h-7 text-[#F59E0B] mb-2" />
              <h3 className="text-lg font-bold text-[#07192F]">1. Strategy First</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Define the playground: identify underserved niches, construct unfair
                pricing advantages, and cement defensible positioning.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-2xs">
              <TrendingUp className="w-7 h-7 text-[#F59E0B] mb-2" />
              <h3 className="text-lg font-bold text-[#07192F]">2. Targeted Demand</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Build demand engines that capture high-intent prospects who value
                your solution rather than bargain hunters.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-2xs">
              <Target className="w-7 h-7 text-[#F59E0B] mb-2" />
              <h3 className="text-lg font-bold text-[#07192F]">3. Sales Enablement</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Standardize the commercial playbook so deals close predictably based
                on value, urgency, and operational ROI.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-2xs">
              <Layers className="w-7 h-7 text-[#F59E0B] mb-2" />
              <h3 className="text-lg font-bold text-[#07192F]">4. Compound Scale</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Retain and expand existing revenue through superior client outcomes,
                recurring renewals, and operational efficiency.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Core Values */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <Container>
          <AnimatedSection direction="up" className="mb-14">
            <SectionHeading
              align="center"
              eyebrow="Our Guiding Principles"
              title="The values that anchor every"
              highlight="client engagement."
              subtitle="We operate with transparency, rigor, and an uncompromising commitment to commercial excellence."
              theme="light"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <AnimatedSection
                  key={val.title}
                  direction="up"
                  delay={idx * 0.1}
                  className="h-full"
                >
                  <div className="h-full p-6 sm:p-7 rounded-2xl border border-slate-200 bg-slate-50 hover:border-slate-300 hover:shadow-xs transition-all space-y-3 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#F59E0B] border border-slate-200 shadow-2xs mb-4">
                        <Icon className="w-5 h-5 text-[#F59E0B]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#07192F] mb-2">
                        {val.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 5. Team & Governance Notice */}
      <section className="py-16 bg-white border-b border-slate-200">
        <Container>
          <div className="max-w-3xl mx-auto rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 text-center space-y-4 shadow-2xs">
            <div className="w-12 h-12 rounded-xl bg-white text-[#F59E0B] flex items-center justify-center mx-auto border border-slate-200 shadow-2xs">
              <Users2 className="w-6 h-6 text-[#F59E0B]" />
            </div>
            <h3 className="text-xl font-bold text-[#07192F]">
              Advisory Leadership & Strategic Specialists
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Levexa operates a curated advisory network of senior commercial
              strategists, growth operators, and enterprise sales leaders. Profiles
              of assigned engagement leads are presented upon tailored project
              scoping to ensure strict alignment with client industry nuances.
            </p>
          </div>
        </Container>
      </section>

      {/* 6. Closing CTA */}
      <CTASection
        title="Ready to build your company's"
        highlight="growth foundation?"
        subtitle="Speak directly with a Levexa growth strategist to audit your current commercial operations and outline an executable roadmap."
      />
    </div>
  );
}
