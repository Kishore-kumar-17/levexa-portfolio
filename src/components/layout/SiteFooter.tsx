"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Clock, Instagram, Linkedin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CircularText } from "@/components/ui/CircularText";
import { companyConfig } from "@/data/company";
import { footerServicesNavigation, footerCompanyNavigation } from "@/data/navigation";

// Lucide has no WhatsApp glyph; drawn to match Lucide's stroke style
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
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

const socialLinks = [
  { label: "WhatsApp", href: companyConfig.socials.whatsapp, Icon: WhatsAppIcon },
  { label: "Instagram", href: companyConfig.socials.instagram, Icon: Instagram },
  { label: "LinkedIn", href: companyConfig.socials.linkedin, Icon: Linkedin },
];

export const SiteFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const trackRef = useRef<HTMLDivElement>(null);

  // Repeated wordmark instances for seamless infinite marquee loop
  const words = ["LEVEXA", "LEVEXA", "LEVEXA", "LEVEXA"];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationFrameId: number;
    let offset = 0;
    // ~75px/sec smooth linear motion matching the reference video
    const speed = 1.25;

    const animate = () => {
      offset += speed;
      const halfWidth = track.scrollWidth / 2;
      if (halfWidth > 0 && offset >= halfWidth) {
        offset -= halfWidth;
      }
      track.style.transform = `translate3d(-${offset}px, 0, 0)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <footer className="relative bg-[#0C0D0E] text-stone-400 overflow-hidden pt-12 sm:pt-16 md:pt-20 pb-0 border-t border-white/5">
      {/* Subtle tactile noise/texture overlay matching the video */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Top section: Brand + Links + Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-10 text-sm">
          {/* Brand: Logo, tagline, social channels */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" aria-label="Levexa Home" className="relative block w-44 h-8">
              <Image
                src="/levexa-logo-dark-trans.png"
                alt="Levexa"
                fill
                sizes="176px"
                className="object-contain object-left"
              />
            </Link>
            <p className="text-stone-400 leading-relaxed max-w-xs">
              {companyConfig.subTagline}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-stone-300 hover:text-[#0C0D0E] hover:bg-[#C88A1A] hover:border-[#C88A1A] transition-colors duration-200"
                >
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Services links */}
          <nav aria-label="Footer services" className="lg:col-span-3">
            <h3 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#C88A1A] mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerServicesNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company links */}
          <nav aria-label="Footer navigation" className="lg:col-span-2">
            <h3 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#C88A1A] mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerCompanyNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact details */}
          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#C88A1A] mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${companyConfig.contact.email}`}
                  className="flex items-center gap-2.5 hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 text-[#C88A1A] shrink-0" />
                  <span>{companyConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${companyConfig.contact.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2.5 hover:text-white transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 text-[#C88A1A] shrink-0" />
                  <span>{companyConfig.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={companyConfig.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-white transition-colors duration-200"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#C88A1A] shrink-0" />
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C88A1A] shrink-0 mt-0.5" />
                <span>{companyConfig.contact.supportHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom utility row: Copyright + CircularText Stamp */}
        <div className="flex items-center gap-4 pt-6 border-t border-white/10 text-xs sm:text-sm">
          <span className="text-stone-400 font-normal">
            © {currentYear} Levexa Growth
          </span>
          <div className="hidden sm:block pl-2">
            <CircularText
              text="• LEVEXA • STRATEGIC ADVISORY • LONDON •"
              radius={36}
              spinDuration={24}
              className="text-[#C88A1A] opacity-80"
            />
          </div>
        </div>
      </Container>

      {/* Continuous Moving Words Marquee matching the reference video */}
      <div
        className="w-full overflow-hidden select-none pointer-events-none mt-6 sm:mt-10 md:mt-14"
        aria-hidden="true"
      >
        <div
          ref={trackRef}
          className="flex items-end leading-none will-change-transform"
          style={{ width: "max-content" }}
        >
          {/* Track 1: First set of words */}
          <div className="flex items-end shrink-0">
            {words.map((word, i) => (
              <span
                key={`word-1-${i}`}
                className="text-[20vw] sm:text-[21vw] font-black uppercase tracking-[-0.035em] text-[#DDD8CE] leading-[0.76] translate-y-[10%] block whitespace-nowrap px-6 sm:px-12 md:px-16"
                style={{
                  fontFamily: "var(--font-sans), -apple-system, BlinkMacSystemFont, sans-serif",
                }}
              >
                {word}
              </span>
            ))}
          </div>

          {/* Track 2: Identical clone set of words for seamless 100% infinite loop */}
          <div className="flex items-end shrink-0">
            {words.map((word, i) => (
              <span
                key={`word-2-${i}`}
                className="text-[20vw] sm:text-[21vw] font-black uppercase tracking-[-0.035em] text-[#DDD8CE] leading-[0.76] translate-y-[10%] block whitespace-nowrap px-6 sm:px-12 md:px-16"
                style={{
                  fontFamily: "var(--font-sans), -apple-system, BlinkMacSystemFont, sans-serif",
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
