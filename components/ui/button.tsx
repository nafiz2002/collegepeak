import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 ease-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform",
  {
    variants: {
      variant: {
        primary:
          "bg-brand text-white shadow-[0_1px_2px_rgba(37,99,235,0.24),0_8px_20px_-8px_rgba(37,99,235,0.5)] hover:bg-brand-700 hover:shadow-[0_1px_2px_rgba(37,99,235,0.24),0_12px_26px_-10px_rgba(37,99,235,0.55)] hover:-translate-y-[2px] [&_svg]:group-hover:translate-x-0.5",
        secondary:
          "border border-line bg-white/80 text-ink backdrop-blur-sm hover:border-brand-200 hover:text-brand-700 hover:-translate-y-[2px]",
        ghost: "text-ink hover:bg-surface hover:text-brand-700",
        outline:
          "border border-brand-200 bg-transparent text-brand-700 hover:bg-brand-50/60 hover:-translate-y-[2px]",
        subtle: "bg-surface text-ink hover:bg-line/50",
      },
      size: {
        sm: "h-9 px-4",
        default: "h-11 px-6",
        lg: "h-12 px-7 text-[0.95rem]",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
