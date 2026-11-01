import React from "react";
import Image from "next/image";

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
        <h2 className="type-h2 mb-10 lg:mb-14">
          <span className="text-[#07192F]">Who </span>
          <span className="text-[#C88A1A]">we are</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Narrative & Metrics (same size as the hero description) */}
          <div className="lg:col-span-6">
            <p className="type-lead mb-10">
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

      </div>
    </section>
  );
};
