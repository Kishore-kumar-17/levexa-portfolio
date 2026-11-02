import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface PageBannerProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  ctaLabel: string;
  ctaHref: string;
  /** Background photo, faded under a cream overlay */
  image: string;
}

// Top-of-page banner used by About, Services and Contact: faded photo background, centred title
export const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle, ctaLabel, ctaHref, image }) => (
  <section className="relative isolate overflow-hidden bg-[#FAF8F5] text-[#07192F] pt-36 sm:pt-40 lg:pt-44 pb-16 sm:pb-20 lg:pb-24">
    <Image src={image} alt="" fill priority sizes="100vw" className="object-cover -z-20 opacity-25" />
    <div
      className="absolute inset-0 -z-10 bg-gradient-to-b from-[#FAF8F5]/80 via-[#FAF8F5]/75 to-[#FAF8F5]"
      aria-hidden="true"
    />
    <Container>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="type-display mb-6">{title}</h1>
        <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto mb-10">{subtitle}</p>
        <Link href={ctaHref} className="group btn-primary">
          {ctaLabel}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </Container>
  </section>
);
