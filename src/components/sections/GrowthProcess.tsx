"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Lightbulb,
  PenTool,
  Code,
  BarChart2,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

interface ProcessStep {
  number: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
}

const STEPS_ROW_1: ProcessStep[] = [
  {
    number: "01",
    titleLine1: "DISCOVERY &",
    titleLine2: "UNDERSTANDING",
    description: "We understand your business, goals, challenges and opportunities.",
    image: "/images/process/01-discovery.jpg",
    icon: Search,
  },
  {
    number: "02",
    titleLine1: "STRATEGY &",
    titleLine2: "PLANNING",
    description: "We create a clear strategy and roadmap tailored to your growth.",
    image: "/images/process/02-strategy.jpg",
    icon: Lightbulb,
  },
  {
    number: "03",
    titleLine1: "DESIGN &",
    titleLine2: "DEVELOPMENT",
    description: "We bring the strategy to life with creative designs and powerful technology.",
    image: "/images/process/03-design.jpg",
    icon: PenTool,
  },
];

const STEPS_ROW_2: ProcessStep[] = [
  {
    number: "04",
    titleLine1: "IMPLEMENTATION",
    titleLine2: "",
    description: "We build, set up and integrate everything needed to execute the plan.",
    image: "/images/process/04-development.jpg",
    icon: Code,
  },
  {
    number: "05",
    titleLine1: "TESTING &",
    titleLine2: "OPTIMIZATION",
    description: "We test, refine and optimize for the best performance and results.",
    image: "/images/process/05-optimization.jpg",
    icon: BarChart2,
  },
  {
    number: "06",
    titleLine1: "ONGOING SUPPORT",
    titleLine2: "& GROWTH",
    description: "We continue to support, track performance and help you scale further.",
    image: "/images/process/06-growth.jpg",
    icon: ArrowUpRight,
  },
];

