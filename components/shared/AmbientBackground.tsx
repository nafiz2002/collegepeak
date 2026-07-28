"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * A restrained ambient field: one soft brand aura at the top and two very
 * faint, slow-drifting glows. No grid, no hard edges — just quiet depth.
 */
export function AmbientBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-x-0 top-0 h-[460px] aura" />
      <motion.div
        aria-hidden
        className="absolute -left-32 top-8 size-[340px] rounded-full bg-brand-100/40 blur-[120px]"
        animate={{ x: [0, 30, 0], y: [0, 18, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-32 top-24 size-[300px] rounded-full bg-brand-100/35 blur-[120px]"
        animate={{ x: [0, -26, 0], y: [0, 22, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
