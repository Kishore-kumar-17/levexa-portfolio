import React from "react";

// Small amber pill above a section heading, as on every content slide in Levexa's decks
// ("SOUND FAMILIAR?", "THE BIG GAP"). Navy text on amber reads at 9.8:1 in both themes.
export const Eyebrow: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <p className={`mb-4 ${className}`}>
    <span className="inline-block px-3 py-1 rounded-full bg-[#FEB005] text-[#04162A] text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em]">
      {children}
    </span>
  </p>
);
