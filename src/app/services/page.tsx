import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { CTASection } from "@/components/sections/CTASection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { servicesData } from "@/data/services";
import { constructMetadata } from "@/lib/metadata";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = constructMetadata({
  title: "Growth Advisory Services — Strategy, Marketing, Sales & Scaling",
  description:
    "Explore Levexa's core advisory offerings: Business Strategy, Marketing Demand Engines, Sales Enablement, and Sustainable Business Growth.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-0 bg-white">
      {/* 1. Hero */}
      <section className="py-16 lg:py-24 bg-white relative border-b border-slate-200">
        <Container>
          <div className="max-w-3xl space-y-6">
            <AnimatedSection direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[#059669] text-xs font-mono font-bold uppercase tracking-[0.2em] shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span>Our Core Services</span>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-medium text-[#07192F] tracking-[-0.03em] leading-[1.08]">
                Commercial advisory designed for{" "}
                <span className="text-[#78716C]">measurable scale.</span>
              </h1>
            </AnimatedSection>

            {/* Signature Horizontal Accent Line */}
            <div
              className="w-12 h-[3.5px] bg-[#10B981] rounded-full my-5"
              aria-hidden="true"
            />

            <AnimatedSection direction="up" delay={0.2}>
              <p className="text-xl sm:text-2xl text-slate-700 font-normal leading-[1.4] tracking-tight">
                Whether you need to reposition your market offering, generate
                high-intent pipeline, accelerate deal closing, or scale customer
                retention economics, Levexa provides targeted blueprints and hands-on
                enablement.
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* 2. Detailed Service Offerings Grid */}
      <section className="py-20 lg:py-28 bg-white relative">
        <Container>
          <AnimatedSection direction="up" className="mb-14">
            <SectionHeading
              eyebrow="Detailed Breakdown"
              title="Four interconnected disciplines to"
              highlight="engineer your growth."
              subtitle="Each service tackles specific commercial bottlenecks while feeding directly into your company's broader revenue flywheel."
              theme="light"
            />
          </AnimatedSection>

          <ServiceGrid services={servicesData} variant="detailed" />
        </Container>
      </section>

      {/* 3. The Unified Flywheel: How Services Interlock */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-200">
        <Container>
          <AnimatedSection direction="up" className="mb-14">
            <SectionHeading
              align="center"
              eyebrow="Unified Flywheel"
              title="How our four core services"
              highlight="interlock and compound."
              subtitle="Growth stalls when marketing feeds unvetted leads or sales closes clients that churn in 6 months. See how Levexa unifies the commercial continuum."
              theme="light"
            />
          </AnimatedSection>

          <div className="max-w-4xl mx-auto rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-12 space-y-8 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-[#F59E0B] font-mono font-bold text-xs uppercase tracking-wider">
                  Step 1
                </div>
                <h3 className="text-lg font-bold text-[#07192F]">Strategy</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Defines target market, ideal customer profile (ICP), and pricing tiers.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-[#F59E0B] font-mono font-bold text-xs uppercase tracking-wider">
                  Step 2
                </div>
                <h3 className="text-lg font-bold text-[#07192F]">Marketing</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Educates ICP and delivers pre-qualified opportunities to pipeline.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-[#F59E0B] font-mono font-bold text-xs uppercase tracking-wider">
                  Step 3
                </div>
                <h3 className="text-lg font-bold text-[#07192F]">Sales</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Closes deals at premium contract values without discounting.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-[#F59E0B] font-mono font-bold text-xs uppercase tracking-wider">
                  Step 4
                </div>
                <h3 className="text-lg font-bold text-[#07192F]">Growth</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Compounds net revenue retention and funds aggressive reinvestment.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0" />
                <span>
                  Result: Lower customer acquisition costs and significantly higher
                  enterprise enterprise valuation.
                </span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#F59E0B] hover:text-[#D97706] uppercase tracking-wider shrink-0 transition-colors"
              >
                <span>Request Custom Scope</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Closing CTA */}
      <CTASection
        title="Ready to solve your company's"
        highlight="core growth constraints?"
        subtitle="Contact Levexa today to discuss a targeted advisory engagement customized to your business goals."
      />
    </div>
  );
}
