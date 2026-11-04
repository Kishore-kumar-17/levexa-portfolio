"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { INTRO_CLASS, INTRO_SEEN_KEY } from "@/lib/intro";

/*
  Home intro: tiny specks grow into a turning ring of cards, then the view pushes through it to
  reveal the real homepage.

  The header and WhatsApp button are real and visible throughout. Below them the page is empty:
  1. Tiny specks in one thin line at the centre drift apart.
  2. They grow quickly into cards while the ring keeps turning, so cards slide past each other
     and the ones at the ends turn edge-on.
  3. The ring settles: a big centre card, small cards tucked behind it, angled cards at the sides.
     The centre picture cuts straight to the navy Levexa card.
  4. The view zooms forward: left cards slide out left, right cards slide out right, the Levexa
     card fades as the camera passes through it, and the plain page lifts off the real homepage.

  Only transform and opacity run per frame (Web Animations API, no library). The real page is
  never replaced by a picture, and it plays once per browser session. Any click, scroll or key
  skips it.
*/

interface RingCard {
  id: string;
  src: string;
  /** Angle on the ring when it comes to rest: 0 is the front, ±180 the back */
  rest: number;
}

// In ring order
const RING: RingCard[] = [
  { id: "centre", src: "/images/process/02-strategy.jpg", rest: 0 },
  { id: "strategy", src: "/images/pillars/01-growth-strategy.jpg", rest: 62 },
  { id: "optimise", src: "/images/process/05-optimization.jpg", rest: 126 },
  { id: "sales", src: "/images/pillars/03-sales-conversion.jpg", rest: 162 },
  { id: "design", src: "/images/process/03-design.jpg", rest: 175 },
  { id: "discovery", src: "/images/process/01-discovery.jpg", rest: 180 },
  { id: "growth", src: "/images/process/06-growth.jpg", rest: -175 },
  { id: "branding", src: "/images/pillars/02-branding-marketing.jpg", rest: -162 },
  { id: "develop", src: "/images/process/04-development.jpg", rest: -126 },
  { id: "tech", src: "/images/pillars/04-technology-automation.jpg", rest: -62 },
];

// Cards are laid out at this size and scaled, so the Levexa card's typography keeps its proportions
const BOX_W = 300;
const BOX_H = 375;

// Timeline (ms)
const SETTLED_AT = 2700; // ring at rest, cards full size
const CUT_AT = 2650; // centre picture cuts to the Levexa card
const PUSH_AT = 3050; // the view starts pushing through the ring
const END_AT = 4250; // the homepage is fully revealed
const SAMPLE_MS = 40; // keyframe spacing

// Push-through: f is its eased progress (0 to 1)
const pushProgress = (u: number) => (u < 0.5 ? 8 * u * u * u * u : 1 - Math.pow(-2 * u + 2, 4) / 2);
const CAMERA_ZOOM = 1.85; // extra scale at the end of the push
const SPLIT = 0.3; // how far the cards slide apart, as a share of the window width
const VEIL_FROM = 0.38; // the plain page starts lifting as the cards move aside (no blank moment)...
const VEIL_TO = 0.85; // ...and is gone by here
const cardOpacity = (f: number) => Math.max(0, 1 - Math.pow(f, 1.8));
const frontOpacity = (f: number) => Math.max(0, 1 - f * 2.8); // the Levexa card fades first

// Ring motion, measured from the reference: the growth curve, sideways spread and turn
const RING_TURN = 320; // degrees still to turn at the very start
const G_SPECK = 0.016; // card size at the start, as a share of full size
const G_GROWTH_START = 0.03;
const SIDE_SCALE = 0.88;
const smooth = (u: number) => {
  const c = Math.min(1, Math.max(0, u));
  return c * c * (3 - 2 * c);
};
const lerp = (a: number, b: number, u: number) => a + (b - a) * u;
const rad = (deg: number) => (deg * Math.PI) / 180;

interface Pose {
  x: number; // from the ring centre, px
  size: number; // visual width, px
  ry: number; // card turn, degrees
  z: number;
}

// Where every card is at a moment, given w (0 to 1 progress of the ring's journey)
function poseAt(index: number, w: number, B: number, R: number): Pose {
  const even = (index * 360) / RING.length;
  const evenAngle = even > 180 ? even - 360 : even;
  const settle = smooth((w - 0.6) / 0.4);
  const turn = RING_TURN * Math.pow(1 - w, 1.6);
  const raw = lerp(evenAngle, RING[index].rest, settle) + turn;
  const angle = ((((raw + 180) % 360) + 360) % 360) - 180; // -180..180

  const depth = Math.cos(rad(angle)); // 1 at the front, -1 at the back
  const growth = w < 0.5 ? lerp(G_SPECK, G_GROWTH_START, w / 0.5) : lerp(G_GROWTH_START, 1, smooth((w - 0.5) / 0.5));
  const spread = 0.01 + 0.99 * smooth(w);

  return {
    x: R * B * Math.sin(rad(angle)) * spread,
    // The centre card is the largest; the same depth rule as the reference for the rest
    size: B * growth * (0.75 + 0.25 * depth) * (index === 0 ? 1 : SIDE_SCALE),
    // Front half faces out, back half faces the viewer: both edge-on at the sides
    ry: Math.abs(angle) <= 90 ? angle : angle > 0 ? angle - 180 : angle + 180,
    z: Math.round(100 * (depth + 1)) + 1,
  };
}

