'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface RotatingTextProps {
  texts: string[];
  rotationInterval?: number;
  className?: string;
  mainClassName?: string;
}

export const RotatingText: React.FC<RotatingTextProps> = ({
  texts,
  rotationInterval = 3000,
  className = '',
  mainClassName = '',
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (texts.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts, rotationInterval]);

  return (
    <span className={`inline-flex overflow-hidden py-1 ${mainClassName}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          className={`inline-block ${className}`}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingText;
