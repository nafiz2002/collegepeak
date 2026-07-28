"use client";

import { MotionConfig } from "framer-motion";
import { type ReactNode } from "react";

/**
 * Global motion behavior. `reducedMotion="user"` makes Framer Motion honor the
 * OS "reduce motion" setting for all transform-based animation, keeping opacity
 * transitions only. Pairs with the CSS reduced-motion rules in globals.css.
 */
export function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
