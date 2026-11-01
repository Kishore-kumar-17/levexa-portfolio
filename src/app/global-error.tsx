"use client";

import React from "react";

// Last-resort fallback when the root layout itself fails; must render its own <html> and <body>
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAF8F5",
          color: "#07192F",
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: "24px",
        }}
      >
        <main style={{ maxWidth: 560 }}>
          <h1 style={{ fontSize: 40, lineHeight: 1.1, margin: "0 0 16px" }}>
            Something went wrong.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.5, margin: "0 0 24px" }}>
            Please try again, or email us at{" "}
            <a href="mailto:ceo.levexa@gmail.com" style={{ color: "#C88A1A" }}>
              ceo.levexa@gmail.com
            </a>
            .
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              background: "#07192F",
              color: "#fff",
              border: 0,
              borderRadius: 999,
              padding: "12px 24px",
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
