import React from "react";
import { companyConfig } from "@/data/company";
import { siteConfig } from "@/lib/metadata";

// The bare linkedin.com URL is a placeholder until the real profile is supplied
const LINKEDIN_PLACEHOLDER = "https://www.linkedin.com/";

// schema.org business details so search engines can show name, founder and contact info
export const StructuredData: React.FC = () => {
  const sameAs = [companyConfig.socials.instagram, companyConfig.socials.linkedin].filter(
    (url) => url !== LINKEDIN_PLACEHOLDER
  );

  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/levexa-logo-light-trans.png`,
    image: `${siteConfig.siteUrl}/og-image.jpg`,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    email: companyConfig.contact.email,
    telephone: companyConfig.contact.phone.replace(/\s+/g, ""),
    founder: {
      "@type": "Person",
      name: "Lavanya",
      jobTitle: "Founder & CEO",
      image: `${siteConfig.siteUrl}/images/about/founder-lavanya.jpg`,
    },
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      // Escape "<" so the JSON can never close the script tag early
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
};
