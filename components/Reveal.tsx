 'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  delay?: number; // ms
  y?: number; // px to translate from
  once?: boolean;
};

/**
 * A minimal IntersectionObserver-based reveal wrapper.
 * Adds translate/opacity until the element enters the viewport.
 * Tailwind only: no extra CSS files required.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  const base = 'transition-all duration-700 ease-out will-change-transform';
  const hidden = `opacity-0 translate-y-[${y}px]`;
  const shown = 'opacity-100 translate-y-0';
  const style = { transitionDelay: `${delay}ms` };

  return (
    <div
      ref={ref}
      style={style}
      className={`${base} ${visible ? shown : hidden}`}
    >
      {children}
    </div>
  );
}
