import React from "react";

// The amber dot grid from the corner of Levexa's slides. Decorative; place inside a
// `relative` section. Hidden on small screens so it never crowds the text.
export const DotGrid: React.FC<{ className?: string }> = ({ className = "top-8 right-8" }) => (
  <svg
    className={`pointer-events-none absolute hidden md:block w-[76px] h-[44px] text-[#FEB005] ${className}`}
    viewBox="0 0 76 44"
    aria-hidden="true"
  >
    {Array.from({ length: 3 }).map((_, row) =>
      Array.from({ length: 6 }).map((_, col) => (
        <circle key={`${row}-${col}`} cx={4 + col * 13.6} cy={4 + row * 18} r="2.6" fill="currentColor" />
      ))
    )}
  </svg>
);
