'use client';

import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';

export interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'end' | 'center';
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: 'view' | 'hover';
}

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = true,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#%&*+/=?@[]',
  className = '',
  parentClassName = '',
  encryptedClassName = 'text-[#C88A1A] opacity-80',
  animateOn = 'view',
}) => {
  const [displayText, setDisplayText] = useState<string>(text);
  const [isScrambling, setIsScrambling] = useState<boolean>(false);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  const availableChars = useMemo(() => {
    if (useOriginalCharsOnly) {
      return Array.from(new Set(text.split(''))).filter((char) => char !== ' ');
    }
    return characters.split('');
  }, [useOriginalCharsOnly, text, characters]);

  const getRandomChar = useCallback(() => {
    return availableChars[Math.floor(Math.random() * availableChars.length)] || '*';
  }, [availableChars]);

  const shuffleText = useCallback(
    (currentRevealed: Set<number>) => {
      return text
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (currentRevealed.has(index)) return char;
          return getRandomChar();
        })
        .join('');
    },
    [text, getRandomChar]
  );

  const triggerAnimation = useCallback(() => {
    setIsScrambling(true);
    let iteration = 0;
    const currentRevealed = new Set<number>();
    const totalChars = text.length;

    const interval = setInterval(() => {
      iteration++;

      if (sequential) {
        let nextIndex: number | null = null;
        if (revealDirection === 'start') {
          for (let i = 0; i < totalChars; i++) {
            if (!currentRevealed.has(i) && text[i] !== ' ') {
              nextIndex = i;
              break;
            }
          }
        } else if (revealDirection === 'end') {
          for (let i = totalChars - 1; i >= 0; i--) {
            if (!currentRevealed.has(i) && text[i] !== ' ') {
              nextIndex = i;
              break;
            }
          }
        } else {
          // center
          const mid = Math.floor(totalChars / 2);
          let offset = 0;
          while (offset <= mid) {
            const left = mid - offset;
            const right = mid + offset;
            if (left >= 0 && !currentRevealed.has(left) && text[left] !== ' ') {
              nextIndex = left;
              break;
            }
            if (right < totalChars && !currentRevealed.has(right) && text[right] !== ' ') {
              nextIndex = right;
              break;
            }
            offset++;
          }
        }

        if (nextIndex !== null) {
          currentRevealed.add(nextIndex);
          setRevealedIndices(new Set(currentRevealed));
        }

        setDisplayText(shuffleText(currentRevealed));

        if (currentRevealed.size >= text.replace(/\s/g, '').length || iteration >= maxIterations * totalChars) {
          clearInterval(interval);
          setDisplayText(text);
          setIsScrambling(false);
          setRevealedIndices(new Set(Array.from({ length: totalChars }, (_, i) => i)));
        }
      } else {
        setDisplayText(shuffleText(currentRevealed));
        if (iteration >= maxIterations) {
          clearInterval(interval);
          setDisplayText(text);
          setIsScrambling(false);
          setRevealedIndices(new Set(Array.from({ length: totalChars }, (_, i) => i)));
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, maxIterations, sequential, revealDirection, shuffleText]);

  useEffect(() => {
    if (animateOn === 'view' && !hasAnimated) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              setHasAnimated(true);
              triggerAnimation();
            }
          });
        },
        { threshold: 0.1 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }
  }, [animateOn, hasAnimated, triggerAnimation]);

  const handleMouseEnter = () => {
    if (animateOn === 'hover' && !isScrambling) {
      triggerAnimation();
    }
  };

  return (
    <span
      ref={containerRef}
      className={`inline-block font-mono ${parentClassName}`}
      onMouseEnter={handleMouseEnter}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {displayText.split('').map((char, index) => {
          const isRevealed = revealedIndices.has(index) || !isScrambling;
          return (
            <span
              key={index}
              className={isRevealed ? className : encryptedClassName}
            >
              {char}
            </span>
          );
        })}
      </span>
    </span>
  );
};

export default DecryptedText;
