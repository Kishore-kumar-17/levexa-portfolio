"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, ArrowRight, Phone, Mail } from "lucide-react";
import { mainNavigation } from "@/data/navigation";
import { companyConfig } from "@/data/company";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
}) => {
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const prevPathnameRef = useRef(pathname);

  // Close ONLY on actual route navigation change, NOT on mount
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      onClose();
    }
  }, [pathname, onClose]);

  // Handle escape key and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => closeBtnRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-950/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-white border-l border-slate-200 shadow-2xl flex flex-col justify-between p-6 overflow-y-auto"
      >
        <div>
          {/* Header row */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-100">
            <Link href="/" onClick={onClose} className="block relative w-36 h-9">
              <Image
                src="/levexa-logo-light-trans.png"
                alt="Levexa"
                fill
                priority
                className="object-contain object-left"
              />
            </Link>
            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-lg text-slate-500 hover:text-navy-900 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="mt-8 space-y-1.5" aria-label="Mobile Navigation">
            {mainNavigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? "bg-slate-100 text-navy-900 border border-gold/40 font-bold"
                      : "text-slate-600 hover:text-navy-900 hover:bg-slate-50"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{item.label}</span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? "text-gold-700" : "text-slate-400"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer info & CTA */}
        <div className="pt-6 mt-8 border-t border-slate-100 space-y-5">
          <PrimaryButton href="/contact" fullWidth onClick={onClose}>
            Let&apos;s Grow Your Business
          </PrimaryButton>

          <div className="space-y-2 text-xs text-slate-500 pt-2">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-gold-600" />
              <span>{companyConfig.contact.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-gold-600" />
              <span>{companyConfig.contact.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
