import { useEffect } from 'react';

const isTouch =
  typeof window !== 'undefined' &&
  ('ontouchstart' in window || navigator.maxTouchPoints > 0);

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export default function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion || isTouch) return;

    let cleanup = () => {};
    let cancelled = false;

    async function initDesktopScroll() {
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import('lenis'),
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);

      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.config({ ignoreMobileResize: true });

      const lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      lenis.on('scroll', ScrollTrigger.update);

      const raf = (time: number) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);

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

      cleanup = () => {
        document.removeEventListener('click', onAnchor);
        gsap.ticker.remove(raf);
        lenis.destroy();
      };
    }

    void initDesktopScroll();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return null;
}
