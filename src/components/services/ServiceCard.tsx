import React from "react";
import Link from "next/link";
import { Compass, TrendingUp, Target, Layers, Cpu, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ServiceItem } from "@/types";

interface ServiceCardProps {
  service: ServiceItem;
  variant?: "preview" | "detailed";
  index?: number;
}

const iconMap: Record<string, React.ElementType> = {
  Compass,
  TrendingUp,
  Target,
  Layers,
  Cpu,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  variant = "preview",
  index = 0,
}) => {
  const IconComponent = iconMap[service.iconName] || TrendingUp;
  const isPreview = variant === "preview";

  return (
    <div
      id={service.id}
      className={`group relative rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs transition-all duration-300 hover:border-slate-400 hover:shadow-md flex flex-col justify-between ${
        isPreview ? "min-h-[290px]" : "min-h-[440px]"
      }`}
    >
      {/* Top accent badge */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 group-hover:border-emerald-300 flex items-center justify-center text-[#10B981] transition-colors">
            <IconComponent className="w-6 h-6 text-[#10B981]" aria-hidden="true" />
          </div>
          <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-slate-900 transition-colors">
            0{index + 1}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-[#07192F] tracking-tight mb-2 group-hover:text-black transition-colors">
          {service.title}
        </h3>

        <p className="text-sm font-semibold text-[#059669] mb-3">
          {service.tagline}
        </p>

        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {service.description}
        </p>

        {!isPreview && (
          <div className="space-y-6 pt-4 border-t border-slate-100">
            {/* Core Challenges Addressed */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-800 mb-3">
                Key Bottlenecks Addressed:
              </h4>
              <ul className="space-y-2">
                {service.challenges.map((challenge, cIdx) => (
                  <li
                    key={cIdx}
                    className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-1.5 shrink-0" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Potential Deliverables */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#059669] mb-3">
                Strategic Deliverables:
              </h4>
              <ul className="space-y-2">
                {service.deliverables.map((item, dIdx) => (
                  <li
                    key={dIdx}
                    className="flex items-start gap-2.5 text-xs text-slate-700"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Bottom link / CTA */}
      <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
        {isPreview ? (
          <Link
            href={`/services#${service.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 group-hover:text-[#10B981] uppercase tracking-wider transition-colors"
          >
            <span>Explore Service Details</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        ) : (
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 group-hover:text-[#10B981] uppercase tracking-wider transition-colors"
          >
            <span>Enquire About {service.title}</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        )}
      </div>
    </div>
  );
};
