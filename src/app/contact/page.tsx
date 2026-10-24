import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { companyConfig } from "@/data/company";
import { constructMetadata } from "@/lib/metadata";
import { Mail, Clock, MapPin, ShieldCheck } from "lucide-react";
import { BlurText } from "@/components/ui/BlurText";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ShinyText } from "@/components/ui/ShinyText";
import { DecryptedText } from "@/components/ui/DecryptedText";

export const metadata: Metadata = constructMetadata({
  title: "Contact Levexa — Request Strategic Growth Consultation",
  description:
    "Schedule an executive consultation with Levexa to discuss your commercial growth strategy, demand generation, sales velocity, and digital automation goals.",
  path: "/contact",
});

export default function ContactPage() {
  const steps = [
    {
      number: "01",
      title: "Confidential Discovery Briefing",
      desc: "A 30-minute strategic call with a senior partner to understand your commercial model, current plateau, and primary targets.",
    },
    {
      number: "02",
      title: "Commercial Friction Audit",
      desc: "We analyze your customer acquisition economics, pipeline conversion bottlenecks, and tech stack redundancies.",
    },
    {
      number: "03",
      title: "Tailored Execution Roadmap",
      desc: "You receive a clear, milestone-driven sprint blueprint outlining immediate quick wins and compounding growth architecture.",
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 bg-[#FAF8F5] text-[#07192F] select-none min-h-screen">
      
      {/* ========================================================= */}
      {/* 1. HERO SECTION: Monumental Levexa Dual-Tone Hero         */}
      {/* ========================================================= */}
      <section className="pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 border-b border-[#D7D3CB] relative overflow-hidden">
        <Container>
          <div className="max-w-5xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="w-8 h-[2px] bg-[#C88A1A]" />
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.22em] text-[#07192F] uppercase">
                <DecryptedText
                  text="EXECUTIVE CONSULTATION & INQUIRY"
                  speed={35}
                  maxIterations={8}
                  animateOn="view"
                  className="text-[#07192F]"
                />
              </span>
            </div>

            {/* Monumental Dual-Tone Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-[5rem] xl:text-[5.75rem] font-bold tracking-[-0.035em] leading-[0.98] mb-8 sm:mb-10">
              <BlurText text="Let's talk" className="text-[#07192F] inline-flex" delay={80} /> <br />
              <BlurText text="growth." className="text-[#C88A1A] inline-flex" delay={120} />
            </h1>

            {/* Signature Gold Accent Line */}
            <div
              className="w-12 h-[3px] bg-[#C88A1A] rounded-full mb-8 sm:mb-10"
              aria-hidden="true"
            />

            {/* Value Proposition Subheadline */}
            <p className="text-xl sm:text-2xl lg:text-[1.75rem] text-slate-800 font-normal leading-[1.45] max-w-4xl tracking-tight">
              Connect directly with our senior growth partners. Tell us about your company&apos;s stage,
              friction points, and commercial targets to arrange your confidential briefing.
            </p>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 2. SPLIT SECTION: Contact Info & Form                     */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Direct Info & Expectations */}
            <div className="lg:col-span-5 space-y-10">
              
              {/* Direct Inboxes Card */}
              <SpotlightCard theme="light" spotlightColor="#C88A1A" intensity={0.22}>
                <div className="p-8 space-y-6">
                  <h3 className="text-xl font-bold text-[#07192F] tracking-tight border-b border-stone-100 pb-4">
                    Direct Advisory Channels
                  </h3>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-stone-200 flex items-center justify-center text-[#C88A1A] shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                          Official Inquiry Inbox
                        </p>
                        <a
                          href={`mailto:${companyConfig.contact.email}`}
                          className="text-base font-bold text-[#07192F] hover:text-[#C88A1A] transition-colors"
                        >
                          {companyConfig.contact.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-stone-200 flex items-center justify-center text-[#C88A1A] shrink-0">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                          Advisory Sprint Hours
                        </p>
                        <p className="text-sm font-semibold text-[#07192F]">
                          {companyConfig.contact.supportHours}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-stone-200 flex items-center justify-center text-[#C88A1A] shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                          Operational Footprint
                        </p>
                        <p className="text-sm font-semibold text-[#07192F]">
                          Global Remote &amp; On-Site Executive Advisory
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>

              {/* What Happens Next Card */}
              <SpotlightCard theme="gold" spotlightColor="#C88A1A" intensity={0.22}>
                <div className="p-8 space-y-6">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-[2px] bg-[#C88A1A]" />
                    <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#07192F]">
                      WHAT HAPPENS NEXT:
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {steps.map((st) => (
                      <div key={st.number} className="flex items-start gap-4">
                        <span className="font-mono text-xs font-bold text-[#C88A1A] pt-0.5 shrink-0">
                          {st.number}
                        </span>
                        <div>
                          <h4 className="text-sm font-bold text-[#07192F] mb-1">
                            {st.title}
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed font-normal">
                            {st.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SpotlightCard>

              {/* Strict NDA Assurance Banner */}
              <div className="p-5 rounded-2xl bg-[#07192F] text-white flex items-center gap-4">
                <ShieldCheck className="w-8 h-8 text-[#C88A1A] shrink-0" />
                <p className="text-xs text-stone-300 leading-snug">
                  <strong className="text-white block font-bold mb-0.5">
                    <ShinyText text="Strict Confidentiality" variant="gold" speed={3.5} />
                  </strong>
                  All shared financial benchmarks, commercial challenges, and proprietary data are treated with complete NDA security.
                </p>
              </div>

            </div>

            {/* Right Column: High-End Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </Container>
      </section>

    </div>
  );
}
