"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  instagramProfileData,
  clientScriptWorks,
  ScriptClientWork,
} from "@/data/instagram-works";
import {
  Play,
  Heart,
  Share2,
  CheckCircle2,
  Bookmark,
  Sparkles,
  ArrowUpRight,
  Film,
  FileText,
  X,
  ExternalLink,
  MessageCircle,
  Eye,
  TrendingUp,
} from "lucide-react";

export const InstagramProfileShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"reels" | "breakdowns">("reels");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalWork, setActiveModalWork] = useState<ScriptClientWork | null>(null);
  const [activeHighlight, setActiveHighlight] = useState<string | null>(null);

  const categories = [
    "All",
    "Founders & Tech",
    "Finance & Wealth",
    "Health & Lifestyle",
    "B2B SaaS",
    "E-Commerce",
  ];

  const filteredReels =
    selectedCategory === "All"
      ? clientScriptWorks
      : clientScriptWorks.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full">
      {/* ========================================================================= */}
      {/* 1. INSTAGRAM PROFILE CARD (LUXURY AGENCY EDITION)                          */}
      {/* ========================================================================= */}
      <div className="bg-white rounded-3xl border border-[#D7D3CB] shadow-sm overflow-hidden mb-12">
        {/* Subtle Top Gradient Banner */}
        <div className="h-28 sm:h-36 bg-gradient-to-r from-[#07192F] via-[#0E2849] to-[#07192F] relative p-6 flex items-end justify-between border-b border-stone-200">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-emerald-300">
              SCRIPT ARCHITECTURE LAB // ACCEPTING CLIENT SPREADS
            </span>
          </div>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-white/80 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-xs px-3 py-1.5 rounded-full transition-colors"
          >
            <span>instagram.com/{instagramProfileData.handle}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Profile Content Body */}
        <div className="px-6 sm:px-10 pb-8 sm:pb-10 pt-0 relative">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 -mt-12 sm:-mt-14 mb-8">
            {/* Avatar with Animated Gold/Navy Story Ring */}
            <div className="flex items-end gap-5">
              <div className="relative group cursor-pointer">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-[3px] bg-gradient-to-tr from-[#C88A1A] via-[#E4AB3C] to-[#07192F] shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <div className="w-full h-full rounded-full border-2 border-white overflow-hidden relative bg-[#07192F]">
                    <Image
                      src={instagramProfileData.avatarUrl}
                      alt={instagramProfileData.displayName}
                      fill
                      className="object-cover"
                      sizes="112px"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-[#C88A1A] text-white p-1 rounded-full border-2 border-white shadow-xs">
                  <Sparkles className="w-3 h-3" />
                </div>
              </div>

              {/* Identity & Verified */}
              <div className="pt-8">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#07192F] tracking-tight">
                    @{instagramProfileData.handle}
                  </h2>
                  <CheckCircle2 className="w-5 h-5 text-[#C88A1A] fill-[#C88A1A]/20" />
                </div>
                <p className="text-sm text-slate-500 font-medium">
                  {instagramProfileData.displayName}
                </p>
              </div>
            </div>

            {/* Profile CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 md:pt-14">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#07192F] text-white text-xs font-mono font-bold tracking-wider uppercase hover:bg-[#0E2849] transition-all shadow-xs"
              >
                <span>View On Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-300/80 text-[#07192F] text-xs font-mono font-bold tracking-wider uppercase transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#C88A1A]" />
                <span>Commission Script</span>
              </a>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 px-6 rounded-2xl bg-stone-50 border border-stone-200/70 mb-8">
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-mono font-bold text-[#07192F]">
                {instagramProfileData.stats.reelsScripted}
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                Reels Scripted
              </span>
            </div>
            <div className="flex flex-col border-l border-stone-200 pl-4 sm:pl-6">
              <span className="text-2xl sm:text-3xl font-mono font-bold text-[#C88A1A]">
                {instagramProfileData.stats.totalViews}
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                Verified Views
              </span>
            </div>
            <div className="flex flex-col border-l border-stone-200 pl-4 sm:pl-6">
              <span className="text-2xl sm:text-3xl font-mono font-bold text-[#07192F]">
                {instagramProfileData.stats.avgRetention}
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                Avg Retention Rate
              </span>
            </div>
            <div className="flex flex-col border-l border-stone-200 pl-4 sm:pl-6">
              <span className="text-2xl sm:text-3xl font-mono font-bold text-[#07192F]">
                {instagramProfileData.stats.clientsScaled}
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                Founders Scaled
              </span>
            </div>
          </div>

          {/* Bio Description */}
          <div className="space-y-1.5 text-sm text-slate-700 max-w-3xl mb-8">
            {instagramProfileData.bio.map((line, idx) => (
              <p key={idx} className="leading-relaxed">
                {line}
              </p>
            ))}
          </div>

          {/* Story Highlights Bar */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                STORY ARCHIVES &amp; FRAMEWORKS
              </span>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-none">
              {instagramProfileData.highlights.map((highlight, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() =>
                    setActiveHighlight(
                      activeHighlight === highlight.title ? null : highlight.title
                    )
                  }
                  className="flex flex-col items-center gap-2 shrink-0 group focus:outline-hidden"
                >
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full p-[2px] transition-all duration-200 ${
                      activeHighlight === highlight.title
                        ? "bg-[#C88A1A] scale-105"
                        : "bg-stone-300 group-hover:bg-[#C88A1A]"
                    }`}
                  >
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-xl sm:text-2xl border border-stone-200 shadow-2xs">
                      {highlight.icon}
                    </div>
                  </div>
                  <span className="text-[11px] font-medium text-slate-700 group-hover:text-[#07192F] whitespace-nowrap">
                    {highlight.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Active Story Highlight Banner (If Selected) */}
            {activeHighlight && (
              <div className="mt-4 p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-center justify-between text-xs text-amber-950 animate-fadeIn">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C88A1A] shrink-0" />
                  <span>
                    Viewing curated highlight: <strong>{activeHighlight}</strong>. Tap any
                    reel below to inspect the complete script anatomy.
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveHighlight(null)}
                  className="text-stone-400 hover:text-stone-700 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Tab Switcher: Reels Grid vs. Script Anatomy */}
        <div className="border-t border-stone-200 flex items-center justify-around bg-stone-50/70">
          <button
            type="button"
            onClick={() => setActiveTab("reels")}
            className={`flex-1 py-4 flex items-center justify-center gap-2 text-xs font-mono font-bold uppercase tracking-wider transition-all border-b-2 ${
              activeTab === "reels"
                ? "border-[#07192F] text-[#07192F] bg-white"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            <Film className="w-4 h-4 text-[#C88A1A]" />
            <span>Reels Grid ({filteredReels.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("breakdowns")}
            className={`flex-1 py-4 flex items-center justify-center gap-2 text-xs font-mono font-bold uppercase tracking-wider transition-all border-b-2 ${
              activeTab === "breakdowns"
                ? "border-[#07192F] text-[#07192F] bg-white"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            <FileText className="w-4 h-4 text-[#C88A1A]" />
            <span>Script Deconstructions</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. CATEGORY FILTER NAVIGATION                                            */}
      {/* ========================================================================= */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#D7D3CB]">
        <div className="flex items-center gap-2">
          <span className="w-5 h-[2px] bg-[#C88A1A]" />
          <span className="text-xs font-mono font-bold text-[#07192F] uppercase tracking-[0.2em]">
            CLIENT REELS NICHE:
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
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

      {/* ========================================================================= */}
      {/* 3. REELS VIEW: 9:16 VERTICAL INSTAGRAM CARDS                              */}
      {/* ========================================================================= */}
      {activeTab === "reels" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredReels.map((reel) => (
            <div
              key={reel.id}
              onClick={() => setActiveModalWork(reel)}
              className="group relative rounded-2xl overflow-hidden bg-[#07192F] border border-stone-200 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* 9:16 Aspect Ratio Visual Container */}
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-slate-900">
                <Image
                  src={reel.thumbnail}
                  alt={reel.scriptHook}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Dark Gradient Overlay for High Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07192F] via-[#07192F]/40 to-black/30 group-hover:via-[#07192F]/60 transition-colors" />

                {/* Top Bar: View Count Pill & Reel Tag */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-xs font-mono font-bold">
                    <Play className="w-3 h-3 fill-white text-white" />
                    <span>{reel.views}</span>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-[#C88A1A]/90 text-white text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-xs">
                    {reel.category}
                  </span>
                </div>

                {/* Center Hover Action Pill */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                  <div className="px-5 py-2.5 rounded-full bg-white text-[#07192F] text-xs font-mono font-bold tracking-wider uppercase shadow-2xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span>Inspect Script Breakdown</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#C88A1A]" />
                  </div>
                </div>

                {/* Bottom Overlay: Client Info & Script Hook */}
                <div className="absolute bottom-0 inset-x-0 p-5 z-10 flex flex-col justify-end">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#E4AB3C]">
                      {reel.clientHandle || reel.clientName}
                    </span>
                    <div className="flex items-center gap-3 text-white/80 text-xs font-mono">
                      {reel.likes && (
                        <span className="flex items-center gap-1">
                          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                          {reel.likes}
                        </span>
                      )}
                      {reel.shares && (
                        <span className="flex items-center gap-1">
                          <Share2 className="w-3.5 h-3.5 text-white/80" />
                          {reel.shares}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Hook Quote */}
                  <p className="text-sm sm:text-base font-semibold text-white leading-snug line-clamp-3 mb-3">
                    {reel.scriptHook}
                  </p>

                  {/* Verified Outcome Badge */}
                  <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-stone-300">
                    <span className="truncate pr-2">✦ {reel.keyResult}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C88A1A] shrink-0" />
                  </div>
                </div>
              </div>

              {/* Bottom Quick Bar */}
              <div className="p-3 bg-white border-t border-stone-200 flex items-center justify-between text-xs">
                <span className="font-mono text-slate-500 text-[11px]">
                  Hook: <strong>{reel.scriptBreakdown.hookDuration}</strong>
                </span>
                <span className="font-mono font-semibold text-[#07192F] group-hover:text-[#C88A1A] transition-colors flex items-center gap-1">
                  Read Full Anatomy →
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. BREAKDOWNS VIEW: DEEP SCRIPT ANATOMY LIST                              */}
      {/* ========================================================================= */}
      {activeTab === "breakdowns" && (
        <div className="space-y-6">
          {filteredReels.map((work) => (
            <div
              key={work.id}
              className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs hover:border-[#C88A1A]/60 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-stone-200">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-mono font-bold text-[#C88A1A] uppercase tracking-wider">
                      {work.category}
                    </span>
                    <span className="text-stone-300">•</span>
                    <span className="text-xs font-mono font-bold text-[#07192F]">
                      {work.clientName} ({work.clientHandle})
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#07192F]">
                    {work.scriptHook}
                  </h3>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="text-right">
                    <div className="text-sm font-mono font-bold text-[#07192F]">
                      {work.views} Views
                    </div>
                    <div className="text-[11px] font-mono text-emerald-600 font-semibold">
                      {work.keyResult}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveModalWork(work)}
                    className="px-4 py-2 rounded-xl bg-[#07192F] hover:bg-[#0E2849] text-white text-xs font-mono font-bold tracking-wider uppercase transition-colors"
                  >
                    Open Modal
                  </button>
                </div>
              </div>

              {/* 3-Column Anatomy Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                {/* 1. Hook */}
                <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/60">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-[#C88A1A] mb-2">
                    <span>1. THE HOOK</span>
                    <span>{work.scriptBreakdown.hookDuration}</span>
                  </div>
                  <p className="text-xs text-slate-800 font-medium italic mb-3">
                    {work.scriptBreakdown.hookContent}
                  </p>
                  <div className="text-[11px] font-mono text-slate-600 border-t border-amber-200/60 pt-2">
                    <strong>Technique:</strong> {work.scriptBreakdown.hookTechnique}
                  </div>
                </div>

                {/* 2. Narrative Body */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-[#07192F] mb-2">
                    <span>2. RETENTION PACING</span>
                    <span>{work.scriptBreakdown.bodyDuration}</span>
                  </div>
                  <p className="text-xs text-slate-800 mb-3 leading-relaxed">
                    {work.scriptBreakdown.bodyContent}
                  </p>
                  <div className="text-[11px] font-mono text-slate-600 border-t border-slate-200 pt-2">
                    <strong>Pacing:</strong> {work.scriptBreakdown.bodyTechnique}
                  </div>
                </div>

                {/* 3. CTA */}
                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/60">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-emerald-800 mb-2">
                    <span>3. CONVERSION CTA</span>
                    <span>{work.scriptBreakdown.ctaDuration}</span>
                  </div>
                  <p className="text-xs text-slate-800 italic mb-3">
                    {work.scriptBreakdown.ctaContent}
                  </p>
                  <div className="text-[11px] font-mono text-slate-600 border-t border-emerald-200/60 pt-2">
                    <strong>Trigger:</strong> {work.scriptBreakdown.ctaTechnique}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. INTERACTIVE SCRIPT ANATOMY MODAL                                       */}
      {/* ========================================================================= */}
      {activeModalWork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 sm:p-8 border-b border-stone-200 flex items-start justify-between bg-stone-50/70 sticky top-0 z-20 backdrop-blur-md">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold text-[#C88A1A] uppercase tracking-wider">
                    {activeModalWork.category}
                  </span>
                  <span className="text-stone-300">•</span>
                  <span className="text-xs font-mono text-slate-500 font-semibold">
                    Client: {activeModalWork.clientName} ({activeModalWork.clientHandle})
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#07192F] tracking-tight">
                  {activeModalWork.scriptHook}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalWork(null)}
                className="p-2 rounded-full hover:bg-stone-200 text-stone-500 hover:text-stone-900 transition-colors shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* Top Summary Banner */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#07192F] text-white">
                <div>
                  <div className="text-[11px] font-mono text-stone-400 uppercase">
                    Organic Views
                  </div>
                  <div className="text-xl font-mono font-bold text-white flex items-center gap-1.5 mt-0.5">
                    <Eye className="w-4 h-4 text-[#C88A1A]" />
                    {activeModalWork.views}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono text-stone-400 uppercase">
                    Likes / Saves
                  </div>
                  <div className="text-xl font-mono font-bold text-white flex items-center gap-1.5 mt-0.5">
                    <Heart className="w-4 h-4 text-rose-400" />
                    {activeModalWork.likes || "38K+"}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono text-stone-400 uppercase">
                    Key Metric
                  </div>
                  <div className="text-xl font-mono font-bold text-[#E4AB3C] flex items-center gap-1.5 mt-0.5">
                    <TrendingUp className="w-4 h-4" />
                    Top 1%
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono text-stone-400 uppercase">
                    Script Target
                  </div>
                  <div className="text-xs font-mono font-bold text-white mt-1.5 truncate">
                    High Conversion
                  </div>
                </div>
              </div>

              {/* Complete Script Anatomy Walkthrough */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-[2px] bg-[#C88A1A]" />
                  <h4 className="text-xs font-mono font-bold text-[#07192F] uppercase tracking-widest">
                    SCRIPT ANATOMY BREAKDOWN
                  </h4>
                </div>

                {/* 1. Hook */}
                <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-[#C88A1A] mb-2">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      PHASE 1: THE 0-3 SECOND HOOK
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-amber-200/60 text-[#07192F]">
                      {activeModalWork.scriptBreakdown.hookDuration}
                    </span>
                  </div>
                  <p className="text-sm text-[#07192F] font-semibold italic mb-3 leading-relaxed">
                    {activeModalWork.scriptBreakdown.hookContent}
                  </p>
                  <p className="text-xs text-slate-600 font-mono">
                    <strong>Retention Principle:</strong>{" "}
                    {activeModalWork.scriptBreakdown.hookTechnique}
                  </p>
                </div>

                {/* 2. Narrative Body */}
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-[#07192F] mb-2">
                    <span className="flex items-center gap-1.5">
                      <Film className="w-3.5 h-3.5 text-[#C88A1A]" />
                      PHASE 2: NARRATIVE PACING &amp; VALUE DELIVERY
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-stone-200 text-[#07192F]">
                      {activeModalWork.scriptBreakdown.bodyDuration}
                    </span>
                  </div>
                  <p className="text-sm text-slate-800 mb-3 leading-relaxed">
                    {activeModalWork.scriptBreakdown.bodyContent}
                  </p>
                  <p className="text-xs text-slate-600 font-mono">
                    <strong>Pacing &amp; B-Roll Direction:</strong>{" "}
                    {activeModalWork.scriptBreakdown.bodyTechnique}
                  </p>
                </div>

                {/* 3. Conversion CTA */}
                <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-emerald-800 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Bookmark className="w-3.5 h-3.5" />
                      PHASE 3: CONVERSION TRIGGER (CTA)
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-200/70 text-emerald-900">
                      {activeModalWork.scriptBreakdown.ctaDuration}
                    </span>
                  </div>
                  <p className="text-sm text-emerald-950 font-semibold italic mb-3 leading-relaxed">
                    {activeModalWork.scriptBreakdown.ctaContent}
                  </p>
                  <p className="text-xs text-slate-600 font-mono">
                    <strong>Conversion Mechanism:</strong>{" "}
                    {activeModalWork.scriptBreakdown.ctaTechnique}
                  </p>
                </div>

                {/* Verified Commercial Outcome */}
                <div className="p-4 rounded-xl bg-stone-100 border border-stone-300 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 uppercase font-bold">
                      VERIFIED OUTCOME
                    </div>
                    <div className="text-sm font-bold text-[#07192F] mt-0.5">
                      {activeModalWork.keyResult}
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#C88A1A] px-3 py-1 bg-white rounded-lg border border-stone-200">
                    AUDITED
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-stone-200 bg-stone-50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href={activeModalWork.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#07192F] hover:bg-[#0E2849] text-white text-xs font-mono font-bold tracking-wider uppercase transition-colors shadow-xs"
              >
                <span>Watch Reel on Instagram</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalWork(null)}
                  className="px-5 py-3 rounded-xl bg-white hover:bg-stone-100 text-slate-700 text-xs font-mono font-bold border border-stone-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
