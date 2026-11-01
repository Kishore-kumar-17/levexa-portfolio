import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { constructMetadata } from "@/lib/metadata";
import { ArrowRight, CheckCircle2, Lightbulb, LineChart, RefreshCw, ShieldCheck } from "lucide-react";
import { BlurText } from "@/components/ui/BlurText";

export const metadata: Metadata = constructMetadata({
  title: "About Levexa — Strategic Business Growth Advisory",
  description:
    "Levexa is a founder-led growth advisory helping businesses turn marketing into measurable revenue by connecting strategy, content, sales and automation.",
  path: "/about",
});

const PROBLEMS = [
  {
    title: "Strategy without execution is just theory",
    desc: "A plan only matters when it turns into daily actions your team can actually follow.",
  },
  {
    title: "Marketing disconnected from sales is waste",
    desc: "Leads are only valuable when your sales process is ready to convert them.",
  },
  {
    title: "Growth without systems doesn't last",
    desc: "Clear processes and automation let you grow without adding chaos and cost.",
  },
];

const WORKING_STYLE = [
  "A clear diagnosis before any recommendation",
  "Practical plans your team can run every day",
  "Regular reviews against your real numbers",
];

const VALUES = [
  { title: "Clarity", desc: "We focus on the few numbers that truly drive your growth.", icon: Lightbulb },
  { title: "Measurable impact", desc: "Every recommendation links to leads, sales or revenue.", icon: LineChart },
  { title: "Ownership", desc: "We work alongside you until the plan delivers.", icon: ShieldCheck },
  { title: "Continuous improvement", desc: "We test, measure and refine as your market changes.", icon: RefreshCw },
];

export default function AboutPage() {
  return (
    <div className="pt-24 sm:pt-28 bg-[#FAF8F5] text-[#07192F] min-h-screen">
      {/* 1. Hero with founder portrait */}
      <section className="pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 border-b border-[#D7D3CB]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h1 className="type-display mb-8">
                <BlurText text="Built for scale." className="text-[#07192F] inline-flex" delay={80} />
                <BlurText text="Driven by excellence." className="text-[#C88A1A] inline-flex" delay={120} />
              </h1>

              <div className="w-12 h-[3px] bg-[#C88A1A] rounded-full mb-8" aria-hidden="true" />

              <p className="type-lead max-w-2xl mb-10">
                Levexa is a founder-led growth advisory. We help businesses turn marketing into measurable
                revenue by connecting strategy, content, sales and automation.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/contact" className="group btn-primary">
                  Book a growth call
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
                <Link href="/work" className="btn-secondary">
                  See our work
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative max-w-md mx-auto lg:ml-auto rounded-tl-[80px] sm:rounded-tl-[120px] rounded-br-3xl rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-card-elevated border border-stone-200/80 bg-stone-100 aspect-[4/5]">
                <Image
                  src="/images/about/founder-lavanya.jpg"
                  alt="Lavanya, Founder & CEO of Levexa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 448px"
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-4 left-4 right-4 px-4 py-3 rounded-xl bg-[#07192F]/85 backdrop-blur-md border border-white/10">
                  <p className="text-base font-bold text-white tracking-tight">Lavanya</p>
                  <p className="text-xs font-mono font-semibold text-[#E4AB3C] uppercase tracking-wider">
                    Founder &amp; CEO, Levexa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Why growth stalls */}
      <section className="py-16 lg:py-24 border-b border-[#D7D3CB]">
        <Container>
          <h2 className="type-h2 max-w-3xl mb-10 sm:mb-12">
            Why most business growth <span className="text-[#C88A1A]">stalls</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {PROBLEMS.map((item, idx) => (
              <div key={item.title} className="bg-white p-7 sm:p-8 rounded-2xl border border-stone-200 shadow-2xs">
                <span className="text-sm font-mono font-bold text-slate-600 block mb-4">0{idx + 1}</span>
                <h3 className="text-xl font-bold leading-snug mb-3">{item.title}</h3>
                <p className="text-base text-slate-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. How we work (founder-led) */}
      <section className="py-16 lg:py-24 border-b border-[#D7D3CB] bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <h2 className="type-h2 lg:col-span-5">
              You work directly with <span className="text-[#C88A1A]">the founder</span>
            </h2>
            <div className="lg:col-span-7">
              <p className="text-lg sm:text-xl text-slate-800 leading-relaxed mb-8">
                Every engagement is led by Lavanya personally. We start by understanding your business and your
                numbers, build a clear plan, then work alongside your team until it delivers results.
              </p>
              <ul className="space-y-4">
                {WORKING_STYLE.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-base sm:text-lg text-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-[#C88A1A] shrink-0 mt-1" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Values */}
      <section className="py-16 lg:py-24">
        <Container>
          <h2 className="type-h2 max-w-3xl mb-10 sm:mb-12">
            What we <span className="text-[#C88A1A]">stand for</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="p-7 rounded-2xl bg-white border border-stone-200 shadow-2xs">
                  <Icon className="w-6 h-6 text-[#C88A1A] mb-5" aria-hidden="true" />
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-base text-slate-700 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 5. CTA */}
      <CTASection
        title="Ready to engineer your company's"
        highlight="next growth breakthrough?"
        subtitle="Book a free consultation. We'll look at your current marketing and sales, and show you where the biggest growth opportunities are."
        primaryCtaText="Book a growth call"
        secondaryCtaText="See our work"
        secondaryCtaHref="/work"
      />
    </div>
  );
}
