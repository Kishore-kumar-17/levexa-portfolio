import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CaseStudyCard } from "@/components/portfolio/CaseStudyCard";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { caseStudiesData } from "@/data/case-studies";
import { Info } from "lucide-react";

export const FeaturedWork: React.FC = () => {
  // Take top 2 illustrative case study models for homepage preview
  const previewCaseStudies = caseStudiesData.slice(0, 2);

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200 relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <AnimatedSection direction="up">
            <SectionHeading
              eyebrow="Portfolio & Engagement Models"
              title="Strategic solutions architected for"
              highlight="tangible impact."
              subtitle="Explore illustrative case study frameworks demonstrating our approach across B2B SaaS, FinTech, and enterprise operations."
              theme="light"
            />
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1}>
            <SecondaryButton href="/work" showArrow>
              View All Case Studies
            </SecondaryButton>
          </AnimatedSection>
        </div>

        {/* Transparency note badge */}
        <AnimatedSection direction="up" delay={0.15}>
          <div className="mb-8 p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200 flex items-start sm:items-center gap-3 text-xs text-stone-600">
            <Info className="w-4 h-4 text-[#C88A1A] shrink-0 mt-0.5 sm:mt-0" />
            <p>
              <strong className="text-[#07192F] font-semibold">Demonstration Notice:</strong>{" "}
              The projects presented below illustrate Levexa&apos;s proposed diagnostic,
              enablement, and advisory methodologies. Official client metrics and logos
              will be updated upon completed verified case study release.
            </p>
          </div>
        </AnimatedSection>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {previewCaseStudies.map((study, idx) => (
            <AnimatedSection
              key={study.id}
              direction="up"
              delay={0.2 + idx * 0.1}
            >
              <CaseStudyCard caseStudy={study} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
};
