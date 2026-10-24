import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { constructMetadata } from "@/lib/metadata";
import {
  Lightbulb,
  Zap,
  Shield,
  Award,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Compass,
  Target,
  Layers,
  ArrowDown
} from "lucide-react";
import { BlurText } from "@/components/ui/BlurText";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { CountUp } from "@/components/ui/CountUp";

export const metadata: Metadata = constructMetadata({
  title: "About Levexa — Strategic Business Growth Advisory",
  description:
    "Learn about Levexa's unified growth philosophy, core commercial tenets, leadership methodology, and mission to help businesses scale sustainably.",
  path: "/about",
});

export default function AboutPage() {
  const coreValues = [
    {
      number: "01",
      title: "Strategic Clarity",
      desc: "We cut through vanity metrics to isolate the core commercial unit economics that truly drive enterprise valuation and sustainable scaling.",
      icon: Lightbulb,
    },
    {
      number: "02",
      title: "Measurable Impact",
      desc: "Every initiative we recommend must have a clear line of sight to qualified pipeline, conversion velocity, or compounding revenue retention.",
      icon: Zap,
    },
    {
      number: "03",
      title: "Extreme Ownership",
      desc: "We don't hand off theoretical decks. We partner alongside your leadership team to ensure playbooks are rigorously executable in the field.",
      icon: Shield,
    },
    {
      number: "04",
      title: "Continuous Optimization",
      desc: "Commercial environments evolve rapidly. We test, measure, and iterate ruthlessly to ensure compounding gains and resilient market positioning.",
      icon: Award,
    },
  ];

  const pillarsSummary = [
    {
      number: "01",
      title: "Growth & Strategy",
      desc: "Market research, competitive positioning, GTM architecture, and executive KPI roadmaps.",
      icon: Compass,
      href: "/services#growth-strategy",
    },
    {
      number: "02",
      title: "Branding & Marketing",
      desc: "Demand generation engines, authority branding, performance creative, and full-funnel acquisition.",
      icon: TrendingUp,
      href: "/services#branding-marketing",
    },
    {
      number: "03",
      title: "Sales & Conversion",
      desc: "High-conversion playbooks, team coaching, objection handling, and CRM pipeline acceleration.",
      icon: Target,
      href: "/services#sales-conversion",
    },
    {
      number: "04",
      title: "Technology & Automation",
      desc: "Custom digital platforms, AI integrations, WhatsApp/chatbot automation, and real-time dashboards.",
      icon: Layers,
      href: "/services#technology-automation",
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 bg-[#FAF8F5] text-[#07192F] select-none min-h-screen">
      
      {/* ========================================================= */}
      {/* 1. HERO SECTION: Monumental Levexa Dual-Tone Hero         */}
      {/* ========================================================= */}
      <section className="pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 border-b border-[#D7D3CB] relative overflow-hidden">
        <Container>
          <div className="max-w-5xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="w-8 h-[2px] bg-[#C88A1A]" />
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.22em] text-[#07192F] uppercase">
                OUR PHILOSOPHY &amp; MISSION
              </span>
            </div>

            {/* Monumental Dual-Tone Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-[5rem] xl:text-[5.75rem] font-bold tracking-[-0.035em] leading-[0.98] mb-8 sm:mb-10">
              <BlurText text="Built for scale." className="text-[#07192F] inline-flex" delay={80} /> <br />
              <BlurText text="Driven by excellence." className="text-[#C88A1A] inline-flex" delay={120} />
            </h1>

            {/* Signature Gold Accent Line */}
            <div
              className="w-12 h-[3px] bg-[#C88A1A] rounded-full mb-8 sm:mb-10"
              aria-hidden="true"
            />

            {/* Value Proposition Subheadline */}
            <p className="text-xl sm:text-2xl lg:text-[1.75rem] text-slate-800 font-normal leading-[1.45] max-w-4xl tracking-tight mb-10">
              Levexa is a premier strategic growth advisory founded on a single conviction: real business
              scale requires total synchronization between high-level commercial strategy, demand-generation
              marketing, and high-velocity sales execution.
            </p>

            {/* Quick in-page jump */}
            <div className="flex items-center gap-6 pt-4">
              <Link
                href="#conviction"
                className="group flex items-center gap-2.5 text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#07192F] hover:text-[#C88A1A] transition-colors uppercase font-mono"
              >
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                <span>EXPLORE OUR APPROACH</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 2. THE THREE FOUNDING CONVICTIONS                         */}
      {/* ========================================================= */}
      <section id="conviction" className="py-20 lg:py-28 border-b border-[#D7D3CB] scroll-mt-20">
        <Container>
          {/* Eyebrow & Headline */}
          <div className="max-w-3xl mb-14 sm:mb-18">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#C88A1A]" />
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.22em] text-[#07192F] uppercase">
                THE REALITY OF COMMERCIAL SCALE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-[-0.035em] leading-[1.05]">
              Why traditional business <br />
              <span className="text-[#C88A1A]">growth models break.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {/* Card 1 */}
            <SpotlightCard theme="light" spotlightColor="#C88A1A" intensity={0.22} className="h-full">
              <div className="p-8 sm:p-10 flex flex-col justify-between h-full">
                <div>
                  <span className="text-4xl font-mono font-bold text-[#C88A1A] mb-4 block">01</span>
                  <h3 className="text-xl font-bold text-[#07192F] mb-3 leading-snug">
                    Strategy Without Execution is Just Theory
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    Most consultancies deliver 80-page presentation decks that gather dust. Without
                    operational playbooks and frontline training, high-level strategy never converts into revenue.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-mono font-bold text-[#07192F] uppercase">
                  <CheckCircle2 className="w-4 h-4 text-[#C88A1A]" />
                  <span>We engineer executable playbooks</span>
                </div>
              </div>
            </SpotlightCard>

            {/* Card 2 */}
            <SpotlightCard theme="light" spotlightColor="#C88A1A" intensity={0.22} className="h-full">
              <div className="p-8 sm:p-10 flex flex-col justify-between h-full">
                <div>
                  <span className="text-4xl font-mono font-bold text-[#C88A1A] mb-4 block">02</span>
                  <h3 className="text-xl font-bold text-[#07192F] mb-3 leading-snug">
                    Marketing Disconnected from Sales is Waste
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    Generating leads means nothing if they are unqualified or poorly handed off. True scale
                    emerges when marketing messaging precisely pre-sells prospects for rapid sales closing.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-mono font-bold text-[#07192F] uppercase">
                  <CheckCircle2 className="w-4 h-4 text-[#C88A1A]" />
                  <span>Full funnel commercial synchronization</span>
                </div>
              </div>
            </SpotlightCard>

            {/* Card 3 */}
            <SpotlightCard theme="light" spotlightColor="#C88A1A" intensity={0.22} className="h-full">
              <div className="p-8 sm:p-10 flex flex-col justify-between h-full">
                <div>
                  <span className="text-4xl font-mono font-bold text-[#C88A1A] mb-4 block">03</span>
                  <h3 className="text-xl font-bold text-[#07192F] mb-3 leading-snug">
                    Growth Without Automation Caps Valuation
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    Relying solely on headcount to increase revenue creates organizational drag. Installing
                    automated CRM, AI pipelines, and self-serve workflows unlocks exponential operational leverage.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-mono font-bold text-[#07192F] uppercase">
                  <CheckCircle2 className="w-4 h-4 text-[#C88A1A]" />
                  <span>Scalable automated architectures</span>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 3. EXECUTIVE ADVISORY & TEAM PERSPECTIVE                  */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 border-b border-[#D7D3CB] relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Visual with Signature Curved Frame */}
            <div className="lg:col-span-6 relative">
              {/* Arc Accent */}
              <div className="absolute -top-8 -left-8 w-36 h-36 pointer-events-none hidden sm:block">
                <svg viewBox="0 0 160 160" className="w-full h-full fill-none">
                  <path
                    d="M 10 150 C 10 70, 70 10, 150 10"
                    stroke="#C88A1A"
                    strokeWidth="1.5"
                  />
                  <circle cx="10" cy="150" r="4.5" fill="#FAF8F5" stroke="#C88A1A" strokeWidth="2" />
                  <circle cx="150" cy="10" r="4.5" fill="#FAF8F5" stroke="#C88A1A" strokeWidth="2" />
                </svg>
              </div>

              {/* Arched Photo Container */}
              <div className="relative rounded-tl-[80px] sm:rounded-tl-[120px] rounded-br-3xl rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-card-elevated border border-stone-200/80 bg-stone-100 aspect-[16/11]">
                <Image
                  src="/images/about/who-we-are-team.jpg"
                  alt="Levexa executive growth advisory session"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Handwritten Note Accent */}
              <div className="mt-4 flex items-center justify-end gap-2 text-stone-700">
                <span className="font-serif italic text-base sm:text-lg text-slate-800">
                  Architecting predictable, scalable revenue engines
                </span>
                <span className="text-xl text-[#C88A1A] -rotate-12 inline-block">⤹</span>
              </div>
            </div>

            {/* Right Column: Narrative & Metrics */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-[2px] bg-[#C88A1A]" />
                  <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.22em] text-[#07192F] uppercase">
                    OUR ENGAGEMENT MODEL
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-bold tracking-[-0.03em] leading-[1.08] mb-6">
                  Senior partners at the table, <br />
                  <span className="text-[#C88A1A]">not junior handoffs.</span>
                </h2>

                <p className="text-base sm:text-lg text-slate-800 leading-relaxed mb-6 font-normal">
                  When you engage Levexa, you partner directly with senior commercial operators who have
                  built, scaled, and exited businesses. We conduct exhaustive audits of your customer acquisition
                  cost, pipeline bottlenecks, and market positioning before prescribing custom growth infrastructure.
                </p>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-10 font-normal">
                  Our sprint-based methodology bridges the gap between boardroom ambition and operational
                  reality, equipping your teams with battle-tested playbooks, custom tech workflows, and real-time
                  executive visibility.
                </p>
              </div>

              {/* Metrics Strip */}
              <div className="pt-8 border-t border-[#D7D3CB] grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-[#07192F] tracking-tight mb-1">
                    <CountUp to={4} duration={1.6} />
                  </div>
                  <div className="text-[11px] font-mono font-semibold tracking-[0.16em] text-slate-600 uppercase leading-snug">
                    CORE GROWTH
                    <br />
                    PILLARS
                  </div>
                </div>

                <div className="border-l border-[#D7D3CB] pl-6">
                  <div className="text-3xl sm:text-4xl font-bold text-[#07192F] tracking-tight mb-1">
                    <CountUp to={360} suffix="°" duration={2} />
                  </div>
                  <div className="text-[11px] font-mono font-semibold tracking-[0.16em] text-slate-600 uppercase leading-snug">
                    REVENUE
                    <br />
                    ADVISORY
                  </div>
                </div>

                <div className="border-l border-[#D7D3CB] pl-6">
                  <div className="text-3xl sm:text-4xl font-bold text-[#07192F] tracking-tight mb-1">
                    <CountUp to={100} suffix="%" duration={1.8} />
                  </div>
                  <div className="text-[11px] font-mono font-semibold tracking-[0.16em] text-slate-600 uppercase leading-snug">
                    COMMERCIAL
                    <br />
                    FOCUS
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 4. OUR OPERATING VALUES (The 4 Pillars of Excellence)     */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 border-b border-[#D7D3CB]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-18">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-[#C88A1A]" />
                <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.22em] text-[#07192F] uppercase">
                  OUR CODE OF EXCELLENCE
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-[-0.035em] leading-[1.05]">
                Core values that govern <br />
                <span className="text-[#C88A1A]">every advisory sprint.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 font-normal max-w-md leading-relaxed">
              We hold ourselves to the highest standards of commercial integrity, analytical rigor, and frontline accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {coreValues.map((val) => {
              const IconComp = val.icon;
              return (
                <SpotlightCard
                  key={val.number}
                  theme="gold"
                  spotlightColor="#C88A1A"
                  intensity={0.22}
                  className="h-full"
                >
                  <div className="p-8 flex flex-col justify-between h-full group">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono text-sm font-bold text-[#C88A1A]">
                          {val.number}
                        </span>
                        <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-[#07192F] group-hover:border-[#C88A1A] group-hover:text-[#C88A1A] transition-colors">
                          <IconComp className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-[#07192F] mb-3 group-hover:text-[#C88A1A] transition-colors">
                        {val.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 5. FOUR COMMERCIAL DISCIPLINES PREVIEW                    */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 border-b border-[#D7D3CB]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-18">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-[#C88A1A]" />
                <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.22em] text-[#07192F] uppercase">
                  UNIFIED REVENUE FLYWHEEL
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-[-0.035em] leading-[1.05]">
                Four interconnected engines <br />
                <span className="text-[#C88A1A]">powering commercial scale.</span>
              </h2>
            </div>

            <Link
              href="/services"
              className="group inline-flex items-center gap-3 font-mono text-xs sm:text-sm font-bold text-[#07192F] hover:text-[#C88A1A] transition-colors tracking-wider uppercase"
            >
              <span>VIEW FULL SERVICE BLUEPRINT</span>
              <div className="w-9 h-9 rounded-full border border-[#07192F]/30 flex items-center justify-center group-hover:bg-[#07192F] group-hover:text-white transition-all">
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {pillarsSummary.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <Link
                  key={pillar.number}
                  href={pillar.href}
                  className="group bg-white p-8 rounded-2xl border border-stone-200/80 shadow-xs hover:border-[#C88A1A] hover:shadow-card-elevated transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-sm font-bold text-[#C88A1A]">
                        {pillar.number}
                      </span>
                      <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-[#07192F] group-hover:bg-[#07192F] group-hover:text-white transition-all">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-[#07192F] mb-3 group-hover:text-[#C88A1A] transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#07192F] group-hover:text-[#C88A1A] transition-colors uppercase pt-4 border-t border-stone-100">
                    <span>EXPLORE DISCIPLINE</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 6. BESPOKE LEVEXA LUXURY CTA SECTION                      */}
      {/* ========================================================= */}
      <CTASection
        title="Ready to engineer your company's"
        highlight="next growth breakthrough?"
        subtitle="Schedule a strategic consultation with Levexa's senior advisors. We'll audit your current commercial engines and identify immediate scaling opportunities."
        primaryCtaText="Schedule Growth Consultation"
        secondaryCtaText="Explore Case Studies"
      />

    </div>
  );
}
