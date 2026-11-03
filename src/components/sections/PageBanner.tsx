import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GoldArcs } from "@/components/ui/GoldArcs";

interface PageBannerProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  ctaLabel: string;
  ctaHref: string;
  /** Background photo, faded under the page colour */
  image: string;
}

// Top-of-page banner used by About, Services and Contact: faded photo background, centred title
export const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle, ctaLabel, ctaHref, image }) => (
  <section data-theme="navy" className="relative isolate overflow-hidden bg-page text-fg pt-36 sm:pt-40 lg:pt-44 pb-20 sm:pb-24 lg:pb-28">
    <Image src={image} alt="" fill priority sizes="100vw" className="object-cover -z-20 opacity-20" />
    <div
      className="absolute inset-0 -z-10 bg-gradient-to-b from-page/85 via-page/80 to-page"
      aria-hidden="true"
    />
    <GoldArcs />
    <Container className="relative">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="type-display mb-6">{title}</h1>
        <p className="text-lg sm:text-xl text-fg-2 leading-relaxed max-w-3xl mx-auto mb-10">{subtitle}</p>
        <Link href={ctaHref} className="group btn-primary">
          {ctaLabel}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </Container>
  </section>
);
