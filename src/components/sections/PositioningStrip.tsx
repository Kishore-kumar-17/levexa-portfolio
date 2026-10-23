import React from "react";
import { Container } from "@/components/ui/Container";
import { Compass, TrendingUp, Target, Cpu } from "lucide-react";

export const PositioningStrip: React.FC = () => {
  const pillars = [
    {
      title: "Growth & Strategy",
      subtitle: "GTM, Market Research & Funnels",
      icon: Compass,
    },
    {
      title: "Branding & Marketing",
      subtitle: "Personal Branding & Meta Ads",
      icon: TrendingUp,
    },
    {
      title: "Sales & Conversion",
      subtitle: "Playbooks, Training & CRM",
      icon: Target,
    },
    {
      title: "Technology & Automation",
      subtitle: "Web/Apps, AI & WhatsApp Bots",
      icon: Cpu,
    },
  ];

  return (
    <section className="border-y border-slate-200 bg-white py-10 relative">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:shadow-xs transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0 text-[#10B981] border border-slate-200 shadow-2xs">
                  <Icon className="w-5 h-5 text-[#10B981]" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 tracking-tight">
                    {pillar.title}
                  </div>
                  <div className="text-xs text-slate-500 leading-tight mt-0.5">
                    {pillar.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
