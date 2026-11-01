import { NavItem } from "@/types";

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export const footerServicesNavigation: NavItem[] = [
  { label: "Growth & Strategy", href: "/services/strategy" },
  { label: "Branding & Marketing", href: "/services/marketing" },
  { label: "Sales & Conversion", href: "/services/sales" },
  { label: "Technology & Automation", href: "/services/technology" },
];

export const footerCompanyNavigation: NavItem[] = [
  { label: "About Levexa", href: "/about" },
  { label: "Our Work", href: "/work" },
  { label: "All Services Overview", href: "/services" },
  { label: "Get in Touch", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
];
