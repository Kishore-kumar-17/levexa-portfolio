"use client";

import React, { useEffect, useRef, useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import { validateContactForm, SERVICE_OPTIONS, BUDGET_OPTIONS } from "@/lib/validation";
import { ContactFormData } from "@/types";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
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

  // When the form appeared, to measure how long the visitor took (spam check on the server)
  const shownAtRef = useRef(0);
  useEffect(() => {
    shownAtRef.current = Date.now();
  }, []);

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
        // elapsedMs lets the server reject bots that submit instantly
        body: JSON.stringify({ ...formData, elapsedMs: Date.now() - shownAtRef.current }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit enquiry. Please try again.");
      }

      setSubmitSuccess(true);
      shownAtRef.current = Date.now();
      setFormData({
        fullName: "",
        email: "",
        phone: "",
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
        <h3 className="text-2xl font-bold text-[#04162A] tracking-tight">
          Thank you, your enquiry is in
        </h3>
        <p className="text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
          Lavanya will read your message personally and reply within 24 business hours to set up a
          short discovery call.
        </p>
        <button
          type="button"
          onClick={() => setSubmitSuccess(false)}
          className="text-xs font-mono font-bold text-gold-ink uppercase tracking-wider hover:underline pt-3 cursor-pointer block mx-auto"
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
            className="block text-sm font-semibold text-slate-800 mb-2"
          >
            Full Name <span className="text-gold-ink">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Priya Sharma"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={`w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border text-[#04162A] placeholder-slate-500 text-base focus:outline-none transition-colors ${
              errors.fullName
                ? "border-red-500 focus:border-red-400"
                : "border-stone-200 focus:border-[#C88A1A] focus:ring-1 focus:ring-[#C88A1A]"
            }`}
          />
          {errors.fullName && (
            <p id="fullName-error" className="text-xs text-red-600 mt-1.5 font-medium">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-slate-800 mb-2"
          >
            Business Email <span className="text-gold-ink">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border text-[#04162A] placeholder-slate-500 text-base focus:outline-none transition-colors ${
              errors.email
                ? "border-red-500 focus:border-red-400"
                : "border-stone-200 focus:border-[#C88A1A] focus:ring-1 focus:ring-[#C88A1A]"
            }`}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-red-600 mt-1.5 font-medium">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Phone & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-800 mb-2">
            Phone / WhatsApp (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +91 98765 43210"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={`w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border text-[#04162A] placeholder-slate-500 text-base focus:outline-none transition-colors ${
              errors.phone
                ? "border-red-500 focus:border-red-400"
                : "border-stone-200 focus:border-[#C88A1A] focus:ring-1 focus:ring-[#C88A1A]"
            }`}
          />
          {errors.phone && (
            <p id="phone-error" className="text-xs text-red-600 mt-1.5 font-medium">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-sm font-semibold text-slate-800 mb-2"
          >
            Company or website (optional)
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Acme Foods (acmefoods.in)"
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "company-error" : undefined}
            className={`w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border text-[#04162A] placeholder-slate-500 text-base focus:outline-none transition-colors ${
              errors.company
                ? "border-red-500 focus:border-red-400"
                : "border-stone-200 focus:border-[#C88A1A] focus:ring-1 focus:ring-[#C88A1A]"
            }`}
          />
          {errors.company && (
            <p id="company-error" className="text-xs text-red-600 mt-1.5 font-medium">
              {errors.company}
            </p>
          )}
        </div>
      </div>

      {/* Row 3: Service & Annual Revenue */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-semibold text-slate-800 mb-2"
          >
            Service you&apos;re interested in <span className="text-gold-ink">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
            className={`w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border text-[#04162A] text-base focus:outline-none transition-colors cursor-pointer ${
              errors.service
                ? "border-red-500 focus:border-red-400"
                : "border-stone-200 focus:border-[#C88A1A] focus:ring-1 focus:ring-[#C88A1A]"
            }`}
          >
            <option value="">Select a service...</option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id="service-error" className="text-xs text-red-600 mt-1.5 font-medium">
              {errors.service}
            </p>
          )}
        </div>

        <div>
        <label
          htmlFor="budget"
          className="block text-sm font-semibold text-slate-800 mb-2"
        >
          Annual revenue (optional)
        </label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200 text-[#04162A] text-base focus:outline-none focus:border-[#C88A1A] focus:ring-1 focus:ring-[#C88A1A] transition-colors cursor-pointer"
        >
          <option value="">Select a range...</option>
          {BUDGET_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.budget && (
          <p className="text-xs text-red-600 mt-1.5 font-medium">{errors.budget}</p>
        )}
        </div>
      </div>

      {/* Row 4: Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-slate-800 mb-2"
        >
          What would you like help with? <span className="text-gold-ink">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your business, what you've tried so far and what you'd like to achieve..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border text-[#04162A] placeholder-slate-500 text-base focus:outline-none transition-colors ${
            errors.message
              ? "border-red-500 focus:border-red-400"
              : "border-stone-200 focus:border-[#C88A1A] focus:ring-1 focus:ring-[#C88A1A]"
          }`}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-red-600 mt-1.5 font-medium">
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
            required
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-0.5 w-5 h-5 shrink-0 rounded border-stone-300 text-[#C88A1A] focus:ring-[#C88A1A]"
          />
          <span className="text-sm text-slate-700 leading-relaxed">
            I agree to Levexa using these details to respond to my enquiry, in line with the{" "}
            <a href="/privacy" className="text-[#04162A] underline underline-offset-2 font-semibold hover:text-gold-ink">
              Privacy Policy
            </a>
            . <span className="text-gold-ink">*</span>
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="text-xs text-red-600 mt-1.5 font-medium">
            {errors.consent}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-50 disabled:pointer-events-none">
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending…</span>
          </>
        ) : (
          <>
            <span>Book my growth call</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-sm text-center text-slate-600">
        We only use your details to reply to your enquiry.
      </p>
    </form>
  );
};
