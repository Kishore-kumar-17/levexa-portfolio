import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

// Gold band with Lavanya's photo and a line from her own Instagram bio
export const FounderQuote: React.FC = () => (
  <section className="bg-[#C88A1A] text-[#07192F] py-12 sm:py-14">
    <Container>
      <figure className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 max-w-5xl mx-auto text-center sm:text-left">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-4 ring-[#07192F]/15 shrink-0">
          <Image
            src="/images/about/founder-lavanya-avatar.jpg"
            alt="Lavanya, Founder & CEO of Levexa"
            fill
            sizes="112px"
            className="object-cover"
          />
        </div>
        <div>
          <blockquote className="text-xl sm:text-2xl font-semibold leading-snug tracking-tight">
            &ldquo;I help businesses turn marketing into measurable revenue, with content, leads and sales
            systems that work together.&rdquo;
          </blockquote>
          <figcaption className="mt-3 text-base font-medium">Lavanya, Founder &amp; CEO, Levexa</figcaption>
        </div>
      </figure>
    </Container>
  </section>
);
