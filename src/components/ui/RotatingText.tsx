'use client';

import React, { useState, useEffect } from 'react';

export interface RotatingTextProps {
  texts: string[];
  rotationInterval?: number;
  className?: string;
  mainClassName?: string;
}

const SWAP_MS = 450; // matches the rt-in / rt-out keyframes in globals.css

// Cycles through words: the current one slides up and out, then the next slides up and in.
// CSS keyframes only (no animation library). The first word is shown immediately, not animated.
export const RotatingText: React.FC<RotatingTextProps> = ({
  texts,
  rotationInterval = 3000,
  className = '',
  mainClassName = '',
}) => {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<'idle' | 'out' | 'in'>('idle');

  useEffect(() => {
    if (texts.length <= 1) return;
    let swap: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setPhase('out');
      swap = setTimeout(() => {
        setIndex((i) => (i + 1) % texts.length);
        setPhase('in');
      }, SWAP_MS);
    }, rotationInterval);
    return () => {
      clearInterval(interval);
      clearTimeout(swap);
    };
  }, [texts, rotationInterval]);

  const animation =
    phase === 'out' ? 'rt-out 0.45s cubic-bezier(0.23, 1, 0.32, 1) forwards'
    : phase === 'in' ? 'rt-in 0.45s cubic-bezier(0.23, 1, 0.32, 1) both'
    : undefined;

  return (
    <span className={`inline-flex overflow-hidden py-1 ${mainClassName}`}>
      <span key={`${index}-${phase}`} className={`inline-block ${className}`} style={{ animation }}>
        {texts[index]}
      </span>
    </span>
  );
};

export default RotatingText;
