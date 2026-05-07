import { useEffect, useRef, useState } from "react";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export function useCountUp(target: number, duration = 1200, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setValue(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return value;
}

/**
 * Scroll-reveal hook implementing the spec:
 * - threshold 0.15 (0.1 for headings via `heading` flag)
 * - cubic-bezier(0.16, 1, 0.3, 1)
 * - translateY(32px) -> 0, opacity 0 -> 1
 * - once only
 * Returns props to spread onto the element.
 */
export function useRevealOnce<T extends HTMLElement = HTMLDivElement>(opts?: {
  heading?: boolean;
  delay?: number;
  duration?: number; // ms
}) {
  const { heading = false, delay = 0, duration } = opts || {};
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: heading ? 0.1 : 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [heading]);

  const dur = duration ?? (heading ? 600 : 700);
  const style: React.CSSProperties = {
    transition: `transform ${dur}ms ${EASE}, opacity ${dur}ms ${EASE}`,
    transitionDelay: `${delay}ms`,
    transform: visible ? "translateY(0)" : "translateY(32px)",
    opacity: visible ? 1 : 0,
    willChange: "transform, opacity",
  };
  return { ref, style, visible };
}

export { EASE };
