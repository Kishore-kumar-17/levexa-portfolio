"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RotatingText } from "@/components/ui/RotatingText";
import { GoldArcs } from "@/components/ui/GoldArcs";

const OUTCOMES = ["leads", "sales", "revenue", "growth"];

const STACK = [
  { src: "/images/pillars/02-branding-marketing.jpg", className: "left-0 top-8 w-[56%] -rotate-6" },
  { src: "/images/pillars/01-growth-strategy.jpg", className: "right-0 top-0 w-[50%] rotate-6" },
  { src: "/images/pillars/03-sales-conversion.jpg", className: "left-[22%] bottom-0 w-[54%] rotate-2 z-10" },
];

export const HomeHero: React.FC = () => (
  <section className="relative overflow-hidden bg-page text-fg pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
    <GoldArcs />

    <Container className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <h1 className="type-display">
            Build a brand that brings you{" "}
            <span className="sr-only">leads, sales, revenue and growth</span>
            <span aria-hidden="true" className="block">
              <RotatingText texts={OUTCOMES} rotationInterval={2400} className="text-gold-deep" />
            </span>
          </h1>

          <div className="w-12 h-[3px] bg-[#FEB005] rounded-full my-7" aria-hidden="true" />

          <p className="type-lead max-w-2xl">
            Strategy, content, sales and automation from one founder-led team, so the attention your
            brand earns turns into paying customers.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="/contact" className="group btn-primary">
              Get started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link href="/services" className="btn-secondary-dark">
              Our services
            </Link>
          </div>
        </div>

        {/* Stacked photo cards */}
        <div className="lg:col-span-5" aria-hidden="true">
          <div className="relative h-[340px] sm:h-[420px] lg:h-[460px] max-w-md mx-auto">
            {STACK.map((card) => (
              <div
                key={card.src}
                className={`absolute aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-line shadow-2xl shadow-black/20 ${card.className}`}
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
