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
          className={`inline-flex items-center gap-3 text-xs sm:text-[13px] font-mono font-bold tracking-[0.22em] uppercase ${
            isLight ? "text-[#07192F]" : "text-gold"
          }`}
        >
          <span className="w-8 h-[2px] bg-[#C88A1A]" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-bold tracking-[-0.035em] leading-[1.05]">
        <span className="text-[#07192F]">{title}</span>{" "}
        {highlight && (
          <span className="text-[#C88A1A]">
            {highlight}
          </span>
        )}
      </h2>

      {/* Signature Gold Horizontal Accent Line */}
      <div
        className={`w-12 h-[3px] bg-[#C88A1A] rounded-full ${
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
