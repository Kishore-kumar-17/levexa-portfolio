'use client';

import React, { useRef, useState, useEffect } from 'react';

export interface InfiniteScrollItem {
  id?: string | number;
  content: React.ReactNode;
}

export interface InfiniteScrollProps {
  items: InfiniteScrollItem[];
  speed?: number; // pixels per second
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  className?: string;
  itemClassName?: string;
}

export const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  items,
  speed = 40,
  direction = 'left',
  pauseOnHover = true,
  className = '',
  itemClassName = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let offset = 0;
    let animationId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (!isPaused) {
        const step = speed * delta;
        if (direction === 'left') {
          offset += step;
          const halfWidth = track.scrollWidth / 2;
          if (halfWidth > 0 && offset >= halfWidth) {
            offset -= halfWidth;
          }
        } else {
          offset -= step;
          const halfWidth = track.scrollWidth / 2;
          if (offset <= 0) {
            offset += halfWidth;
          }
        }
        track.style.transform = `translate3d(-${offset}px, 0, 0)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [speed, direction, isPaused]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden select-none relative w-full ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {/* Left/Right Vignette gradients for seamless infinite edge fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FAF8F5] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FAF8F5] to-transparent z-10 pointer-events-none" />

      <div
        ref={trackRef}
        className="flex items-center will-change-transform"
        style={{ width: 'max-content' }}
      >
        {/* Set 1 */}
        <div className="flex items-center shrink-0">
          {items.map((item, idx) => (
            <div key={`scroll-1-${idx}`} className={`shrink-0 ${itemClassName}`}>
              {item.content}
            </div>
          ))}
        </div>

        {/* Set 2 (Clone) */}
        <div className="flex items-center shrink-0">
          {items.map((item, idx) => (
            <div key={`scroll-2-${idx}`} className={`shrink-0 ${itemClassName}`}>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
