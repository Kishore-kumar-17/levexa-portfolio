"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { companyConfig } from "@/data/company";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ShinyText } from "@/components/ui/ShinyText";
import { DecryptedText } from "@/components/ui/DecryptedText";
import { ClickSpark } from "@/components/ui/ClickSpark";
import { Squares } from "@/components/ui/Squares";

interface CTASectionProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Ready to level up your business to the",
  highlight = "next echelon of growth?",
  subtitle = "Partner directly with Levexa to transform commercial strategy, marketing demand, and sales execution into an interconnected revenue engine.",
  primaryCtaText = "Start Your Growth Consultation",
  secondaryCtaText = "Explore Our Services",
}) => {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] text-[#07192F] border-t border-[#D7D3CB] relative overflow-hidden select-none">
      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#07192F] text-white p-10 sm:p-14 lg:p-16 text-center shadow-card-elevated relative overflow-hidden">
          {/* Subtle gold accent top line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[3px] bg-gradient-to-r from-transparent via-[#C88A1A] to-transparent z-10" />
          
          {/* Background tactile ambient glow */}
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#C88A1A]/10 blur-3xl pointer-events-none z-0" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#C88A1A]/10 blur-3xl pointer-events-none z-0" />

          {/* Interactive animated grid background from React Bits */}
          <div className="absolute inset-0 pointer-events-none opacity-35 z-0">
            <Squares
              direction="diagonal"
              speed={0.3}
              squareSize={42}
              borderColor="rgba(255, 255, 255, 0.08)"
              hoverFillColor="rgba(200, 138, 26, 0.18)"
            />
          </div>

          <AnimatedSection direction="up" className="relative z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-[#C88A1A]" />
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.22em] text-[#C88A1A] uppercase">
                <DecryptedText
                  text={companyConfig.tagline}
                  speed={40}
                  maxIterations={8}
                  animateOn="view"
                  className="text-[#C88A1A]"
                />
              </span>
            </div>

            {/* Monumental Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold tracking-[-0.035em] leading-[1.08] mb-6 max-w-3xl mx-auto">
              <span>{title}</span>{" "}
              {highlight && (
                <span className="block sm:inline">
                  <ShinyText text={highlight} variant="gold" speed={3.5} />
                </span>
              )}
            </h2>

            {/* Signature Gold Accent Line */}
            <div
              className="w-12 h-[3px] bg-[#C88A1A] rounded-full mx-auto mb-6"
              aria-hidden="true"
            />

            <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-2xl mx-auto leading-[1.5] mb-10 font-normal tracking-tight">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ClickSpark sparkColor="#07192F" sparkRadius={25} sparkCount={8}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#C88A1A] text-[#07192F] font-bold text-sm sm:text-base tracking-wide hover:bg-[#F5A900] transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98]"
                >
                  <span>{primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </ClickSpark>

              <ClickSpark sparkColor="#C88A1A" sparkRadius={25} sparkCount={6}>
                <Link
                  href="/services"
                  className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full border border-white/20 text-white font-semibold text-sm sm:text-base tracking-wide hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                >
                  <span>{secondaryCtaText}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </ClickSpark>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
};
