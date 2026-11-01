import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Underline } from "@/components/ui/Underline";
import { PageBanner } from "@/components/sections/PageBanner";
import { GetStartedBox } from "@/components/sections/GetStartedBox";
import { ReelCard } from "@/components/portfolio/ReelCard";
import { clientReels } from "@/data/instagram-works";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Our Work — Instagram Scripts & Reels",
  description:
    "Instagram reels scripted by Levexa for founders and brands: real view, like and comment results from client campaigns.",
  path: "/work",
});

// What each client does (no account names, as agreed); keyed by reel id
const CASES: Record<string, { label: string; about: string }> = {
  "reel-01": { label: "Business coach", about: "A business coach who teaches founders how to build a strong brand." },
  "reel-02": { label: "Entrepreneur", about: "A young entrepreneur sharing what it really takes to build a business." },
  "reel-03": { label: "Ayurveda brand", about: "A mompreneur running an Ayurveda beauty and wellness brand." },
  "reel-04": { label: "Lifestyle brand", about: "A lifestyle brand building trust with a fast-growing audience." },
  "reel-05": { label: "Education brand", about: "An education company helping Indian students plan their higher studies." },
  "reel-06": { label: "Levexa", about: "Lavanya's own Instagram, where she shares lessons on content, leads and sales." },
};

export default function WorkPage() {
  return (
    <div className="bg-[#07192F] text-white">
      {/* 1. Banner */}
      <PageBanner
        image="/images/process/05-optimization.jpg"
        title="Work"
        subtitle={
          <>
            Reels we&apos;ve scripted for founders, coaches and brands, and the results they earned. These are
            some of the projects we&apos;re <Underline>proudest of</Underline>.
          </>
        }
        ctaLabel="Work with us"
        ctaHref="/contact"
      />

      {/* 2. One block per reel, alternating sides */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="space-y-20 sm:space-y-24">
            {clientReels.map((reel, idx) => {
              const info = CASES[reel.id] ?? { label: "Client", about: "" };
              const reversed = idx % 2 === 1;
              return (
                <article
                  key={reel.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto"
                >
                  <div className={reversed ? "lg:order-2" : ""}>
                    <h2 className="inline-block px-6 py-2 rounded-full border-2 border-[#C88A1A] text-2xl sm:text-3xl font-bold text-[#E4AB3C] mb-6">
                      {info.label}
                    </h2>
                    <p className="text-lg text-stone-200 leading-relaxed mb-8">{info.about}</p>

                    <h3 className="text-lg font-semibold text-[#E4AB3C] mb-2">How we helped</h3>
                    <p className="text-base sm:text-lg text-stone-300 leading-relaxed mb-8">
                      We wrote the script: a hook for the first three seconds, a story the audience relates to,
                      and a clear call to action at the end.
                    </p>

                    <h3 className="text-lg font-semibold text-[#E4AB3C] mb-3">Results</h3>
                    <dl className="grid grid-cols-3 gap-4 max-w-md mb-8">
                      {[
                        { label: "Views", value: reel.views },
                        { label: "Likes", value: reel.likes },
                        { label: "Comments", value: reel.comments },
                      ].map((stat) => (
                        <div key={stat.label} className="flex flex-col-reverse">
                          <dt className="text-sm text-stone-400 mt-0.5">{stat.label}</dt>
                          <dd className="text-2xl sm:text-3xl font-bold font-mono">{stat.value}</dd>
                        </div>
                      ))}
                    </dl>

                    <h3 className="text-lg font-semibold text-[#E4AB3C] mb-1">Platform</h3>
                    <p className="text-xl font-semibold">Instagram</p>
                  </div>

                  <div className={`flex justify-center ${reversed ? "lg:order-1" : ""}`}>
                    <div className="rounded-3xl bg-[#FAF8F5] p-4 sm:p-5 shadow-2xl">
                      <ReelCard reel={reel} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. Closing */}
      <GetStartedBox />
    </div>
  );
}
