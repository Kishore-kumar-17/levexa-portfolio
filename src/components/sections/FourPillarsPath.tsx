"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

interface PillarItem {
  id: string;
  number: string;
  tag: string;
  titleLine1: string;
  titleLine2: string;
  href: string;
  image: string;
}

const PILLARS: PillarItem[] = [
  {
    id: "growth-strategy",
    number: "01",
    tag: "COMMERCIAL ARCHITECTURE",
    titleLine1: "Growth &",
    titleLine2: "Strategy",
    href: "/services#growth-strategy",
    image: "/images/pillars/01-growth-strategy.jpg",
  },
  {
    id: "branding-marketing",
    number: "02",
    tag: "DEMAND GENERATION",
    titleLine1: "Branding &",
    titleLine2: "Marketing",
    href: "/services#branding-marketing",
    image: "/images/pillars/02-branding-marketing.jpg",
  },
  {
    id: "sales-conversion",
    number: "03",
    tag: "REVENUE ENGINE",
    titleLine1: "Sales &",
    titleLine2: "Conversion",
    href: "/services#sales-conversion",
    image: "/images/pillars/03-sales-conversion.jpg",
  },
  {
    id: "technology-automation",
    number: "04",
    tag: "DIGITAL SYSTEMS",
    titleLine1: "Technology &",
    titleLine2: "Automation",
    href: "/services#technology-automation",
    image: "/images/pillars/04-technology-automation.jpg",
  },
];

// Double the items for seamless, non-stop infinite moving glide
const CAROUSEL_PILLARS = [...PILLARS, ...PILLARS];

export const FourPillarsPath: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-[#FAF8F5] text-[#07192F] py-8 sm:py-10 lg:py-12 overflow-hidden select-none"
    >
      <div className="w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 px-6 sm:px-10 lg:px-16 xl:px-20 mb-2 sm:mb-3">
          <span className="w-8 h-[2px] bg-[#C88A1A]" />
          <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.22em] text-[#07192F] uppercase">
            OUR CORE PILLARS
          </span>
        </div>

        {/* Section Headline */}
        <div className="px-6 sm:px-10 lg:px-16 xl:px-20 mb-5 sm:mb-7 lg:mb-8 flex items-end justify-between">
          <h2 className="text-4xl sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-bold text-[#07192F] tracking-[-0.035em] leading-[0.95]">
            WHAT WE DO
          </h2>
        </div>

        {/* Continuous Smooth Moving Carousel Track (Zero scrollbars, non-stop fluid motion) */}
        <div className="w-full overflow-hidden no-scrollbar py-1">
          <div className="continuous-glide-track gap-5 sm:gap-6 lg:gap-7 px-6 sm:px-10">
            {CAROUSEL_PILLARS.map((pillar, index) => (
              <div
                key={`${pillar.id}-${index}`}
                className="w-[260px] sm:w-[280px] lg:w-[310px] xl:w-[330px] flex-shrink-0"
              >
                <Link
                  href={pillar.href}
                  draggable={false}
                  className="group flex flex-col justify-end w-full h-full block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A900] rounded-sm transition-transform duration-300 hover:-translate-y-1"
                >
                  {/* High-Quality Stagger-Free Image Container */}
                  <div className="relative w-full h-[260px] sm:h-[280px] lg:h-[310px] xl:h-[330px] overflow-hidden bg-stone-200">
                    <Image
                      src={pillar.image}
                      alt={`${pillar.titleLine1} ${pillar.titleLine2}`}
                      fill
                      sizes="(max-width: 640px) 260px, 330px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      priority={index < 4}
                    />
                    {/* Subtle hover tone */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
                  </div>

                  {/* White Footer Title Panel */}
                  <div className="bg-white px-4 sm:px-5 py-4 flex items-center justify-between shadow-2xs border border-t-0 border-stone-200/50">
                    <h3 className="text-sm sm:text-base lg:text-[1.05rem] font-bold text-[#07192F] leading-[1.25] tracking-[-0.01em]">
                      {pillar.titleLine1}
                      <br />
                      {pillar.titleLine2}
                    </h3>

                    {/* Circular Navy Arrow Button */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#07192F] text-white flex items-center justify-center flex-shrink-0 ml-3 transition-all duration-300 group-hover:bg-[#F5A900] group-hover:text-[#07192F] group-hover:rotate-45 shadow-xs">
                      <ArrowUpRight className="w-4 h-4 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation Strip */}
        <div className="px-6 sm:px-10 lg:px-16 xl:px-20 mt-6 sm:mt-8 lg:mt-9">
          <div className="flex items-center justify-between">
            {/* Left: WHY LEVEXA */}
            <Link
              href="/about"
              className="group flex items-center gap-2.5 text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#07192F] hover:text-[#F5A900] transition-colors whitespace-nowrap"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
              <span>WHY LEVEXA</span>
            </Link>

            {/* Connecting Horizontal Line */}
            <div className="flex-1 mx-6 sm:mx-10 lg:mx-14 h-[1px] bg-[#D7D3CB]" />

            {/* Right: OUR WORK */}
            <Link
              href="/work"
              className="group flex items-center gap-2.5 text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#07192F] hover:text-[#F5A900] transition-colors whitespace-nowrap"
            >
              <span>OUR WORK</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
