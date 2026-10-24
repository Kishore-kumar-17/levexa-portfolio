"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MobileNavigation } from "./MobileNavigation";

export const SiteHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "ABOUT", href: "/about" },
    { label: "STRATEGY", href: "/services/strategy" },
    { label: "MARKETING", href: "/services/marketing" },
    { label: "SALES", href: "/services/sales" },
    { label: "TECHNOLOGY", href: "/services/technology" },
    { label: "WORK", href: "/work" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#D7D3CB] shadow-2xs py-4"
            : "bg-[#FAF8F5]/85 backdrop-blur-sm border-b border-transparent py-5 sm:py-6"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo: Transparent White-background version */}
            <Link
              href="/"
              className="relative block w-36 sm:w-44 h-8 sm:h-9 transition-transform active:scale-95 focus-visible:outline-none"
              aria-label="Levexa Home"
            >
              <Image
                src="/levexa-logo-light-trans.png"
                alt="Levexa Growth"
                fill
                priority
                className="object-contain object-left"
              />
            </Link>

            {/* Desktop Navigation: Centered Minimalist Spaced Links (Graphite Style on White) */}
            <nav
              className="hidden lg:flex items-center gap-6 xl:gap-8"
              aria-label="Primary Navigation"
            >
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-[12px] uppercase font-medium tracking-[0.18em] transition-colors ${
                      isActive
                        ? "text-black font-semibold"
                        : "text-slate-600 hover:text-black"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA: Rectangular Sharp Button (Graphite "TALK TO US" Style in Black on White) */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center justify-center bg-black hover:bg-slate-800 text-white text-[12px] uppercase tracking-[0.16em] font-semibold px-6 py-2.5 rounded-none transition-all active:scale-98 shadow-xs"
              >
                TALK TO US
              </Link>

              {/* Mobile hamburger */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-xs bg-slate-100 border border-slate-200 text-slate-800 hover:text-black transition-colors focus-visible:outline-none"
                aria-label="Open mobile navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="w-5 h-5 text-slate-800" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
