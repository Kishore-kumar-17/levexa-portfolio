import { ContactFormData } from "@/types";

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  sanitizedData?: ContactFormData;
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

  // Company Name validation
  const company = data.company?.trim() || "";
  if (!company) {
    errors.company = "Company name is required.";
  } else if (company.length > 120) {
    errors.company = "Company name cannot exceed 120 characters.";
  }

  // Service of Interest validation
  const validServices = [
    "Strategy",
    "Marketing",
    "Sales",
    "Business Growth",
    "Full Growth Overhaul",
    "General Enquiry",
  ];
  const service = data.service?.trim() || "";
  if (!service) {
    errors.service = "Please select a service of interest.";
  } else if (!validServices.includes(service)) {
    errors.service = "Please select a valid service option.";
  }

  // Budget (optional, but validate length)
  const budget = data.budget?.trim() || "";
  if (budget.length > 50) {
    errors.budget = "Budget selection exceeds valid character limit.";
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
