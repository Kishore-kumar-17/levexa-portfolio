import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

// Band with Lavanya's photo and a line from her own Instagram bio
export const FounderQuote: React.FC = () => (
  <section className="bg-band text-fg border-y border-line py-12 sm:py-16">
    <Container>
      <figure className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 max-w-5xl mx-auto text-center sm:text-left">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-4 ring-[#FEB005] shrink-0">
          <Image
            src="/images/about/founder-lavanya-avatar.jpg"
            alt="Lavanya, Founder & CEO of Levexa"
            fill
            sizes="112px"
            className="object-cover"
          />
        </div>
        <div>
          <blockquote className="font-display text-xl sm:text-2xl font-semibold leading-snug tracking-tight">
            <span className="text-gold-deep">&ldquo;</span>I help businesses turn marketing into measurable revenue, with content, leads and sales
            systems that work together.<span className="text-gold-deep">&rdquo;</span>
          </blockquote>
          <figcaption className="mt-3 text-base font-medium text-fg-3">Lavanya, Founder &amp; CEO, Levexa</figcaption>
        </div>
      </figure>
    </Container>
  </section>
);
