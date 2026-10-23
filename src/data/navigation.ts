import { NavItem } from "@/types";

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export const footerServicesNavigation: NavItem[] = [
  { label: "Business Strategy", href: "/services#strategy" },
  { label: "Marketing", href: "/services#marketing" },
  { label: "Sales Enablement", href: "/services#sales" },
  { label: "Business Growth", href: "/services#growth" },
];

export const footerCompanyNavigation: NavItem[] = [
  { label: "About Levexa", href: "/about" },
  { label: "Our Methodology", href: "/about#methodology" },
  { label: "Portfolio & Case Studies", href: "/work" },
  { label: "Get in Touch", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
];