export const GrowthProcess: React.FC = () => {
  return (
    <section
      id="process"
      className="relative w-full bg-[#FAF8F5] text-[#07192F] pt-20 sm:pt-24 lg:pt-28 pb-20 sm:pb-28 lg:pb-32 overflow-hidden select-none"
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative">

        {/* ======================================================== */}
        {/* HEADER: MATCHING "FROM IDEAS TO IMPACT" EXACT REFERENCE   */}
        {/* ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-16 sm:mb-20 lg:mb-28">
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="w-9 h-[2px] bg-[#C88A1A]" />
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.24em] text-[#07192F] uppercase">
                OUR PROCESS
              </span>
            </div>

            {/* Giant Title: FROM IDEAS / TO IMPACT */}
            <h2 className="text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black tracking-[-0.035em] leading-[0.92]">
              <span className="text-[#07192F] block">FROM IDEAS</span>
              <span className="text-[#07192F]">TO </span>
              <span className="text-[#C88A1A]">IMPACT</span>
            </h2>
          </div>

          {/* Top-Right Mission Block + Approach Button */}
          <div className="flex items-center gap-6 sm:gap-8 self-start lg:self-start lg:pt-4">
            <p className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.14em] text-slate-700 uppercase leading-[1.65] max-w-[240px] pl-5 border-l border-[#D7D2C7]">
              A STRUCTURED JOURNEY THAT TURNS YOUR GOALS INTO REAL BUSINESS GROWTH.
            </p>

            <Link
              href="/services"
              className="group flex items-center gap-3 transition-transform duration-300 hover:translate-x-1"
            >
              <div className="w-12 h-12 rounded-full border border-[#07192F]/50 flex items-center justify-center text-[#07192F] transition-all duration-300 group-hover:bg-[#07192F] group-hover:text-white group-hover:border-[#07192F] shadow-xs">
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </div>
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#07192F] uppercase leading-tight">
                OUR<br />APPROACH
              </span>
            </Link>
          </div>
        </div>

        {/* ======================================================== */}
        {/* THE 6-STEP PROCESS: CLEAN "UP 3 & DOWN 3" ARCHED LAYOUT   */}
        {/* ======================================================== */}
        <div className="relative">

          {/* TOP ROW: UP 3 (Step 01, Step 02, Step 03) */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-8 mb-16 xl:mb-20 relative z-20">
            {STEPS_ROW_1.map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.number}
                  className="group relative flex items-start gap-5 sm:gap-6"
                >
                  {/* Left Column: Fully Visible Number + Arched Photo */}
                  <div className="flex flex-col flex-shrink-0">
                    {/* Big Clear Visible Numeral */}
                    <span 
                      className="text-6xl sm:text-7xl xl:text-[5.25rem] font-black text-[#C4BBAE] select-none leading-none tracking-tight mb-2.5 transition-colors duration-300 group-hover:text-[#C88A1A]/60"
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>

                    {/* Arched Photo Frame (Rounded-t-full arch) */}
                    <div className="relative w-[150px] sm:w-[170px] xl:w-[185px] aspect-[3/4] rounded-t-full overflow-hidden bg-stone-200 shadow-sm">
                      <Image
                        src={step.image}
                        alt={`${step.titleLine1} ${step.titleLine2}`}
                        fill
                        sizes="(max-width: 640px) 150px, 185px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
                    </div>
                  </div>

                  {/* Content Block */}
                  <div className="flex flex-col justify-start pt-14 sm:pt-16">
                    {/* Circular Icon Badge */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D7D2C7] bg-[#FAF8F5] flex items-center justify-center text-[#07192F] mb-3 shadow-2xs group-hover:border-[#C88A1A] group-hover:text-[#C88A1A] transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>

                    {/* Step Title */}
                    <h3 className="text-sm sm:text-[15px] font-extrabold text-[#07192F] tracking-[0.05em] uppercase leading-[1.25] mb-2 group-hover:text-[#C88A1A] transition-colors">
                      {step.titleLine1}
                      {step.titleLine2 && (
                        <>
                          <br />
                          {step.titleLine2}
                        </>
                      )}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs sm:text-[12.5px] text-slate-600 leading-[1.6] max-w-[195px] xl:max-w-[210px] mb-4 font-normal">
                      {step.description}
                    </p>

                    {/* Circular Action Button */}
                    <Link
                      href="/services"
                      className="w-8 h-8 rounded-full border border-[#C5BFB3] bg-transparent flex items-center justify-center text-[#07192F] transition-all duration-300 hover:bg-[#07192F] hover:text-white hover:border-[#07192F]"
                      aria-label={`Learn more about ${step.titleLine1}`}
                    >
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* BOTTOM ROW: DOWN 3 (Step 04, Step 05, Step 06) */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-8 relative z-20">
            {STEPS_ROW_2.map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.number}
                  className="group relative flex items-start gap-5 sm:gap-6"
                >
                  {/* Left Column: Fully Visible Number + Arched Photo */}
                  <div className="flex flex-col flex-shrink-0">
                    {/* Big Clear Visible Numeral */}
                    <span 
                      className="text-6xl sm:text-7xl xl:text-[5.25rem] font-black text-[#C4BBAE] select-none leading-none tracking-tight mb-2.5 transition-colors duration-300 group-hover:text-[#C88A1A]/60"
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>

                    {/* Arched Photo Frame (Rounded-t-full arch) */}
                    <div className="relative w-[150px] sm:w-[170px] xl:w-[185px] aspect-[3/4] rounded-t-full overflow-hidden bg-stone-200 shadow-sm">
                      <Image
                        src={step.image}
                        alt={`${step.titleLine1} ${step.titleLine2}`}
                        fill
                        sizes="(max-width: 640px) 150px, 185px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
                    </div>
                  </div>

                  {/* Content Block */}
                  <div className="flex flex-col justify-start pt-14 sm:pt-16">
                    {/* Circular Icon Badge */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D7D2C7] bg-[#FAF8F5] flex items-center justify-center text-[#07192F] mb-3 shadow-2xs group-hover:border-[#C88A1A] group-hover:text-[#C88A1A] transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>

                    {/* Step Title */}
                    <h3 className="text-sm sm:text-[15px] font-extrabold text-[#07192F] tracking-[0.05em] uppercase leading-[1.25] mb-2 group-hover:text-[#C88A1A] transition-colors">
                      {step.titleLine1}
                      {step.titleLine2 && (
                        <>
                          <br />
                          {step.titleLine2}
                        </>
                      )}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs sm:text-[12.5px] text-slate-600 leading-[1.6] max-w-[195px] xl:max-w-[210px] mb-4 font-normal">
                      {step.description}
                    </p>

                    {/* Circular Action Button */}
                    <Link
                      href="/services"
                      className="w-8 h-8 rounded-full border border-[#C5BFB3] bg-transparent flex items-center justify-center text-[#07192F] transition-all duration-300 hover:bg-[#07192F] hover:text-white hover:border-[#07192F]"
                      aria-label={`Learn more about ${step.titleLine1}`}
                    >
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
