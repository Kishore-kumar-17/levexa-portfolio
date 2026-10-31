"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { ShinyText } from "@/components/ui/ShinyText";
import { DecryptedText } from "@/components/ui/DecryptedText";
import { ClickSpark } from "@/components/ui/ClickSpark";

export interface DeliverableDetailed {
  title: string;
  description: string;
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
  deliverablesDetailed: DeliverableDetailed[];
  roadmap: DisciplineProcessStep[];
  faqs: DisciplineFAQ[];
  adjacentDisciplines: AdjacentDiscipline[];
  ctaTitle?: string;
  ctaHighlight?: string;
  ctaSubtitle?: string;
}

// Shared section heading: gold eyebrow line + title + optional intro
const SectionIntro: React.FC<{ eyebrow: string; title: string; intro?: string }> = ({
  eyebrow,
  title,
  intro,
}) => (
  <div className="max-w-3xl mb-10 sm:mb-12">
    <div className="flex items-center gap-3 mb-4">
      <span className="w-8 h-[2px] bg-[#C88A1A]" />
      <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.22em] text-[#07192F] uppercase">
        {eyebrow}
      </span>
    </div>
    <h2 className="text-3xl sm:text-4xl font-bold text-[#07192F] tracking-[-0.03em] leading-tight">
      {title}
    </h2>
    {intro && <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">{intro}</p>}
  </div>
);

export const ServiceDisciplineTemplate: React.FC<ServiceDisciplineTemplateProps> = ({
  pillarNumber,
  categoryTag,
  titleLine1,
  titleHighlight,
  subtitle,
  image,
  imageAlt,
  overviewSummary,
  deliverablesDetailed,
  roadmap,
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
    <div className="pt-24 sm:pt-28 bg-[#FAF8F5] text-[#07192F] min-h-screen">
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
                  <DecryptedText
                    text={`${pillarNumber} // ${categoryTag}`}
                    speed={35}
                    maxIterations={8}
                    animateOn="view"
                    className="text-[#07192F]"
                  />
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-bold tracking-[-0.035em] leading-[1.02] mb-6">
                <span className="text-[#07192F]">{titleLine1}</span>{" "}
                <br />
                <ShinyText text={titleHighlight} variant="gold" speed={3.5} />
              </h1>

              <div
                className="w-12 h-[3px] bg-[#C88A1A] rounded-full mb-6"
                aria-hidden="true"
              />

              <p className="text-lg sm:text-xl text-slate-800 leading-relaxed max-w-2xl font-normal mb-8">
                {subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <ClickSpark sparkColor="#C88A1A" sparkRadius={25} sparkCount={6}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-[#07192F] hover:bg-[#C88A1A] hover:text-[#07192F] text-white text-xs sm:text-sm uppercase tracking-[0.16em] font-bold px-8 py-4 transition-all duration-300 shadow-sm active:scale-98"
                  >
                    Request Consultation
                  </Link>
                </ClickSpark>
                <Link
                  href="#deliverables"
                  className="inline-flex items-center justify-center bg-white hover:bg-stone-50 text-[#07192F] border border-stone-300 text-xs sm:text-sm uppercase tracking-[0.16em] font-semibold px-7 py-4 transition-all"
                >
                  What You Get
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

      {/* 2. What's Included */}
      <section id="deliverables" className="py-16 lg:py-24 border-b border-[#D7D3CB] scroll-mt-24">
        <Container>
          <SectionIntro eyebrow="What's included" title="What you get" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {deliverablesDetailed.map((deliv) => (
              <div
                key={deliv.title}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200 shadow-2xs flex gap-4"
              >
                <CheckCircle2 className="w-5 h-5 text-[#C88A1A] shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-[#07192F] mb-2">{deliv.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{deliv.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. How We Work */}
      <section className="py-16 lg:py-24 border-b border-[#D7D3CB] bg-white">
        <Container>
          <SectionIntro
            eyebrow="How we work"
            title={`${roadmap.length} focused stages`}
            intro="A clear path from diagnosis to execution, with a concrete deliverable at every stage."
          />

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {roadmap.map((step, idx) => (
              <li
                key={step.title}
                className="p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200/90 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-mono font-black text-[#07192F]">0{idx + 1}</span>
                  <span className="text-xs font-mono font-semibold text-slate-600">{step.week}</span>
                </div>
                <h3 className="text-lg font-bold text-[#07192F] mb-3">{step.title}</h3>
                <p className="mt-auto pt-3 border-t border-stone-200 text-sm text-slate-600">
                  {step.deliverable}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 4. FAQs */}
      <section className="py-16 lg:py-24 border-b border-[#D7D3CB]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionIntro eyebrow="FAQ" title="Common questions" />

            <div className="space-y-3">
              {faqs.slice(0, 4).map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={faq.question}
                    className="rounded-xl border border-stone-200/90 bg-white overflow-hidden shadow-2xs"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#07192F] hover:text-[#C88A1A] transition-colors"
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
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-stone-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Other Services */}
      <section className="py-14 border-b border-[#D7D3CB] bg-white">
        <Container>
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-600 block mb-6">
            Explore other services
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {adjacentDisciplines.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200 hover:border-[#C88A1A]/40 transition-all block"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-slate-600">{item.number}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#C88A1A] group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-lg font-bold text-[#07192F] group-hover:text-[#C88A1A] transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.tagline}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. CTA */}
      <CTASection
        title={ctaTitle}
        highlight={ctaHighlight}
        subtitle={ctaSubtitle}
        primaryCtaText="Request Consultation"
        secondaryCtaText="All Services"
      />
    </div>
  );
};
