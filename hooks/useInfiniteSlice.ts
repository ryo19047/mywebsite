 'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Minimal infinite-slice helper for static arrays.
 * - Shows `initial` items first, then adds `step` more when the sentinel enters viewport.
 * - Stops once all items are revealed.
 *
 * Usage:
 * const { visible, sentinelRef, hasMore } = useInfiniteSlice(list);
 * ...
 * <div ref={sentinelRef} />
 */
export function useInfiniteSlice<T>(list: T[], step = 5, initial = 5) {
  const [count, setCount] = useState(() => Math.min(initial, list.length));
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Reset count when the data set changes
  useEffect(() => {
    setCount(Math.min(initial, list.length));
  }, [initial, list]);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;
    if (count >= list.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCount((c) => Math.min(c + step, list.length));
          }
        });
      },
      { rootMargin: '200px 0px 0px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [count, list.length, step]);

  return {
    visible: list.slice(0, count),
    sentinelRef,
    hasMore: count < list.length,
  };
}
