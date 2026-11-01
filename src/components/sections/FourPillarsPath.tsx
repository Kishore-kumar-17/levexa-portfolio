"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
    href: "/services/strategy",
    image: "/images/pillars/01-growth-strategy.jpg",
  },
  {
    id: "branding-marketing",
    number: "02",
    tag: "DEMAND GENERATION",
    titleLine1: "Branding &",
    titleLine2: "Marketing",
    href: "/services/marketing",
    image: "/images/pillars/02-branding-marketing.jpg",
  },
  {
    id: "sales-conversion",
    number: "03",
    tag: "REVENUE ENGINE",
    titleLine1: "Sales &",
    titleLine2: "Conversion",
    href: "/services/sales",
    image: "/images/pillars/03-sales-conversion.jpg",
  },
  {
    id: "technology-automation",
    number: "04",
    tag: "DIGITAL SYSTEMS",
    titleLine1: "Technology &",
    titleLine2: "Automation",
    href: "/services/technology",
    image: "/images/pillars/04-technology-automation.jpg",
  },
];

// Double the items for seamless, non-stop infinite moving glide
const CAROUSEL_PILLARS = [...PILLARS, ...PILLARS];

export const FourPillarsPath: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-[#FAF8F5] text-[#07192F] py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      <div className="w-full">

        {/* Section Headline */}
        <div className="px-6 sm:px-10 lg:px-16 xl:px-20 mb-8 sm:mb-10 lg:mb-12 flex items-end justify-between">
          <h2 className="type-h2 text-[#07192F]">
            What we <span className="text-[#C88A1A]">do</span>
          </h2>
        </div>

        {/* Continuous Smooth Moving Carousel Track (Zero scrollbars, non-stop fluid motion) */}
        <div className="w-full overflow-hidden no-scrollbar py-1">
          <div className="continuous-glide-track gap-5 sm:gap-6 lg:gap-7 px-6 sm:px-10">
            {CAROUSEL_PILLARS.map((pillar, index) => {
              // The second copy only exists for the seamless loop: hide it from screen readers and keyboard
              const isLoopCopy = index >= PILLARS.length;
              return (
              <div
                key={`${pillar.id}-${index}`}
                className="w-[260px] sm:w-[280px] lg:w-[310px] xl:w-[330px] flex-shrink-0"
                aria-hidden={isLoopCopy || undefined}
              >
                <Link
                  href={pillar.href}
                  draggable={false}
                  tabIndex={isLoopCopy ? -1 : undefined}
                  className="group flex flex-col justify-end w-full h-full block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A900] rounded-sm transition-transform duration-300 hover:-translate-y-1"
                >
                  {/* High-Quality Stagger-Free Image Container */}
                  <div className="relative w-full h-[260px] sm:h-[280px] lg:h-[310px] xl:h-[330px] overflow-hidden bg-stone-200">
                    <Image
                      src={pillar.image}
                      alt=""
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
                    <h3 className="text-lg font-bold text-[#07192F] leading-[1.25] tracking-[-0.01em]">
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
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
