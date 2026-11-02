import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";
import { companyConfig } from "@/data/company";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Terms of Use — Levexa",
  description:
    "The terms for using the Levexa website: information only, no guaranteed results, content ownership, links and governing law.",
  path: "/terms",
});

const EMAIL = companyConfig.contact.email;

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of"
      highlight="use"
      effectiveDate="2 November 2026"
      intro={
        <>
          These terms apply when you use this website. By using it, you agree to them. If you do not agree,
          please do not use the website.
        </>
      }
      summary={[
        "This website gives general information about Levexa and our services.",
        "Results such as views, leads or sales are never guaranteed, because they depend on many factors.",
        "The exact scope, price and terms of any work are agreed separately, in writing.",
        "Please don't copy our content, and don't misuse the website or the contact form.",
      ]}
    >
      <LegalSection title="1. About this website">
        <p>
          This website is run by Levexa, a founder-led growth advisory. It describes who we are, the services we
          offer and how to contact us. The information is general and is not professional advice for your
          specific business.
        </p>
      </LegalSection>

      <LegalSection title="2. Our services and plans">
        <p>
          The services and plans on this website (such as Launch, Grow and Scale) describe what we typically
          offer. They are not an offer that can be accepted online. The exact scope, deliverables, timelines,
          fees, payment and refund terms of any work are agreed separately in a written proposal or agreement,
          which takes priority over this website.
        </p>
      </LegalSection>

      <LegalSection title="3. No guaranteed results">
        <p>
          Growth depends on many things outside our control, including your market, product, budget, team and
          platform algorithms. Results shown on this website, such as views, likes and comments on reels we have
          scripted, are past results of specific pieces of content. They are not a promise or guarantee of what
          you will achieve.
        </p>
      </LegalSection>

      <LegalSection title="4. Content and intellectual property">
        <p>
          The text, design, logo and graphics on this website belong to Levexa, unless stated otherwise. You
          may view and share links to the website, but you may not copy, reproduce or reuse its content for
          commercial purposes without our written permission. Names and trademarks of other businesses belong
          to their owners.
        </p>
      </LegalSection>

      <LegalSection title="5. Using the website and contact form">
        <p>You agree not to:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>send spam, false information or harmful content through the contact form;</li>
          <li>try to break, overload or gain unauthorised access to the website;</li>
          <li>use the website in any way that breaks the law.</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Links to other websites">
        <p>
          This website links to other services such as Instagram, LinkedIn and WhatsApp. We are not responsible
          for their content or how they handle your information; their own terms and policies apply.
        </p>
      </LegalSection>

      <LegalSection title="7. Disclaimer and limitation of liability">
        <p>
          We work to keep this website accurate and available, but it is provided &ldquo;as is&rdquo;, without
          warranties of any kind. To the extent the law allows, Levexa is not liable for any indirect or
          consequential loss arising from your use of this website or reliance on its content.
        </p>
      </LegalSection>

      <LegalSection title="8. Privacy">
        <p>
          How we handle your information is explained in our{" "}
          <Link href="/privacy" className="font-semibold text-gold-ink underline underline-offset-2">
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="9. Governing law">
        <p>
          These terms are governed by the laws of India, and any dispute about them will be handled by the
          courts of India.
        </p>
      </LegalSection>

      <LegalSection title="10. Changes and contact">
        <p>
          We may update these terms from time to time; the effective date above shows the latest version.
          Questions? Email{" "}
          <a href={`mailto:${EMAIL}`} className="font-semibold text-gold-ink underline underline-offset-2">
            {EMAIL}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
