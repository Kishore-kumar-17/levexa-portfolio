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
  MoreHorizontal,
  Link2,
  UserPlus,
} from "lucide-react";

export const InstagramProfileShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"reels" | "breakdowns">("reels");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalWork, setActiveModalWork] = useState<ScriptClientWork | null>(null);

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
      {/* 1. INSTAGRAM PROFILE HEADER (mirrors the live profile)                    */}
      {/* ========================================================================= */}
      <div className="bg-[#0C1014] text-[#F5F5F5] rounded-3xl border border-[#262A2E] shadow-sm overflow-hidden mb-12">
        <div className="px-5 sm:px-10 pt-7 sm:pt-10 pb-6 sm:pb-8">
          <div className="flex items-center sm:items-start gap-5 sm:gap-10">
            {/* Avatar */}
            <a
              href={instagramProfileData.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`@${instagramProfileData.handle} on Instagram`}
              className="relative shrink-0 w-[84px] h-[84px] sm:w-[150px] sm:h-[150px] rounded-full overflow-hidden bg-[#262A2E]"
            >
              <Image
                src={instagramProfileData.avatarUrl}
                alt={instagramProfileData.displayName}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 84px, 150px"
              />
            </a>

            {/* Identity, counts, bio and actions */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-3">
                <h2 className="text-lg sm:text-xl font-semibold truncate">
                  {instagramProfileData.handle}
                </h2>
                <MoreHorizontal className="w-5 h-5 text-[#F5F5F5] shrink-0" aria-hidden="true" />
              </div>
              <p className="text-sm sm:text-[15px] text-[#F5F5F5]/90 mt-1">
                {instagramProfileData.displayName}
              </p>

              {/* Counts (desktop position) */}
              <ul className="hidden sm:flex items-center gap-8 mt-4 text-[15px]">
                <li><span className="font-semibold">{instagramProfileData.counts.posts}</span> posts</li>
                <li><span className="font-semibold">{instagramProfileData.counts.followers}</span> followers</li>
                <li><span className="font-semibold">{instagramProfileData.counts.following}</span> following</li>
              </ul>

              {/* Bio (desktop position) */}
              <div className="hidden sm:block mt-4 text-[15px] leading-snug space-y-0.5">
                {instagramProfileData.bio.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <a
                  href={instagramProfileData.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 pt-1 font-semibold text-[#8EA7FF] hover:underline break-all"
                >
                  <Link2 className="w-4 h-4 shrink-0 -rotate-45" aria-hidden="true" />
                  {instagramProfileData.link.label}
                </a>
              </div>
            </div>
          </div>

          {/* Counts + bio (mobile position, full width under the avatar) */}
          <div className="sm:hidden mt-4">
            <ul className="flex items-center justify-between max-w-xs text-sm">
              <li><span className="font-semibold">{instagramProfileData.counts.posts}</span> posts</li>
              <li><span className="font-semibold">{instagramProfileData.counts.followers}</span> followers</li>
              <li><span className="font-semibold">{instagramProfileData.counts.following}</span> following</li>
            </ul>
            <div className="mt-3 text-sm leading-snug space-y-0.5">
              {instagramProfileData.bio.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <a
                href={instagramProfileData.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 pt-1 font-semibold text-[#8EA7FF] hover:underline break-all"
              >
                <Link2 className="w-4 h-4 shrink-0 -rotate-45" aria-hidden="true" />
                {instagramProfileData.link.label}
              </a>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-5 sm:mt-7 flex items-center gap-2">
            <a
              href={instagramProfileData.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center h-10 sm:h-11 rounded-xl bg-[#4A5DF9] hover:bg-[#3B4FE6] text-white text-sm font-semibold transition-colors"
            >
              Follow
            </a>
            <a
              href={instagramProfileData.messageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center h-10 sm:h-11 rounded-xl bg-[#262A2E] hover:bg-[#33383D] text-white text-sm font-semibold transition-colors"
            >
              Message
            </a>
            <a
              href={instagramProfileData.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Instagram"
              className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#262A2E] hover:bg-[#33383D] text-white transition-colors"
            >
              <UserPlus className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Tab Switcher: Reels Grid vs. Script Anatomy */}
        <div className="border-t border-[#262A2E] flex items-center justify-around">
          <button
            type="button"
            onClick={() => setActiveTab("reels")}
            className={`flex-1 py-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider transition-colors border-t-2 -mt-px ${
              activeTab === "reels"
                ? "border-[#F5F5F5] text-[#F5F5F5]"
                : "border-transparent text-[#A8A8A8] hover:text-[#F5F5F5]"
            }`}
          >
            <Film className="w-4 h-4" />
            <span>Client Reels ({filteredReels.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("breakdowns")}
            className={`flex-1 py-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider transition-colors border-t-2 -mt-px ${
              activeTab === "breakdowns"
                ? "border-[#F5F5F5] text-[#F5F5F5]"
                : "border-transparent text-[#A8A8A8] hover:text-[#F5F5F5]"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Script Breakdowns</span>
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
                {reel.thumbnail ? (
                  <Image
                    src={reel.thumbnail}
                    alt={reel.scriptHook}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  // Branded script-page card until a real reel cover is supplied
                  <div
                    className="absolute inset-0 bg-[#0B2240] transition-transform duration-700 group-hover:scale-105"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 opacity-[0.07] bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_27px,#ffffff_27px,#ffffff_28px)]" />
                    <div className="absolute top-16 left-6 right-6">
                      <span className="block font-serif text-[7rem] leading-none text-[#C88A1A]/70 select-none">
                        &ldquo;
                      </span>
                      <span className="block -mt-6 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-stone-300/80">
                        Script concept
                      </span>
                      <p className="mt-3 font-serif italic text-lg sm:text-xl leading-snug text-stone-200/90 line-clamp-5">
                        {reel.scriptConcept}
                      </p>
                    </div>
                  </div>
                )}

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
                    <div className="flex items-center gap-3 text-white/90 text-xs font-mono">
                      {reel.likes && (
                        <span className="flex items-center gap-1">
                          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                          {reel.likes}
                        </span>
                      )}
                      {reel.comments && (
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-3.5 h-3.5 text-sky-400 fill-sky-400/20" />
                          {reel.comments}
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
                    Audited Likes
                  </div>
                  <div className="text-xl font-mono font-bold text-white flex items-center gap-1.5 mt-0.5">
                    <Heart className="w-4 h-4 text-rose-400 fill-rose-400/20" />
                    {activeModalWork.likes}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono text-stone-400 uppercase">
                    Inbound Comments
                  </div>
                  <div className="text-xl font-mono font-bold text-sky-400 flex items-center gap-1.5 mt-0.5">
                    <MessageCircle className="w-4 h-4 text-sky-400" />
                    {activeModalWork.comments}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono text-stone-400 uppercase">
                    Algorithm Signal
                  </div>
                  <div className="text-sm font-mono font-bold text-[#E4AB3C] flex items-center gap-1.5 mt-1.5">
                    <TrendingUp className="w-4 h-4" />
                    Top 1% Bookmark
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
