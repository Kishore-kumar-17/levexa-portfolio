import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  showArrow?: boolean;
  fullWidth?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  showArrow = true,
  fullWidth = false,
}) => {
  const baseStyles = `
    inline-flex items-center justify-center gap-2.5 
    font-semibold text-sm sm:text-base 
    px-6 py-3.5 sm:px-7 sm:py-3.5 rounded-full 
    bg-gold text-navy-900 
    hover:bg-gold-hover hover:shadow-gold-glow
    active:scale-[0.98] 
    transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] 
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 
    disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed
    select-none min-h-[46px]
    ${fullWidth ? "w-full" : "w-auto"}
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
        <ArrowUpRight
          className="w-4 h-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
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
