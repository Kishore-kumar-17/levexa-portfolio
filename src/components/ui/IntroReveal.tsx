"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface IntroRevealProps {
  onComplete?: () => void;
}

interface RevealCard {
  id: string;
  tag: string;
  title: string;
  image?: string;
  isCenterBrand?: boolean;
}

const REVEAL_CARDS: RevealCard[] = [
  {
    id: "growth-strategy",
    tag: "01 // STRATEGY",
    title: "Growth & Strategy",
    image:
      "/images/pillars/01-growth-strategy.jpg",
  },
  {
    id: "branding-marketing",
    tag: "02 // BRANDING",
    title: "Branding & Marketing",
    image:
      "/images/pillars/02-branding-marketing.jpg",
  },
  {
    id: "levexa-core",
    tag: "LEVEXA",
    title: "Commercial Architecture",
    isCenterBrand: true, // Center gateway brand card with Levexa logo
  },
  {
    id: "sales-conversion",
    tag: "03 // SALES",
    title: "Sales & Conversion",
    image:
      "/images/pillars/03-sales-conversion.jpg",
  },
  {
    id: "technology-automation",
    tag: "04 // AUTOMATION",
    title: "Technology & Automation",
    image:
      "/images/pillars/04-technology-automation.jpg",
  },
];

// Cards are laid out once at their final size; the "growing" effect is a scale
// transform so the animation never triggers layout (no layout shift, no reflow).
const CARD_WIDTH = 272;
const CARD_HEIGHT = 360;

const FAN_DURATION = 2200; // 2.2s fan-out & rotation from Avea reference
const FLY_DURATION = 1200; // 1.2s smooth camera fly-through

// Styles for one animation frame. fan/fly are eased progress values (0 to 1).
function getFrameStyles(fan: number, fly: number, flying: boolean) {
  // 3D Geometry: starts rotated at -160deg, finishes at 0deg facing camera directly
  const cylinderRotation = (1 - fan) * -160;
  const cylinderRadius = 40 + 360 * fan;
  const cardScale = (36 + 236 * fan) / CARD_WIDTH;

  // Fly-through transformations
  const cameraScale = 1 + fly * 1.35;
  const cameraZ = fly * 220;

  return {
    // The overlay fades to reveal the REAL underlying HeroSection (no duplicate text)
    backdropColor: `rgba(250, 248, 245, ${flying ? Math.max(0, 1 - fly * 1.35) : 1})`,
    stageOpacity: String(Math.max(0, 1 - Math.pow(fly, 2.2))),
    cylinderTransform: `scale(${cameraScale}) translateZ(${cameraZ}px) rotateY(${cylinderRotation}deg)`,
    cards: REVEAL_CARDS.map((card, index) => {
      // Symmetrical arc from -70deg to +70deg
      const arcAngle = (index - 2) * 35;

      // During fly-through: Left cards slide left, right cards slide right
      let flyOffset = 0;
      if (flying && index < 2) flyOffset = -fly * 420;
      if (flying && index > 2) flyOffset = fly * 420;

      // Center card fades out faster so camera pushes straight through cleanly
      const opacity = card.isCenterBrand && flying ? Math.max(0, 1 - fly * 2.8) : 1;

      return {
        transform: `rotateY(${arcAngle}deg) translateZ(${cylinderRadius}px) translateX(${flyOffset}px) scale(${cardScale})`,
        opacity: String(opacity),
      };
    }),
  };
}

const INITIAL_FRAME = getFrameStyles(0, 0, false);

const TOTAL_DURATION = FAN_DURATION + FLY_DURATION;
const FAN_SAMPLES = 30;
const FLY_SAMPLES = 20;

// Samples the eased motion into keyframes for the Web Animations API. Browser-run
// transform/opacity animations stay off the main thread and never count as layout shifts.
function buildTimeline() {
  const frames: { offset: number; frame: ReturnType<typeof getFrameStyles> }[] = [];
  for (let i = 0; i <= FAN_SAMPLES; i++) {
    const t = i / FAN_SAMPLES;
    // Smooth cubic ease-out
    const fan = 1 - Math.pow(1 - t, 3);
    frames.push({ offset: (t * FAN_DURATION) / TOTAL_DURATION, frame: getFrameStyles(fan, 0, false) });
  }
  for (let i = 1; i <= FLY_SAMPLES; i++) {
    const ft = i / FLY_SAMPLES;
    // Smooth quartic ease-in-out
    const fly = ft < 0.5 ? 8 * ft * ft * ft * ft : 1 - Math.pow(-2 * ft + 2, 4) / 2;
    frames.push({
      offset: (FAN_DURATION + ft * FLY_DURATION) / TOTAL_DURATION,
      frame: getFrameStyles(1, fly, true),
    });
  }
  return frames;
}

