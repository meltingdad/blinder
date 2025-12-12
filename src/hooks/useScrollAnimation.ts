"use client";

import { useEffect, useRef, useState, RefObject } from "react";

interface UseScrollAnimationOptions {
  threshold?: number; // 0-1, default 0.1
  rootMargin?: string; // e.g., "-50px"
  triggerOnce?: boolean; // default true
}

interface UseScrollAnimationReturn<T extends HTMLElement> {
  ref: RefObject<T | null>;
  isVisible: boolean;
}

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 *
 * @example
 * ```tsx
 * const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
 *
 * <div
 *   ref={ref}
 *   className={cn(
 *     "transition-all duration-700",
 *     isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
 *   )}
 * >
 *   Content that animates on scroll
 * </div>
 * ```
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
): UseScrollAnimationReturn<T> {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;

  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

/**
 * Hook for staggered scroll animations on multiple elements
 *
 * @example
 * ```tsx
 * const { containerRef, isVisible, getItemDelay } = useStaggeredScrollAnimation();
 *
 * <div ref={containerRef}>
 *   {items.map((item, index) => (
 *     <div
 *       key={item.id}
 *       className={cn(
 *         "transition-all duration-500",
 *         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
 *       )}
 *       style={{ transitionDelay: getItemDelay(index) }}
 *     >
 *       {item.content}
 *     </div>
 *   ))}
 * </div>
 * ```
 */
export function useStaggeredScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions & { staggerDelay?: number } = {}
) {
  const { staggerDelay = 100, ...scrollOptions } = options;
  const { ref: containerRef, isVisible } = useScrollAnimation<T>(scrollOptions);

  const getItemDelay = (index: number) => `${index * staggerDelay}ms`;

  return {
    containerRef,
    isVisible,
    getItemDelay,
  };
}

export default useScrollAnimation;
