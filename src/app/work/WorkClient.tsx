"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { CaseStudyCard } from "@/components/portfolio/CaseStudyCard";
import { caseStudiesData } from "@/data/case-studies";

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
