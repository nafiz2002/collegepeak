"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type GlassCardProps = HTMLMotionProps<"div"> & {
  interactive?: boolean;
  float?: boolean;
};

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, interactive = true, float = false, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={
          interactive
            ? { y: -5, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }
            : undefined
        }
        className={cn(
          "group glass p-8 transition-[box-shadow,border-color] duration-400 ease-brand",
          interactive && "hover:border-brand/25 hover:shadow-lift",
          float && "animate-float",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
GlassCard.displayName = "GlassCard";
