"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ShinyText } from "@/components/ui/ShinyText";
import { ClickSpark } from "@/components/ui/ClickSpark";
import { Squares } from "@/components/ui/Squares";

interface CTASectionProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Ready to level up your business to the",
  highlight = "next echelon of growth?",
  subtitle = "Partner directly with Levexa to transform commercial strategy, marketing demand, and sales execution into an interconnected revenue engine.",
  primaryCtaText = "Start Your Growth Consultation",
  secondaryCtaText = "Explore Our Services",
  secondaryCtaHref = "/services",
}) => {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] text-[#07192F] border-t border-[#D7D3CB] relative overflow-hidden">
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

            {/* Monumental Headline */}
            <h2 className="type-h2 mb-6 max-w-3xl mx-auto">
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
                  className="group btn-primary"
                >
                  <span>{primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </ClickSpark>

              <ClickSpark sparkColor="#C88A1A" sparkRadius={25} sparkCount={6}>
                <Link
                  href={secondaryCtaHref}
                  className="group btn-secondary-dark"
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
