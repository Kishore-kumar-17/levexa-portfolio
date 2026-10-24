'use client';

import React, { useRef, useEffect } from 'react';

export interface PixelCardProps {
  variant?: 'default' | 'gold';
  gap?: number;
  speed?: number;
  colors?: string[];
  className?: string;
  children?: React.ReactNode;
}

export const PixelCard: React.FC<PixelCardProps> = ({
  variant = 'gold',
  gap = 6,
  speed = 35,
  colors,
  className = '',
  children,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const defaultColors =
    variant === 'gold'
      ? ['#C88A1A', '#F5A900', '#DFB15B', '#FAF8F5']
      : ['#07192F', '#0D2746', '#1E3A5F', '#C88A1A'];

  const palette = colors || defaultColors;

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isHovered = false;
    let mouseX = -100;
    let mouseY = -100;

    const resize = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const pixelSize = gap * 2.5;

    interface Pixel {
      x: number;
      y: number;
      color: string;
      alpha: number;
      targetAlpha: number;
    }

    const pixels: Pixel[] = [];

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isHovered = true;
    };

    const onMouseLeave = () => {
      isHovered = false;
      mouseX = -100;
      mouseY = -100;
    };

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isHovered) {
        // Generate a few random pixels near the cursor
        for (let i = 0; i < 3; i++) {
          const offsetX = (Math.random() - 0.5) * 80;
          const offsetY = (Math.random() - 0.5) * 80;
          const px = Math.floor((mouseX + offsetX) / pixelSize) * pixelSize;
          const py = Math.floor((mouseY + offsetY) / pixelSize) * pixelSize;

          if (px >= 0 && px < canvas.width && py >= 0 && py < canvas.height) {
            pixels.push({
              x: px,
              y: py,
              color: palette[Math.floor(Math.random() * palette.length)],
              alpha: 0.8,
              targetAlpha: 0,
            });
          }
        }
      }

      for (let i = pixels.length - 1; i >= 0; i--) {
        const p = pixels[i];
        p.alpha -= speed / 1000;

        if (p.alpha <= 0) {
          pixels.splice(i, 1);
        } else {
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          ctx.fillRect(p.x, p.y, pixelSize - 1, pixelSize - 1);
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [gap, speed, palette]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl bg-white border border-stone-200 shadow-2xs ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-10 w-full h-full"
      />
      <div className="relative z-20 h-full">{children}</div>
    </div>
  );
};

export default PixelCard;
