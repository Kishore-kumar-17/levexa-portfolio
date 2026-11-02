import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
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

          {/* Dual-Tone Headline */}
          <h1 className="type-display mb-8">
            This page has <br />
            <span className="text-gold-deep">moved on.</span>
          </h1>

          <div className="w-12 h-[3px] bg-[#C88A1A] rounded-full mb-8" aria-hidden="true" />

          <p className="text-lg sm:text-xl text-slate-800 leading-relaxed mb-10 max-w-xl">
            The page you&apos;re looking for doesn&apos;t exist or may have been renamed. Let&apos;s
            get you back on track.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/" className="btn-primary">
              Back to home
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact us
            </Link>
          </div>
        </section>
      </Container>
    </div>
  );
}
