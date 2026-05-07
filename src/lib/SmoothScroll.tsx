import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const isTouch =
  typeof window !== 'undefined' &&
  ('ontouchstart' in window || navigator.maxTouchPoints > 0);

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export default function SmoothScroll() {
  useEffect(() => {
    // Vault rule: ignoreMobileResize prevents address-bar resize loops
    ScrollTrigger.config({ ignoreMobileResize: true });

    if (prefersReducedMotion) return;

    // Vault rule: normalizeScroll on touch devices to prevent toolbar jank
    if (isTouch) {
      ScrollTrigger.normalizeScroll({ allowNestedScroll: true, type: 'touch' });
    }

    // Lenis for desktop smooth scroll. syncTouch:false — let iOS handle touch natively (vault rule).
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Smooth-scroll anchor clicks
    const onAnchor = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link) return;
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -64 });
    };
    document.addEventListener('click', onAnchor);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      document.removeEventListener('click', onAnchor);
    };
  }, []);

  return null;
}
