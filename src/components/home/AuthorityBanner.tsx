import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Instagram, Linkedin, Youtube } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Encircle } from "@/components/ui/Underline";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const PLATFORMS = [
  { name: "Instagram", icon: <Instagram className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true" /> },
  { name: "YouTube", icon: <Youtube className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true" /> },
  { name: "LinkedIn", icon: <Linkedin className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true" /> },
  { name: "WhatsApp", icon: <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8" /> },
];

// "Become the go-to name" photo banner, followed by the platforms we work on
export const AuthorityBanner: React.FC = () => (
  <>
    <section className="relative isolate overflow-hidden bg-page text-fg py-24 sm:py-32 border-t border-line/70">
      <Image src="/images/process/06-growth.jpg" alt="" fill sizes="100vw" className="object-cover object-right -z-20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-page via-page/90 to-page/30" aria-hidden="true" />
      <Container>
        <div className="max-w-2xl">
          <p className="text-lg font-semibold text-gold-ink mb-3">Become the go-to name</p>
          <h2 className="type-h2">
            in your industry, <br />
            <Encircle>with content</Encircle>
          </h2>
          <p className="mt-7 text-lg sm:text-xl text-fg-2 leading-relaxed">
            We help founders and experts grow an audience and turn it into enquiries, with content on{" "}
            <span className="font-semibold text-gold-ink">Instagram, YouTube and LinkedIn</span>.
          </p>
          <Link href="/contact" className="group btn-primary mt-9">
            Contact us
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>

    <section className="bg-band text-fg py-10 sm:py-12 border-y border-line/70">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <h2 className="text-base font-semibold text-gold-ink shrink-0">Platforms we work on</h2>
          <ul className="flex flex-wrap items-center justify-center lg:justify-between gap-x-10 gap-y-6 flex-1">
            {PLATFORMS.map((platform) => (
              <li key={platform.name} className="flex items-center gap-3 text-xl sm:text-2xl font-bold tracking-tight">
                {platform.icon}
                {platform.name}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  </>
);