export const IntroReveal: React.FC<IntroRevealProps> = ({ onComplete }) => {
  const [isDone, setIsDone] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cylinderRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let finished = false;
    const animations: Animation[] = [];

    const finish = () => {
      if (finished) return;
      finished = true;
      animations.forEach((animation) => animation.cancel());
      setIsDone(true);
      if (onComplete) onComplete();
    };

    // Skip the intro entirely for users who prefer reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }

    const timeline = buildTimeline();
    const timing: KeyframeAnimationOptions = { duration: TOTAL_DURATION, easing: "linear", fill: "forwards" };
    const animate = (el: HTMLElement | null, keyframes: Keyframe[]) => {
      if (el) animations.push(el.animate(keyframes, timing));
    };

    animate(
      overlayRef.current,
      timeline.map(({ offset, frame }) => ({ offset, backgroundColor: frame.backdropColor }))
    );
    animate(
      stageRef.current,
      timeline.map(({ offset, frame }) => ({ offset, opacity: frame.stageOpacity }))
    );
    animate(
      cylinderRef.current,
      timeline.map(({ offset, frame }) => ({ offset, transform: frame.cylinderTransform }))
    );
    REVEAL_CARDS.forEach((_, index) =>
      animate(
        cardRefs.current[index],
        timeline.map(({ offset, frame }) => ({
          offset,
          transform: frame.cards[index].transform,
          opacity: frame.cards[index].opacity,
        }))
      )
    );

    animations[0]?.finished.then(finish).catch(() => {
      // Cancelled (Escape or unmount); nothing to do
    });

    // Escape skips the intro; the listener only exists while the intro is playing
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") finish();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (!finished) animations.forEach((animation) => animation.cancel());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isDone) return null;

  return (
    <div
      ref={overlayRef}
      id="intro-reveal-overlay"
      className="fixed inset-0 z-50 overflow-hidden pointer-events-none"
      style={{ backgroundColor: INITIAL_FRAME.backdropColor }}
      aria-label="Levexa 3D Camera Fly-Through"
    >
      {/* Top Navigation Bar: Anchored on white background */}
      <header className="absolute top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100 transition-colors duration-300 pointer-events-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="relative w-36 sm:w-44 h-8 sm:h-9">
                <Image
                  src="/levexa-logo-light-trans.png"
                  alt="Levexa"
                  fill
                  sizes="176px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              <span className="text-[12px] uppercase font-medium tracking-[0.18em] text-slate-500 hover:text-black transition-colors">
                RESEARCH
              </span>
              <span className="text-[12px] uppercase font-medium tracking-[0.18em] text-slate-500 hover:text-black transition-colors">
                STRATEGY
              </span>
              <span className="text-[12px] uppercase font-medium tracking-[0.18em] text-slate-500 hover:text-black transition-colors">
                MARKETING
              </span>
              <span className="text-[12px] uppercase font-medium tracking-[0.18em] text-slate-500 hover:text-black transition-colors">
                SALES
              </span>
              <span className="text-[12px] uppercase font-medium tracking-[0.18em] text-slate-500 hover:text-black transition-colors">
                WORK
              </span>
            </nav>

            {/* Right Call-To-Action Button */}
            <div className="flex items-center">
              <div className="bg-black text-white text-[12px] uppercase tracking-[0.16em] font-semibold px-6 py-2.5 transition-all">
                TALK TO US
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3D Perspective Arc & Camera Fly-Through Stage */}
      <div
        ref={stageRef}
        className="absolute inset-0 z-20 flex items-center justify-center pt-16 pointer-events-none"
        style={{
          perspective: "1200px",
          perspectiveOrigin: "50% 50%",
          opacity: INITIAL_FRAME.stageOpacity,
        }}
      >
        <div
          ref={cylinderRef}
          className="relative will-change-transform"
          style={{
            width: `${CARD_WIDTH}px`,
            height: `${CARD_HEIGHT}px`,
            transformStyle: "preserve-3d",
            transform: INITIAL_FRAME.cylinderTransform,
          }}
        >
          {REVEAL_CARDS.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="absolute inset-0 rounded-[4px] shadow-2xl overflow-hidden border border-slate-200/90 bg-white will-change-transform"
              style={{
                transformStyle: "preserve-3d",
                transform: INITIAL_FRAME.cards[index].transform,
                opacity: INITIAL_FRAME.cards[index].opacity,
              }}
            >
              {card.isCenterBrand ? (
                /* Center Brand Card: Official Levexa Logo in Center Gateway */
                <div className="relative w-full h-full bg-[#FAFAF9] flex flex-col items-center justify-center p-6 text-center border-2 border-slate-900/10">
                  {/* Official Levexa Logo */}
                  <div className="relative w-44 sm:w-48 h-12 sm:h-14 mb-4">
                    <Image
                      src="/levexa-logo-light-trans.png"
                      alt="Levexa Logo"
                      fill
                      sizes="192px"
                      className="object-contain"
                      priority
                    />
                  </div>

                  <div className="text-[10px] font-mono tracking-[0.22em] text-[#07192F] uppercase font-bold mb-1">
                    COMMERCIAL ARCHITECTURE
                  </div>

                  {/* Gold Signature Accent Line */}
                  <div className="w-10 h-[3px] bg-[#C88A1A] rounded-full my-3" />

                  <p className="text-[11px] text-slate-500 font-medium tracking-wide max-w-[210px] leading-relaxed">
                    A Research-Driven Growth Agency for Ambitious Brands
                  </p>

                  <div className="mt-5 flex items-center gap-1.5 text-[9px] font-mono tracking-wider text-slate-500 uppercase">
                    <span>01</span>
                    <span>•</span>
                    <span>02</span>
                    <span>•</span>
                    <span>03</span>
                    <span>•</span>
                    <span>04</span>
                  </div>
                </div>
              ) : (
                /* The 4 Service Boxes: ONLY Image + Clean Caption (No descriptions, no bullet points) */
                <div className="relative w-full h-full bg-slate-950 text-left overflow-hidden">
                  {card.image && (
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="280px"
                      className="object-cover scale-105"
                      priority
                    />
                  )}
                  {/* Gradient scrim for clean, crisp caption legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-5 text-white">
                    <div className="text-[10px] font-mono tracking-widest text-[#C88A1A] uppercase font-bold">
                      {card.tag}
                    </div>
                    <div className="text-lg font-semibold tracking-tight mt-1 text-white leading-tight">
                      {card.title}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
