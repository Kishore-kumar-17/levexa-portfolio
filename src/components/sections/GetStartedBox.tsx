import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

// Closing call to action on every main page: a gold box
export const GetStartedBox: React.FC = () => (
  <section className="bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 border-t border-stone-200/70">
    <Container>
      <div className="relative overflow-hidden max-w-5xl mx-auto rounded-3xl bg-[#C88A1A] text-[#07192F] shadow-card-elevated px-6 py-12 sm:px-12 sm:py-16 text-center">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/15 blur-2xl" aria-hidden="true" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-[#07192F]/10 blur-2xl" aria-hidden="true" />
        <div className="relative">
          <h2 className="type-h2 mb-5">Wondering how to get started?</h2>
          <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-9">
            Fill in a short form and we&apos;ll get back to you within 24 business hours. On a quick call,
            we&apos;ll map out your first steps to more leads and sales.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2.5 min-h-[52px] px-8 py-3.5 rounded-full bg-[#07192F] text-white font-bold text-base tracking-wide shadow-md transition-all duration-300 hover:bg-[#0E2849] hover:shadow-lg active:scale-[0.98]"
          >
            Get in touch
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </Container>
  </section>
);
