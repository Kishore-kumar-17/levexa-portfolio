import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, Megaphone, Target, Workflow, LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Underline } from "@/components/ui/Underline";
import { servicesData } from "@/data/services";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { DotGrid } from "@/components/ui/DotGrid";

export const SERVICE_ICONS: Record<string, LucideIcon> = {
  "growth-strategy": Compass,
  "branding-marketing": Megaphone,
  "sales-conversion": Target,
  "technology-automation": Workflow,
};

// "We specialise in": one card per service, each linking to its page
export const SpecialiseCards: React.FC = () => (
  <section id="services" className="relative bg-page text-fg py-20 sm:py-24 border-t border-line/70">
    <DotGrid />
    <Container>
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
        <Eyebrow>What we do</Eyebrow>
        <h2 className="type-h2">
          We <Underline>specialise</Underline> in
        </h2>
        <p className="mt-6 text-lg text-fg-2 leading-relaxed">
          Helping founders, brands and personal brands become the trusted name in their market.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
        {servicesData.map((service) => {
          const Icon = SERVICE_ICONS[service.id];
          return (
            <Link
              key={service.id}
              href={service.href}
              className="group flex flex-col items-center text-center rounded-2xl bg-card border border-line p-7 sm:p-8 shadow-2xs transition-all hover:border-accent hover:shadow-md hover:-translate-y-0.5"
            >
              <span className="w-14 h-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6">
                <Icon className="w-7 h-7" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-base text-fg-2 leading-relaxed mb-6">{service.summary}</p>
              <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-fg group-hover:text-gold-ink transition-colors">
                Learn more
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          );
        })}
      </div>
    </Container>
  </section>
);
