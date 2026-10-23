import React from "react";
import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { companyConfig } from "@/data/company";

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
  subtitle = "Partner with Levexa to transform your strategy, marketing, and sales into a unified revenue engine. Schedule your strategic consultation today.",
  primaryCtaText = "Let's Grow Your Business",
  secondaryCtaText = "Explore Our Services",
}) => {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200 relative overflow-hidden">
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-12 lg:p-16 text-center shadow-sm relative overflow-hidden">
          {/* Subtle emerald accent top line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[3px] bg-gradient-to-r from-transparent via-[#10B981] to-transparent" />

          <AnimatedSection direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[#059669] text-xs font-mono font-bold uppercase tracking-[0.2em] mb-6 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span>{companyConfig.tagline}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-medium tracking-[-0.03em] leading-[1.12] mb-5">
              <span className="text-[#07192F]">{title}</span>{" "}
              {highlight && (
                <span className="text-[#78716C]">
                  {highlight}
                </span>
              )}
            </h2>

            {/* Signature Horizontal Accent Line */}
            <div
              className="w-12 h-[3.5px] bg-[#10B981] rounded-full mx-auto mb-6"
              aria-hidden="true"
            />

            <p className="text-base sm:text-lg lg:text-xl text-slate-700 max-w-2xl mx-auto leading-[1.45] mb-8 font-normal tracking-tight">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <PrimaryButton href="/contact">
                {primaryCtaText}
              </PrimaryButton>
              <SecondaryButton href="/services" showArrow>
                {secondaryCtaText}
              </SecondaryButton>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
};
