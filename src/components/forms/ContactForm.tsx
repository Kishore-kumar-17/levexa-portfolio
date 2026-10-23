"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { validateContactForm } from "@/lib/validation";
import { ContactFormData } from "@/types";

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        if (result.errors) {
          setErrors(result.errors);
        }
        setSubmitError(
          result.message || "Failed to submit enquiry. Please verify details and try again."
        );
        setIsSubmitting(false);
        return;
      }

      // Success
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
      setErrors({});
    } catch {
      setSubmitError(
        "A network connection error occurred. Please check your connection or email enquiry@levexa.com directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div
        className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-emerald-300 text-center space-y-5 shadow-sm"
        role="alert"
        aria-live="polite"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#10B981] flex items-center justify-center mx-auto border border-emerald-200">
          <CheckCircle2 className="w-8 h-8 text-[#10B981]" />
        </div>
        <h3 className="text-2xl font-bold text-[#07192F]">Enquiry Received</h3>
        <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
          Thank you for reaching out to Levexa. Our strategic advisory team has
          logged your growth objectives and will follow up within 24 business hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitSuccess(false)}
          className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider hover:underline pt-2 cursor-pointer"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs space-y-6"
      noValidate
    >
      {/* Honeypot field (hidden from genuine users) */}
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
            Full Name <span className="text-[#F59E0B]">*</span>
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
            className={`w-full px-4 py-3 rounded-xl bg-white border text-slate-900 placeholder-slate-400 text-sm focus:outline-none transition-colors ${
              errors.fullName
                ? "border-red-500 focus:border-red-400"
                : "border-slate-200 focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
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
            Business Email <span className="text-[#F59E0B]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="s.jenkins@company.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full px-4 py-3 rounded-xl bg-white border text-slate-900 placeholder-slate-400 text-sm focus:outline-none transition-colors ${
              errors.email
                ? "border-red-500 focus:border-red-400"
                : "border-slate-200 focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
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
            Company Name <span className="text-[#F59E0B]">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Technologies Inc."
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "company-error" : undefined}
            className={`w-full px-4 py-3 rounded-xl bg-white border text-slate-900 placeholder-slate-400 text-sm focus:outline-none transition-colors ${
              errors.company
                ? "border-red-500 focus:border-red-400"
                : "border-slate-200 focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
            }`}
          />
          {errors.company && (
            <p id="company-error" className="text-xs text-red-500 mt-1.5 font-medium">
              {errors.company}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            Primary Service Focus <span className="text-[#F59E0B]">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
            className={`w-full px-4 py-3 rounded-xl bg-white border text-slate-900 text-sm focus:outline-none transition-colors ${
              errors.service
                ? "border-red-500 focus:border-red-400"
                : "border-slate-200 focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
            }`}
          >
            <option value="" disabled>
              Select an advisory focus...
            </option>
            <option value="Strategy">Business Strategy & Positioning</option>
            <option value="Marketing">Marketing & Demand Generation</option>
            <option value="Sales">Sales Enablement & Deal Velocity</option>
            <option value="Business Growth">Business Growth & Scaling</option>
            <option value="Full Growth Overhaul">Full Unified Growth Overhaul</option>
            <option value="General Enquiry">General Growth Advisory Enquiry</option>
          </select>
          {errors.service && (
            <p id="service-error" className="text-xs text-red-500 mt-1.5 font-medium">
              {errors.service}
            </p>
          )}
        </div>
      </div>

      {/* Row 3: Estimated Project Budget (Optional) */}
      <div>
        <label
          htmlFor="budget"
          className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2"
        >
          Estimated Advisory Budget Range{" "}
          <span className="text-slate-400 text-[11px] font-normal lowercase font-sans">
            (optional)
          </span>
        </label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] transition-colors"
        >
          <option value="">Select an approximate range...</option>
          <option value="$10k - $25k">$10,000 – $25,000 (Sprint Diagnostic)</option>
          <option value="$25k - $50k">$25,000 – $50,000 (Quarterly Advisory)</option>
          <option value="$50k - $100k">$50,000 – $100,000 (Full Implementation)</option>
          <option value="$100k+">$100,000+ (Enterprise Transformation)</option>
          <option value="Flexible">To Be Determined Based on Scope</option>
        </select>
      </div>

      {/* Row 4: Project Details */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2"
        >
          Project Details &amp; Current Bottlenecks <span className="text-[#F59E0B]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Briefly describe your company's current stage, target audience, and the primary growth challenges you are seeking to solve..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`w-full px-4 py-3 rounded-xl bg-white border text-slate-900 placeholder-slate-400 text-sm focus:outline-none transition-colors ${
            errors.message
              ? "border-red-500 focus:border-red-400"
              : "border-slate-200 focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
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
            className="mt-1 w-4 h-4 rounded border-slate-300 text-[#F59E0B] focus:ring-[#F59E0B]"
          />
          <span className="text-xs text-slate-600 leading-relaxed">
            I consent to Levexa storing and processing my submitted information for
            the sole purpose of responding to this business enquiry in accordance with
            the{" "}
            <a href="/privacy" className="text-[#F59E0B] hover:underline font-bold">
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
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-sm bg-[#F5A900] text-[#07192F] hover:bg-[#E59B00] shadow-sm hover:shadow-md active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none select-none min-h-[50px] cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-[#07192F]" />
            <span>Submitting Enquiry...</span>
          </>
        ) : (
          <>
            <span>Let&apos;s Grow Your Business</span>
            <Send className="w-4 h-4 text-[#07192F]" />
          </>
        )}
      </button>

      <p className="text-[11px] text-center text-slate-500">
        Confidentiality guaranteed. We never sell or share your business data.
      </p>
    </form>
  );
};
