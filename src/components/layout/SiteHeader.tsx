"use client";

import React, { useState, useEffect, useCallback } from "react";
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

  const handleOpenMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(true);
  }, []);

  const handleCloseMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#07192F]/95 backdrop-blur-md border-b border-white/10 shadow-md py-4"
            : "bg-[#07192F] border-b border-transparent py-5 sm:py-6"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo: light-on-dark version for the navy header */}
            <Link
              href="/"
              className="relative block w-36 sm:w-44 h-8 sm:h-9 transition-transform active:scale-95 focus-visible:outline-none"
              aria-label="Levexa Home"
            >
              <Image
                src="/levexa-logo-dark-trans.png"
                alt="Levexa"
                fill
                sizes="176px"
                priority
                className="object-contain object-left"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-8 xl:gap-10"
              aria-label="Primary Navigation"
            >
              {navLinks.map((item) => {
                // Service detail pages keep "Services" highlighted
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-[15px] font-medium py-2 border-b-2 transition-colors ${
                      isActive
                        ? "text-white font-semibold border-[#C88A1A]"
                        : "text-stone-300 border-transparent hover:text-white"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA: the site-wide primary button style, compact for the header */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="btn-primary hidden sm:inline-flex !min-h-[44px] !px-5 !py-2.5 !text-sm"
              >
                Book a growth call
              </Link>

              {/* Mobile hamburger */}
              <button
                type="button"
                onClick={handleOpenMobileMenu}
                className="lg:hidden p-2 rounded-xs bg-white/10 hover:bg-white/15 border border-white/15 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C88A1A] cursor-pointer"
                aria-label="Open mobile navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={handleCloseMobileMenu}
      />
    </>
  );
};
