import { Metadata } from "next";
import { SITE_URL } from "@/lib/siteUrl";

export const siteConfig = {
  name: "Levexa",
  siteUrl: SITE_URL,
  tagline: "Level up your excellence with Levexa",
  description:
    "Helping businesses grow, scale, and increase revenue through high-impact Strategy, Marketing, Sales, and Growth architecture.",
};

export function constructMetadata({
  title,
  description = siteConfig.description,
  path = "",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
} = {}): Metadata {
  // Only append the brand when the page title doesn't already mention it
  const pageTitle = title
    ? title.includes(siteConfig.name)
      ? title
      : `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — Business Strategy, Marketing, Sales & Growth`;

  const canonicalUrl = `${siteConfig.siteUrl}${path}`;

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(siteConfig.siteUrl),
    creator: "Kishore Kumar R",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${siteConfig.siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Levexa — Level up your excellence. Lavanya, Founder & CEO",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [`${siteConfig.siteUrl}/og-image.jpg`],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/icon.png",
      apple: "/apple-icon.png",
    },
  };
}
