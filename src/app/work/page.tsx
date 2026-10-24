import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { WorkClient } from "./WorkClient";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Case Studies & Proven Impact — Levexa Strategic Growth",
  description:
    "Review Levexa's commercial case studies and operational frameworks across enterprise GTM alignment, demand generation, sales velocity, and retention economics.",
  path: "/work",
});

export default function WorkPage() {
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
                PROVEN RESULTS &amp; FRAMEWORKS
              </span>
            </div>

            {/* Monumental Dual-Tone Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-[5rem] xl:text-[5.75rem] font-bold tracking-[-0.035em] leading-[0.98] mb-8 sm:mb-10">
              <span className="text-[#07192F]">Case Studies &amp;</span> <br />
              <span className="text-[#C88A1A]">Proven Impact.</span>
            </h1>

            {/* Signature Gold Accent Line */}
            <div
              className="w-12 h-[3px] bg-[#C88A1A] rounded-full mb-8 sm:mb-10"
              aria-hidden="true"
            />

            {/* Value Proposition Subheadline */}
            <p className="text-xl sm:text-2xl lg:text-[1.75rem] text-slate-800 font-normal leading-[1.45] max-w-4xl tracking-tight mb-10">
              Explore our structured engagement frameworks demonstrating how Levexa
              diagnoses commercial friction points, realigns marketing and sales motions, and
              deploys scalable automated architectures.
            </p>

            {/* In-Page Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-[#D7D3CB]">
              <div>
                <div className="text-3xl font-bold text-[#07192F] mb-1">4</div>
                <div className="text-[11px] font-mono font-semibold text-slate-600 uppercase tracking-wider">
                  COMMERCIAL DISCIPLINES
                </div>
              </div>
              <div className="border-l border-[#D7D3CB] pl-6">
                <div className="text-3xl font-bold text-[#07192F] mb-1">10-16</div>
                <div className="text-[11px] font-mono font-semibold text-slate-600 uppercase tracking-wider">
                  WEEKS PER SPRINT
                </div>
              </div>
              <div className="border-l border-[#D7D3CB] pl-6">
                <div className="text-3xl font-bold text-[#07192F] mb-1">360°</div>
                <div className="text-[11px] font-mono font-semibold text-slate-600 uppercase tracking-wider">
                  REVENUE ALIGNMENT
                </div>
              </div>
              <div className="border-l border-[#D7D3CB] pl-6">
                <div className="text-3xl font-bold text-[#07192F] mb-1">100%</div>
                <div className="text-[11px] font-mono font-semibold text-slate-600 uppercase tracking-wider">
                  EXECUTIVE OWNERSHIP
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 2. CASE STUDIES CLIENT COMPONENT                          */}
      {/* ========================================================= */}
      <WorkClient />

      {/* ========================================================= */}
      {/* 3. BESPOKE LEVEXA LUXURY CTA SECTION                      */}
      {/* ========================================================= */}
      <CTASection
        title="Ready to engineer measurable growth"
        highlight="for your enterprise?"
        subtitle="Schedule a strategic consultation. We'll audit your current go-to-market motions and present a concrete execution blueprint tailored to your targets."
        primaryCtaText="Start Your Growth Consultation"
        secondaryCtaText="Explore Advisory Services"
      />

    </div>
  );
}
