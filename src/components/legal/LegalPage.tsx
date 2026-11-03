import React from "react";
import { Container } from "@/components/ui/Container";

interface LegalPageProps {
  title: string;
  highlight: string;
  effectiveDate: string;
  intro: React.ReactNode;
  /** Plain-language summary shown in a box above the full text */
  summary: string[];
  children: React.ReactNode;
}

// Shared layout for Privacy Policy and Terms of Use
export const LegalPage: React.FC<LegalPageProps> = ({ title, highlight, effectiveDate, intro, summary, children }) => (
  <div className="pt-24 sm:pt-28 bg-page text-fg">
    <section className="pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-14 border-b border-line">
      <Container>
        <div className="max-w-3xl">
          <h1 className="type-display mb-6">
            {title} <span className="text-gold-deep">{highlight}</span>
          </h1>
          <div className="w-12 h-[3px] bg-accent rounded-full mb-6" aria-hidden="true" />
          <p className="text-base sm:text-lg text-fg-2 leading-relaxed">{intro}</p>
          <p className="mt-4 text-sm font-semibold text-fg-3">Effective date: {effectiveDate}</p>
        </div>
      </Container>
    </section>

    <section className="py-14 lg:py-20">
      <Container>
        <div className="max-w-3xl space-y-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-card border border-accent/40 shadow-2xs">
            <h2 className="text-lg font-bold mb-3">In short</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-base text-fg-2 leading-relaxed">
              {summary.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div className="p-7 sm:p-10 rounded-2xl bg-card border border-line/80 shadow-2xs text-base text-fg-2 leading-relaxed">
            {children}
          </div>
        </div>
      </Container>
    </section>
  </div>
);

// One numbered section of a legal page
export const LegalSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="py-6 first:pt-0 last:pb-0 border-t first:border-t-0 border-line space-y-3">
    <h2 className="text-xl font-bold text-fg tracking-tight">{title}</h2>
    {children}
  </section>
);
