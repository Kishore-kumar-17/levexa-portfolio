import React from "react";
import { Metadata } from "next";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Underline } from "@/components/ui/Underline";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { PageBanner } from "@/components/sections/PageBanner";
import { ContactSwitcher } from "@/components/forms/ContactSwitcher";
import { companyConfig } from "@/data/company";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Contact Levexa — Request Strategic Growth Consultation",
  description:
    "Book a free consultation with Levexa to talk about your marketing, sales and growth goals. Lavanya replies personally within 24 business hours.",
  path: "/contact",
});

export default function ContactPage() {
  const socials = [
    { label: "Instagram", href: companyConfig.socials.instagram, icon: <Instagram className="w-5 h-5" aria-hidden="true" /> },
    { label: "LinkedIn", href: companyConfig.socials.linkedin, icon: <Linkedin className="w-5 h-5" aria-hidden="true" /> },
    {
      label: "WhatsApp",
      href: `${companyConfig.socials.whatsapp}?text=${encodeURIComponent(companyConfig.socials.whatsappGreeting)}`,
      icon: <WhatsAppIcon className="w-5 h-5" />,
    },
    { label: "Email", href: `mailto:${companyConfig.contact.email}`, icon: <Mail className="w-5 h-5" aria-hidden="true" /> },
    {
      label: "Phone",
      href: `tel:${companyConfig.contact.phone.replace(/\s+/g, "")}`,
      icon: <Phone className="w-5 h-5" aria-hidden="true" />,
    },
  ];

  return (
    <div className="bg-page text-fg">
      {/* 1. Banner */}
      <PageBanner
        image="/images/process/02-strategy.jpg"
        title="Contact"
        subtitle={
          <>
            Get in touch with the Levexa <Underline>team</Underline> by filling in the form below. Lavanya
            replies personally within 24 business hours.
          </>
        }
        ctaLabel="Get in touch"
        ctaHref="#contact-form"
      />

      {/* 2. Form or direct contact */}
      <section id="contact-form" className="scroll-mt-24 py-16 sm:py-20 lg:py-24 border-t border-line/70">
        <Container>
          <ContactSwitcher />

          {/* 3. Social links */}
          <ul className="mt-16 flex items-center justify-center gap-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full bg-[#FEB005] text-[#04162A] flex items-center justify-center hover:bg-[#FFC53D] transition-colors"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </div>
  );
}
