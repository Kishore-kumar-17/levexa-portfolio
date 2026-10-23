"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { CaseStudyCard } from "@/components/portfolio/CaseStudyCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { caseStudiesData } from "@/data/case-studies";
import { Info, Sparkles } from "lucide-react";

export const WorkClient: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Strategy", "Marketing", "Sales", "Growth"];

  const filteredCaseStudies =
    selectedCategory === "All"
      ? caseStudiesData
      : caseStudiesData.filter(
          (study) => study.serviceCategory === selectedCategory
        );

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <Container>
        {/* Transparency / Client Notice Banner */}
        <div className="mb-12 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start sm:items-center gap-3.5 text-xs text-slate-600 shadow-2xs">
          <div className="w-8 h-8 rounded-lg bg-white text-[#F59E0B] flex items-center justify-center shrink-0 border border-slate-200 shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#F59E0B]" />
          </div>
          <div>
            <span className="font-bold text-[#07192F] uppercase tracking-wider">
              Methodology Demonstration Data:
            </span>{" "}
            The engagements featured below are structured illustrative case studies
            reflecting Levexa&apos;s proposed commercial diagnostic and execution
            frameworks. Real-world client case studies and verified performance
            audits will be integrated following official client approval.
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-[0.2em] mr-2">
            Discipline:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#F5A900] text-[#07192F] shadow-sm"
                  : "bg-slate-50 text-slate-600 hover:text-black hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCaseStudies.map((study, idx) => (
            <AnimatedSection
              key={study.id}
              direction="up"
              delay={idx * 0.1}
            >
              <CaseStudyCard caseStudy={study} />
            </AnimatedSection>
          ))}
        </div>

        {filteredCaseStudies.length === 0 && (
          <div className="text-center py-16 rounded-2xl border border-slate-200 bg-slate-50 p-8 space-y-3">
            <Info className="w-8 h-8 text-[#F59E0B] mx-auto" />
            <h3 className="text-lg font-bold text-[#07192F]">
              No Case Studies in this Category
            </h3>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              Select another category filter above or contact us to discuss a tailored
              engagement in this discipline.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
};
