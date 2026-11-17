import { useEffect, useRef, useState, type RefObject } from 'react';

type RevealOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {},
): [RefObject<T | null>, boolean] {
  const { threshold = 0.08, rootMargin = '0px 0px -30px 0px', once = true } = options;
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, visible];
}

export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return progress;
}

export function useParallax<T extends HTMLElement = HTMLDivElement>(speed = 0.12): RefObject<T | null> {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let ticking = false;
    let windowHeight = window.innerHeight;

    const onResize = () => {
      windowHeight = window.innerHeight;
    };

    const updateParallax = () => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < windowHeight) {
        const offset = (rect.top + rect.height / 2 - windowHeight / 2) * speed;
        el.style.setProperty('--parallax-y', `${Math.round(offset)}px`);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
    };
  }, [speed]);
  return ref;
}

export function useCountUp(
  target: number,
  duration = 1400,
  start = false,
  decimals = 0,
  startFrom = 0
): string {
  const [value, setValue] = useState(startFrom);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let animId = 0;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic curve
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = startFrom + (target - startFrom) * ease;
      setValue(current);

      if (progress < 1) {
        animId = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [target, duration, start, startFrom]);

  return decimals > 0
    ? value.toFixed(decimals)
    : Math.round(value).toLocaleString();
}
