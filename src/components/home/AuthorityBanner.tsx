import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Encircle } from "@/components/ui/Underline";
import { Eyebrow } from "@/components/ui/Eyebrow";

// "Become the go-to name" photo banner
export const AuthorityBanner: React.FC = () => (
  <section className="relative isolate overflow-hidden bg-page text-fg py-24 sm:py-32 border-t border-line/70">
    <Image src="/images/process/06-growth.jpg" alt="" fill sizes="100vw" className="object-cover object-right -z-20" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-page via-page/90 to-page/30" aria-hidden="true" />
    <Container>
      <div className="max-w-2xl">
        <Eyebrow>Content &amp; authority</Eyebrow>
        <h2 className="type-h2">
          Become the <Encircle>go-to name</Encircle> <br className="hidden sm:block" />
          in your industry
        </h2>
        <p className="mt-7 text-lg sm:text-xl text-fg-2 leading-relaxed">
          We plan, create and run your content on{" "}
          <span className="font-semibold text-gold-ink">Instagram, YouTube and LinkedIn</span>, so your
          audience grows and turns into enquiries.
        </p>
        <Link href="/contact" className="group btn-primary mt-9">
          Contact us
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </Container>
  </section>
);
