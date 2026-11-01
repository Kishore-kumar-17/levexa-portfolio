import React from "react";

// Hand-drawn gold underline under a word or phrase
export const Underline: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="relative inline-block whitespace-nowrap">
    {children}
    <svg
      className="absolute left-0 -bottom-1.5 w-full h-3 text-[#C88A1A]"
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M3 9 C 55 2, 140 2, 197 7" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  </span>
);

// Hand-drawn gold circle around a word
export const Encircle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="relative inline-block px-3">
    {children}
    <svg
      className="absolute -inset-x-1 -inset-y-1 w-[calc(100%+0.5rem)] h-[calc(100%+0.5rem)] text-[#C88A1A]"
      viewBox="0 0 200 80"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M30 12 C 90 -2, 185 6, 194 36 C 200 64, 120 78, 60 74 C 12 70, 2 50, 10 32 C 16 20, 34 12, 70 8"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  </span>
);
