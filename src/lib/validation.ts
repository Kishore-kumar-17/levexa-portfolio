import { ContactFormData } from "@/types";

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  sanitizedData?: ContactFormData;
}

// Shared by the contact form (rendered options) and the API (allowed values)
export const SERVICE_OPTIONS = [
  { value: "growth-strategy", label: "01. Growth & Strategy Advisory" },
  { value: "branding-marketing", label: "02. Branding & Demand Generation" },
  { value: "sales-conversion", label: "03. Sales Velocity & Pipeline Conversion" },
  { value: "technology-automation", label: "04. Technology, AI & Automation" },
  { value: "full-echelon", label: "05. Full Echelon Commercial Overhaul" },
] as const;

export const BUDGET_OPTIONS = [
  { value: "under-1m", label: "Early Scaling (< $1M ARR / Annual Revenue)" },
  { value: "1m-5m", label: "Growth Stage ($1M – $5M ARR)" },
  { value: "5m-20m", label: "Expansion Stage ($5M – $20M ARR)" },
  { value: "20m-plus", label: "Enterprise Tier ($20M+ ARR)" },
] as const;

export function getOptionLabel(
  options: ReadonlyArray<{ value: string; label: string }>,
  value: string
): string {
  return options.find((opt) => opt.value === value)?.label ?? value;
}

export function validateContactForm(data: Partial<ContactFormData>): ValidationResult {
  const errors: Record<string, string> = {};

  // Check honeypot (anti-spam)
  if (data.honeypot && data.honeypot.trim().length > 0) {
    return {
      isValid: false,
      errors: { honeypot: "Spam detected." },
    };
  }

  // Full Name validation
  const fullName = data.fullName?.trim() || "";
  if (!fullName) {
    errors.fullName = "Full name is required.";
  } else if (fullName.length < 2) {
    errors.fullName = "Name must be at least 2 characters.";
  } else if (fullName.length > 100) {
    errors.fullName = "Name cannot exceed 100 characters.";
  }

  // Email validation
  const email = data.email?.trim().toLowerCase() || "";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    errors.email = "Business email is required.";
  } else if (!emailRegex.test(email)) {
    errors.email = "Please provide a valid email address.";
  } else if (email.length > 120) {
    errors.email = "Email cannot exceed 120 characters.";
  }

  // Company Name validation (optional)
  const company = data.company?.trim() || "";
  if (company.length > 120) {
    errors.company = "Company name cannot exceed 120 characters.";
  }

  // Service of Interest validation
  const service = data.service?.trim() || "";
  if (!service) {
    errors.service = "Please select a service of interest.";
  } else if (!SERVICE_OPTIONS.some((opt) => opt.value === service)) {
    errors.service = "Please select a valid service option.";
  }

  // Budget (optional, but must be a known option)
  const budget = data.budget?.trim() || "";
  if (budget && !BUDGET_OPTIONS.some((opt) => opt.value === budget)) {
    errors.budget = "Please select a valid company stage.";
  }

  // Message validation
  const message = data.message?.trim() || "";
  if (!message) {
    errors.message = "Please provide brief details about your project or growth goals.";
  } else if (message.length < 15) {
    errors.message = "Please provide at least 15 characters of detail.";
  } else if (message.length > 2500) {
    errors.message = "Message must be under 2,500 characters.";
  }

  // Consent validation
  if (!data.consent) {
    errors.consent = "You must agree to the privacy policy to submit an enquiry.";
  }

  const isValid = Object.keys(errors).length === 0;

  return {
    isValid,
    errors,
    sanitizedData: isValid
      ? {
          fullName,
          email,
          company,
          service,
          budget: budget || undefined,
          message,
          consent: Boolean(data.consent),
        }
      : undefined,
  };
}
