"use client";

import React, { useEffect, useRef, useState } from "react";
import { ExternalLink, Eye, Heart } from "lucide-react";
import { ClientReel, reelUrl } from "@/data/instagram-works";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import {
  clearActiveReel,
  firstVisibleVideo,
  getActiveReel,
  markVideoHidden,
  markVideoVisible,
  registerPlayer,
  setActiveReel,
} from "@/lib/reelPlayback";

// Card widths are fixed so the crop below is exact: 300px on phones, 330px from sm up.
const CARD_WIDTH = "w-[300px] sm:w-[330px]";

// Instagram's embed (at layout width X) is a 54px account header, then a 4:5 media area
// (1.25X tall) holding the 9:16 video, which is 0.703X wide. Laying the embed out at
// X = 1.4222 x card width makes the video exactly as wide as the card; shifting it up 54px
// and centring it shows only the video: no account name, avatar, buttons or likes row.
//   card 300 -> X 427, left -64, height 533 (9:16)    card 330 -> X 469, left -70, height 587
const VIDEO_BOX = "h-[533px] sm:h-[587px]";
const EMBED_FRAME = "top-[-54px] left-[-64px] w-[427px] h-[680px] sm:left-[-70px] sm:w-[469px] sm:h-[740px]";

// Self-hosted reel, muted and looped. Only one reel plays at a time: the first one on screen
// autoplays, hovering or tapping another switches to it, and when the playing one scrolls
// away the next visible video takes over.
const AutoplayVideo: React.FC<{ reel: ClientReel }> = ({ reel }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const playThis = () => {
    const video = videoRef.current;
    if (!video) return;
    setActiveReel(reel.id);
    video.play().catch(() => {});
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const unregister = registerPlayer(reel.id, { pause: () => video.pause() });
    if (prefersReducedMotion) return unregister;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markVideoVisible(reel.id, playThis);
          if (!getActiveReel()) playThis();
        } else {
          markVideoHidden(reel.id);
          video.pause();
          if (getActiveReel() === reel.id) {
            clearActiveReel(reel.id);
            firstVisibleVideo()?.[1]();
          }
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(video);
    return () => {
      observer.disconnect();
      markVideoHidden(reel.id);
      unregister();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReducedMotion, reel.id]);

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
      onMouseEnter={prefersReducedMotion ? undefined : playThis}
      onClick={playThis}
      // Playing via the native controls also stops any other reel
      onPlay={() => setActiveReel(reel.id)}
      aria-label="Client reel"
      className="block w-full aspect-[9/16] object-cover bg-[#07192F]"
    />
  );
};

// Stopgap until a video file is added: Instagram's embed, cropped to the video only.
// The embed can't be paused from outside, so when another reel starts this one is reloaded,
// which stops it. Starting it is detected by focus moving into its iframe on click.
const InstagramEmbed: React.FC<{ reel: ClientReel }> = ({ reel }) => {
  const [loaded, setLoaded] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const unregister = registerPlayer(reel.id, {
      pause: () => {
        if (!startedRef.current) return;
        startedRef.current = false;
        setLoaded(false);
        setReloadKey((key) => key + 1);
      },
    });

    // Clicking inside the iframe moves focus into it, which blurs this window
    const handleBlur = () => {
      setTimeout(() => {
        if (document.activeElement !== iframeRef.current) return;
        startedRef.current = true;
        setActiveReel(reel.id);
        // Hand focus back (after Instagram has handled the click) so the next click on
        // another reel blurs the window again and is detected too
        iframeRef.current?.blur();
        window.focus();
      }, 300);
    };
    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("blur", handleBlur);
      unregister();
    };
  }, [reel.id]);

  return (
    <div className={`relative overflow-hidden bg-[#07192F] ${VIDEO_BOX}`}>
      {/* Skeleton while Instagram loads */}
      {!loaded && <div className="absolute inset-0 animate-pulse bg-[#0E2849]" aria-hidden="true" />}
      <iframe
        key={reloadKey}
        ref={iframeRef}
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
