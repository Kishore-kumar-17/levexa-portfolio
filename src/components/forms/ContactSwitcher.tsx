"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { companyConfig } from "@/data/company";
import { ThemeLogo } from "@/components/ui/ThemeLogo";

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

type Mode = "form" | "talk";

// Toggle between the contact form and talking to Lavanya directly
export const ContactSwitcher: React.FC = () => {
  const [mode, setMode] = useState<Mode>("form");

  const whatsappHref = `${companyConfig.socials.whatsapp}?text=${encodeURIComponent(
    companyConfig.socials.whatsappGreeting
  )}`;

  const details = [
    { label: "Email", value: companyConfig.contact.email, href: `mailto:${companyConfig.contact.email}`, icon: Mail },
    {
      label: "Phone",
      value: companyConfig.contact.phone,
      href: `tel:${companyConfig.contact.phone.replace(/\s+/g, "")}`,
      icon: Phone,
    },
    { label: "Hours", value: companyConfig.contact.supportHours, icon: Clock },
  ];

  const option = (value: Mode, label: string) => (
    <button
      type="button"
      onClick={() => setMode(value)}
      aria-pressed={mode === value}
      className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold transition-colors cursor-pointer ${
        mode === value ? "bg-[#FEB005] text-[#04162A]" : "text-fg-3 hover:text-fg"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div>
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1.5 rounded-full bg-card border border-line shadow-2xs">
          {option("form", "Send a message")}
          {option("talk", "Talk to Lavanya")}
        </div>
      </div>

      {mode === "form" ? (
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="relative mx-auto w-[220px] aspect-[1396/213] mb-6">
              <ThemeLogo alt="Levexa" fill sizes="220px" className="object-contain" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-fg mb-3">Welcome to the Levexa contact form</h2>
            <p className="text-lg text-fg-2">
              A few quick questions about you and your business, so we can see how we can help.
            </p>
          </div>
          <ContactForm />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div data-theme="navy" className="p-7 sm:p-8 rounded-2xl bg-page text-fg">
            <div className="flex items-center gap-4 mb-5">
              <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-accent ring-offset-2 ring-offset-card shrink-0">
                <Image
                  src="/images/about/founder-lavanya-avatar.jpg"
                  alt="Lavanya, Founder & CEO of Levexa"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-lg font-bold">Talk to Lavanya directly</h2>
                <p className="text-sm text-fg-3">Founder &amp; CEO, Levexa</p>
              </div>
            </div>
            <p className="text-base text-fg-2 leading-relaxed mb-6">
              Prefer a quick chat first? Message us on WhatsApp and we&apos;ll reply during working hours.
            </p>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
              <WhatsAppIcon className="w-5 h-5" />
              Chat on WhatsApp
            </a>

            <ul className="mt-8 space-y-4">
              {details.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <span className="w-10 h-10 rounded-full bg-fg/5 flex items-center justify-center text-accent shrink-0">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm text-fg-3">{item.label}</span>
                      <span className="block text-base font-semibold">{item.value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a href={item.href} className="flex items-center gap-4 py-1 hover:text-accent transition-colors">
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

          <div className="p-7 sm:p-8 rounded-2xl bg-card border border-line shadow-2xs">
            <h2 className="text-xl font-bold mb-6">What happens next</h2>
            <ol className="space-y-6">
              {STEPS.map((step, idx) => (
                <li key={step.title} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full border-2 border-accent text-gold-ink text-sm font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-bold mb-1">{step.title}</h3>
                    <p className="text-base text-fg-2 leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};
