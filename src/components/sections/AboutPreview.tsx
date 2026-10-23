import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Check, ShieldCheck, Zap, BarChart3 } from "lucide-react";

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <AnimatedSection direction="up">
              <SectionHeading
                eyebrow="The Levexa Approach"
                title="Unified growth architecture that eliminates"
                highlight="revenue silos."
                subtitle="Most companies struggle to scale not because they lack effort, but because their strategy, marketing, and sales operate as disconnected islands."
                theme="light"
              />
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.1}>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  At Levexa, we bridge these divides. When strategic clarity informs
                  targeted marketing, your pipeline fills with qualified, high-intent
                  buyers. When sales playbooks mirror your marketing promises, deal
                  cycles accelerate and contract values expand.
                </p>
                <p>
                  We partner directly with founders and leadership teams to architect
                  and execute this unified flywheel—turning commercial chaos into
                  repeatable, compounding growth.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="pt-2">
                <SecondaryButton href="/about" showArrow>
                  Learn More About Our Philosophy
                </SecondaryButton>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: 3 Pillars Alignment Card */}
          <div className="lg:col-span-6">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#07192F]">
                      The Three Pillars of Unified Growth
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      How strategic cohesion drives commercial performance
                    </p>
                  </div>
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 text-[#10B981] flex items-center justify-center font-mono text-xs font-bold">
                    3X
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Pillar 1 */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#10B981] flex items-center justify-center shrink-0 border border-emerald-200 mt-0.5">
                      <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#07192F]">
                        1. Strategic Positioning
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">
                        Establishes unambiguous market differentiation and unit economics
                        so your business stops competing on price alone.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 2 */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#10B981] flex items-center justify-center shrink-0 border border-emerald-200 mt-0.5">
                      <Zap className="w-4 h-4 text-[#10B981]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#07192F]">
                        2. Precision Marketing
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">
                        Transforms messaging into an inbound magnet, driving predictable
                        traffic and high-intent opportunities into your pipeline.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 3 */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#10B981] flex items-center justify-center shrink-0 border border-emerald-200 mt-0.5">
                      <BarChart3 className="w-4 h-4 text-[#10B981]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#07192F]">
                        3. Scalable Sales Execution
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">
                        Equips reps with playbooks and objection-handling rubrics to
                        maximize deal velocity, win rates, and customer retention.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center gap-2.5 text-xs text-[#059669] font-medium">
                  <Check className="w-4 h-4 shrink-0 text-[#10B981]" />
                  <span>
                    Synchronized for maximum revenue velocity and compounding scale.
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
};
