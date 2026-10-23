"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import InfiniteSpiral, { SpiralItem } from "@/components/ui/InfiniteSpiral";

const spiralImages: SpiralItem[] = [
  {
    src: "/images/pillars/01-growth-strategy.jpg",
    alt: "Growth & Strategy",
    label: "Growth & Strategy",
    href: "#services"
  },
  {
    src: "/images/pillars/02-branding-marketing.jpg",
    alt: "Branding & Marketing",
    label: "Branding & Marketing",
    href: "#services"
  },
  {
    src: "/images/pillars/03-sales-conversion.jpg",
    alt: "Sales & Conversion",
    label: "Sales & Conversion",
    href: "#services"
  },
  {
    src: "/images/pillars/04-technology-automation.jpg",
    alt: "Technology & Automation",
    label: "Technology & Automation",
    href: "#services"
  },
  {
    src: "/images/process/01-discovery.jpg",
    alt: "Diagnostic & Discovery",
    label: "Diagnostic & Discovery",
    href: "#process"
  },
  {
    src: "/images/process/02-strategy.jpg",
    alt: "Strategic Roadmap",
    label: "Strategic Roadmap",
    href: "#process"
  },
  {
    src: "/images/process/03-design.jpg",
    alt: "Design Architecture",
    label: "Design Architecture",
    href: "#process"
  },
  {
    src: "/images/process/06-growth.jpg",
    alt: "Velocity & Scaling",
    label: "Velocity & Scaling",
    href: "#process"
  }
];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-between pt-20 sm:pt-20 lg:pt-22 pb-8 sm:pb-12 overflow-hidden bg-[#FAF8F5] text-[#07192F] select-none">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 flex-1 flex flex-col justify-between">
        
        {/* Main Hero Header & Interactive 3D Spiral Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center mt-0 mb-6 lg:mb-8 py-0">
          
          {/* Left Column: Monumental Headline & Value Proposition */}
          <div className="lg:col-span-7 xl:col-span-7 text-left">
            {/* Monumental Dual-Tone Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-[4.75rem] xl:text-[5.5rem] font-bold tracking-[-0.035em] leading-[0.98] mt-1 mb-5 sm:mb-6">
              <span className="text-[#07192F]">Level up your excellence</span> <br />
              <span className="text-[#C88A1A]">with Levexa.</span>
            </h1>

            {/* Signature Gold Accent Line */}
            <div
              className="w-12 h-[3px] bg-[#C88A1A] rounded-full mb-6 sm:mb-8"
              aria-hidden="true"
            />

            {/* Subheadline Paragraph with Authentic Levexa Value Proposition */}
            <p className="text-xl sm:text-2xl lg:text-[1.65rem] xl:text-[1.85rem] text-slate-800 font-normal leading-[1.45] max-w-2xl tracking-tight">
              Helping businesses grow, scale, and increase revenue. We engineer high-performance
              market positioning, demand generation, sales pipelines, and scalable automated systems.
            </p>
          </div>

          {/* Right Column: Interactive 3D Infinite Spiral (Seamlessly integrated into hero background) */}
          <div className="lg:col-span-5 xl:col-span-5 w-full flex items-center justify-center lg:justify-end">
            <div 
              className="w-full h-[480px] sm:h-[540px] lg:h-[580px] xl:h-[620px] max-w-[500px] xl:max-w-[560px] relative overflow-hidden bg-transparent"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)'
              }}
            >
              <InfiniteSpiral
                items={spiralImages}
                animationMode="all"
                speed={0.45}
                radius={165}
                cardWidth={120}
                cardHeight={150}
                verticalSpacing={65}
                perspective={950}
                cardsPerTurn={6}
                cardRadius={12}
                centerScale={1.18}
                edgeBlur={5}
                edgeFade={0.28}
                pauseOnHover
              />
            </div>
          </div>
        </div>

        {/* Bottom Navigation Strip */}
        <div className="pt-6 sm:pt-8 border-t border-[#D7D3CB]">
          <div className="flex items-center justify-between">
            {/* Left: Scroll to Who We Are */}
            <Link
              href="#who-we-are"
              className="group flex items-center gap-2.5 text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#07192F] hover:text-[#C88A1A] transition-colors whitespace-nowrap"
            >
              <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-1" />
              <span>WHO WE ARE</span>
            </Link>

            {/* Connecting Horizontal Line */}
            <div className="flex-1 mx-6 sm:mx-10 lg:mx-14 h-[1px] bg-[#D7D3CB]" />

            {/* Right: Link to About */}
            <Link
              href="/about"
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
