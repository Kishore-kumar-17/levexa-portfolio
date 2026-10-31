import React from "react";
import { companyConfig } from "@/data/company";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

// Floating "Talk with us" button pinned to every page. Sits below the intro overlay and
// the mobile menu (both z-50), so it only appears once the page itself is showing.
export const WhatsAppFloatingButton: React.FC = () => {
  const href = `${companyConfig.socials.whatsapp}?text=${encodeURIComponent(
    companyConfig.socials.whatsappGreeting
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Talk with us on WhatsApp"
      className="fixed z-40 bottom-5 right-5 sm:bottom-6 sm:right-6 print:hidden group flex items-center gap-3 rounded-full shadow-[0_8px_24px_rgba(7,25,47,0.28)] sm:bg-white sm:border sm:border-stone-200 sm:py-1.5 sm:pl-1.5 sm:pr-5 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C88A1A] focus-visible:ring-offset-2"
    >
      <span className="flex items-center justify-center w-14 h-14 sm:w-11 sm:h-11 rounded-full bg-[#25D366] text-white">
        <WhatsAppIcon className="w-7 h-7 sm:w-6 sm:h-6" />
      </span>
      <span className="hidden sm:inline text-sm font-bold text-[#07192F] whitespace-nowrap">
        Talk with us
      </span>
    </a>
  );
};
