"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PixelTransition } from "@/components/ui/PixelTransition";

export const WhoWeAreSection: React.FC = () => {
  return (
    <section
      id="who-we-are"
      className="relative w-full bg-[#FAF8F5] text-[#07192F] min-h-screen lg:h-screen flex flex-col justify-between py-6 sm:py-8 lg:py-10 overflow-hidden border-t border-stone-200/60 select-none scroll-mt-0"
    >
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 h-full flex flex-col justify-between flex-1">
        
        {/* Top Header Group */}
        <div>
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-2 sm:mb-2.5">
            <span className="w-7 h-[2px] bg-[#C88A1A]" />
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.22em] text-[#07192F] uppercase">
              WHO WE ARE
            </span>
          </div>

          {/* Section Headline */}
          <div className="mb-3 sm:mb-4 lg:mb-5">
            <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-[-0.035em] leading-[0.95]">
              <span className="text-[#07192F]">WHO </span>
              <span className="text-[#C88A1A]">WE ARE</span>
            </h2>
          </div>
        </div>

        {/* Main Content Grid: Left Text & Metrics + Right Interactive Pixel Transition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 xl:gap-12 items-center my-auto py-2">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Authentic Levexa Narrative & Metrics         */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between self-stretch">
            {/* Two Narrative Paragraphs with Divider */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-start mb-5 sm:mb-6 lg:mb-7">
              <div>
                <p className="text-xs sm:text-[13.5px] lg:text-[14px] text-slate-800 leading-[1.55] font-normal">
                  Levexa is a premier strategic growth advisory founded on a single
                  conviction: real business scale requires total synchronization between
                  high-level commercial strategy, demand-generation marketing, and high-velocity
                  sales execution.
                </p>
              </div>

              <div className="sm:border-l sm:border-[#D7D3CB] sm:pl-5">
                <p className="text-xs sm:text-[13.5px] lg:text-[14px] text-slate-700 leading-[1.55] font-normal">
                  We partner directly with founders, business owners, and executive teams
                  to eliminate growth bottlenecks, install high-converting customer acquisition
                  engines, and turn ambitious targets into compounding revenue results.
                </p>
              </div>
            </div>

            {/* Metrics / Pillars Row */}
            <div className="pt-4 sm:pt-5 border-t border-[#D7D3CB] grid grid-cols-3 gap-3 sm:gap-6 items-start">
              {/* Stat 1 */}
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#07192F] tracking-tight mb-0.5 font-mono">
                  4
                </div>
                <div className="text-[10px] sm:text-[10.5px] font-mono font-semibold tracking-[0.14em] text-slate-600 uppercase leading-snug">
                  CORE GROWTH
                  <br />
                  PILLARS
                </div>
              </div>

              {/* Stat 2 */}
              <div className="border-l border-[#D7D3CB] pl-3 sm:pl-5">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#07192F] tracking-tight mb-0.5 font-mono">
                  360°
                </div>
                <div className="text-[10px] sm:text-[10.5px] font-mono font-semibold tracking-[0.14em] text-slate-600 uppercase leading-snug">
                  REVENUE
                  <br />
                  ADVISORY
                </div>
              </div>

              {/* Stat 3 */}
              <div className="border-l border-[#D7D3CB] pl-3 sm:pl-5">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#07192F] tracking-tight mb-0.5 font-mono">
                  100%
                </div>
                <div className="text-[10px] sm:text-[10.5px] font-mono font-semibold tracking-[0.14em] text-slate-600 uppercase leading-snug">
                  COMMERCIAL
                  <br />
                  FOCUS
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: PixelTransition Interactive Component       */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            
            {/* Elegant SVG Arc Accent framing the top-left */}
            <div className="absolute -top-6 -left-6 w-28 h-28 pointer-events-none hidden sm:block z-10">
              <svg viewBox="0 0 160 160" className="w-full h-full fill-none">
                <path
                  d="M 10 150 C 10 70, 70 10, 150 10"
                  stroke="#C88A1A"
                  strokeWidth="1.5"
                />
                <circle cx="10" cy="150" r="4.5" fill="#FAF8F5" stroke="#C88A1A" strokeWidth="2" />
                <circle cx="150" cy="10" r="4.5" fill="#FAF8F5" stroke="#C88A1A" strokeWidth="2" />
              </svg>
            </div>

            {/* PixelTransition Container with Asymmetric Rounded Frame */}
            <div className="relative rounded-tl-[50px] sm:rounded-tl-[80px] rounded-br-2xl rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-card-elevated border border-stone-200/80 bg-stone-100 aspect-[16/9.5] max-h-[280px] sm:max-h-[310px] xl:max-h-[340px]">
              <PixelTransition
                firstContent={
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/about/who-we-are-team.jpg"
                      alt="Levexa strategic growth advisors"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                }
                secondContent={
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/pillars/01-growth-strategy.jpg"
                      alt="Levexa executive strategy and growth advisory"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute bottom-3 left-4 px-3 py-1 bg-[#07192F]/80 backdrop-blur-md rounded-full border border-white/10 text-[10.5px] font-mono text-[#C88A1A] uppercase tracking-wider font-semibold">
                      EXECUTIVE STRATEGY // LONDON
                    </div>
                  </div>
                }
                gridSize={12}
                pixelColor="#C88A1A"
                mosaic={0.25}
                animationStepDuration={0.4}
                pattern="random"
                pixelAnimation="pop"
                pixelShape="square"
                trigger="hover"
                aspectRatio="16 / 9.5"
                className="w-full h-full"
              />
            </div>

            {/* Handwritten note annotation below the photo with interactive hover cue */}
            <div className="mt-2.5 flex items-center justify-end gap-2 text-stone-700">
              <span className="font-serif italic text-xs sm:text-[13px] text-slate-800">
                Hover image to reveal executive strategy in action
              </span>
              <span className="text-lg text-[#C88A1A] -rotate-12 inline-block">
                ⤹
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Strip */}
        <div className="mt-auto pt-3 sm:pt-4 border-t border-[#D7D3CB]/60">
          <div className="flex items-center justify-between">
            {/* Left: OUR STORY */}
            <Link
              href="/about"
              className="group flex items-center gap-2.5 text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#07192F] hover:text-[#C88A1A] transition-colors whitespace-nowrap"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
              <span>OUR STORY</span>
            </Link>

            {/* Connecting Horizontal Line */}
            <div className="flex-1 mx-6 sm:mx-10 lg:mx-14 h-[1px] bg-[#D7D3CB]" />

            {/* Right: OUR PHILOSOPHY */}
            <Link
              href="/about#philosophy"
              className="group flex items-center gap-2.5 text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#07192F] hover:text-[#C88A1A] transition-colors whitespace-nowrap"
            >
              <span>OUR PHILOSOPHY</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

