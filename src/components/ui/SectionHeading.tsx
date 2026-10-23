import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "left",
  theme = "light",
  className = "",
}) => {
  const isCenter = align === "center";
  const isLight = theme === "light";

  return (
    <div
      className={`space-y-4 ${
        isCenter ? "text-center mx-auto max-w-3xl" : "max-w-2xl"
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase ${
            isLight ? "text-[#059669]" : "text-gold"
          }`}
        >
          <span className="w-2 h-[3px] bg-[#10B981] rounded-full" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-medium tracking-[-0.03em] leading-[1.12]">
        <span className="text-[#07192F]">{title}</span>{" "}
        {highlight && (
          <span className="text-[#78716C]">
            {highlight}
          </span>
        )}
      </h2>

      {/* Signature Horizontal Accent Line */}
      <div
        className={`w-12 h-[3.5px] bg-[#10B981] rounded-full ${
          isCenter ? "mx-auto" : ""
        }`}
        aria-hidden="true"
      />

      {subtitle && (
        <p className="text-base sm:text-lg text-slate-700 font-normal leading-[1.45] tracking-tight pt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
};
