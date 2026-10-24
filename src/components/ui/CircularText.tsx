'use client';

import React, { useState, useId } from 'react';
import { motion } from 'framer-motion';

export interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: 'slowDown' | 'speedUp' | 'pause';
  className?: string;
  radius?: number;
}

export const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  onHover = 'speedUp',
  className = '',
  radius = 60,
}) => {
  const id = useId();
  const pathId = `circle-path-${id.replace(/:/g, '')}`;
  const [currentSpeed, setCurrentSpeed] = useState<number>(spinDuration);

  const handleMouseEnter = () => {
    if (onHover === 'speedUp') setCurrentSpeed(spinDuration / 2.5);
    if (onHover === 'slowDown') setCurrentSpeed(spinDuration * 2);
    if (onHover === 'pause') setCurrentSpeed(0);
  };

  const handleMouseLeave = () => {
    setCurrentSpeed(spinDuration);
  };

  const letters = Array.from(text);
  const size = radius * 2 + 20;

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: size, height: size }}
    >
      <motion.svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full h-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: currentSpeed === 0 ? 0 : currentSpeed,
        }}
      >
        <path
          id={pathId}
          d={`M ${size / 2}, ${size / 2} m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          fill="none"
        />
        <text className="text-[9.5px] font-mono font-bold uppercase tracking-[0.22em] fill-current">
          <textPath href={`#${pathId}`} startOffset="0%">
            {letters.join('')}
          </textPath>
        </text>
      </motion.svg>
    </div>
  );
};

export default CircularText;