// The ring's journey runs fast at first, so the speck stage is short
const journey = (t: number) => Math.min(1, Math.pow(t / SETTLED_AT, 0.7));

interface CardPlan {
  id: string;
  src: string;
  isCentre: boolean;
  left: number;
  top: number;
  width: number;
  height: number;
  transformFrames: Keyframe[];
  zFrames: Keyframe[];
  opacityFrames: Keyframe[];
  first: string;
}

const tf = (x: number, ry: number, s: number) =>
  `translate(${x.toFixed(2)}px, 0px) perspective(900px) rotateY(${ry.toFixed(2)}deg) scale(${s.toFixed(5)})`;

const offsetOf = (t: number) => t / END_AT;

function pushSamples(): { offset: number; f: number }[] {
  const out: { offset: number; f: number }[] = [];
  for (let t = PUSH_AT; t < END_AT; t += SAMPLE_MS) {
    out.push({ offset: offsetOf(t), f: pushProgress((t - PUSH_AT) / (END_AT - PUSH_AT)) });
  }
  out.push({ offset: 1, f: 1 });
  return out;
}

function veilFrames(): Keyframe[] {
  return [
    { offset: 0, opacity: 1 },
    ...pushSamples().map(({ offset, f }) => ({
      offset,
      opacity: 1 - smooth((f - VEIL_FROM) / (VEIL_TO - VEIL_FROM)),
    })),
  ];
}

function buildPlan(): CardPlan[] {
  const W = document.documentElement.clientWidth;
  const H = window.innerHeight;
  const mobile = W < 768;

  // Ring size: fit the space below the header, and keep the angled cards on screen
  const headerBottom = document.querySelector("header")?.getBoundingClientRect().bottom ?? 0;
  const rowY = (headerBottom + H) / 2;
  const areaH = H - headerBottom;
  const B = mobile ? W * 0.52 : Math.min(W * 0.21, areaH * 0.56, 380);
  const R = mobile ? 1.3 : Math.min(2.1, Math.max(1.25, ((W / 2) * 0.95 / B - 0.2) / 0.883));
  const rowX = W / 2;

  const times: number[] = [];
  for (let t = 0; t < SETTLED_AT; t += SAMPLE_MS) times.push(t);
  times.push(SETTLED_AT);
  const push = pushSamples();

  return RING.map((card, index): CardPlan => {
    const isCentre = index === 0;
    const width = BOX_W;
    const height = isCentre ? BOX_W : BOX_H;

    const transformFrames: Keyframe[] = [];
    const zFrames: Keyframe[] = [];
    let prev: { ry: number; offset: number } | null = null;

    times.forEach((t) => {
      const pose = poseAt(index, journey(t), B, R);
      const offset = offsetOf(t);
      const s = pose.size / width;
      // A card flips between its two facings at exactly edge-on, where it has no width.
      // Add that moment as two keyframes, so it never sweeps through face-on.
      if (prev && Math.abs(pose.ry - prev.ry) > 90) {
        const mid = (prev.offset + offset) / 2;
        const sign = prev.ry > 0 ? 1 : -1;
        transformFrames.push(
          { offset: mid - 0.00002, transform: tf(pose.x, 90 * sign, s) },
          { offset: mid + 0.00002, transform: tf(pose.x, -90 * sign, s) }
        );
      }
      transformFrames.push({ offset, transform: tf(pose.x, pose.ry, s) });
      zFrames.push({ offset, zIndex: pose.z });
      prev = { ry: pose.ry, offset };
    });

    const rest = poseAt(index, 1, B, R);
    const restS = rest.size / width;
    const side = Math.sign(card.rest); // left cards go left, right cards go right
    // Cards fully hidden behind the Levexa card go before it starts fading, so they never show through it
    const isHiddenBehind = Math.abs(card.rest) >= 170;

    push.forEach(({ offset, f }) => {
      const camera = 1 + CAMERA_ZOOM * f;
      const x = (rest.x + side * f * SPLIT * W) * camera;
      transformFrames.push({ offset, transform: tf(x, rest.ry, restS * camera) });
    });
    zFrames.push({ offset: 1, zIndex: rest.z });

    const opacityFrames: Keyframe[] = isHiddenBehind
      ? [
          { offset: 0, opacity: 1 },
          { offset: offsetOf(PUSH_AT) - 0.0001, opacity: 1 },
          { offset: offsetOf(PUSH_AT), opacity: 0 },
          { offset: 1, opacity: 0 },
        ]
      : [
          { offset: 0, opacity: 1 },
          ...push.map(({ offset, f }) => ({ offset, opacity: isCentre ? frontOpacity(f) : cardOpacity(f) })),
        ];

    return {
      id: card.id,
      src: card.src,
      isCentre,
      left: rowX - width / 2,
      top: rowY - height / 2,
      width,
      height,
      transformFrames,
      zFrames,
      opacityFrames,
      first: transformFrames[0].transform as string,
    };
  });
}

