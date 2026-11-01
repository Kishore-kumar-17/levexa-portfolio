"use client";

import React, { useEffect, useRef, useState } from "react";
import { ExternalLink, Eye, Heart } from "lucide-react";
import { ClientReel, reelUrl } from "@/data/instagram-works";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

// Card widths are fixed so heights are exact: 300px on phones, 330px from sm up.
// Instagram's embed is a 54px header, a media area 1.25x the width tall, then ~109px down to
// the end of the likes line, so the frame is cut right after the likes (no scrollbar, no
// half-visible comment row): 54 + 1.25 * 300 + 109 = 538px, 54 + 1.25 * 330 + 109 = 576px.
const CARD_WIDTH = "w-[300px] sm:w-[330px]";
const EMBED_HEIGHT = "h-[538px] sm:h-[576px]";

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
      aria-label={`Reel by ${reel.clientHandle}`}
      className="block w-full aspect-[9/16] object-cover bg-[#07192F]"
    />
  );
};

// Fallback until a video file is added: Instagram's official embed, cropped after the likes
const InstagramEmbed: React.FC<{ reel: ClientReel }> = ({ reel }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-white ${EMBED_HEIGHT}`}>
      {/* Skeleton while Instagram loads */}
      {!loaded && <div className="absolute inset-0 animate-pulse bg-stone-100" aria-hidden="true" />}
      <iframe
        src={`${reelUrl(reel)}embed/`}
        title={`Instagram reel by ${reel.clientHandle}`}
        loading="lazy"
        scrolling="no"
        allow="autoplay; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        onLoad={() => setLoaded(true)}
        className={`absolute inset-x-0 top-0 w-full h-[700px] border-0 transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export const ReelCard: React.FC<{ reel: ClientReel }> = ({ reel }) => (
  <article className={`${CARD_WIDTH} shrink-0 snap-center flex flex-col`}>
    <div className="rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
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
