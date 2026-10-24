"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { CaseStudyCard } from "@/components/portfolio/CaseStudyCard";
import { CaseStudy } from "@/types";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { CountUp } from "@/components/ui/CountUp";

type ParsedMetric =
  | { isNumeric: true; num: number; prefix: string; suffix: string; decimals: number }
  | { isNumeric: false; raw: string };

function parseMetric(val: string): ParsedMetric {
  let prefix = "";
  let suffix = "";
  let clean = val.trim();

  if (clean.startsWith("+")) {
    prefix = "+";
    clean = clean.slice(1);
  } else if (clean.startsWith("-")) {
    prefix = "-";
    clean = clean.slice(1);
  } else if (clean.startsWith("$")) {
    prefix = "$";
    clean = clean.slice(1);
  } else if (clean.startsWith("£")) {
    prefix = "£";
    clean = clean.slice(1);
  }

  if (clean.endsWith("%")) {
    suffix = "%";
    clean = clean.slice(0, -1);
  } else if (clean.endsWith("x") || clean.endsWith("X")) {
    suffix = "x";
    clean = clean.slice(0, -1);
  } else if (clean.endsWith("M+")) {
    suffix = "M+";
    clean = clean.slice(0, -2);
  } else if (clean.endsWith("+")) {
    suffix = "+";
    clean = clean.slice(0, -1);
  }

  const num = parseFloat(clean);
  const decimals = clean.includes(".") ? clean.split(".")[1].length : 0;

  if (isNaN(num)) {
    return { isNumeric: false, raw: val };
  }

  return {
    isNumeric: true,
    num,
    prefix,
    suffix,
    decimals,
  };
}

export interface MetricItem {
  label: string;
  value: string;
  detail: string;
}

export interface DeliverableDetailed {
  title: string;
  description: string;
  items: string[];
  timeline: string;
}

export interface FrictionVsSolution {
  friction: string;
  solution: string;
}

export interface DisciplineProcessStep {
  week: string;
  phase: string;
  title: string;
  deliverable: string;
}

export interface DisciplineFAQ {
  question: string;
  answer: string;
}

export interface AdjacentDiscipline {
  number: string;
  title: string;
  href: string;
  tagline: string;
}

export interface ServiceDisciplineTemplateProps {
  pillarNumber: string;
  categoryTag: string;
  titleLine1: string;
  titleHighlight: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  overviewSummary: string;
  metrics: MetricItem[];
  deliverablesDetailed: DeliverableDetailed[];
  frictionVsSolution: FrictionVsSolution[];
  roadmap: DisciplineProcessStep[];
  featuredCaseStudy: CaseStudy;
  faqs: DisciplineFAQ[];
  adjacentDisciplines: AdjacentDiscipline[];
  ctaTitle?: string;
  ctaHighlight?: string;
  ctaSubtitle?: string;
}

