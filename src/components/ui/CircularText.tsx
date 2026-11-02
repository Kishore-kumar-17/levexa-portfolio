'use client';

import React, { useId, useRef } from 'react';

export interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: 'slowDown' | 'speedUp' | 'pause';
  className?: string;
  radius?: number;
}

const HOVER_RATE = { speedUp: 2.5, slowDown: 0.5, pause: 0 } as const;

// Spins with a CSS animation (no animation library). Hovering changes the playback rate,
// which keeps the current angle, so the text never jumps. Reduced motion stops the spin (globals.css).
export const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  onHover = 'speedUp',
  className = '',
  radius = 60,
}) => {
  const id = useId();
  const pathId = `circle-path-${id.replace(/:/g, '')}`;
  const svgRef = useRef<SVGSVGElement>(null);

  const setRate = (rate: number) => {
    svgRef.current?.getAnimations().forEach((a) => {
      a.playbackRate = rate;
    });
  };

  const size = radius * 2 + 20;

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      onMouseEnter={() => setRate(HOVER_RATE[onHover])}
      onMouseLeave={() => setRate(1)}
      style={{ width: size, height: size }}
    >
      <svg
        ref={svgRef}
        viewBox={`0 0 ${size} ${size}`}
        className="w-full h-full animate-spin"
        style={{ animationDuration: `${spinDuration}s` }}
        aria-hidden="true"
      >
        <path
          id={pathId}
          d={`M ${size / 2}, ${size / 2} m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          fill="none"
        />
        <text className="text-[9.5px] font-mono font-bold uppercase tracking-[0.22em] fill-current">
          {/* Spread the text evenly around the whole circle, so it always closes into a full ring */}
          <textPath href={`#${pathId}`} startOffset="0%" textLength={2 * Math.PI * radius} lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default CircularText;
