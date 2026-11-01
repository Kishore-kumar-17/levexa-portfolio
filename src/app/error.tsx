"use client";

import React, { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { companyConfig } from "@/data/company";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Page Error]", error);
  }, [error]);

  return (
    <div className="pt-24 sm:pt-28 bg-[#FAF8F5] text-[#07192F] flex-1 flex items-center">
      <Container>
        <section className="py-20 lg:py-28 max-w-3xl" role="alert">

          {/* Dual-Tone Headline */}
          <h1 className="type-display mb-8">
            We hit an <br />
            <span className="text-[#C88A1A]">unexpected snag.</span>
          </h1>

          <div className="w-12 h-[3px] bg-[#C88A1A] rounded-full mb-8" aria-hidden="true" />

          <p className="text-lg sm:text-xl text-slate-800 leading-relaxed mb-10 max-w-xl">
            Please try again. If the problem continues, reach us directly at{" "}
            <a
              href={`mailto:${companyConfig.contact.email}`}
              className="text-[#C88A1A] font-semibold hover:underline"
            >
              {companyConfig.contact.email}
            </a>
            .
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button type="button" onClick={reset} className="btn-primary">
              Try again
            </button>
            <Link href="/" className="btn-secondary">
              Back to home
            </Link>
          </div>
        </section>
      </Container>
    </div>
  );
}
