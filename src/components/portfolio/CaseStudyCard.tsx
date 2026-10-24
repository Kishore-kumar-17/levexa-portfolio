"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Building2 } from "lucide-react";
import { CaseStudy } from "@/types";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  const [activeTab, setActiveTab] = useState<"challenge" | "approach" | "solution">(
    "challenge"
  );

  return (
    <SpotlightCard
      theme="light"
      spotlightColor="#C88A1A"
      intensity={0.25}
      className="group relative rounded-2xl border border-stone-200/80 bg-white p-7 sm:p-9 flex flex-col justify-between hover:border-[#C88A1A] hover:shadow-card-elevated transition-all duration-300 shadow-xs"
    >
      <div>
        {/* Top meta tags */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.16em] px-3 py-1 rounded-full bg-[#FAF8F5] text-[#07192F] border border-[#D7D3CB]">
              {caseStudy.serviceCategory}
            </span>
            <span className="text-xs text-slate-500 font-mono font-medium">
              {caseStudy.industry}
            </span>
          </div>

          <span className="font-mono text-xs text-[#C88A1A] font-bold">
            {caseStudy.timeline}
          </span>
        </div>

        {/* Title and profile */}
        <h3 className="text-xl sm:text-2xl font-bold text-[#07192F] tracking-tight mb-2 group-hover:text-[#C88A1A] transition-colors leading-snug">
          {caseStudy.title}
        </h3>
        
        <div className="flex items-center gap-1.5 text-xs font-mono font-semibold tracking-wider text-slate-500 uppercase mb-4">
          <Building2 className="w-3.5 h-3.5 text-slate-400" />
          <span>{caseStudy.clientBadge}</span>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed font-normal mb-6">
          {caseStudy.summary}
        </p>

        {/* Interactive Problem / Approach / Solution Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-[#FAF8F5] rounded-xl border border-[#D7D3CB] mb-4 text-xs font-mono font-bold">
          <button
            type="button"
            onClick={() => setActiveTab("challenge")}
            className={`flex-1 py-2 px-3 rounded-lg transition-all cursor-pointer uppercase tracking-wider ${
              activeTab === "challenge"
                ? "bg-[#07192F] text-white shadow-2xs"
                : "text-slate-600 hover:text-[#07192F]"
            }`}
          >
            Friction
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("approach")}
            className={`flex-1 py-2 px-3 rounded-lg transition-all cursor-pointer uppercase tracking-wider ${
              activeTab === "approach"
                ? "bg-[#07192F] text-white shadow-2xs"
                : "text-slate-600 hover:text-[#07192F]"
            }`}
          >
            Method
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("solution")}
            className={`flex-1 py-2 px-3 rounded-lg transition-all cursor-pointer uppercase tracking-wider ${
              activeTab === "solution"
                ? "bg-[#07192F] text-white shadow-2xs"
                : "text-slate-600 hover:text-[#07192F]"
            }`}
          >
            Blueprint
          </button>
        </div>

        {/* Tab Content Box */}
        <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200/60 mb-6 min-h-[90px] flex items-center">
          <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
            {activeTab === "challenge" && caseStudy.challenge}
            {activeTab === "approach" && caseStudy.approach}
            {activeTab === "solution" && caseStudy.solution}
          </p>
        </div>

        {/* Quantifiable Commercial Outcomes */}
        <div className="space-y-2 mb-6">
          <p className="text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-slate-500 mb-2">
            MEASURABLE COMMERCIAL OUTCOMES:
          </p>
          {caseStudy.outcomes.map((outcome, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#C88A1A] shrink-0 mt-0.5" />
              <span>{outcome}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer Link */}
      <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
        <span className="text-[11px] font-mono font-semibold tracking-wider text-slate-400 uppercase">
          COMMERCIAL AUDIT SPRINT
        </span>

        <Link
          href="/contact"
          className="group/link inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#07192F] group-hover:text-[#C88A1A] transition-colors uppercase tracking-wider"
        >
          <span>DISCUSS APPLICATION</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </SpotlightCard>
  );
};
