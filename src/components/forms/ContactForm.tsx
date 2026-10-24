"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import { validateContactForm } from "@/lib/validation";
import { ContactFormData } from "@/types";
import { Magnet } from "@/components/ui/Magnet";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    consent: false,
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Client-side validation check
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit enquiry. Please try again.");
      }

      setSubmitSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
        consent: false,
        honeypot: "",
      });
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred. Please try again.";
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div
        className="p-8 sm:p-12 rounded-2xl bg-white border border-[#C88A1A] text-center space-y-5 shadow-card-elevated"
        role="status"
        aria-live="polite"
      >
        <div className="w-14 h-14 rounded-full bg-[#FAF8F5] border border-[#C88A1A] flex items-center justify-center mx-auto text-[#C88A1A]">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold text-[#07192F] tracking-tight">
          Consultation Request Received
        </h3>
        <p className="text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
          Thank you for reaching out to Levexa. A senior commercial growth advisor will review
          your company profile and follow up within 24 business hours to arrange your confidential discovery briefing.
        </p>
        <button
          type="button"
          onClick={() => setSubmitSuccess(false)}
          className="text-xs font-mono font-bold text-[#C88A1A] uppercase tracking-wider hover:underline pt-3 cursor-pointer block mx-auto"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-7 sm:p-10 rounded-2xl bg-white border border-stone-200/80 shadow-card-elevated space-y-6"
      noValidate
    >
      {/* Honeypot field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="hp_field">Do not fill this field</label>
        <input
          id="hp_field"
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {submitError && (
        <div
          className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-3"
          role="alert"
        >
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <span>{submitError}</span>
        </div>
      )}

      {/* Row 1: Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            Full Name <span className="text-[#C88A1A]">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Sarah Jenkins"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={`w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border text-[#07192F] placeholder-slate-400 text-sm focus:outline-none transition-colors ${
              errors.fullName
                ? "border-red-500 focus:border-red-400"
                : "border-stone-200 focus:border-[#C88A1A] focus:ring-1 focus:ring-[#C88A1A]"
            }`}
          />
          {errors.fullName && (
            <p id="fullName-error" className="text-xs text-red-500 mt-1.5 font-medium">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            Business Email <span className="text-[#C88A1A]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="sarah@yourcompany.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border text-[#07192F] placeholder-slate-400 text-sm focus:outline-none transition-colors ${
              errors.email
                ? "border-red-500 focus:border-red-400"
                : "border-stone-200 focus:border-[#C88A1A] focus:ring-1 focus:ring-[#C88A1A]"
            }`}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-red-500 mt-1.5 font-medium">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Company & Service */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="company"
            className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            Company / Website
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Acme Corp (acme.com)"
            className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200 text-[#07192F] placeholder-slate-400 text-sm focus:outline-none focus:border-[#C88A1A] focus:ring-1 focus:ring-[#C88A1A] transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            Primary Growth Discipline
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200 text-[#07192F] text-sm focus:outline-none focus:border-[#C88A1A] focus:ring-1 focus:ring-[#C88A1A] transition-colors cursor-pointer"
          >
            <option value="">Select primary focus...</option>
            <option value="growth-strategy">01. Growth &amp; Strategy Advisory</option>
            <option value="branding-marketing">02. Branding &amp; Demand Generation</option>
            <option value="sales-conversion">03. Sales Velocity &amp; Pipeline Conversion</option>
            <option value="technology-automation">04. Technology, AI &amp; Automation</option>
            <option value="full-echelon">05. Full Echelon Commercial Overhaul</option>
          </select>
        </div>
      </div>

      {/* Row 3: Revenue / Budget Stage */}
      <div>
        <label
          htmlFor="budget"
          className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2"
        >
          Company Stage / Annual Revenue Run-Rate
        </label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200 text-[#07192F] text-sm focus:outline-none focus:border-[#C88A1A] focus:ring-1 focus:ring-[#C88A1A] transition-colors cursor-pointer"
        >
          <option value="">Select current stage...</option>
          <option value="under-1m">Early Scaling (&lt; $1M ARR / Annual Revenue)</option>
          <option value="1m-5m">Growth Stage ($1M – $5M ARR)</option>
          <option value="5m-20m">Expansion Stage ($5M – $20M ARR)</option>
          <option value="20m-plus">Enterprise Tier ($20M+ ARR)</option>
        </select>
      </div>

      {/* Row 4: Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2"
        >
          Commercial Friction Points &amp; Objectives <span className="text-[#C88A1A]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Briefly describe your company's current stage, market challenges, and the primary commercial outcomes you are looking to unlock..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border text-[#07192F] placeholder-slate-400 text-sm focus:outline-none transition-colors ${
            errors.message
              ? "border-red-500 focus:border-red-400"
              : "border-stone-200 focus:border-[#C88A1A] focus:ring-1 focus:ring-[#C88A1A]"
          }`}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-red-500 mt-1.5 font-medium">
            {errors.message}
          </p>
        )}
      </div>

      {/* Row 5: Consent Checkbox */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 w-4 h-4 rounded border-stone-300 text-[#C88A1A] focus:ring-[#C88A1A]"
          />
          <span className="text-xs text-slate-600 leading-relaxed">
            I consent to Levexa storing and processing this information for the sole purpose of
            conducting an executive briefing in accordance with the{" "}
            <a href="/privacy" className="text-[#C88A1A] hover:underline font-bold">
              Privacy Policy
            </a>
            .
          </span>
        </label>
        {errors.consent && (
          <p className="text-xs text-red-500 mt-1.5 font-medium">{errors.consent}</p>
        )}
      </div>

      {/* Submit Button */}
      <Magnet magnetStrength={2.2} padding={50} className="w-full">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-sm bg-[#07192F] text-white hover:bg-[#C88A1A] hover:text-[#07192F] shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none select-none min-h-[50px] cursor-pointer uppercase tracking-wider"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-white" />
              <span>SUBMITTING ENQUIRY...</span>
            </>
          ) : (
            <>
              <span>SUBMIT CONSULTATION REQUEST</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </Magnet>

      <p className="text-[11px] font-mono text-center text-slate-500 uppercase tracking-wider">
        CONFIDENTIALITY GUARANTEED • STRICT NDA COMMITMENT
      </p>
    </form>
  );
};
