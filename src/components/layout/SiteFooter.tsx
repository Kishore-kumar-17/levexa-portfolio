"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

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
        {/* Top utility row: Copyright + Navigation Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 text-xs sm:text-sm">
          {/* Left: Monogram Badge + Copyright */}
          <div className="flex items-center gap-3">
            <span
              className="w-5 h-5 rounded-[4px] border border-white/30 flex items-center justify-center text-[10px] font-bold text-stone-200 select-none"
              aria-hidden="true"
            >
              L
            </span>
            <span className="text-stone-400 font-normal">
              © {currentYear} Levexa Growth
            </span>
          </div>

          {/* Right: Clean horizontal navigation links */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-2 text-stone-400 font-normal"
          >
            <Link
              href="/about"
              className="hover:text-white transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/services"
              className="hover:text-white transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="/work"
              className="hover:text-white transition-colors duration-200"
            >
              Case Studies
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </nav>
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
