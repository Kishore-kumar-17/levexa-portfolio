'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface StackCardItem {
  id: string | number;
  content: React.ReactNode;
}

export interface StackProps {
  cards: StackCardItem[];
  sendToBackOnClick?: boolean;
  className?: string;
}

export const Stack: React.FC<StackProps> = ({
  cards,
  sendToBackOnClick = true,
  className = '',
}) => {
  const [cardList, setCardList] = useState<StackCardItem[]>(cards);

  const sendToBack = (id: string | number) => {
    setCardList((prev) => {
      const idx = prev.findIndex((c) => c.id === id);
      if (idx === -1) return prev;
      const copy = [...prev];
      const [item] = copy.splice(idx, 1);
      copy.push(item);
      return copy;
    });
  };

  return (
    <div className={`relative flex items-center justify-center min-h-[340px] select-none ${className}`}>
      <AnimatePresence>
        {cardList.slice(0, 3).map((card, index) => {
          const isTop = index === 0;

          // Layer offset calculation
          const scale = 1 - index * 0.05;
          const y = index * 14;
          const rotate = index === 0 ? 0 : index === 1 ? -2.5 : 2.5;
          const zIndex = 3 - index;

          return (
            <motion.div
              key={card.id}
              layout
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{
                scale,
                y,
                rotate,
                opacity: 1,
                zIndex,
              }}
              exit={{ scale: 0.85, opacity: 0, y: -40 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              onClick={() => sendToBackOnClick && isTop && sendToBack(card.id)}
              className={`absolute w-full max-w-lg cursor-pointer ${
                isTop ? 'hover:scale-[1.01]' : 'pointer-events-none'
              }`}
            >
              {card.content}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default Stack;
