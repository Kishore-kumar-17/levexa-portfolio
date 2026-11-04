import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Underline } from "@/components/ui/Underline";
import { Eyebrow } from "@/components/ui/Eyebrow";

// "I'm Lavanya. I started Levexa…": founder photo and a short introduction
export const FounderIntro: React.FC = () => (
  <section className="bg-band text-fg py-20 sm:py-24">
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-5">
          <div className="relative max-w-sm mx-auto lg:mx-0 aspect-[4/5] rounded-3xl overflow-hidden shadow-card-elevated border border-line bg-fg/5">
            <Image
              src="/images/about/founder-lavanya.jpg"
              alt="Lavanya, Founder & CEO of Levexa"
              fill
              sizes="(max-width: 1024px) 384px, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <Eyebrow>Who&apos;s behind Levexa</Eyebrow>
          <h2 className="type-h2 mb-7">
            I&apos;m Lavanya, <br />Founder of <Underline>Levexa</Underline>.
          </h2>
          <p className="type-lead mb-5">
            Levexa is a founder-led growth advisory that helps businesses turn marketing into measurable revenue.
          </p>
          <p className="text-lg text-fg-2 leading-relaxed mb-9 max-w-2xl">
            We bring strategy, content, sales and automation together, so the attention your brand earns
            turns into leads, sales and long-term growth. When you work with Levexa, you work with me
            directly.
          </p>
          <Link href="/about" className="group btn-primary">
            Read my story
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </Container>
  </section>
);
