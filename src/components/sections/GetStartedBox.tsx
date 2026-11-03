import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GoldArcs } from "@/components/ui/GoldArcs";

// Closing call to action on every main page: a navy box in the style of Levexa's slides
export const GetStartedBox: React.FC = () => (
  <section className="bg-page py-16 sm:py-20 lg:py-24 border-t border-line/70">
    <Container>
      <div data-theme="navy" className="relative overflow-hidden max-w-5xl mx-auto rounded-3xl bg-page text-fg shadow-card-elevated px-6 py-14 sm:px-12 sm:py-20 text-center">
        <GoldArcs />
        <div className="relative">
          <h2 className="type-h2 mb-5">
            Wondering how to <span className="text-gold-deep">get started?</span>
          </h2>
          <p className="text-lg sm:text-xl text-fg-2 leading-relaxed max-w-2xl mx-auto mb-9">
            Fill in a short form and we&apos;ll get back to you within 24 business hours. On a quick call,
            we&apos;ll map out your first steps to more leads and sales.
          </p>
          <Link
            href="/contact"
            className="group btn-primary"
          >
            Get in touch
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </Container>
  </section>
);
