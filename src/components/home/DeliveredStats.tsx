import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { reelTotals } from "@/lib/reelStats";

const COLLAGE = [
  "/images/process/01-discovery.jpg",
  "/images/pillars/02-branding-marketing.jpg",
  "/images/process/03-design.jpg",
  "/images/pillars/04-technology-automation.jpg",
  "/images/process/05-optimization.jpg",
  "/images/pillars/01-growth-strategy.jpg",
  "/images/process/02-strategy.jpg",
  "/images/pillars/03-sales-conversion.jpg",
  "/images/process/06-growth.jpg",
  "/images/process/04-development.jpg",
];

const STATS = [
  { value: reelTotals.likes, label: "Likes" },
  { value: reelTotals.comments, label: "Comments" },
  { value: reelTotals.reels, label: "Viral reels" },
];

// "We have delivered": the headline number over a faint photo collage
export const DeliveredStats: React.FC = () => (
  <section className="relative isolate overflow-hidden bg-white text-[#07192F] py-20 sm:py-24 border-t border-stone-200/70">
    <div className="absolute inset-0 -z-20 grid grid-cols-3 sm:grid-cols-5 gap-3 p-3 opacity-[0.1]" aria-hidden="true">
      {COLLAGE.map((src) => (
        <div key={src} className="relative aspect-[4/5] rounded-xl overflow-hidden">
          <Image src={src} alt="" fill sizes="20vw" className="object-cover" />
        </div>
      ))}
    </div>
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white/60 to-white" aria-hidden="true" />

    <Container>
      <div className="text-center">
        <h2 className="type-h2">We have delivered</h2>
        <p className="mt-4 text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[#C88A1A] font-mono">
          {reelTotals.views}
        </p>
        <p className="mt-3 text-xl sm:text-2xl text-slate-700">content views and counting</p>

        <dl className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="mt-1 text-sm sm:text-base font-semibold text-[#C88A1A]">{stat.label}</dt>
              <dd className="text-3xl sm:text-5xl font-bold tracking-tight font-mono">{stat.value}</dd>
            </div>
          ))}
        </dl>

        <Link href="/contact" className="group btn-primary mt-12">
          Let&apos;s connect
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </Container>
  </section>
);
