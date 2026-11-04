import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Underline } from "@/components/ui/Underline";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { DotGrid } from "@/components/ui/DotGrid";
import { TESTIMONIALS, SAMPLE_TESTIMONIALS, type Testimonial } from "@/data/testimonials";

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

// What clients say. Real quotes come from data/testimonials.ts; until there are any, the section
// is left out of the live site and local development shows draft cards.
export const Testimonials: React.FC = () => {
  const isSample = TESTIMONIALS.length === 0;
  if (isSample && process.env.NODE_ENV === "production") return null;
  const items: Testimonial[] = isSample ? SAMPLE_TESTIMONIALS : TESTIMONIALS;

  return (
    <section className="relative bg-band text-fg py-20 sm:py-24 border-t border-line/70">
      <DotGrid />
      <Container className="relative">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className="type-h2">
            What our <Underline>clients</Underline> say
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <li
              key={`${t.name}-${i}`}
              className="relative flex flex-col rounded-3xl bg-card border border-line p-7 sm:p-8 shadow-card-elevated"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#FEB005] text-[#04162A]">
                <Quote className="w-5 h-5" aria-hidden="true" />
              </span>

              <blockquote className="mt-6 text-lg leading-relaxed text-fg">&ldquo;{t.quote}&rdquo;</blockquote>

              {t.result && (
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.08em] text-gold-ink">{t.result}</p>
              )}

              <div className="mt-auto pt-7 flex items-center gap-4 border-t border-line/70">
                {t.photo ? (
                  <Image
                    src={t.photo}
                    alt=""
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-[#FEB005]"
                  />
                ) : (
                  <span
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-fg text-page font-display font-bold"
                    aria-hidden="true"
                  >
                    {initials(t.name)}
                  </span>
                )}
                <div>
                  <p className="font-display font-bold text-fg">{t.name}</p>
                  <p className="text-sm text-fg-3">{t.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
