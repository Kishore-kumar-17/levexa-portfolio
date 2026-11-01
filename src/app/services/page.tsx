import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { servicesData } from "@/data/services";
import { constructMetadata } from "@/lib/metadata";
import { ArrowDown, ArrowRight, RefreshCw } from "lucide-react";
import { ShinyText } from "@/components/ui/ShinyText";

export const metadata: Metadata = constructMetadata({
  title: "Growth Advisory Services — Strategy, Marketing, Sales & Automation",
  description:
    "Explore Levexa's four interconnected commercial disciplines: Business Growth Strategy, Branding & Demand Generation, Sales Pipeline Conversion, and Technology Automation.",
  path: "/services",
});

const PILLAR_IMAGES: Record<string, string> = {
  "growth-strategy": "/images/pillars/01-growth-strategy.jpg",
  "branding-marketing": "/images/pillars/02-branding-marketing.jpg",
  "sales-conversion": "/images/pillars/03-sales-conversion.jpg",
  "technology-automation": "/images/pillars/04-technology-automation.jpg",
};

const DISCIPLINE_LINKS: Record<string, string> = {
  "growth-strategy": "/services/strategy",
  "branding-marketing": "/services/marketing",
  "sales-conversion": "/services/sales",
  "technology-automation": "/services/technology",
};

// Short alias anchors so #strategy, #marketing, #sales, #technology keep working
const DISCIPLINE_SHORT_ALIASES: Record<string, string> = {
  "growth-strategy": "strategy",
  "branding-marketing": "marketing",
  "sales-conversion": "sales",
  "technology-automation": "technology",
};

const FLYWHEEL = [
  { title: "Strategy", desc: "Defines your ideal customer, positioning and pricing." },
  { title: "Marketing", desc: "Content, ads and funnels that attract high-intent buyers." },
  { title: "Sales", desc: "Scripts, follow-up and CRM cadence that close deals faster." },
  { title: "Automation", desc: "CRM sync, WhatsApp bots and dashboards that scale it all." },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 sm:pt-28 bg-[#FAF8F5] text-[#07192F] min-h-screen">
      {/* 1. Hero */}
      <section className="pt-8 sm:pt-12 lg:pt-16 pb-14 sm:pb-16 border-b border-[#D7D3CB]">
        <Container>
          <div className="max-w-4xl">

            <h1 className="type-display mb-8">
              <span>Our</span>{" "}
              <ShinyText text="services" variant="gold" speed={4} />
            </h1>

            <div className="w-12 h-[3px] bg-[#C88A1A] rounded-full mb-8" aria-hidden="true" />

            <p className="type-lead max-w-3xl mb-10">
              Four connected disciplines that turn your marketing into measurable revenue: strategy,
              marketing, sales and automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/contact" className="group btn-primary">
                Book a growth call
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link href="/work" className="btn-secondary">
                See our work
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Service Cards */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {servicesData.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                className="relative scroll-mt-28 bg-white rounded-2xl border border-stone-200/90 shadow-2xs overflow-hidden flex flex-col"
              >
                <span
                  id={DISCIPLINE_SHORT_ALIASES[service.id]}
                  className="absolute -top-28"
                  aria-hidden="true"
                />
                <div className="relative aspect-[16/9] bg-stone-100">
                  <Image
                    src={PILLAR_IMAGES[service.id]}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={index < 2}
                  />
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <span className="text-xs font-mono font-bold text-slate-600 mb-2">0{index + 1}</span>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] mb-3">{service.title}</h2>
                  <p className="text-base text-slate-700 leading-relaxed mb-5">{service.tagline}</p>

                  <ul className="space-y-2 mb-7">
                    {service.deliverables.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C88A1A] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={DISCIPLINE_LINKS[service.id] || "/contact"}
                    className="group mt-auto inline-flex items-center gap-2 self-start py-2.5 text-base font-bold text-[#07192F] hover:text-[#C88A1A] transition-colors"
                  >
                    <span>Explore {service.title}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. How They Connect */}
      <section className="py-14 sm:py-20 border-t border-[#D7D3CB] bg-white">
        <Container>
          <div className="max-w-3xl mb-10">
            <h2 className="type-h2">
              Each discipline feeds <span className="text-[#C88A1A]">the next</span>
            </h2>
          </div>

          {/* Loop diagram: four steps joined by arrows, closing back to Strategy */}
          <ol className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-12">
            {FLYWHEEL.map((step, idx) => (
              <li key={step.title} className="relative p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200/90">
                <span className="text-sm font-mono font-bold text-slate-600 block mb-2">0{idx + 1}</span>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-base text-slate-600 leading-relaxed">{step.desc}</p>
                {idx < FLYWHEEL.length - 1 && (
                  <span
                    className="absolute z-10 flex items-center justify-center w-9 h-9 rounded-full bg-[#07192F] text-white left-1/2 -translate-x-1/2 -bottom-[30px] lg:left-auto lg:translate-x-0 lg:top-1/2 lg:-translate-y-1/2 lg:-right-[30px] lg:bottom-auto"
                    aria-hidden="true"
                  >
                    <ArrowDown className="w-4 h-4 lg:hidden" />
                    <ArrowRight className="w-4 h-4 hidden lg:block" />
                  </span>
                )}
              </li>
            ))}
          </ol>

          <div className="mt-6 flex items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-[#C88A1A]/50 px-5 py-4 text-center">
            <RefreshCw className="w-5 h-5 text-[#C88A1A] shrink-0" aria-hidden="true" />
            <p className="text-base text-slate-700">
              Results from automation feed back into strategy, so every cycle gets sharper.
            </p>
          </div>
        </Container>
      </section>

      {/* 4. CTA */}
      <CTASection
        title="Not sure where to start?"
        highlight="Let's find your biggest growth lever."
        subtitle="Tell us about your business and we'll recommend the right starting point across strategy, marketing, sales or automation."
        primaryCtaText="Book a growth call"
        secondaryCtaText="See our work"
        secondaryCtaHref="/work"
      />
    </div>
  );
}