export const IntroReveal: React.FC = () => {
  const [plan, setPlan] = useState<CardPlan[] | null>(null);
  const veilRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const brandRef = useRef<HTMLDivElement>(null);

  // Step 1: decide whether to play, and measure the page
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains(INTRO_CLASS)) return;
    if (window.scrollY > 50) {
      root.classList.remove(INTRO_CLASS); // reloaded part-way down the page: just show it
      return;
    }
    setPlan(buildPlan());
  }, []);

  // Step 2: run it (layout effect, so the animation's first frame is the first one painted)
  useLayoutEffect(() => {
    if (!plan) return;
    const root = document.documentElement;
    const animations: Animation[] = [];
    let done = false;
    const timing = { duration: END_AT, fill: "both" as const };

    plan.forEach((card, i) => {
      const el = cardRefs.current[i];
      if (!el) return;
      animations.push(el.animate(card.transformFrames, timing));
      animations.push(el.animate(card.zFrames, timing));
      animations.push(el.animate(card.opacityFrames, timing));
    });

    // The hard cut from photo to the Levexa card
    if (brandRef.current) {
      animations.push(
        brandRef.current.animate(
          [
            { offset: 0, opacity: 0 },
            { offset: CUT_AT / END_AT, opacity: 0 },
            { offset: CUT_AT / END_AT + 0.0001, opacity: 1 },
            { offset: 1, opacity: 1 },
          ],
          timing
        )
      );
    }

    // The plain page lifts off the real homepage as the cards clear
    if (veilRef.current) animations.push(veilRef.current.animate(veilFrames(), timing));

    // The React veil is on screen now, so the CSS fallback can go
    root.classList.remove(INTRO_CLASS);
    try {
      sessionStorage.setItem(INTRO_SEEN_KEY, "1");
    } catch {
      // storage blocked: it will just play again next time
    }

    const finish = () => {
      if (done) return;
      done = true;
      animations.forEach((a) => a.cancel()); // every element is back to its normal styles
      SKIP_EVENTS.forEach((type) => window.removeEventListener(type, finish));
      setPlan(null);
    };
    // Ends when the last animation does (or at once if any is cancelled from outside)
    Promise.all(animations.map((a) => a.finished)).then(finish, finish);
    SKIP_EVENTS.forEach((type) => window.addEventListener(type, finish, { passive: true }));

    return finish;
  }, [plan]);

  if (!plan) return null;

  return (
    <div id="intro-reveal-overlay" aria-hidden="true" className="pointer-events-none">
      {/* Plain page colour over everything below the header (keeps the page empty, like the first frame) */}
      <div ref={veilRef} className="fixed inset-0 z-20 bg-page" />

      <div className="fixed inset-0 z-30 overflow-hidden">
        {plan.map((card, i) => (
          <div
            key={card.id}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="absolute overflow-hidden bg-band rounded-2xl shadow-2xl shadow-black/20"
            style={{
              left: card.left,
              top: card.top,
              width: card.width,
              height: card.height,
              transform: card.first,
            }}
          >
            <Image
              src={card.src}
              alt=""
              fill
              loading="eager"
              sizes="(max-width: 768px) 60vw, 300px"
              className="object-cover"
            />
            {card.isCentre && (
              <div ref={brandRef} className="absolute inset-0" style={{ opacity: 0 }}>
                <BrandCard />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const SKIP_EVENTS = ["keydown", "pointerdown", "wheel", "touchmove", "scroll", "resize"] as const;

// The Levexa card at the centre of the ring (laid out at BOX_W × BOX_W)
const BrandCard: React.FC = () => (
  <div data-theme="navy" className="relative w-full h-full bg-page text-fg p-6 flex flex-col overflow-hidden">
    {/* Slide motif: thick amber arc in the corner */}
    <svg className="absolute -top-11 -right-11 w-28 h-28 text-[#FEB005]" viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="100" r="78" stroke="currentColor" strokeWidth="16" />
    </svg>

    <div className="relative w-[150px] h-[28px]">
      <Image src="/levexa-logo-dark-trans.png" alt="" fill sizes="150px" loading="eager" className="object-contain object-left" />
    </div>

    <div className="mt-auto">
      <p className="font-display font-extrabold text-[27px] leading-[1.1] tracking-[-0.01em] text-white">
        Turn marketing into <span className="text-[#FEB005]">measurable revenue.</span>
      </p>
      <div className="w-10 h-[3px] bg-[#FEB005] rounded-full my-4" />
      <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-[10.5px] font-semibold uppercase tracking-[0.08em] text-fg-2">
        {["Strategy", "Branding", "Sales", "Automation"].map((service, i) => (
          <li key={service} className="flex items-baseline gap-1.5">
            <span className="font-display font-bold text-[#FEB005]">0{i + 1}</span>
            {service}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
