'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, type UseInViewOptions } from 'framer-motion';

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  animationFrom?: { opacity: number; transform: string };
  animationTo?: { opacity: number; transform: string };
  easing?: [number, number, number, number] | string;
  rootMargin?: UseInViewOptions['margin'];
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit';
  onLetterAnimationComplete?: () => void;
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 40,
  animationFrom = { opacity: 0, transform: 'translate3d(0, 40px, 0)' },
  animationTo = { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  rootMargin = '-50px',
  textAlign = 'initial',
  onLetterAnimationComplete,
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: rootMargin });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const words = text.split(' ').map((word) => word.split(''));

  let totalLetterCount = 0;

  return (
    <span
      ref={ref}
      className={`inline-block ${className}`}
      style={{ textAlign, display: 'inline', willChange: 'transform, opacity' }}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline">
        {words.map((word, wordIndex) => (
          <span key={`word-${wordIndex}`} className="inline-block whitespace-nowrap">
            {word.map((letter) => {
              const currentLetterIdx = totalLetterCount++;
              return (
                <motion.span
                  key={`letter-${currentLetterIdx}`}
                  initial={animationFrom}
                  animate={hasAnimated ? animationTo : animationFrom}
                  transition={{
                    duration: 0.5,
                    delay: (currentLetterIdx * delay) / 1000,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  onAnimationComplete={() => {
                    if (currentLetterIdx === text.replace(/\s/g, '').length - 1 && onLetterAnimationComplete) {
                      onLetterAnimationComplete();
                    }
                  }}
                  className="inline-block"
                  style={{ willChange: 'transform, opacity' }}
                >
                  {letter}
                </motion.span>
              );
            })}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </span>
    </span>
  );
};

export default SplitText;
