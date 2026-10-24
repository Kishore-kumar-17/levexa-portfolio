import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { constructMetadata } from "@/lib/metadata";
import { companyConfig } from "@/data/company";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy — Levexa Strategic Growth",
  description:
    "Information on how Levexa collects, uses, and safeguards information submitted through our website and strategic advisory enquiry forms.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="pt-24 sm:pt-28 bg-[#FAF8F5] text-[#07192F] select-none min-h-screen">
      
      {/* Hero Header */}
      <section className="pt-8 sm:pt-12 lg:pt-16 pb-14 sm:pb-16 border-b border-[#D7D3CB] relative">
        <Container>
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#C88A1A]" />
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.22em] text-[#07192F] uppercase">
                LEGAL ARCHITECTURE &amp; COMPLIANCE
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-bold tracking-[-0.035em] leading-[1.02] mb-6">
              <span>Privacy</span> <span className="text-[#C88A1A]">Policy.</span>
            </h1>

            {/* Signature Gold Accent Line */}
            <div
              className="w-12 h-[3px] bg-[#C88A1A] rounded-full mb-6"
              aria-hidden="true"
            />

            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
              Effective Date: October 2026. This policy outlines how Levexa (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;)
              collects, processes, and safeguards business enquiry and commercial telemetry information.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content Body */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-4xl space-y-8">
            
            {/* Commitment Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#C88A1A]/40 shadow-xs flex items-start gap-4">
              <ShieldCheck className="w-7 h-7 text-[#C88A1A] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-bold text-[#07192F] mb-1">
                  Confidential Advisory Guarantee
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  We operate as strategic advisors to high-growth enterprises and founders. All business metrics,
                  revenue data, and commercial discussions submitted through our platform are held in strict confidence
                  and never sold, rented, or distributed to any third parties.
                </p>
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-stone-200/80 shadow-xs space-y-8 text-sm text-slate-700 leading-relaxed font-normal">
              <div>
                <h2 className="text-lg font-bold text-[#07192F] tracking-tight mb-2 uppercase font-mono">
                  1. Information We Collect
                </h2>
                <p>
                  When you request an advisory consultation or submit an inquiry through the Levexa website,
                  we collect information voluntarily provided by you: your full name, business email address, company
                  name, estimated revenue stage, selected commercial growth disciplines, and project objectives.
                </p>
              </div>

              <div className="pt-6 border-t border-stone-100">
                <h2 className="text-lg font-bold text-[#07192F] tracking-tight mb-2 uppercase font-mono">
                  2. Purpose of Data Processing
                </h2>
                <p className="mb-2">We process your submitted information solely to:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                  <li>Review your commercial profile and assign the appropriate senior growth partner.</li>
                  <li>Schedule, prepare for, and conduct your confidential discovery briefing.</li>
                  <li>Formulate customized advisory proposals, diagnostic sprints, and execution roadmaps.</li>
                  <li>Maintain secure administrative records of business communications.</li>
                </ul>
              </div>

              <div className="pt-6 border-t border-stone-100">
                <h2 className="text-lg font-bold text-[#07192F] tracking-tight mb-2 uppercase font-mono">
                  3. Data Security &amp; Retention
                </h2>
                <p>
                  We implement robust enterprise security protocols, encryption in transit (HTTPS/TLS),
                  and restricted role-based internal access to ensure that all commercial data remains protected
                  against unauthorized access or disclosure.
                </p>
              </div>

              <div className="pt-6 border-t border-stone-100">
                <h2 className="text-lg font-bold text-[#07192F] tracking-tight mb-2 uppercase font-mono">
                  4. Third-Party Disclosures
                </h2>
                <p>
                  Levexa does not monetize or trade client data. We only utilize trusted cloud infrastructure
                  providers (such as Vercel and secure transactional mail servers) necessary to host our application
                  and route your correspondence securely.
                </p>
              </div>

              <div className="pt-6 border-t border-stone-100">
                <h2 className="text-lg font-bold text-[#07192F] tracking-tight mb-2 uppercase font-mono">
                  5. Contact &amp; Governance
                </h2>
                <p>
                  If you have inquiries regarding our data handling practices or wish to request data erasure,
                  please contact our executive team directly at:{" "}
                  <a
                    href={`mailto:${companyConfig.contact.email}`}
                    className="font-bold text-[#C88A1A] hover:underline"
                  >
                    {companyConfig.contact.email}
                  </a>
                  .
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

    </div>
  );
}
