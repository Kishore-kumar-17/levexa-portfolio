import React from "react";

// The brand's slide motif: a thick gold arc in one corner and a thin sweeping curve in the
// opposite one. Purely decorative; place inside a `relative overflow-hidden` navy section.
export const GoldArcs: React.FC<{ flip?: boolean }> = ({ flip = false }) => (
  <div className={`pointer-events-none absolute inset-0 ${flip ? "-scale-x-100" : ""}`} aria-hidden="true">
    <svg className="absolute -top-24 -left-24 w-56 h-56 sm:w-72 sm:h-72 text-[#FEB005]" viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="18" />
    </svg>
    <svg
      className="absolute bottom-0 right-0 w-[70%] sm:w-[55%] h-40 sm:h-56 text-[#FEB005]/80"
      viewBox="0 0 600 220"
      preserveAspectRatio="none"
      fill="none"
    >
      <path d="M0 220 C 220 200, 430 120, 600 8" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
    </svg>
  </div>
);
