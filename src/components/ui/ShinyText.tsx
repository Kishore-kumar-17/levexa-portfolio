'use client';

import React, { CSSProperties } from 'react';
import './ShinyText.css';

export interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  color?: string;
  shineColor?: string;
  baseColor?: string;
  variant?: 'default' | 'gold';
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 4,
  className = '',
  color,
  shineColor,
  baseColor,
  variant = 'default',
}) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`shiny-text ${variant} ${disabled ? 'disabled' : ''} ${className}`}
      style={
        {
          animationDuration,
          ...(color ? { '--shiny-color': color } : {}),
          ...(shineColor ? { '--shiny-highlight': shineColor } : {}),
          ...(baseColor ? { '--shiny-base': baseColor } : {}),
        } as CSSProperties
      }
    >
      {text}
    </span>
  );
};

export default ShinyText;
