import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { servicesData } from "@/data/services";
import { constructMetadata } from "@/lib/metadata";
import {
  Compass,
  TrendingUp,
  Target,
  Layers,
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { CountUp } from "@/components/ui/CountUp";
import { ShinyText } from "@/components/ui/ShinyText";
import { DecryptedText } from "@/components/ui/DecryptedText";
import { RotatingText } from "@/components/ui/RotatingText";

export const metadata: Metadata = constructMetadata({
  title: "Growth Advisory Services — Strategy, Marketing, Sales & Automation",
  description:
    "Explore Levexa's four interconnected commercial disciplines: Business Growth Strategy, Branding & Demand Generation, Sales Pipeline Conversion, and Technology Automation.",
  path: "/services",
});

const PILLAR_IMAGES: Record<string, string> = {
  "growth-strategy": "/images/pillars/01-growth-strategy.jpg",
  "branding-marketing": "/images/pillars/02-branding-marketing.jpg",
  "sales-conversion": "/images/pillars/03-sales-conversion.jpg",
  "technology-automation": "/images/pillars/04-technology-automation.jpg",
};

const PILLAR_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "growth-strategy": Compass,
  "branding-marketing": TrendingUp,
  "sales-conversion": Target,
  "technology-automation": Layers,
};

const PILLAR_TAGS: Record<string, string> = {
  "growth-strategy": "COMMERCIAL ARCHITECTURE",
  "branding-marketing": "DEMAND GENERATION",
  "sales-conversion": "REVENUE ENGINE",
  "technology-automation": "DIGITAL SYSTEMS",
};

const DISCIPLINE_LINKS: Record<string, string> = {
  "growth-strategy": "/services/strategy",
  "branding-marketing": "/services/marketing",
  "sales-conversion": "/services/sales",
  "technology-automation": "/services/technology",
};

const DISCIPLINE_SHORT_ALIASES: Record<string, string> = {
  "growth-strategy": "strategy",
  "branding-marketing": "marketing",
  "sales-conversion": "sales",
  "technology-automation": "technology",
};

