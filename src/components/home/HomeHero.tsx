"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RotatingText } from "@/components/ui/RotatingText";

const OUTCOMES = ["leads", "sales", "revenue", "growth"];

const STACK = [
  { src: "/images/pillars/02-branding-marketing.jpg", className: "left-0 top-8 w-[56%] -rotate-6" },
  { src: "/images/pillars/01-growth-strategy.jpg", className: "right-0 top-0 w-[50%] rotate-6" },
  { src: "/images/pillars/03-sales-conversion.jpg", className: "left-[22%] bottom-0 w-[54%] rotate-2 z-10" },
];

export const HomeHero: React.FC = () => (
  <section className="relative overflow-hidden bg-[#07192F] text-white pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">
    <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-[#C88A1A]/15 blur-3xl" aria-hidden="true" />
    <div className="absolute -bottom-48 -left-40 w-[420px] h-[420px] rounded-full bg-[#0E2849] blur-3xl" aria-hidden="true" />

    <Container className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <h1 className="type-display">
            Build a brand that brings you{" "}
            <span className="sr-only">leads, sales, revenue and growth</span>
            <span aria-hidden="true" className="block">
              <RotatingText texts={OUTCOMES} rotationInterval={2400} className="text-[#E4AB3C]" />
            </span>
          </h1>

          <div className="w-12 h-[3px] bg-[#C88A1A] rounded-full my-7" aria-hidden="true" />

          <p className="text-xl sm:text-2xl leading-[1.45] tracking-tight text-stone-300 max-w-2xl">
            Strategy, content, sales and automation from one founder-led team, so the attention your
            brand earns turns into paying customers.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="/contact" className="group btn-primary">
              Get started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link href="/work" className="btn-secondary-dark">
              See our work
            </Link>
          </div>
        </div>

        {/* Stacked photo cards */}
        <div className="lg:col-span-5" aria-hidden="true">
          <div className="relative h-[340px] sm:h-[420px] lg:h-[460px] max-w-md mx-auto">
            {STACK.map((card) => (
              <div
                key={card.src}
                className={`absolute aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-white/15 shadow-2xl ${card.className}`}
              >
                <Image src={card.src} alt="" fill sizes="(max-width: 1024px) 50vw, 260px" className="object-cover" priority />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  </section>
);
