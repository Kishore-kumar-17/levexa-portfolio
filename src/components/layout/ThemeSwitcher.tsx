"use client";

import React, { useEffect, useState } from "react";
import { THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

// Preview-only switch for comparing the two themes. Rendered by the layout on non-production
// builds only; remove once a theme is chosen.
export const ThemeSwitcher: React.FC<{ defaultTheme: Theme }> = ({ defaultTheme }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "light" || current === "navy") setTheme(current);
  }, []);

  const choose = (next: Theme) => {
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* storage blocked: the switch still works for this page view */
    }
  };

  return (
    <div
      role="group"
      aria-label="Preview theme"
      className="fixed z-50 bottom-4 left-4 sm:bottom-6 sm:left-6 print:hidden flex items-center gap-1 p-1 rounded-full bg-card border border-line shadow-[0_8px_24px_rgba(0,0,0,0.18)] text-sm font-semibold"
    >
      {(["light", "navy"] as const).map((value) => (
        <button
          key={value}
          type="button"
          aria-pressed={theme === value}
          onClick={() => choose(value)}
          className={`min-h-[40px] px-4 rounded-full transition-colors ${
            theme === value ? "bg-[#FEB005] text-[#04162A]" : "text-fg-2 hover:text-fg"
          }`}
        >
          {value === "light" ? "White" : "Navy"}
        </button>
      ))}
    </div>
  );
};
