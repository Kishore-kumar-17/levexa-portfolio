"use client";

import React, { useEffect, useRef, useState } from "react";
import { ExternalLink, Eye, Heart } from "lucide-react";
import { ClientReel, reelUrl } from "@/data/instagram-works";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

// Card widths are fixed so the crop below is exact: 300px on phones, 330px from sm up.
const CARD_WIDTH = "w-[300px] sm:w-[330px]";

// Instagram's embed (at layout width X) is a 54px account header, then a 4:5 media area
// (1.25X tall) holding the 9:16 video, which is 0.703X wide. Laying the embed out at
// X = 1.4222 x card width makes the video exactly as wide as the card; shifting it up 54px
// and centring it shows only the video: no account name, avatar, buttons or likes row.
//   card 300 -> X 427, left -64, height 533 (9:16)    card 330 -> X 469, left -70, height 587
const VIDEO_BOX = "h-[533px] sm:h-[587px]";
const EMBED_FRAME = "top-[-54px] left-[-64px] w-[427px] h-[680px] sm:left-[-70px] sm:w-[469px] sm:h-[740px]";

// Self-hosted reel: plays muted and looped while on screen, pauses when scrolled away
const AutoplayVideo: React.FC<{ reel: ClientReel }> = ({ reel }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.5 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <video
      ref={videoRef}
      src={reel.videoSrc}
      poster={reel.poster}
      muted
      loop
      playsInline
      preload="metadata"
      controls={prefersReducedMotion}
      aria-label="Client reel"
      className="block w-full aspect-[9/16] object-cover bg-[#07192F]"
    />
  );
};

// Stopgap until a video file is added: Instagram's embed, cropped to the video only
const InstagramEmbed: React.FC<{ reel: ClientReel }> = ({ reel }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#07192F] ${VIDEO_BOX}`}>
      {/* Skeleton while Instagram loads */}
      {!loaded && <div className="absolute inset-0 animate-pulse bg-[#0E2849]" aria-hidden="true" />}
      <iframe
        src={`${reelUrl(reel)}embed/`}
        title="Client reel"
        loading="lazy"
        scrolling="no"
        allow="autoplay; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        onLoad={() => setLoaded(true)}
        className={`absolute max-w-none border-0 transition-opacity duration-500 ${EMBED_FRAME} ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export const ReelCard: React.FC<{ reel: ClientReel }> = ({ reel }) => (
  <article className={`${CARD_WIDTH} shrink-0 snap-center flex flex-col`}>
    <div className="rounded-2xl overflow-hidden bg-[#07192F] shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
      {reel.videoSrc ? <AutoplayVideo reel={reel} /> : <InstagramEmbed reel={reel} />}
    </div>

    <div className="mt-4 flex items-center gap-5 text-sm font-semibold text-[#07192F]">
      <span className="inline-flex items-center gap-1.5">
        <Eye className="w-4 h-4 text-slate-500" aria-hidden="true" />
        {reel.views}
        <span className="sr-only"> views</span>
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Heart className="w-4 h-4 text-rose-500" aria-hidden="true" />
        {reel.likes}
        <span className="sr-only"> likes</span>
      </span>
    </div>

    <a href={reelUrl(reel)} target="_blank" rel="noopener noreferrer" className="btn-secondary mt-3 w-full">
      Watch reel on Instagram
      <ExternalLink className="w-4 h-4" aria-hidden="true" />
    </a>
  </article>
);

// Row of reel cards: swipeable on phones (next card peeks in), wrapping grid from sm up
export const ReelRow: React.FC<{ reels: ClientReel[] }> = ({ reels }) => (
  <div className="no-scrollbar -mx-4 px-4 flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2 sm:mx-0 sm:px-0 sm:overflow-visible sm:snap-none sm:flex-wrap sm:justify-center sm:gap-6 lg:gap-8">
    {reels.map((reel) => (
      <ReelCard key={reel.id} reel={reel} />
    ))}
  </div>
);
