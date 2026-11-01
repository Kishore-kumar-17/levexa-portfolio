import React from "react";
import { ExternalLink, Play } from "lucide-react";
import { ClientReel, reelUrl } from "@/data/instagram-works";

// Instagram's official reel embed renders the real cover and plays in place. Its layout is
// a 54px header, a 4:5 media area and ~110px of footer, so ~350px wide needs ~600px of height.
const EMBED_HEIGHT = 600;

export const ReelEmbedCard: React.FC<{ reel: ClientReel }> = ({ reel }) => (
  <article className="w-full max-w-[350px] flex flex-col">
    <div className="rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-sm">
      <iframe
        src={`${reelUrl(reel)}embed/`}
        title={`Instagram reel by ${reel.clientHandle}`}
        loading="lazy"
        allow="autoplay; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        className="block w-full border-0"
        style={{ height: EMBED_HEIGHT }}
      />
    </div>

    <div className="mt-4 flex items-center justify-between gap-3 text-sm">
      <span className="font-semibold text-[#07192F] truncate">{reel.clientHandle}</span>
      <span className="inline-flex items-center gap-1.5 shrink-0 font-mono font-semibold text-slate-600">
        <Play className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
        {reel.views} views
      </span>
    </div>

    <a href={reelUrl(reel)} target="_blank" rel="noopener noreferrer" className="btn-secondary mt-3 w-full">
      Watch reel on Instagram
      <ExternalLink className="w-4 h-4" aria-hidden="true" />
    </a>
  </article>
);
