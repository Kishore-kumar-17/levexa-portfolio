import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Page Not Found",
  noIndex: true,
});

export default function NotFound() {
  return (
    <div className="pt-24 sm:pt-28 bg-[#FAF8F5] text-[#07192F] flex-1 flex items-center">
      <Container>
        <section className="py-20 lg:py-28 max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <span className="w-8 h-[2px] bg-[#C88A1A]" />
            <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.22em] uppercase">
              Error 404
            </span>
          </div>

          {/* Dual-Tone Headline */}
          <h1 className="text-5xl sm:text-7xl font-bold tracking-[-0.035em] leading-[0.98] mb-8">
            This page has <br />
            <span className="text-[#C88A1A]">moved on.</span>
          </h1>

          <div className="w-12 h-[3px] bg-[#C88A1A] rounded-full mb-8" aria-hidden="true" />

          <p className="text-lg sm:text-xl text-slate-800 leading-relaxed mb-10 max-w-xl">
            The page you&apos;re looking for doesn&apos;t exist or may have been renamed. Let&apos;s
            get you back on track.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <PrimaryButton href="/">Back to Home</PrimaryButton>
            <SecondaryButton href="/contact">Contact Us</SecondaryButton>
          </div>
        </section>
      </Container>
    </div>
  );
}