export const ServiceDisciplineTemplate: React.FC<ServiceDisciplineTemplateProps> = ({
  pillarNumber,
  categoryTag,
  titleLine1,
  titleHighlight,
  subtitle,
  image,
  imageAlt,
  overviewSummary,
  metrics,
  deliverablesDetailed,
  frictionVsSolution,
  roadmap,
  featuredCaseStudy,
  faqs,
  adjacentDisciplines,
  ctaTitle = "Ready to elevate your",
  ctaHighlight = "commercial architecture?",
  ctaSubtitle = "Schedule a confidential discovery briefing with Levexa to diagnose your revenue engine.",
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="pt-24 sm:pt-28 bg-[#FAF8F5] text-[#07192F] select-none min-h-screen">
      {/* 1. Breadcrumbs & Top Meta */}
      <section className="pt-8 sm:pt-12 border-b border-[#D7D3CB] pb-16 sm:pb-24 relative overflow-hidden">
        <Container>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-widest mb-8">
            <Link href="/" className="hover:text-[#07192F] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#07192F] transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-[#C88A1A] font-bold">{titleHighlight}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-[#C88A1A]" />
                <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.22em] text-[#07192F] uppercase">
                  {`${pillarNumber} // ${categoryTag}`}
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-bold tracking-[-0.035em] leading-[1.02] mb-6">
                <span className="text-[#07192F]">{titleLine1}</span>{" "}
                <br />
                <span className="text-[#C88A1A]">{titleHighlight}</span>
              </h1>

              <div
                className="w-12 h-[3px] bg-[#C88A1A] rounded-full mb-6"
                aria-hidden="true"
              />

              <p className="text-lg sm:text-xl text-slate-800 leading-relaxed max-w-2xl font-normal mb-8">
                {subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[#07192F] hover:bg-[#C88A1A] hover:text-[#07192F] text-white text-xs sm:text-sm uppercase tracking-[0.16em] font-bold px-8 py-4 transition-all duration-300 shadow-sm active:scale-98"
                >
                  Request Consultation
                </Link>
                <Link
                  href="#deliverables"
                  className="inline-flex items-center justify-center bg-white hover:bg-stone-50 text-[#07192F] border border-stone-300 text-xs sm:text-sm uppercase tracking-[0.16em] font-semibold px-7 py-4 transition-all"
                >
                  View Deliverables
                </Link>
              </div>
            </div>

            {/* Right Arched Visual & Ghost Numeral */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/4.5] rounded-t-full sm:rounded-tl-[120px] rounded-br-3xl rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-card-elevated border border-stone-200/80 bg-stone-100">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute top-6 right-6">
                  <span className="text-6xl sm:text-7xl font-mono font-black text-white/40 leading-none select-none">
                    {pillarNumber}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#F5A900] mb-1 font-bold">
                    PRIMARY DISCIPLINE
                  </p>
                  <p className="text-sm font-medium leading-snug text-white/95">
                    {overviewSummary}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Key Metrics Bar */}
      <section className="py-12 border-b border-[#D7D3CB] bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, i) => {
              const parsed = parseMetric(metric.value);
              return (
                <SpotlightCard
                  key={i}
                  theme="gold"
                  spotlightColor="#C88A1A"
                  intensity={0.25}
                  className="p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200/90 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block mb-2">
                      {metric.label}
                    </span>
                    <div className="text-3xl sm:text-4xl font-bold font-mono text-[#07192F] mb-2 tracking-tight">
                      {parsed.isNumeric ? (
                        <CountUp
                          to={parsed.num}
                          prefix={parsed.prefix}
                          suffix={parsed.suffix}
                          decimals={parsed.decimals}
                          duration={2}
                        />
                      ) : (
                        metric.value
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed border-t border-stone-200/80 pt-3">
                    {metric.detail}
                  </p>
                </SpotlightCard>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. Detailed Deliverables Section */}
      <section id="deliverables" className="py-20 lg:py-28 border-b border-[#D7D3CB] scroll-mt-24">
        <Container>
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#C88A1A]" />
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.22em] text-[#07192F] uppercase">
                EXECUTIVE SPECIFICATION
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#07192F] tracking-[-0.03em] leading-tight mb-4">
              Tangible Commercial Deliverables
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Every engagement produces codified, permanent infrastructure rather than disposable consulting decks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deliverablesDetailed.map((deliv, index) => (
              <SpotlightCard
                key={index}
                theme="light"
                spotlightColor="#C88A1A"
                intensity={0.22}
                className="bg-white p-8 rounded-2xl border border-stone-200 shadow-2xs hover:border-[#C88A1A]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#FAF8F5] border border-stone-200 text-[#C88A1A]">
                      PHASE 0{index + 1}
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-medium">
                      Est. {deliv.timeline}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#07192F] mb-3">
                    {deliv.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {deliv.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-stone-100">
                    {deliv.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-[#C88A1A] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Friction We Eliminate vs Levexa Architecture */}
      <section className="py-20 lg:py-28 border-b border-[#D7D3CB] bg-white">
        <Container>
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#C88A1A]" />
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.22em] text-[#07192F] uppercase">
                DIAGNOSTIC CONTRAST
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#07192F] tracking-[-0.03em] leading-tight mb-4">
              Commercial Friction vs. Levexa Architecture
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Why conventional tactical agency approaches fail to scale, and how our strategic foundation drives durable compounding revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* The Industry Standard (Friction) */}
            <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-stone-200">
              <div className="flex items-center gap-2.5 pb-4 border-b border-stone-200 text-[#07192F] mb-6">
                <AlertCircle className="w-5 h-5 text-slate-400" />
                <h3 className="font-bold text-base uppercase tracking-wider">
                  The Conventional Approach (Siloed &amp; Leaky)
                </h3>
              </div>
              <div className="space-y-4">
                {frictionVsSolution.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <span className="font-mono text-xs font-bold text-slate-400 shrink-0 mt-0.5">✕</span>
                    <span>{item.friction}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* The Levexa Method (Scale) */}
            <SpotlightCard
              theme="dark"
              spotlightColor="#C88A1A"
              intensity={0.35}
              className="p-8 rounded-2xl bg-[#07192F] text-white border border-stone-800 shadow-xl"
            >
              <div className="flex items-center gap-2.5 pb-4 border-b border-stone-800 text-[#C88A1A] mb-6">
                <ShieldCheck className="w-5 h-5 text-[#C88A1A]" />
                <h3 className="font-bold text-base uppercase tracking-wider text-white">
                  The Levexa Standard (Unified &amp; Repeatable)
                </h3>
              </div>
              <div className="space-y-4">
                {frictionVsSolution.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-stone-200 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#C88A1A] shrink-0 mt-0.5" />
                    <span>{item.solution}</span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </div>
        </Container>
      </section>

      {/* 5. Roadmap & Execution Sprint */}
      <section className="py-20 lg:py-28 border-b border-[#D7D3CB]">
        <Container>
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#C88A1A]" />
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.22em] text-[#07192F] uppercase">
                ENGAGEMENT CADENCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#07192F] tracking-[-0.03em] leading-tight mb-4">
              The 4-Stage Advisory Sprint
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              A structured execution timeline that moves seamlessly from diagnostic audit to operational deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmap.map((step, idx) => (
              <SpotlightCard
                key={idx}
                theme="light"
                spotlightColor="#C88A1A"
                intensity={0.2}
                className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#C88A1A] tracking-wider uppercase">
                      {step.week}
                    </span>
                    <span className="text-2xl font-mono font-black text-stone-300">
                      0{idx + 1}
                    </span>
                  </div>
                  <div className="text-xs font-mono font-bold uppercase text-slate-400 mb-1">
                    {step.phase}
                  </div>
                  <h3 className="text-lg font-bold text-[#07192F] mb-3">
                    {step.title}
                  </h3>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 text-xs text-slate-600 font-medium">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                    Milestone Deliverable:
                  </span>
                  {step.deliverable}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Featured Discipline Case Study */}
      <section className="py-20 lg:py-28 border-b border-[#D7D3CB] bg-white">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-[#C88A1A]" />
                <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.22em] text-[#07192F] uppercase">
                  PROVEN METHODOLOGY
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-[#07192F] tracking-[-0.03em] leading-tight">
                Case Study In Practice
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#07192F] hover:text-[#C88A1A] transition-colors"
            >
              <span>View All 4 Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <CaseStudyCard caseStudy={featuredCaseStudy} />
          </div>
        </Container>
      </section>

      {/* 7. Executive FAQs */}
      <section className="py-20 lg:py-28 border-b border-[#D7D3CB]">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#C88A1A]" />
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.22em] text-[#07192F] uppercase">
                EXECUTIVE INQUIRIES
              </span>
              <span className="w-8 h-[2px] bg-[#C88A1A]" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#07192F] tracking-[-0.03em] leading-tight mb-4">
              Frequently Addressed Questions
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Key considerations founders and leadership teams explore when engaging our advisory team.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-stone-200/90 bg-white overflow-hidden shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#07192F] hover:text-[#C88A1A] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 text-[#C88A1A]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-stone-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 8. Interconnected Disciplines Navigation */}
      <section className="py-16 border-b border-[#D7D3CB] bg-white">
        <Container>
          <div className="text-center mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-400">
              EXPLORE ADJACENT DISCIPLINES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {adjacentDisciplines.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200 hover:border-[#C88A1A]/40 transition-all block"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#C88A1A]">
                    {item.number}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#C88A1A] group-hover:translate-x-1 transition-all" />
                </div>
                <h4 className="text-lg font-bold text-[#07192F] group-hover:text-[#C88A1A] transition-colors mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.tagline}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. Bespoke CTA */}
      <CTASection
        title={ctaTitle}
        highlight={ctaHighlight}
        subtitle={ctaSubtitle}
        primaryCtaText="Request Advisory Consultation"
        secondaryCtaText="All Commercial Services"
      />
    </div>
  );
};
