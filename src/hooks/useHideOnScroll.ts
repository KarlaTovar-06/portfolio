import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type UseHideOnScrollOptions = {
  /** Disable the hide behavior (e.g. when a menu is open). Defaults to true. */
  enabled?: boolean;
  /** Pixels from the top where the element is always shown. Defaults to 8. */
  topThreshold?: number;
  /** Translate Y value (in px) when hidden. Defaults to -120. */
  hiddenOffset?: number;
  /** Animation duration in seconds. Defaults to 0.3. */
  duration?: number;
};

/**
 * Hides the referenced element on scroll down and shows it on scroll up.
 * Stays visible at the top of the page. Uses GSAP for smooth animation.
 *
 * The scroll listener is attached only once. `enabled` is read via a ref so
 * toggling it does not re-attach the listener.
 *
 * @example
 *   const navRef = useHideOnScroll({ enabled: !isMenuOpen });
 *   return <nav ref={navRef}>...</nav>;
 */
export function useHideOnScroll(options: UseHideOnScrollOptions = {}) {
  const {
    enabled = true,
    topThreshold = 8,
    hiddenOffset = -120,
    duration = 0.3,
  } = options;

  const ref = useRef<HTMLElement>(null);
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);
  const enabledRef = useRef(enabled);

  // Mirror the latest `enabled` value into a ref so the listener closure
  // sees it without needing to re-subscribe on every change.
  enabledRef.current = enabled;

  useEffect(() => {
    const handleScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      window.requestAnimationFrame(() => {
        const el = ref.current;
        if (!el || !enabledRef.current) {
          tickingRef.current = false;
          return;
        }

        const currentScrollY = window.scrollY;

        if (currentScrollY <= topThreshold) {
          gsap.to(el, { y: 0, duration, ease: "power2.out" });
        } else if (currentScrollY > lastScrollYRef.current) {
          gsap.to(el, { y: hiddenOffset, duration, ease: "power2.out" });
        } else {
          gsap.to(el, { y: 0, duration, ease: "power2.out" });
        }

        lastScrollYRef.current = currentScrollY;
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [topThreshold, hiddenOffset, duration]);

  return ref;
}