export default function ServicesPage() {
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
                <DecryptedText
                  text="COMMERCIAL DISCIPLINES & METHODOLOGY"
                  speed={35}
                  maxIterations={8}
                  animateOn="view"
                  className="text-[#07192F]"
                />
              </span>
            </div>

            {/* Monumental Dual-Tone Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-[5rem] xl:text-[5.75rem] font-bold tracking-[-0.035em] leading-[0.98] mb-8 sm:mb-10">
              <span className="text-[#07192F]">Services &amp;</span> <br />
              <ShinyText text="Methodology." variant="gold" speed={4} />
            </h1>

            {/* Signature Gold Accent Line */}
            <div
              className="w-12 h-[3px] bg-[#C88A1A] rounded-full mb-8 sm:mb-10"
              aria-hidden="true"
            />

            {/* Value Proposition Subheadline with RotatingText */}
            <p className="text-xl sm:text-2xl lg:text-[1.75rem] text-slate-800 font-normal leading-[1.45] max-w-4xl tracking-tight mb-8">
              Four interconnected commercial disciplines engineered to deploy{" "}
              <RotatingText
                texts={[
                  "predictable revenue engines.",
                  "high-velocity sales execution.",
                  "automated AI pipelines.",
                  "sustainable enterprise valuation.",
                ]}
                rotationInterval={2800}
                className="text-[#C88A1A] font-semibold border-b-2 border-[#C88A1A]/40 pb-0.5"
              />
            </p>

            {/* Navigation Jump Bar */}
            <div className="flex items-center flex-wrap gap-4 sm:gap-6 pt-2 font-mono text-xs sm:text-[13px] font-bold text-[#07192F]">
              {servicesData.map((s, idx) => (
                <Link
                  key={s.id}
                  href={`#${s.id}`}
                  className="hover:text-[#C88A1A] transition-colors py-1 border-b border-transparent hover:border-[#C88A1A]"
                >
                  0{idx + 1} {s.title.toUpperCase()}
                </Link>
              ))}
            </div>

            {/* Commercial Impact Ticker with CountUp */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 mt-12 border-t border-[#D7D3CB]/70">
              <div>
                <div className="text-3xl sm:text-4xl font-mono font-black text-[#07192F]">
                  <CountUp to={185} prefix="$" suffix="M+" duration={2.2} />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block mt-1">
                  Client Pipeline Generated
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-mono font-black text-[#07192F]">
                  <CountUp to={4.8} decimals={1} suffix="x" duration={2} />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block mt-1">
                  Average Revenue ROI
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-mono font-black text-[#07192F]">
                  <CountUp to={94} suffix="%" duration={1.8} />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block mt-1">
                  Contract Renewal Rate
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-mono font-black text-[#07192F]">
                  <CountUp to={32} suffix=" Days" duration={1.6} />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block mt-1">
                  Avg. GTM Velocity Sprints
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 2. THE FOUR DETAILED PILLAR DEEP-DIVES                    */}
      {/* ========================================================= */}
      <div className="divide-y divide-[#D7D3CB]">
        {servicesData.map((service, index) => {
          const IconComp = PILLAR_ICONS[service.id] || Compass;
          const imageSrc = PILLAR_IMAGES[service.id] || "/images/pillars/01-growth-strategy.jpg";
          const tag = PILLAR_TAGS[service.id] || "COMMERCIAL ENGINE";
          const isEven = index % 2 === 1;

          return (
            <section
              key={service.id}
              id={service.id}
              className="py-20 lg:py-28 scroll-mt-24 relative overflow-hidden"
            >
              {/* Short alias anchor so #strategy, #marketing, #sales, #technology work seamlessly */}
              <div
                id={DISCIPLINE_SHORT_ALIASES[service.id]}
                className="absolute -top-24 pointer-events-none"
                aria-hidden="true"
              />
              <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                  
                  {/* Photo & Pillar Card Header Column */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="sticky top-28 space-y-6">
                      
                      {/* Ghost Numeral & Tag */}
                      <div className="flex items-center justify-between">
                        <span className="text-6xl sm:text-7xl font-mono font-black text-[#C4BBAE] leading-none select-none">
                          0{index + 1}
                        </span>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-200 shadow-2xs">
                          <IconComp className="w-3.5 h-3.5 text-[#C88A1A]" />
                          <span className="font-mono text-[10.5px] font-bold tracking-[0.16em] text-[#07192F] uppercase">
                            <DecryptedText
                              text={tag}
                              speed={30}
                              maxIterations={6}
                              animateOn="view"
                              className="text-[#07192F]"
                            />
                          </span>
                        </div>
                      </div>

                      {/* Arched Photo Frame with Subtle Luxury Border */}
                      <div className="relative w-full aspect-[4/4.5] sm:aspect-[4/4] rounded-t-full sm:rounded-tl-[100px] rounded-br-2xl rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-card-elevated border border-stone-200/80 bg-stone-100">
                        <Image
                          src={imageSrc}
                          alt={service.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                        
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                          <p className="text-xs font-mono uppercase tracking-[0.18em] text-[#F5A900] mb-1 font-bold">
                            CORE FOCUS
                          </p>
                          <p className="text-sm font-medium leading-snug text-white/95">
                            {service.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Targeted Metrics Strip */}
                      <div className="bg-white p-5 rounded-xl border border-stone-200/80 shadow-2xs">
                        <p className="text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-slate-500 mb-2">
                          PRIMARY TARGETED METRICS:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.metricsFocus.map((metric, i) => (
                            <span
                              key={i}
                              className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#D7D3CB] text-[#07192F]"
                            >
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Comprehensive Deliverables & Challenges Column */}
                  <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div>
                      {/* Eyebrow */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-[2px] bg-[#C88A1A]" />
                        <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.22em] text-[#07192F] uppercase">
                          PILLAR 0{index + 1}
                        </span>
                      </div>

                      {/* Pillar Title */}
                      <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#07192F] tracking-[-0.035em] leading-[1.02] mb-6">
                        {service.title}
                      </h2>

                      {/* Full Scope Narrative */}
                      <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal mb-10">
                        {service.description}
                      </p>

                      {/* Grid: Challenges vs Deliverables */}
                      <div className="space-y-8">
                        
                        {/* 1. Deliverables & Blueprints */}
                        <SpotlightCard
                          theme="light"
                          spotlightColor="#C88A1A"
                          intensity={0.25}
                          className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-xs"
                        >
                          <div className="flex items-center gap-2.5 mb-5 text-[#07192F]">
                            <CheckCircle2 className="w-5 h-5 text-[#C88A1A]" />
                            <h3 className="text-base sm:text-lg font-bold uppercase tracking-[0.05em]">
                              Tangible Deliverables &amp; Infrastructure
                            </h3>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {service.deliverables.map((item, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200/60"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C88A1A] mt-2 shrink-0" />
                                <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </SpotlightCard>

                        {/* 2. Common Friction Points Eliminated */}
                        <SpotlightCard
                          theme="gold"
                          spotlightColor="#C88A1A"
                          intensity={0.2}
                          className="bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-xs"
                        >
                          <div className="flex items-center gap-2.5 mb-5 text-[#07192F]">
                            <AlertCircle className="w-5 h-5 text-slate-400" />
                            <h3 className="text-base sm:text-lg font-bold uppercase tracking-[0.05em]">
                              Commercial Bottlenecks We Eliminate
                            </h3>
                          </div>

                          <div className="space-y-3">
                            {service.challenges.map((item, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed"
                              >
                                <span className="font-mono text-xs font-bold text-slate-400 shrink-0 mt-0.5">
                                  ✕
                                </span>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </SpotlightCard>

                      </div>

                      {/* Action Buttons: Dedicated Blueprint & Consultation */}
                      <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
                        <Link
                          href={DISCIPLINE_LINKS[service.id] || "/contact"}
                          className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#07192F] text-white font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#C88A1A] hover:text-[#07192F] transition-all duration-300 shadow-sm"
                        >
                          <span>EXPLORE FULL {service.title.toUpperCase()} BLUEPRINT</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 hover:text-[#C88A1A] transition-colors"
                        >
                          <span>Book Consultation</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                    </div>
                  </div>

                </div>
              </Container>
            </section>
          );
        })}
      </div>

      {/* ========================================================= */}
      {/* 3. UNIFIED REVENUE FLYWHEEL                               */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 border-t border-[#D7D3CB] bg-[#FAF8F5]">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#C88A1A]" />
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.22em] text-[#07192F] uppercase">
                COMMERCIAL SYNCHRONIZATION
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-[-0.035em] leading-[1.05] mb-6">
              How the four disciplines <br />
              <span className="text-[#C88A1A]">interlock and compound.</span>
            </h2>
            <div className="w-12 h-[3px] bg-[#C88A1A] rounded-full mx-auto mb-6" aria-hidden="true" />
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
              Growth stalls when marketing feeds unvetted leads, or sales closes clients that churn in months.
              Levexa aligns the entire commercial continuum into an interconnected flywheel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Step 1 */}
            <SpotlightCard
              theme="light"
              spotlightColor="#C88A1A"
              intensity={0.22}
              className="bg-white p-7 rounded-2xl border border-stone-200/80 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#C88A1A] uppercase tracking-wider block mb-2">
                  STAGE 01
                </span>
                <h3 className="text-xl font-bold text-[#07192F] mb-3">Strategy</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Defines ICP, market positioning, pricing tiers, and unit economic benchmarks.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 font-mono text-[11px] font-bold text-[#07192F] flex items-center justify-between">
                <span>FEEDS MARKETING</span>
                <span>→</span>
              </div>
            </SpotlightCard>

            {/* Step 2 */}
            <SpotlightCard
              theme="light"
              spotlightColor="#C88A1A"
              intensity={0.22}
              className="bg-white p-7 rounded-2xl border border-stone-200/80 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#C88A1A] uppercase tracking-wider block mb-2">
                  STAGE 02
                </span>
                <h3 className="text-xl font-bold text-[#07192F] mb-3">Marketing</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Launches authority content, Meta Ads, and video funnels that attract high-intent buyers.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 font-mono text-[11px] font-bold text-[#07192F] flex items-center justify-between">
                <span>FEEDS SALES</span>
                <span>→</span>
              </div>
            </SpotlightCard>

            {/* Step 3 */}
            <SpotlightCard
              theme="light"
              spotlightColor="#C88A1A"
              intensity={0.22}
              className="bg-white p-7 rounded-2xl border border-stone-200/80 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#C88A1A] uppercase tracking-wider block mb-2">
                  STAGE 03
                </span>
                <h3 className="text-xl font-bold text-[#07192F] mb-3">Sales</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Executes qualification scripts, objection handling, and CRM cadence to close deals faster.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 font-mono text-[11px] font-bold text-[#07192F] flex items-center justify-between">
                <span>FEEDS AUTOMATION</span>
                <span>→</span>
              </div>
            </SpotlightCard>

            {/* Step 4 */}
            <SpotlightCard
              theme="light"
              spotlightColor="#C88A1A"
              intensity={0.22}
              className="bg-white p-7 rounded-2xl border border-stone-200/80 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#C88A1A] uppercase tracking-wider block mb-2">
                  STAGE 04
                </span>
                <h3 className="text-xl font-bold text-[#07192F] mb-3">Automation</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Automates onboarding, CRM synchronization, WhatsApp chatbots, and executive dashboards.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 font-mono text-[11px] font-bold text-[#C88A1A] flex items-center justify-between">
                <span>COMPOUNDS SCALE</span>
                <span>↻</span>
              </div>
            </SpotlightCard>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 4. BESPOKE LEVEXA LUXURY CTA SECTION                      */}
      {/* ========================================================= */}
      <CTASection
        title="Ready to install high-performance"
        highlight="commercial infrastructure?"
        subtitle="Let's diagnose your current growth stage and map out a tailored advisory sprint across Strategy, Marketing, Sales, or Automation."
        primaryCtaText="Schedule Commercial Audit"
        secondaryCtaText="Review Case Studies"
      />

    </div>
  );
}
