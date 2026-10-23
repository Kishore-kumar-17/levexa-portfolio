import { Metadata } from "next";

export const siteConfig = {
  name: "Levexa",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://levexa.com",
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
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — Business Strategy, Marketing, Sales & Growth`;

  const canonicalUrl = `${siteConfig.siteUrl}${path}`;

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(siteConfig.siteUrl),
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
          url: `${siteConfig.siteUrl}/levexa-logo-dark.png`,
          width: 1410,
          height: 255,
          alt: "Levexa — Level Up With Excellence",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [`${siteConfig.siteUrl}/levexa-logo-dark.png`],
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
