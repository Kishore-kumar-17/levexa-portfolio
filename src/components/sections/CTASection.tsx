"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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
  primaryCtaText = "Book a growth call",
  secondaryCtaText = "Explore our services",
  secondaryCtaHref = "/services",
}) => {
  return (
    <section className="py-20 lg:py-28 bg-page text-fg border-t border-line relative overflow-hidden">
      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto rounded-3xl bg-card border border-line text-fg p-10 sm:p-14 lg:p-16 text-center shadow-card-elevated relative overflow-hidden">
          {/* Subtle gold accent top line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[3px] bg-gradient-to-r from-transparent via-[#FEB005] to-transparent z-10" />
          
          {/* Background tactile ambient glow */}
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#FEB005]/10 blur-3xl pointer-events-none z-0" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#FEB005]/10 blur-3xl pointer-events-none z-0" />

          {/* Interactive animated grid background from React Bits */}
          <div className="absolute inset-0 pointer-events-none opacity-35 z-0">
            <Squares
              direction="diagonal"
              speed={0.3}
              squareSize={42}
              borderColor="rgba(255, 255, 255, 0.08)"
              hoverFillColor="rgba(254, 176, 5, 0.18)"
            />
          </div>

          <AnimatedSection direction="up" className="relative z-10">

            {/* Monumental Headline */}
            <h2 className="type-h2 mb-6 max-w-3xl mx-auto">
              <span>{title}</span>{" "}
              {highlight && (
                <span className="block sm:inline">
                  <span className="text-gold-deep">{highlight}</span>
                </span>
              )}
            </h2>

            {/* Signature Gold Accent Line */}
            <div
              className="w-12 h-[3px] bg-[#FEB005] rounded-full mx-auto mb-6"
              aria-hidden="true"
            />

            <p className="text-base sm:text-lg lg:text-xl text-fg-2 max-w-2xl mx-auto leading-[1.5] mb-10 font-normal tracking-tight">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ClickSpark sparkColor="#FEB005" sparkRadius={25} sparkCount={8}>
                <Link
                  href="/contact"
                  className="group btn-primary"
                >
                  <span>{primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </ClickSpark>

              <ClickSpark sparkColor="#FEB005" sparkRadius={25} sparkCount={6}>
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
