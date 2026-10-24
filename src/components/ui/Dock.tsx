'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';

export interface DockItem {
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface DockProps {
  items: DockItem[];
  className?: string;
  panelHeight?: number;
  baseItemSize?: number;
  magnification?: number;
}

function DockIcon({
  item,
  mouseX,
  baseItemSize = 44,
  magnification = 64,
}: {
  item: DockItem;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  baseItemSize?: number;
  magnification?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [baseItemSize, magnification, baseItemSize]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const content = (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      className="group relative flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-stone-200/90 shadow-sm hover:border-[#C88A1A] hover:bg-[#FAF8F5] transition-colors"
    >
      <div className="text-[#07192F] group-hover:text-[#C88A1A] transition-colors">
        {item.icon}
      </div>

      {/* Floating tooltip */}
      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#07192F] px-2 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md">
        {item.label}
      </span>
    </motion.div>
  );

  if (item.href) {
    return (
      <Link href={item.href} onClick={item.onClick} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={item.onClick} className="inline-block cursor-pointer">
      {content}
    </button>
  );
}

export const Dock: React.FC<DockProps> = ({
  items,
  className = '',
  baseItemSize = 44,
  magnification = 60,
}) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`inline-flex items-center gap-3 rounded-full bg-[#FAF8F5]/90 backdrop-blur-md p-2.5 border border-[#D7D3CB] shadow-card-elevated ${className}`}
    >
      {items.map((item, idx) => (
        <DockIcon
          key={idx}
          item={item}
          mouseX={mouseX}
          baseItemSize={baseItemSize}
          magnification={magnification}
        />
      ))}
    </div>
  );
};

export default Dock;
