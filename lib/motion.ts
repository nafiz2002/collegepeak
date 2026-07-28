import type { Variants } from "framer-motion";

/** The single easing curve used across the site (Apple-like ease-out). */
export const EASE = [0.22, 1, 0.36, 1] as const;

/** Standard scroll-reveal variant: subtle rise + fade. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};
