"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MobileNavigation } from "./MobileNavigation";
import { headerNavigation } from "@/data/navigation";
import { ThemeLogo } from "@/components/ui/ThemeLogo";

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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-page border-b border-line shadow-2xs py-4"
            : "bg-page border-b border-transparent py-5 sm:py-6"
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
              <ThemeLogo
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
              {headerNavigation.map((item) => {
                // Service detail pages keep "Services" highlighted
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-[15px] font-medium py-2 border-b-2 transition-colors ${
                      isActive
                        ? "text-fg font-semibold border-accent"
                        : "text-fg-3 border-transparent hover:text-fg"
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
                className="lg:hidden p-2 rounded-xs bg-fg/5 hover:bg-fg/10 border border-line text-fg-2 hover:text-black transition-colors focus-visible:outline-none cursor-pointer"
                aria-label="Open mobile navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="w-5 h-5 text-fg-2" />
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
