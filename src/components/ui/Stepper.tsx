'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight } from 'lucide-react';

export interface StepItem {
  number: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

export interface StepperProps {
  steps: StepItem[];
  initialStep?: number;
  className?: string;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  initialStep = 0,
  className = '',
}) => {
  const [activeStep, setActiveStep] = useState(initialStep);

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Steps Header Pill Navigation */}
      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute top-5 left-6 right-6 h-[2px] bg-stone-200 hidden sm:block z-0" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
          {steps.map((step, idx) => {
            const isCompleted = idx < activeStep;
            const isCurrent = idx === activeStep;

            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(idx)}
                className="group flex flex-col items-center sm:items-start text-center sm:text-left focus:outline-none cursor-pointer"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 shadow-sm ${
                    isCurrent
                      ? 'bg-[#C88A1A] text-[#07192F] ring-4 ring-[#C88A1A]/20 scale-105'
                      : isCompleted
                      ? 'bg-[#07192F] text-white'
                      : 'bg-white border border-stone-300 text-slate-400 group-hover:border-[#C88A1A] group-hover:text-[#07192F]'
                  }`}
                >
                  {isCompleted ? <Check className="w-4 h-4" /> : step.number}
                </div>

                <div className="mt-2.5">
                  <span
                    className={`block text-xs font-mono font-bold tracking-wider uppercase transition-colors ${
                      isCurrent
                        ? 'text-[#C88A1A]'
                        : isCompleted
                        ? 'text-[#07192F]'
                        : 'text-slate-400'
                    }`}
                  >
                    {step.title}
                  </span>
                  {step.subtitle && (
                    <span className="text-[11px] text-slate-500 font-normal hidden sm:block">
                      {step.subtitle}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Step Content Panel with smooth slide transition */}
      <div className="relative rounded-2xl bg-white border border-stone-200/90 p-6 sm:p-10 shadow-card-elevated overflow-hidden min-h-[220px]">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C88A1A] to-transparent opacity-80" />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {steps[activeStep].content}
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between">
          <button
            type="button"
            disabled={activeStep === 0}
            onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
            className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 hover:text-[#07192F] disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
          >
            ← PREVIOUS MILESTONE
          </button>

          <span className="text-xs font-mono font-semibold text-slate-400">
            {activeStep + 1} OF {steps.length}
          </span>

          <button
            type="button"
            disabled={activeStep === steps.length - 1}
            onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#C88A1A] hover:text-[#07192F] disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
          >
            <span>NEXT MILESTONE</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
