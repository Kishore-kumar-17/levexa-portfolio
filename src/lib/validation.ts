import type { ContactFormData } from "@/types";

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  sanitizedData?: ContactFormData;
}

// Shared by the contact form (rendered options) and the API (allowed values)
export const SERVICE_OPTIONS = [
  { value: "growth-strategy", label: "Growth & Strategy" },
  { value: "branding-marketing", label: "Branding & Marketing" },
  { value: "sales-conversion", label: "Sales & Conversion" },
  { value: "technology-automation", label: "Technology & Automation" },
  { value: "full-echelon", label: "All of the above" },
] as const;

export const BUDGET_OPTIONS = [
  { value: "under-25l", label: "Under ₹25 lakh a year" },
  { value: "25l-1cr", label: "₹25 lakh – ₹1 crore a year" },
  { value: "1cr-10cr", label: "₹1 crore – ₹10 crore a year" },
  { value: "10cr-plus", label: "Above ₹10 crore a year" },
] as const;

export function getOptionLabel(
  options: ReadonlyArray<{ value: string; label: string }>,
  value: string
): string {
  return options.find((opt) => opt.value === value)?.label ?? value;
}

// People need several seconds to fill in the form; bots submit almost instantly
export const MIN_FILL_MS = 3000;

/** True when a submission arrives too soon after the form was shown (or without timing). */
export function isSubmittedTooFast(elapsedMs: unknown): boolean {
  return typeof elapsedMs !== "number" || !Number.isFinite(elapsedMs) || elapsedMs < MIN_FILL_MS;
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

  // Phone / WhatsApp (optional): digits with optional +, spaces, dashes or brackets
  const phone = data.phone?.trim() || "";
  if (phone && !/^\+?[\d\s\-()]{7,20}$/.test(phone)) {
    errors.phone = "Please enter a valid phone number, e.g. +91 98765 43210.";
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
          phone: phone || undefined,
          company,
          service,
          budget: budget || undefined,
          message,
          consent: Boolean(data.consent),
        }
      : undefined,
  };
}
