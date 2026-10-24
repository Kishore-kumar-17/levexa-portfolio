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
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop", // Architectural high-rise
  },
  {
    id: "branding-marketing",
    tag: "02 // BRANDING",
    title: "Branding & Marketing",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop", // Editorial portrait
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
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop", // Cobalt art
  },
  {
    id: "technology-automation",
    tag: "04 // AUTOMATION",
    title: "Technology & Automation",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop", // Tech architecture
  },
];

export const IntroReveal: React.FC<IntroRevealProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<"fanning" | "flying" | "done">("fanning");
  const [fanProgress, setFanProgress] = useState(0);
  const [flyProgress, setFlyProgress] = useState(0);
  const animFrameRef = useRef<number | null>(null);

  const startAnimation = () => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }

    setPhase("fanning");
    setFanProgress(0);
    setFlyProgress(0);

    const startTime = performance.now();
    const fanDuration = 2200; // 2.2s fan-out & rotation from Avea reference

    const animateFan = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const t = Math.min(1, elapsed / fanDuration);
      // Smooth cubic ease-out
      const ease = 1 - Math.pow(1 - t, 3);
      setFanProgress(ease);

      if (t < 1) {
        animFrameRef.current = requestAnimationFrame(animateFan);
      } else {
        // Phase 2: Camera Fly-Through (0.0 to 1.0)
        setPhase("flying");
        const flyStartTime = performance.now();
        const flyDuration = 1200; // 1.2s smooth camera fly-through

        const animateFly = (now: number) => {
          const flyElapsed = now - flyStartTime;
          const ft = Math.min(1, flyElapsed / flyDuration);
          // Smooth quartic ease-in-out
          const flyEase =
            ft < 0.5 ? 8 * ft * ft * ft * ft : 1 - Math.pow(-2 * ft + 2, 4) / 2;
          setFlyProgress(flyEase);

          if (ft < 1) {
            animFrameRef.current = requestAnimationFrame(animateFly);
          } else {
            setPhase("done");
            if (onComplete) onComplete();
          }
        };

        animFrameRef.current = requestAnimationFrame(animateFly);
      }
    };

    animFrameRef.current = requestAnimationFrame(animateFan);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const step = params.get("step");

      if (step === "arc") {
        setPhase("fanning");
        setFanProgress(1.0);
        setFlyProgress(0);
        return;
      }
      if (step === "fly") {
        setPhase("flying");
        setFanProgress(1.0);
        setFlyProgress(0.5);
        return;
      }
      if (step === "flyend") {
        setPhase("flying");
        setFanProgress(1.0);
        setFlyProgress(0.85);
        return;
      }
    }

    startAnimation();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        setPhase("done");
        if (onComplete) onComplete();
      } else if (e.key === "r" || e.key === "R" || e.code === "Space") {
        startAnimation();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 3D Geometry:
  // Starts rotated at -160deg, finishes at 0deg facing camera directly
  const cylinderRotation = (1 - fanProgress) * -160;
  const cylinderRadius = 40 + 360 * fanProgress;
  const cardWidth = 36 + 236 * fanProgress;
  const cardHeight = 48 + 312 * fanProgress;

  // Fly-through transformations:
  const cameraScale = 1 + flyProgress * 1.35;
  const cameraZ = flyProgress * 220;
  const cylinderOpacity = Math.max(0, 1 - Math.pow(flyProgress, 2.2));

  // The white overlay fades smoothly to reveal the REAL underlying HeroSection directly!
  // No duplicate text, so 100% ZERO jump or enlargement!
  const backdropOpacity =
    phase === "flying" ? Math.max(0, 1 - flyProgress * 1.35) : 1;

  return (
    <>
      {phase !== "done" && (
        <div
          id="intro-reveal-overlay"
          className="fixed inset-0 z-50 overflow-hidden pointer-events-none"
          style={{
            backgroundColor: `rgba(250, 248, 245, ${backdropOpacity})`,
          }}
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
                    CASE STUDIES
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
            className="absolute inset-0 z-20 flex items-center justify-center pt-16 pointer-events-none"
            style={{
              perspective: "1200px",
              perspectiveOrigin: "50% 50%",
              opacity: cylinderOpacity,
            }}
          >
            <div
              className="relative"
              style={{
                width: `${cardWidth}px`,
                height: `${cardHeight}px`,
                transformStyle: "preserve-3d",
                transform: `scale(${cameraScale}) translateZ(${cameraZ}px) rotateY(${cylinderRotation}deg)`,
              }}
            >
              {REVEAL_CARDS.map((card, index) => {
                // Symmetrical arc from -70deg to +70deg
                const arcAngle = (index - 2) * 35;

                // During fly-through: Left cards slide left, right cards slide right
                let flyOffset = 0;
                if (phase === "flying") {
                  if (index < 2) {
                    flyOffset = -flyProgress * 420;
                  } else if (index > 2) {
                    flyOffset = flyProgress * 420;
                  }
                }

                // Center card fades out faster so camera pushes straight through cleanly
                const cardOpacity =
                  card.isCenterBrand && phase === "flying"
                    ? Math.max(0, 1 - flyProgress * 2.8)
                    : 1;

                return (
                  <div
                    key={card.id}
                    className="absolute inset-0 rounded-[4px] shadow-2xl overflow-hidden border border-slate-200/90 bg-white"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: `rotateY(${arcAngle}deg) translateZ(${cylinderRadius}px) translateX(${flyOffset}px)`,
                      opacity: cardOpacity,
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

                        <div className="mt-5 flex items-center gap-1.5 text-[9px] font-mono tracking-wider text-slate-400 uppercase">
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
                );
              })}
            </div>
          </div>


        </div>
      )}

      {/* Overlay finished */}
    </>
  );
};

