import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { companyConfig } from "@/data/company";
import { constructMetadata } from "@/lib/metadata";
import { Mail, Phone, Clock } from "lucide-react";
import { BlurText } from "@/components/ui/BlurText";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export const metadata: Metadata = constructMetadata({
  title: "Contact Levexa — Request Strategic Growth Consultation",
  description:
    "Book a free consultation with Levexa to talk about your marketing, sales and growth goals. Lavanya replies personally within 24 business hours.",
  path: "/contact",
});

const STEPS = [
  {
    title: "A short discovery call",
    desc: "A 30-minute call with Lavanya to understand your business, goals and current challenges.",
  },
  {
    title: "A review of your marketing and sales",
    desc: "We look at where your leads come from and where they drop off.",
  },
  {
    title: "A clear action plan",
    desc: "You get a practical plan with quick wins and longer-term growth steps.",
  },
];

export default function ContactPage() {
  const whatsappHref = `${companyConfig.socials.whatsapp}?text=${encodeURIComponent(
    companyConfig.socials.whatsappGreeting
  )}`;

  const details = [
    {
      label: "Email",
      value: companyConfig.contact.email,
      href: `mailto:${companyConfig.contact.email}`,
      icon: Mail,
    },
    {
      label: "Phone",
      value: companyConfig.contact.phone,
      href: `tel:${companyConfig.contact.phone.replace(/\s+/g, "")}`,
      icon: Phone,
    },
    { label: "Hours", value: companyConfig.contact.supportHours, icon: Clock },
  ];

  return (
    <div className="pt-24 sm:pt-28 bg-[#FAF8F5] text-[#07192F] min-h-screen">
      {/* 1. Hero */}
      <section className="pt-8 sm:pt-12 lg:pt-16 pb-14 sm:pb-16 border-b border-[#D7D3CB]">
        <Container>
          <div className="max-w-4xl">
            <h1 className="type-display mb-8">
              <BlurText text="Let's talk" className="text-[#07192F] inline-flex" delay={80} />
              <BlurText text="growth." className="text-[#C88A1A] inline-flex" delay={120} />
            </h1>

            <div className="w-12 h-[3px] bg-[#C88A1A] rounded-full mb-8" aria-hidden="true" />

            <p className="type-lead max-w-3xl">
              Tell us about your business and goals, and Lavanya will personally get back to you within
              24 business hours.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Contact info & form */}
      <section className="py-14 sm:py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Talk to Lavanya */}
              <div className="p-7 sm:p-8 rounded-2xl bg-[#07192F] text-white">
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-[#C88A1A] ring-offset-2 ring-offset-[#07192F] shrink-0">
                    <Image
                      src="/images/about/founder-lavanya-avatar.jpg"
                      alt="Lavanya, Founder & CEO of Levexa"
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-bold">You&apos;ll speak with Lavanya</p>
                    <p className="text-sm text-stone-300">Founder &amp; CEO, Levexa</p>
                  </div>
                </div>
                <p className="text-base text-stone-200 leading-relaxed mb-6">
                  Prefer a quick chat first? Message us on WhatsApp and we&apos;ll reply during working hours.
                </p>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-secondary-dark w-full">
                  <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Contact details */}
              <div className="p-7 sm:p-8 rounded-2xl bg-white border border-stone-200 shadow-2xs">
                <h2 className="text-xl font-bold mb-5">Contact details</h2>
                <ul className="space-y-4">
                  {details.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <>
                        <span className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-stone-200 flex items-center justify-center text-[#C88A1A] shrink-0">
                          <Icon className="w-4 h-4" aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block text-sm text-slate-600">{item.label}</span>
                          <span className="block text-base font-semibold text-[#07192F]">{item.value}</span>
                        </span>
                      </>
                    );
                    return (
                      <li key={item.label}>
                        {item.href ? (
                          <a href={item.href} className="flex items-center gap-4 py-1 hover:text-[#C88A1A] transition-colors">
                            {content}
                          </a>
                        ) : (
                          <div className="flex items-center gap-4 py-1">{content}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* What happens next */}
              <div className="p-7 sm:p-8 rounded-2xl bg-white border border-stone-200 shadow-2xs">
                <h2 className="text-xl font-bold mb-5">What happens next</h2>
                <ol className="space-y-5">
                  {STEPS.map((step, idx) => (
                    <li key={step.title} className="flex items-start gap-4">
                      <span className="font-mono text-sm font-bold text-[#07192F] w-7 shrink-0 pt-0.5">
                        0{idx + 1}
                      </span>
                      <div>
                        <h3 className="text-base font-bold mb-1">{step.title}</h3>
                        <p className="text-base text-slate-700 leading-relaxed">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Right column: form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
