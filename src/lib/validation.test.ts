// Run with: npm test (Node's built-in test runner; Node 23.6+ runs TypeScript directly)
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  validateContactForm,
  getOptionLabel,
  isSubmittedTooFast,
  MIN_FILL_MS,
  SERVICE_OPTIONS,
  BUDGET_OPTIONS,
} from "./validation.ts";

const validSubmission = {
  fullName: "Priya Raman",
  email: "Priya@Example.com",
  company: "",
  service: "growth-strategy",
  budget: "25l-1cr",
  message: "We want to grow inbound leads from Instagram.",
  consent: true,
  honeypot: "",
};

test("accepts every service option the form offers", () => {
  for (const option of SERVICE_OPTIONS) {
    const result = validateContactForm({ ...validSubmission, service: option.value });
    assert.equal(result.isValid, true, `service "${option.value}" should be valid`);
  }
});

test("accepts every budget option the form offers, and an empty budget", () => {
  for (const option of BUDGET_OPTIONS) {
    assert.equal(validateContactForm({ ...validSubmission, budget: option.value }).isValid, true);
  }
  assert.equal(validateContactForm({ ...validSubmission, budget: "" }).isValid, true);
});

test("sanitizes data: trims and lowercases email, company optional", () => {
  const result = validateContactForm({ ...validSubmission, email: "  Priya@Example.com " });
  assert.equal(result.isValid, true);
  assert.equal(result.sanitizedData?.email, "priya@example.com");
  assert.equal(result.sanitizedData?.company, "");
});

test("rejects unknown service and budget values", () => {
  const badService = validateContactForm({ ...validSubmission, service: "Strategy" });
  assert.equal(badService.isValid, false);
  assert.ok(badService.errors.service);

  const badBudget = validateContactForm({ ...validSubmission, budget: "lots" });
  assert.equal(badBudget.isValid, false);
  assert.ok(badBudget.errors.budget);
});

test("requires name, valid email, service, message of 15+ chars and consent", () => {
  const result = validateContactForm({
    fullName: "",
    email: "not-an-email",
    service: "",
    message: "too short",
    consent: false,
  });
  assert.equal(result.isValid, false);
  assert.deepEqual(Object.keys(result.errors).sort(), [
    "consent",
    "email",
    "fullName",
    "message",
    "service",
  ]);
  assert.equal(result.sanitizedData, undefined);
});

test("enforces maximum lengths", () => {
  const result = validateContactForm({
    ...validSubmission,
    fullName: "a".repeat(101),
    company: "c".repeat(121),
    message: "m".repeat(2501),
  });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.company);
  assert.ok(result.errors.message);
});

test("phone is optional but must look like a phone number when given", () => {
  assert.equal(validateContactForm({ ...validSubmission, phone: "" }).isValid, true);
  const ok = validateContactForm({ ...validSubmission, phone: " +91 82209 76712 " });
  assert.equal(ok.isValid, true);
  assert.equal(ok.sanitizedData?.phone, "+91 82209 76712");
  const bad = validateContactForm({ ...validSubmission, phone: "call me maybe" });
  assert.equal(bad.isValid, false);
  assert.ok(bad.errors.phone);
});

test("rejects submissions that fill the honeypot", () => {
  const result = validateContactForm({ ...validSubmission, honeypot: "http://spam.example" });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.honeypot);
});

test("getOptionLabel returns the label, or the raw value when unknown", () => {
  assert.equal(getOptionLabel(SERVICE_OPTIONS, "growth-strategy"), "Growth & Strategy");
  assert.equal(getOptionLabel(SERVICE_OPTIONS, "unknown"), "unknown");
});

test("flags submissions sent faster than a person could fill the form", () => {
  assert.equal(isSubmittedTooFast(800), true);
  assert.equal(isSubmittedTooFast(MIN_FILL_MS - 1), true);
  assert.equal(isSubmittedTooFast(MIN_FILL_MS), false);
  assert.equal(isSubmittedTooFast(45_000), false);
});

test("flags submissions with missing or invalid timing (e.g. bots posting directly)", () => {
  assert.equal(isSubmittedTooFast(undefined), true);
  assert.equal(isSubmittedTooFast("5000"), true);
  assert.equal(isSubmittedTooFast(Number.NaN), true);
  assert.equal(isSubmittedTooFast(Number.POSITIVE_INFINITY), true);
});
