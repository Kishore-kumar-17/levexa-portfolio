"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TrendingUp, Compass, Target, Layers } from "lucide-react";

export const GrowthGraphic: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cards = [
    {
      num: "01",
      label: "Strategy Architecture",
      desc: "Market positioning & unit economics",
      icon: Compass,
      coords: "top-4 left-4 sm:top-5 sm:left-5",
    },
    {
      num: "02",
      label: "Demand Generation",
      desc: "Predictable customer acquisition",
      icon: TrendingUp,
      coords: "top-4 right-4 sm:top-5 sm:right-5",
    },
    {
      num: "03",
      label: "Sales Velocity",
      desc: "Playbooks & pipeline conversion",
      icon: Target,
      coords: "bottom-4 left-4 sm:bottom-5 sm:left-5",
    },
    {
      num: "04",
      label: "Compounding Growth",
      desc: "Net retention & scale infrastructure",
      icon: Layers,
      coords: "bottom-4 right-4 sm:bottom-5 sm:right-5",
    },
  ];

  return (
    <div className="relative w-full max-w-[560px] mx-auto aspect-square flex items-center justify-center p-3 sm:p-5 select-none">
      {/* Background warm gold ambient glow */}
      <div
        className="absolute inset-0 bg-gold/15 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Outer architectural canvas */}
      <div className="absolute inset-2 sm:inset-4 rounded-3xl border border-slate-200/90 bg-white/80 backdrop-blur-md shadow-card-elevated overflow-hidden">
        {/* Precision coordinate grid */}
        <div className="absolute inset-0 bg-grid-pattern-light opacity-90" />

        {/* Technical corner coordinates & crosshairs */}
        <div className="absolute top-3 left-4 text-[9px] font-mono font-medium text-slate-400 tracking-wider">
          LEVEXA // ENGINE [43.65°N, 79.38°W]
        </div>
        <div className="absolute top-3 right-4 text-[9px] font-mono font-medium text-slate-400 tracking-wider">
          SYS.V2 // OPT-04
        </div>
        <div className="absolute bottom-3 left-4 text-[9px] font-mono font-medium text-slate-400 tracking-wider">
          UNIFIED FLYWHEEL
        </div>
        <div className="absolute bottom-3 right-4 text-[9px] font-mono font-medium text-gold-600 tracking-wider flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
          <span>ACTIVE</span>
        </div>

        {/* Subtle crosshairs */}
        <div className="absolute top-1/2 left-3 -translate-y-1/2 text-slate-300 font-mono text-xs">+</div>
        <div className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-300 font-mono text-xs">+</div>
        <div className="absolute left-1/2 top-3 -translate-x-1/2 text-slate-300 font-mono text-xs">+</div>
        <div className="absolute left-1/2 bottom-3 -translate-x-1/2 text-slate-300 font-mono text-xs">+</div>
      </div>

      {/* Central Brand Nexus: Deep Navy with Gold Chevrons */}
      <motion.div
        initial={shouldReduceMotion ? {} : { scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-44 h-44 sm:w-52 sm:h-52 rounded-2xl bg-gradient-to-b from-navy-900 to-navy-950 border border-gold/40 shadow-2xl flex flex-col items-center justify-center p-5 text-center transition-transform duration-300 hover:scale-[1.02]"
      >
        {/* Dual Upward Chevron Motif */}
        <div className="w-16 h-14 relative flex flex-col items-center justify-center mb-2">
          {/* Upper Chevron - Golden Yellow */}
          <svg
            viewBox="0 0 100 50"
            className="w-14 h-7 text-gold drop-shadow-[0_2px_10px_rgba(245,169,0,0.6)]"
            fill="none"
            stroke="currentColor"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M 12 40 L 50 10 L 88 40" />
          </svg>
          {/* Lower Chevron - White */}
          <svg
            viewBox="0 0 100 50"
            className="w-14 h-7 text-white -mt-2.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M 12 40 L 50 10 L 88 40" />
          </svg>
        </div>

        <div className="text-xs uppercase tracking-widest font-semibold text-gold font-mono">
          LEVEXA
        </div>
        <div className="text-[10px] uppercase tracking-wider text-slate-300 font-mono font-normal mt-0.5">
          Unified Growth Engine
        </div>
      </motion.div>

      {/* 4 Interactive Discipline Cards */}
      {cards.map((item, idx) => {
        const Icon = item.icon;
        const isHovered = hoveredIndex === idx;

        return (
          <motion.div
            key={item.num}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 + idx * 0.1 }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`absolute z-20 w-[165px] sm:w-[195px] p-3.5 rounded-xl bg-white/95 border transition-all duration-300 cursor-default ${
              item.coords
            } ${
              isHovered
                ? "border-gold shadow-gold-sm -translate-y-1 bg-white"
                : "border-slate-200/90 shadow-card-subtle"
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono font-bold text-gold-600">
                {item.num} {"//"}
              </span>
              <Icon
                className={`w-3.5 h-3.5 transition-colors ${
                  isHovered ? "text-gold" : "text-navy-900"
                }`}
                aria-hidden="true"
              />
            </div>
            <div className="text-xs font-bold text-navy-900 tracking-tight">
              {item.label}
            </div>
            <div className="text-[11px] text-slate-500 leading-tight mt-0.5 line-clamp-1">
              {item.desc}
            </div>
          </motion.div>
        );
      })}

      {/* Connected Vector Rays */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="25%"
          y1="25%"
          x2="50%"
          y2="50%"
          stroke={hoveredIndex === 0 ? "rgba(245, 169, 0, 0.8)" : "rgba(245, 169, 0, 0.25)"}
          strokeWidth={hoveredIndex === 0 ? "2" : "1.25"}
          strokeDasharray={hoveredIndex === 0 ? "none" : "4 4"}
          className="transition-all duration-300"
        />
        <line
          x1="75%"
          y1="25%"
          x2="50%"
          y2="50%"
          stroke={hoveredIndex === 1 ? "rgba(245, 169, 0, 0.8)" : "rgba(245, 169, 0, 0.25)"}
          strokeWidth={hoveredIndex === 1 ? "2" : "1.25"}
          strokeDasharray={hoveredIndex === 1 ? "none" : "4 4"}
          className="transition-all duration-300"
        />
        <line
          x1="25%"
          y1="75%"
          x2="50%"
          y2="50%"
          stroke={hoveredIndex === 2 ? "rgba(245, 169, 0, 0.8)" : "rgba(245, 169, 0, 0.25)"}
          strokeWidth={hoveredIndex === 2 ? "2" : "1.25"}
          strokeDasharray={hoveredIndex === 2 ? "none" : "4 4"}
          className="transition-all duration-300"
        />
        <line
          x1="75%"
          y1="75%"
          x2="50%"
          y2="50%"
          stroke={hoveredIndex === 3 ? "rgba(245, 169, 0, 0.8)" : "rgba(245, 169, 0, 0.25)"}
          strokeWidth={hoveredIndex === 3 ? "2" : "1.25"}
          strokeDasharray={hoveredIndex === 3 ? "none" : "4 4"}
          className="transition-all duration-300"
        />
      </svg>
    </div>
  );
};
