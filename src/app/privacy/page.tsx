import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";
import { companyConfig } from "@/data/company";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy — Levexa",
  description:
    "What information Levexa collects through this website and its contact form, why, who processes it, how long it is kept, and your rights.",
  path: "/privacy",
});

const EMAIL = companyConfig.contact.email;

const MailLink = () => (
  <a href={`mailto:${EMAIL}`} className="font-semibold text-gold-ink underline underline-offset-2">
    {EMAIL}
  </a>
);

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy"
      highlight="policy"
      effectiveDate="2 November 2026"
      intro={
        <>
          This policy explains what information Levexa (&ldquo;we&rdquo;, &ldquo;us&rdquo;) collects when you
          use this website or contact us, why we collect it, and the choices and rights you have.
        </>
      }
      summary={[
        "We only collect what you type into our contact form, or send us by email, phone or WhatsApp.",
        "We use it to reply to you and to prepare and hold your consultation. We never sell it.",
        "This website does not use cookies or analytics tracking.",
        "You can ask us to show, correct or delete your information at any time.",
      ]}
    >
      <LegalSection title="1. Who we are">
        <p>
          Levexa is a founder-led growth advisory run by Lavanya. For anything about your information,
          contact us at <MailLink /> or {companyConfig.contact.phone}.
        </p>
      </LegalSection>

      <LegalSection title="2. Information we collect">
        <p>
          <strong className="text-[#04162A]">When you fill in our contact form:</strong> your name, email
          address, phone or WhatsApp number (optional), company or website (optional), the service you are
          interested in, your annual revenue range (optional), your message, and your agreement to this policy.
        </p>
        <p>
          <strong className="text-[#04162A]">When you contact us directly</strong> by email, phone or
          WhatsApp: the details and messages you choose to send.
        </p>
        <p>
          <strong className="text-[#04162A]">Technical information:</strong> like any website, our hosting
          provider processes technical data such as your IP address, browser type and the pages requested, to
          deliver the site and protect it from attacks. To stop spam, our contact form briefly keeps your IP
          address in memory (for about 10 minutes) to limit repeated submissions.
        </p>
        <p>
          <strong className="text-[#04162A]">Cookies:</strong> this website does not set cookies and does not
          use analytics or advertising trackers. If we add analytics in future, we will update this policy and
          ask for your consent first where required.
        </p>
      </LegalSection>

      <LegalSection title="3. Why we use it">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>To reply to your enquiry and answer your questions.</li>
          <li>To prepare for and hold your discovery call, and to send you a proposal if you ask for one.</li>
          <li>To keep a record of our communication with you.</li>
          <li>To keep this website secure and free of spam.</li>
        </ul>
        <p>
          We do not sell, rent or trade your information, and we do not add you to marketing lists without
          your permission.
        </p>
      </LegalSection>

      <LegalSection title="4. Your consent">
        <p>
          We process the information you submit through the contact form on the basis of the consent you give
          by ticking the agreement box. You can withdraw your consent at any time by emailing <MailLink />.
          Withdrawing consent does not affect anything we did with your information before that.
        </p>
      </LegalSection>

      <LegalSection title="5. Service providers who handle your information">
        <p>We use a small number of trusted providers to run this website and receive your enquiry:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong className="text-[#04162A]">Vercel</strong>: hosts this website.
          </li>
          <li>
            <strong className="text-[#04162A]">Resend</strong>: delivers your contact-form enquiry to us by
            email.
          </li>
          <li>
            <strong className="text-[#04162A]">Google (Gmail)</strong>: the mailbox where we receive and keep
            enquiries.
          </li>
          <li>
            <strong className="text-[#04162A]">WhatsApp (Meta)</strong>: only if you choose to message us on
            WhatsApp.
          </li>
        </ul>
        <p>
          These providers may store or process information on servers outside India. They only use it to
          provide their service to us.
        </p>
      </LegalSection>

      <LegalSection title="6. How long we keep it">
        <p>
          We keep enquiries for up to 24 months after our last contact with you, so we can follow up on
          conversations you started. If you become a client, we keep the information needed for our work
          together, and records we are legally required to keep (for example for tax purposes) for as long as
          the law requires. After that, we delete it.
        </p>
      </LegalSection>

      <LegalSection title="7. Your rights">
        <p>Under India&apos;s Digital Personal Data Protection Act, 2023, you can ask us to:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>tell you what information we hold about you and how we use it;</li>
          <li>correct, complete or update your information;</li>
          <li>delete your information;</li>
          <li>stop using your information, by withdrawing your consent.</li>
        </ul>
        <p>
          You can also nominate another person to act on your behalf. To use any of these rights, email{" "}
          <MailLink />. We aim to respond within 30 days.
        </p>
      </LegalSection>

      <LegalSection title="8. Security">
        <p>
          This website uses encrypted connections (HTTPS), checks every form submission on our server, and
          limits access to enquiries to the Levexa team. No website can be completely secure, but we take
          reasonable care to protect your information.
        </p>
      </LegalSection>

      <LegalSection title="9. Children">
        <p>
          This website and our services are meant for business owners and professionals aged 18 or over. We
          do not knowingly collect information from children.
        </p>
      </LegalSection>

      <LegalSection title="10. Changes to this policy">
        <p>
          If we change this policy, we will update it on this page and change the effective date above. Please
          also read our{" "}
          <Link href="/terms" className="font-semibold text-gold-ink underline underline-offset-2">
            Terms of Use
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="11. Questions and complaints">
        <p>
          If you have a question or a complaint about how we handle your information, contact Lavanya, Founder,
          at <MailLink /> or {companyConfig.contact.phone}. If you are not satisfied with our response, you may
          contact the Data Protection Board of India.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
