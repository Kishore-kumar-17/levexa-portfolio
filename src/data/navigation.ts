import { NavItem } from "@/types";

// The blog page exists but stays out of the menus until the first article is published.
// When data/blog.ts has a real article, set this to true.
export const SHOW_BLOG_IN_MENUS = false;

const blogItems = (label: string): NavItem[] => (SHOW_BLOG_IN_MENUS ? [{ label, href: "/blog" }] : []);

// Header links on desktop
export const headerNavigation: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  ...blogItems("Blog"),
  { label: "Contact", href: "/contact" },
];

export const mainNavigation: NavItem[] = [{ label: "Home", href: "/" }, ...headerNavigation];

export const footerServicesNavigation: NavItem[] = [
  { label: "Growth & Strategy", href: "/services/strategy" },
  { label: "Branding & Marketing", href: "/services/marketing" },
  { label: "Sales & Conversion", href: "/services/sales" },
  { label: "Technology & Automation", href: "/services/technology" },
];

export const footerCompanyNavigation: NavItem[] = [
  { label: "About Levexa", href: "/about" },
  { label: "All Services Overview", href: "/services" },
  ...blogItems("Blog"),
  { label: "Get in Touch", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
];
