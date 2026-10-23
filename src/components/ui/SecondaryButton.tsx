import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SecondaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  showArrow?: boolean;
  fullWidth?: boolean;
  theme?: "dark" | "light";
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  showArrow = false,
  fullWidth = false,
  theme = "light",
}) => {
  const isLight = theme === "light";

  const baseStyles = `
    inline-flex items-center justify-center gap-2 
    font-semibold text-sm sm:text-base 
    px-6 py-3.5 sm:px-7 sm:py-3.5 rounded-full 
    border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] 
    active:scale-[0.98] 
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 
    disabled:opacity-50 disabled:pointer-events-none 
    select-none min-h-[46px]
    ${fullWidth ? "w-full" : "w-auto"}
    ${
      isLight
        ? "border-slate-300 text-navy-900 bg-white hover:bg-slate-50 hover:border-navy-900 shadow-xs focus-visible:ring-offset-white"
        : "border-navy-border text-white bg-navy-850/60 hover:bg-navy-800 hover:border-gold/40 hover:text-gold-light focus-visible:ring-offset-navy-900"
    }
    ${className}
  `;

  const content = (
    <>
      <span className="relative inline-flex flex-col h-[1.25em] overflow-hidden leading-tight">
        <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
          {children}
        </span>
        <span
          className="absolute top-full inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full text-navy-950 font-bold"
          aria-hidden="true"
        >
          {children}
        </span>
      </span>
      {showArrow && (
        <ArrowRight
          className="w-4 h-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 shrink-0"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`group ${baseStyles}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group ${baseStyles}`}
    >
      {content}
    </button>
  );
};
