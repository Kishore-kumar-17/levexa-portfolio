import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Underline } from "@/components/ui/Underline";
import { PageBanner } from "@/components/sections/PageBanner";
import { FounderQuote } from "@/components/sections/FounderQuote";
import { GetStartedBox } from "@/components/sections/GetStartedBox";
import { SERVICE_ICONS } from "@/components/home/SpecialiseCards";
import { servicesData } from "@/data/services";
import { companyConfig } from "@/data/company";
import { constructMetadata } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { DotGrid } from "@/components/ui/DotGrid";

export const metadata: Metadata = constructMetadata({
  title: "Growth Advisory Services — Strategy, Marketing, Sales & Automation",
  description:
    "Levexa's services and plans: growth strategy, branding and content, sales conversion, and technology and automation, under one founder-led team.",
  path: "/services",
});

// Rows shown on every plan card; each plan lists which rows it includes
const FEATURES = [
  "Growth strategy & positioning",
  "Content strategy & reel scripts",
  "Social media management",
  "Meta Ads & performance marketing",
  "Sales scripts & team training",
  "CRM & lead management setup",
  "WhatsApp & marketing automation",
  "Website or landing page",
  "Monthly performance review",
  "Weekly reviews with Lavanya",
];

const PLANS = [
  {
    name: "Launch",
    forWho: "For founders starting to build their brand online.",
    includes: [0, 1, 2, 8],
  },
  {
    name: "Grow",
    forWho: "For businesses ready to turn attention into steady leads and sales.",
    includes: [0, 1, 2, 3, 4, 5, 8],
    popular: true,
  },
  {
    name: "Scale",
    forWho: "For teams that want the full growth system, run with us every week.",
    includes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
];

const quoteHref = (plan: string) =>
  `${companyConfig.socials.whatsapp}?text=${encodeURIComponent(`Hi Levexa, I'd like a quote for the ${plan} plan.`)}`;

export default function ServicesPage() {
  return (
    <div className="bg-page text-fg">
      {/* 1. Banner */}
      <PageBanner
        image="/images/pillars/02-branding-marketing.jpg"
        title="Services"
        subtitle={
          <>
            Everything you need to turn attention into revenue: strategy, content, sales and automation,
            under one roof, so your brand <Underline>gets results</Underline>.
          </>
        }
        ctaLabel="Get started"
        ctaHref="/contact"
      />

      {/* 2. Service cards */}
      <section className="py-20 sm:py-24 bg-band border-t border-line/70">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
            {servicesData.map((service) => {
              const Icon = SERVICE_ICONS[service.id];
              return (
                <Link
                  key={service.id}
                  id={service.id}
                  href={service.href}
                  className="group scroll-mt-28 flex flex-col rounded-2xl bg-page border border-line p-7 sm:p-8 transition-all hover:border-accent hover:shadow-md hover:-translate-y-0.5"
                >
                  <Icon className="w-10 h-10 text-accent mb-7" aria-hidden="true" />
                  <h2 className="text-xl font-bold uppercase tracking-wide mb-3">{service.title}</h2>
                  <p className="text-base text-fg-2 leading-relaxed mb-5">{service.summary}</p>
                  <ul className="space-y-2 mb-7">
                    {service.deliverables.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-fg-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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

      {/* 3. Founder quote */}
      <FounderQuote />

      {/* 4. Plans */}
      <section className="relative py-20 sm:py-24">
        <DotGrid />
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <Eyebrow>Choose your path</Eyebrow>
            <h2 className="type-h2">
              Choose the plan that works best for <Underline>you</Underline>
            </h2>
            <p className="mt-6 text-lg text-fg-2 leading-relaxed">
              Every plan is shaped around your business. Tell us which one fits, and we&apos;ll send you a
              quote.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {PLANS.map((plan) => (
              <article
                key={plan.name}
                data-theme={plan.popular ? "navy" : undefined}
                className={`relative flex flex-col rounded-2xl overflow-hidden bg-card border ${
                  plan.popular ? "border-[#FEB005] shadow-card-elevated md:-translate-y-3" : "border-line shadow-2xs"
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#04162A] text-[#FEB005] text-xs font-bold uppercase tracking-wider">
                    Recommended
                  </span>
                )}
                <div
                  className={`px-6 pt-8 pb-6 text-center ${
                    plan.popular ? "bg-[#FEB005] text-[#04162A]" : "bg-card text-fg border-b border-line"
                  }`}
                >
                  <h3 className="text-3xl font-extrabold tracking-tight">{plan.name}</h3>
                  <p className={`mt-2 text-sm font-medium ${plan.popular ? "" : "text-fg-3"}`}>{plan.forWho}</p>
                </div>
                <div className="px-6 py-6 border-b border-line">
                  <a
                    href={quoteHref(plan.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${plan.popular ? "btn-primary" : "btn-secondary"} w-full !min-h-[46px]`}
                  >
                    Get a quote
                  </a>
                </div>
                <ul className="px-6 py-6 space-y-3.5 flex-1">
                  {FEATURES.map((feature, idx) => {
                    const included = plan.includes.includes(idx);
                    return (
                      <li
                        key={feature}
                        className={`flex items-start gap-3 text-[15px] ${included ? "text-fg" : "text-fg-3"}`}
                      >
                        {included ? (
                          <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                        ) : (
                          <X className="w-4 h-4 text-fg-3/60 mt-0.5 shrink-0" aria-hidden="true" />
                        )}
                        <span>
                          <span className="sr-only">{included ? "Included: " : "Not included: "}</span>
                          {feature}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Closing */}
      <GetStartedBox />
    </div>
  );
}
