import React from "react";
import { LineChart, Map, Rocket, Search } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Underline } from "@/components/ui/Underline";

const STEPS = [
  {
    title: "Discover",
    icon: Search,
    text: "We study your business, your customers and your competitors to find what's holding growth back.",
  },
  {
    title: "Strategize",
    icon: Map,
    text: "We turn what we find into a clear plan: the right offer, channels and content for your audience.",
  },
  {
    title: "Execute",
    icon: Rocket,
    text: "We put the plan to work with you: scripts, content, campaigns, sales playbooks and systems.",
  },
  {
    title: "Optimize",
    icon: LineChart,
    text: "We track the numbers every week, keep what works, fix what doesn't and scale the winners.",
  },
];

// "How we do it": intro on the left, a vertical timeline of the four steps on the right
export const MethodTimeline: React.FC = () => (
  <section id="process" className="bg-white text-[#07192F] py-20 sm:py-24 border-t border-stone-200/70">
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="lg:sticky lg:top-32">
          <h2 className="type-h2 mb-7">
            How we <Underline>do it</Underline>
          </h2>
          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed mb-6">
            We&apos;ve learned what works by building, testing and measuring. Every project, big or small,
            follows the same four steps.
          </p>
          <p className="text-lg sm:text-xl text-[#07192F]">
            We call it the <span className="font-semibold text-[#C88A1A]">Level Up Method</span>.
          </p>
        </div>

        <ol className="relative space-y-8 pl-10 sm:pl-12">
          <span className="absolute left-[11px] sm:left-[15px] top-2 bottom-2 w-[2px] bg-[#C88A1A]/60" aria-hidden="true" />
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="relative">
                <span
                  className="absolute -left-10 sm:-left-12 top-7 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-[#C88A1A] bg-white flex items-center justify-center text-[10px] sm:text-xs font-bold text-[#C88A1A]"
                  aria-hidden="true"
                >
                  {idx + 1}
                </span>
                <div className="rounded-2xl bg-[#FAF8F5] border border-stone-200 text-[#07192F] p-6 sm:p-7 shadow-2xs">
                  <Icon className="w-7 h-7 text-[#C88A1A] mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-bold mb-2">
                    <span className="sr-only">Step {idx + 1}: </span>
                    {step.title}
                  </h3>
                  <p className="text-base text-slate-700 leading-relaxed">{step.text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Container>
  </section>
);
