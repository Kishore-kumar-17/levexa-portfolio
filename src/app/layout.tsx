import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { StructuredData } from "@/components/layout/StructuredData";
import { WhatsAppFloatingButton } from "@/components/layout/WhatsAppFloatingButton";
import { constructMetadata } from "@/lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Headings: the same heavy geometric face as Levexa's slides and reels
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ibmPlexMono.variable} ${poppins.variable}`}
    >
      <body className="bg-[#FAF8F5] text-navy-900 min-h-screen flex flex-col font-sans antialiased selection:bg-gold selection:text-navy-900">
        <StructuredData />
        {/* First Tab stop: lets keyboard users jump past the header menu */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-5 focus:py-3 focus:rounded-full focus:bg-[#04162A] focus:text-white focus:font-semibold"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
