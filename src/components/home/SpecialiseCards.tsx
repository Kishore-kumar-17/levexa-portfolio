import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, Megaphone, Target, Workflow, LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Underline } from "@/components/ui/Underline";
import { servicesData } from "@/data/services";

export const SERVICE_ICONS: Record<string, LucideIcon> = {
  "growth-strategy": Compass,
  "branding-marketing": Megaphone,
  "sales-conversion": Target,
  "technology-automation": Workflow,
};

// "We specialise in": one outlined card per service, each linking to its page
export const SpecialiseCards: React.FC = () => (
  <section id="services" className="bg-[#07192F] text-white py-20 sm:py-24">
    <Container>
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
        <h2 className="type-h2">
          We <Underline>specialise</Underline> in
        </h2>
        <p className="mt-6 text-lg text-stone-300 leading-relaxed">
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
              className="group flex flex-col items-center text-center rounded-2xl border border-white/20 p-7 sm:p-8 transition-colors hover:border-[#C88A1A] hover:bg-white/[0.03]"
            >
              <span className="w-14 h-14 rounded-full bg-[#C88A1A]/15 text-[#E4AB3C] flex items-center justify-center mb-6">
                <Icon className="w-7 h-7" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-base text-stone-300 leading-relaxed mb-6">{service.summary}</p>
              <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-[#E4AB3C]">
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
