import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { companyConfig } from "@/data/company";
import { constructMetadata } from "@/lib/metadata";
import { Mail, Phone, MapPin, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Contact Levexa — Request Strategic Growth Consultation",
  description:
    "Schedule an executive consultation with Levexa to discuss your business strategy, marketing demand, and sales velocity goals.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Hero Header */}
      <section className="py-16 lg:py-20 bg-white relative border-b border-slate-200">
        <Container>
          <div className="max-w-3xl space-y-5">
            <AnimatedSection direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[#059669] text-xs font-mono font-bold uppercase tracking-[0.2em] shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span>Get In Touch</span>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-medium text-[#07192F] tracking-[-0.03em] leading-[1.08]">
                Let&apos;s accelerate your company&apos;s{" "}
                <span className="text-[#78716C]">revenue growth.</span>
              </h1>
            </AnimatedSection>

            {/* Signature Horizontal Accent Line */}
            <div
              className="w-12 h-[3.5px] bg-[#10B981] rounded-full my-5"
              aria-hidden="true"
            />

            <AnimatedSection direction="up" delay={0.2}>
              <p className="text-xl sm:text-2xl text-slate-700 font-normal leading-[1.4] tracking-tight">
                Connect directly with our strategic growth advisors. Tell us about
                your business stage, current friction points, and primary commercial
                objectives.
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="py-16 lg:py-24 bg-white relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Info & Expectations */}
            <div className="lg:col-span-5 space-y-8">
              <AnimatedSection direction="up">
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-medium text-[#07192F] tracking-tight">
                    Direct Strategic Consultation
                  </h2>
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    We review every submission carefully. Before our discovery call,
                    we perform preliminary research on your market space to ensure
                    our conversation is immediately valuable.
                  </p>
                </div>
              </AnimatedSection>

              {/* Contact Details Card */}
              <AnimatedSection direction="up" delay={0.1}>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7 space-y-5 shadow-2xs">
                  <h3 className="text-xs uppercase tracking-wider font-mono font-bold text-slate-700">
                    Direct Channels
                  </h3>

                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-[#F59E0B] border border-slate-200 shrink-0 mt-0.5 shadow-2xs">
                        <Mail className="w-4 h-4 text-[#F59E0B]" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">Client Inquiries</div>
                        <a
                          href={`mailto:${companyConfig.contact.email}`}
                          className="font-bold text-[#07192F] hover:text-[#F59E0B] transition-colors"
                        >
                          {companyConfig.contact.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-[#F59E0B] border border-slate-200 shrink-0 mt-0.5 shadow-2xs">
                        <Phone className="w-4 h-4 text-[#F59E0B]" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">Advisory Desk</div>
                        <div className="font-bold text-[#07192F]">
                          {companyConfig.contact.phone}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-[#F59E0B] border border-slate-200 shrink-0 mt-0.5 shadow-2xs">
                        <MapPin className="w-4 h-4 text-[#F59E0B]" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">Headquarters</div>
                        <div className="font-bold text-[#07192F]">
                          {companyConfig.contact.address}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-[#F59E0B] border border-slate-200 shrink-0 mt-0.5 shadow-2xs">
                        <Clock className="w-4 h-4 text-[#F59E0B]" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">Response Window</div>
                        <div className="font-bold text-[#07192F]">
                          Within 24 business hours
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Consultation Standards */}
              <AnimatedSection direction="up" delay={0.2}>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-3.5 shadow-2xs">
                  <div className="flex items-center gap-2 text-[#059669] text-xs font-mono font-bold uppercase tracking-[0.2em]">
                    <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                    <span>What Happens Next</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                      <span>Initial review of your commercial profile and website</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                      <span>30-minute structured discovery &amp; bottleneck evaluation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                      <span>Actionable recommendations with zero high-pressure sales</span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <AnimatedSection direction="left" delay={0.2}>
                <ContactForm />
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
