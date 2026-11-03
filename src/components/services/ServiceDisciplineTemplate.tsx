import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { ClickSpark } from "@/components/ui/ClickSpark";
import { GoldArcs } from "@/components/ui/GoldArcs";

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
  deliverablesDetailed: DeliverableDetailed[];
  roadmap: DisciplineProcessStep[];
  faqs: DisciplineFAQ[];
  adjacentDisciplines: AdjacentDiscipline[];
  ctaTitle?: string;
  ctaHighlight?: string;
  ctaSubtitle?: string;
}

// Shared section heading: title + optional intro
const SectionIntro: React.FC<{ title: string; intro?: string }> = ({
  title,
  intro,
}) => (
  <div className="max-w-3xl mb-10 sm:mb-12">
    <h2 className="type-h2 text-[#04162A]">
      {title}
    </h2>
    {intro && <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">{intro}</p>}
  </div>
);

export const ServiceDisciplineTemplate: React.FC<ServiceDisciplineTemplateProps> = ({
  pillarNumber,
  titleLine1,
  titleHighlight,
  subtitle,
  image,
  imageAlt,
  deliverablesDetailed,
  roadmap,
  faqs,
  adjacentDisciplines,
  ctaTitle = "Ready to elevate your",
  ctaHighlight = "commercial architecture?",
  ctaSubtitle = "Schedule a confidential discovery briefing with Levexa to diagnose your revenue engine.",
}) => {
  return (
    <div className="bg-[#FAF8F5] text-[#04162A] min-h-screen">
      {/* 1. Breadcrumbs & Top Meta: navy hero, like the slides */}
      <section className="on-dark relative overflow-hidden bg-[#04162A] text-white pt-32 sm:pt-40 pb-16 sm:pb-24">
        <GoldArcs flip />
        <Container className="relative">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/70 mb-8">
            <Link href="/" className="py-3 hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="py-3 hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-white font-semibold" aria-current="page">
              {titleLine1} {titleHighlight}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">

              <h1 className="type-title mb-6">
                <span className="text-white">{titleLine1}</span>{" "}
                <span className="text-gold-deep">{titleHighlight}</span>
              </h1>

              <div
                className="w-12 h-[3px] bg-[#FEB005] rounded-full mb-6"
                aria-hidden="true"
              />

              <p className="type-lead !text-white/85 max-w-2xl mb-8">
                {subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <ClickSpark sparkColor="#FEB005" sparkRadius={25} sparkCount={6}>
                  <Link
                    href="/contact"
                    className="btn-primary"
                  >
                    Book a growth call
                  </Link>
                </ClickSpark>
                <Link
                  href="#deliverables"
                  className="btn-secondary-dark"
                >
                  What you get
                </Link>
              </div>
            </div>

            {/* Right Arched Visual & Ghost Numeral */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/4.5] rounded-t-full sm:rounded-tl-[120px] rounded-br-3xl rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-2xl shadow-black/40 ring-1 ring-white/15 bg-[#0A223E]">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                {/* Decorative watermark number on the photo */}
                <div className="absolute top-6 right-6" aria-hidden="true">
                  <span className="text-6xl sm:text-7xl font-mono font-black text-white/40 leading-none select-none">
                    {pillarNumber}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. What's Included */}
      <section id="deliverables" className="py-16 lg:py-24 border-b border-[#D7D3CB] scroll-mt-24">
        <Container>
          <SectionIntro title="What you get" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {deliverablesDetailed.map((deliv) => (
              <div
                key={deliv.title}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200 shadow-2xs flex gap-4"
              >
                <CheckCircle2 className="w-5 h-5 text-[#C88A1A] shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-[#04162A] mb-2">{deliv.title}</h3>
                  <p className="text-base text-slate-600 leading-relaxed">{deliv.description}</p>
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
                  <span className="text-2xl font-mono font-black text-[#04162A]">0{idx + 1}</span>
                  <span className="text-xs font-mono font-semibold text-slate-600">{step.week}</span>
                </div>
                <h3 className="text-lg font-bold text-[#04162A] mb-3">{step.title}</h3>
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
            <SectionIntro title="Common questions" />

            <div className="space-y-3">
              {/* Native <details>: every answer is in the HTML (readable by search engines), works without JS */}
              {faqs.slice(0, 4).map((faq, idx) => (
                <details
                  key={faq.question}
                  open={idx === 0}
                  className="group rounded-xl border border-stone-200/90 bg-white overflow-hidden shadow-2xs"
                >
                  <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#04162A] hover:text-gold-ink transition-colors">
                    <span>{faq.question}</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 group-open:rotate-180 group-open:text-[#C88A1A]" />
                  </summary>
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-base text-slate-600 leading-relaxed border-t border-stone-100">
                    {faq.answer}
                  </div>
                </details>
              ))}
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
                <h3 className="text-lg font-bold text-[#04162A] group-hover:text-gold-ink transition-colors mb-1">
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
        primaryCtaText="Book a growth call"
        secondaryCtaText="Explore all services"
      />
    </div>
  );
};
