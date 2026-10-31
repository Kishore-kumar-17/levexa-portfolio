import React from "react";

// Lucide has no WhatsApp glyph; drawn to match Lucide's stroke style
export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fill="currentColor"
      d="M9.4 7.6c.25-.25.65-.27.92-.05l1.05.86c.3.25.37.68.16 1l-.5.78a5.6 5.6 0 0 0 2.78 2.78l.78-.5c.32-.21.75-.14 1 .16l.86 1.05c.22.27.2.67-.05.92l-.62.62c-.5.5-1.27.66-1.93.36a9.3 9.3 0 0 1-4.85-4.85c-.3-.66-.14-1.43.36-1.93z"
    />
  </svg>
);
