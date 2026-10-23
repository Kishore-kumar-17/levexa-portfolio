import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { constructMetadata } from "@/lib/metadata";
import { companyConfig } from "@/data/company";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy — Levexa",
  description:
    "Information on how Levexa collects, uses, and safeguards information submitted through our website and strategic enquiry forms.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      <section className="py-16 bg-white border-b border-slate-200">
        <Container>
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-medium tracking-[-0.03em] leading-[1.08]">
              <span className="text-[#07192F]">Privacy</span>{" "}
              <span className="text-[#78716C]">Policy</span>
            </h1>

            {/* Signature Horizontal Accent Line */}
            <div
              className="w-12 h-[3.5px] bg-[#10B981] rounded-full my-4"
              aria-hidden="true"
            />

            <p className="text-base text-slate-700 font-normal leading-relaxed">
              Last updated: October 2026. This policy outlines how Levexa handles
              commercial enquiry data.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl space-y-8 text-sm text-slate-600 leading-relaxed font-normal">
            <div>
              <h2 className="text-xl font-bold text-[#07192F] tracking-tight mb-3">
                1. Information We Collect
              </h2>
              <p>
                When you submit an enquiry through the Levexa website, we collect
                the information you voluntarily provide: full name, business email
                address, company name, service of interest, estimated budget range,
                and your project description.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#07192F] tracking-tight mb-3">
                2. How We Use Your Information
              </h2>
              <p>
                We use the submitted information exclusively to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>Evaluate your commercial growth inquiry and prepare for our discovery call.</li>
                <li>Communicate directly regarding your strategic objectives.</li>
                <li>Maintain internal records of business correspondence.</li>
              </ul>
              <p className="mt-2">
                We do not sell, rent, lease, or monetize your contact or business information to any third parties.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#07192F] tracking-tight mb-3">
                3. Tracking &amp; Cookies Policy
              </h2>
              <p>
                Levexa prioritizes client privacy. Our portfolio website does not
                deploy aggressive advertising pixels, cross-site trackers, or third-party
                profiling cookies by default. Only functional, security, and session
                headers necessary to protect form submissions and site integrity are
                used.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#07192F] tracking-tight mb-3">
                4. Data Security &amp; Storage
              </h2>
              <p>
                All form submissions are transmitted using encrypted HTTPS protocols.
                Data is validated, sanitized, and stored with enterprise-grade access
                controls to prevent unauthorized interception or disclosure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#07192F] tracking-tight mb-3">
                5. Data Retention &amp; Your Rights
              </h2>
              <p>
                You may request access to, correction of, or deletion of your
                contact information at any time by contacting our advisory desk at{" "}
                <a
                  href={`mailto:${companyConfig.contact.email}`}
                  className="text-[#F59E0B] font-bold underline hover:text-[#D97706]"
                >
                  {companyConfig.contact.email}
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
