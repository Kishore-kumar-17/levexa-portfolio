"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { CaseStudyCard } from "@/components/portfolio/CaseStudyCard";
import { caseStudiesData } from "@/data/case-studies";
import { TrueFocus } from "@/components/ui/TrueFocus";

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
    <section className="py-16 lg:py-24 bg-[#FAF8F5] relative">
      <Container>
        {/* Advisory Thesis TrueFocus from React Bits */}
        <div className="mb-10 p-6 rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-mono font-bold text-[#C88A1A] uppercase tracking-wider block mb-1">
              PROVEN COMMERCIAL SCALE
            </span>
            <TrueFocus
              sentence="Every engagement reflects verified revenue growth and enterprise valuation multiples."
              manualMode={true}
              blurAmount={3}
              borderColor="#C88A1A"
              glowColor="rgba(200, 138, 26, 0.3)"
              className="text-sm sm:text-base font-semibold text-[#07192F]"
            />
          </div>
          <span className="text-xs font-mono text-slate-500 font-bold shrink-0">
            AUDITED DATA // 100%
          </span>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 pb-6 border-b border-[#D7D3CB]">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#C88A1A]" />
            <span className="text-xs font-mono font-bold text-[#07192F] uppercase tracking-[0.2em]">
              FILTER BY DISCIPLINE:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#07192F] text-white shadow-xs"
                    : "bg-white text-slate-700 hover:text-[#07192F] hover:bg-stone-100 border border-stone-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredCaseStudies.map((study) => (
            <CaseStudyCard key={study.id} caseStudy={study} />
          ))}
        </div>
      </Container>
    </section>
  );
};
