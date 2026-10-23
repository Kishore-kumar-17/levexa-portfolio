"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle, Sparkles } from "lucide-react";
import { CaseStudy } from "@/types";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  const [activeTab, setActiveTab] = useState<"challenge" | "approach" | "solution">(
    "challenge"
  );

  return (
    <div className="group relative rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-300 shadow-xs">
      <div>
        {/* Top meta tags */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-[#059669] border border-emerald-200">
              {caseStudy.serviceCategory}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {caseStudy.industry}
            </span>
          </div>

          {caseStudy.isIllustrative && (
            <span
              className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200"
              title="Illustrative engagement model awaiting client verified case studies"
            >
              <Sparkles className="w-3 h-3 text-[#10B981]" />
              <span>Illustrative Model</span>
            </span>
          )}
        </div>

        {/* Title and summary */}
        <h3 className="text-xl sm:text-2xl font-bold text-[#07192F] tracking-tight mb-2 group-hover:text-black transition-colors">
          {caseStudy.title}
        </h3>
        <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
          Profile: {caseStudy.clientBadge}
        </p>
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {caseStudy.summary}
        </p>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg border border-slate-200 mb-4 text-xs font-medium">
          <button
            type="button"
            onClick={() => setActiveTab("challenge")}
            className={`flex-1 py-1.5 px-3 rounded-md transition-all cursor-pointer ${
              activeTab === "challenge"
                ? "bg-white text-slate-900 shadow-2xs font-semibold"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Problem
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("approach")}
            className={`flex-1 py-1.5 px-3 rounded-md transition-all cursor-pointer ${
              activeTab === "approach"
                ? "bg-white text-slate-900 shadow-2xs font-semibold"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Diagnostic
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("solution")}
            className={`flex-1 py-1.5 px-3 rounded-md transition-all cursor-pointer ${
              activeTab === "solution"
                ? "bg-white text-slate-900 shadow-2xs font-semibold"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Architecture
          </button>
        </div>

        {/* Active Tab Content */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed min-h-[90px] mb-6">
          {activeTab === "challenge" && <p>{caseStudy.challenge}</p>}
          {activeTab === "approach" && <p>{caseStudy.approach}</p>}
          {activeTab === "solution" && <p>{caseStudy.solution}</p>}
        </div>

        {/* Results Metrics Grid */}
        <div className="space-y-2 mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Target Metrics &amp; Commercial Impact:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {caseStudy.outcomes.map((result, rIdx) => (
              <div
                key={rIdx}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-100 text-xs text-[#065F46] font-medium"
              >
                <CheckCircle className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                <span className="truncate">{result}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs font-mono text-slate-400">
          Duration: {caseStudy.timeline}
        </span>
        <Link
          href={`/work#${caseStudy.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-[#10B981] uppercase tracking-wider transition-colors"
        >
          <span>Examine Engagement</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
};
