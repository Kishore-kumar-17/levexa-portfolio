"use client";

import React, { useEffect, useState } from "react";
import { companyConfig } from "@/data/company";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

// Floating "WhatsApp us" button pinned to every page. Sits below the intro overlay and
// the mobile menu (both z-50), and slides away while the footer (which has its own
// WhatsApp link) is on screen so it never covers footer content.
export const WhatsAppFloatingButton: React.FC = () => {
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting), {
      threshold: 0.05,
    });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const href = `${companyConfig.socials.whatsapp}?text=${encodeURIComponent(
    companyConfig.socials.whatsappGreeting
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp us"
      aria-hidden={footerVisible || undefined}
      tabIndex={footerVisible ? -1 : undefined}
      className={`fixed z-40 bottom-4 right-4 sm:bottom-6 sm:right-6 print:hidden group flex items-center gap-2.5 sm:gap-3 rounded-full bg-white border border-stone-200 py-1.5 pl-1.5 pr-4 sm:pr-5 shadow-[0_8px_24px_rgba(7,25,47,0.28)] transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C88A1A] focus-visible:ring-offset-2 ${
        footerVisible ? "opacity-0 translate-y-6 pointer-events-none" : "opacity-100"
      }`}
    >
      <span className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#25D366] text-white">
        <WhatsAppIcon className="w-[22px] h-[22px] sm:w-6 sm:h-6" />
      </span>
      <span className="text-sm font-bold text-[#07192F] whitespace-nowrap">WhatsApp us</span>
    </a>
  );
};
