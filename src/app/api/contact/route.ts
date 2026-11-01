import { NextRequest, NextResponse } from "next/server";
import {
  validateContactForm,
  getOptionLabel,
  SERVICE_OPTIONS,
  BUDGET_OPTIONS,
} from "@/lib/validation";

// Simple in-memory rate limiting store (IP -> array of timestamps)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  // Filter timestamps within current window
  const recentTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (recentTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  recentTimestamps.push(now);
  rateLimitMap.set(ip, recentTimestamps);
  return false;
}

export async function POST(request: NextRequest) {
  try {
    // 1. IP extraction & Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "anonymous-client";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many submission attempts. Please wait a few minutes before trying again.",
        },
        { status: 429 }
      );
    }

    // 2. Body parsing
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid payload format." },
        { status: 400 }
      );
    }

    // 3. Server-side validation
    const validation = validateContactForm(body);
    if (!validation.isValid || !validation.sanitizedData) {
      return NextResponse.json(
        {
          success: false,
          message: "Please review the form for errors.",
          errors: validation.errors,
        },
        { status: 422 }
      );
    }

    const { fullName, email, phone, company, service, budget, message } = validation.sanitizedData;
    const serviceLabel = getOptionLabel(SERVICE_OPTIONS, service);
    const budgetLabel = budget ? getOptionLabel(BUDGET_OPTIONS, budget) : "Not specified";

    // 4. Safe server logging: no personal data (email domain only)
    console.log(
      `[Contact Submission] from @${email.split("@")[1]} | Company: ${company || "n/a"} | Service: ${service}`
    );

    // 5. Provider integration check (e.g. Resend / Webhook)
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL_RECIPIENT || "ceo.levexa@gmail.com";
    const senderEmail =
      process.env.CONTACT_EMAIL_FROM || "Levexa Inquiries <onboarding@resend.dev>";

    if (!resendApiKey && process.env.NODE_ENV === "production") {
      // Never report success for an enquiry that cannot be delivered
      console.error("[Contact API] RESEND_API_KEY is not configured; enquiry was not delivered.");
      return NextResponse.json(
        {
          success: false,
          message: `Our enquiry form is temporarily unavailable. Please email us directly at ${recipientEmail}.`,
        },
        { status: 503 }
      );
    }

    if (resendApiKey) {
      // Dispatches via Resend API if configured
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: senderEmail,
            to: [recipientEmail],
            reply_to: email,
            subject: `New Levexa Enquiry: ${company || fullName} (${serviceLabel})`,
            html: `
              <h2>New Growth Enquiry for Levexa</h2>
              <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
              <p><strong>Email:</strong> ${escapeHtml(email)}</p>
              <p><strong>Phone / WhatsApp:</strong> ${escapeHtml(phone || "Not provided")}</p>
              <p><strong>Company:</strong> ${escapeHtml(company || "Not specified")}</p>
              <p><strong>Service of Interest:</strong> ${escapeHtml(serviceLabel)}</p>
              <p><strong>Company Stage:</strong> ${escapeHtml(budgetLabel)}</p>
              <h3>Project Details:</h3>
              <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
            `,
          }),
        });

        if (!resendRes.ok) {
          const errData = await resendRes.text();
          console.error("[Email Provider Error]", errData);
          return NextResponse.json(
            {
              success: false,
              message: "Unable to dispatch message via email provider. Please try again shortly.",
            },
            { status: 502 }
          );
        }
      } catch (emailErr) {
        console.error("[Email Dispatch Exception]", emailErr);
        return NextResponse.json(
          {
            success: false,
            message: `Network error delivering message. Please reach out directly to ${recipientEmail}.`,
          },
          { status: 500 }
        );
      }
    } else {
      // Development-only fallback: enquiry is logged instead of emailed
      console.log(
        "[Notice] RESEND_API_KEY is not defined. Enquiry logged locally (development only)."
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you for contacting Levexa. Your enquiry has been received and our strategic advisory team will review your objectives within 24 business hours.",
      submittedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[Contact API Exception]", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected server error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
