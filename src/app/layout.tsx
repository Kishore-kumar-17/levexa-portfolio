import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { StructuredData } from "@/components/layout/StructuredData";
import { WhatsAppFloatingButton } from "@/components/layout/WhatsAppFloatingButton";
import { ThemeSwitcher } from "@/components/layout/ThemeSwitcher";
import { THEME_STORAGE_KEY, type Theme } from "@/lib/theme";
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

// Site theme. While Lavanya compares the two, previews show a White / Navy switch.
const DEFAULT_THEME: Theme = "navy";
const SHOW_THEME_SWITCHER = process.env.VERCEL_ENV !== "production";
// Runs before the page paints, so a remembered choice never flashes the other theme
const themeInitScript = `try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="navy")document.documentElement.setAttribute("data-theme",t)}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme={DEFAULT_THEME}
      className={`${inter.variable} ${ibmPlexMono.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head>
        {SHOW_THEME_SWITCHER && <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />}
      </head>
      <body className="bg-page text-fg min-h-screen flex flex-col font-sans antialiased selection:bg-gold selection:text-[#04162A]">
        <StructuredData />
        {/* First Tab stop: lets keyboard users jump past the header menu */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-5 focus:py-3 focus:rounded-full focus:bg-fg focus:text-page focus:font-semibold"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFloatingButton />
        {SHOW_THEME_SWITCHER && <ThemeSwitcher defaultTheme={DEFAULT_THEME} />}
      </body>
    </html>
  );
}
