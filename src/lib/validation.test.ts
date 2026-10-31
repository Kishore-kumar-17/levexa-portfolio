// Run with: npm test (Node's built-in test runner; Node 23.6+ runs TypeScript directly)
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  validateContactForm,
  getOptionLabel,
  SERVICE_OPTIONS,
  BUDGET_OPTIONS,
} from "./validation.ts";

const validSubmission = {
  fullName: "Priya Raman",
  email: "Priya@Example.com",
  company: "",
  service: "growth-strategy",
  budget: "1m-5m",
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

test("rejects submissions that fill the honeypot", () => {
  const result = validateContactForm({ ...validSubmission, honeypot: "http://spam.example" });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.honeypot);
});

test("getOptionLabel returns the label, or the raw value when unknown", () => {
  assert.equal(getOptionLabel(SERVICE_OPTIONS, "growth-strategy"), "01. Growth & Strategy Advisory");
  assert.equal(getOptionLabel(SERVICE_OPTIONS, "unknown"), "unknown");
});
