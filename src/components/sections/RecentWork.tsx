import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clientReels } from "@/data/instagram-works";
import { parseCount } from "@/lib/counts";
import { ReelEmbedCard } from "@/components/portfolio/ReelEmbedCard";

// Home page proof: the three most-viewed client reels, with a link to all work
export const RecentWork: React.FC = () => {
  const topReels = [...clientReels].sort((a, b) => parseCount(b.views) - parseCount(a.views)).slice(0, 3);

  return (
    <section id="recent-work" className="w-full bg-white border-t border-stone-200/60 py-16 sm:py-20 lg:py-24">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 lg:mb-14">
          <div className="max-w-2xl">
            <h2 className="type-h2 text-[#07192F] mb-4">
              Recent <span className="text-[#C88A1A]">work</span>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Reels we scripted for founders and brands, with the results they earned.
            </p>
          </div>
          <Link href="/work" className="btn-secondary self-start sm:self-auto shrink-0">
            See all work
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 justify-items-center">
          {topReels.map((reel) => (
            <ReelEmbedCard key={reel.id} reel={reel} />
          ))}
        </div>
      </div>
    </section>
  );
};
