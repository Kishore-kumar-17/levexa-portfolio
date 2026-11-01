import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const STATS = [
  { value: "4", label: ["Core growth", "pillars"] },
  { value: "360°", label: ["Revenue", "advisory"] },
  { value: "100%", label: ["Commercial", "focus"] },
];

export const WhoWeAreSection: React.FC = () => {
  return (
    <section
      id="who-we-are"
      className="relative w-full bg-[#FAF8F5] text-[#07192F] py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-stone-200/60"
    >
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Section Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-[-0.035em] leading-[0.95] mb-10 lg:mb-14">
          <span className="text-[#07192F]">WHO </span>
          <span className="text-[#C88A1A]">WE ARE</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Narrative & Metrics (same size as the hero description) */}
          <div className="lg:col-span-6">
            <p className="text-xl sm:text-2xl lg:text-[1.65rem] xl:text-[1.85rem] text-slate-800 font-normal leading-[1.45] tracking-tight mb-10">
              We help founders and growing businesses turn marketing into measurable revenue, by
              connecting strategy, content, sales and automation into one growth system.
            </p>

            <div className="pt-6 border-t border-[#D7D3CB] grid grid-cols-3 gap-3 sm:gap-6 items-start">
              {STATS.map((stat, idx) => (
                <div key={stat.value} className={idx > 0 ? "border-l border-[#D7D3CB] pl-3 sm:pl-5" : ""}>
                  <div className="text-2xl lg:text-3xl font-bold tracking-tight mb-1 font-mono">{stat.value}</div>
                  <div className="text-xs font-mono font-semibold tracking-[0.12em] text-slate-600 uppercase leading-snug">
                    {stat.label[0]}
                    <br />
                    {stat.label[1]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Founder Photo */}
          <div className="lg:col-span-6 relative">
            {/* Elegant SVG Arc Accent framing the top-left */}
            <div className="absolute -top-6 -left-6 w-28 h-28 pointer-events-none hidden sm:block z-10">
              <svg viewBox="0 0 160 160" className="w-full h-full fill-none">
                <path d="M 10 150 C 10 70, 70 10, 150 10" stroke="#C88A1A" strokeWidth="1.5" />
                <circle cx="10" cy="150" r="4.5" fill="#FAF8F5" stroke="#C88A1A" strokeWidth="2" />
                <circle cx="150" cy="10" r="4.5" fill="#FAF8F5" stroke="#C88A1A" strokeWidth="2" />
              </svg>
            </div>

            <div className="relative rounded-tl-[50px] sm:rounded-tl-[80px] rounded-br-2xl rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-card-elevated border border-stone-200/80 bg-stone-100 aspect-[16/10]">
              <Image
                src="/images/about/founder-lavanya.jpg"
                alt="Lavanya, Founder & CEO of Levexa"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[50%_30%]"
              />
            </div>
          </div>
        </div>

        {/* Bottom Navigation Strip */}
        <div className="mt-14 lg:mt-16 pt-4 border-t border-[#D7D3CB]/60">
          <div className="flex items-center justify-between">
            <Link
              href="/about"
              className="group flex items-center gap-2.5 py-1.5 -my-1.5 text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#07192F] hover:text-[#C88A1A] transition-colors whitespace-nowrap"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
              <span>OUR STORY</span>
            </Link>

            <div className="flex-1 mx-6 sm:mx-10 lg:mx-14 h-[1px] bg-[#D7D3CB]" />

            <Link
              href="/about#philosophy"
              className="group flex items-center gap-2.5 py-1.5 -my-1.5 text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#07192F] hover:text-[#C88A1A] transition-colors whitespace-nowrap"
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
