export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  challenges: string[];
  deliverables: string[];
  metricsFocus: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  clientBadge: string;
  industry: string;
  serviceCategory: "Strategy" | "Marketing" | "Sales" | "Growth";
  summary: string;
  challenge: string;
  approach: string;
  solution: string;
  outcomes: string[];
  timeline: string;
  isIllustrative: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  keyOutputs: string[];
}

export interface CoreValue {
  title: string;
  description: string;
  iconName: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
  service: string;
  budget?: string;
  message: string;
  consent: boolean;
  honeypot?: string; // spam protection
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string>;
}
