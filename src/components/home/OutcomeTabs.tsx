"use client";

import React, { useId, useState } from "react";
import { BadgeCheck, Magnet, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Underline } from "@/components/ui/Underline";

const TABS = [
  {
    label: "Gets you leads",
    icon: Magnet,
    text: "Content built around your buyers' real questions, with a clear next step in every post, so viewers turn into enquiries.",
  },
  {
    label: "Builds your brand",
    icon: BadgeCheck,
    text: "A consistent voice, look and story across Instagram, YouTube and LinkedIn, so people remember you and trust you.",
  },
  {
    label: "Grows your revenue",
    icon: TrendingUp,
    text: "Content, ads and sales follow-up working as one system, so more of your audience becomes paying customers.",
  },
];

// "And more, to help you create content that…": three tabs, one outcome each
export const OutcomeTabs: React.FC = () => {
  const [active, setActive] = useState(0);
  const baseId = useId();

  // Arrow keys move between tabs, as screen-reader users expect
  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next = (active + (event.key === "ArrowRight" ? 1 : TABS.length - 1)) % TABS.length;
    setActive(next);
    document.getElementById(`${baseId}-tab-${next}`)?.focus();
  };

  return (
    <section className="bg-[#07192F] text-white pb-20 sm:pb-24">
      <Container>
        <h2 className="type-h2 text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          And more, to help you create <Underline>content</Underline> that…
        </h2>

        <div className="max-w-4xl mx-auto">
          <div role="tablist" aria-label="What our content does" className="grid grid-cols-3 rounded-t-2xl overflow-hidden" onKeyDown={onKeyDown}>
            {TABS.map((tab, idx) => {
              const Icon = tab.icon;
              const selected = idx === active;
              return (
                <button
                  key={tab.label}
                  id={`${baseId}-tab-${idx}`}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(idx)}
                  className={`relative flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 px-2 py-4 text-sm sm:text-base font-semibold transition-colors cursor-pointer ${
                    selected ? "bg-[#C88A1A] text-[#07192F]" : "bg-[#FAF8F5] text-[#07192F]/70 hover:text-[#07192F]"
                  }`}
                >
                  <Icon className="w-5 h-5 shrink-0" aria-hidden="true" />
                  {tab.label}
                  {selected && (
                    <span
                      className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 rotate-45 bg-[#C88A1A]"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>
          <div
            id={`${baseId}-panel`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${active}`}
            className="rounded-b-2xl border border-t-0 border-white/25 px-6 sm:px-10 py-9 sm:py-10 min-h-[140px]"
          >
            <p className="text-lg sm:text-xl text-stone-200 leading-relaxed">{TABS[active].text}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
