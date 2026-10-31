import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — Business Strategy, Marketing, Sales & Growth`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F5",
    theme_color: "#FFFFFF",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
