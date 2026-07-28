import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-line bg-white text-muted",
        brand: "border-brand-200 bg-brand-50 text-brand-700",
        solid: "border-transparent bg-brand text-white",
        flagship:
          "border-transparent bg-gradient-to-r from-brand to-brand-800 text-white shadow-[0_6px_18px_rgba(37,99,235,0.35)]",
        soft: "border-transparent bg-surface text-muted",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
