'use client';

import React from 'react';
import './Aurora.css';

export interface AuroraProps {
  colorStops?: string[];
  amplitude?: number;
  className?: string;
  children?: React.ReactNode;
}

export const Aurora: React.FC<AuroraProps> = ({
  colorStops = ['#C88A1A', '#07192F', '#DFB15B'],
  amplitude = 1.0,
  className = '',
  children,
}) => {
  return (
    <div className={`aurora-container relative overflow-hidden ${className}`}>
      <div
        className="aurora-layer pointer-events-none absolute inset-0"
        style={
          {
            '--color-1': colorStops[0] || '#C88A1A',
            '--color-2': colorStops[1] || '#07192F',
            '--color-3': colorStops[2] || '#DFB15B',
            '--aurora-amp': amplitude,
          } as React.CSSProperties
        }
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Aurora;
