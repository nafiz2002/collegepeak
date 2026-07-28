import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Adds the subtle secondary background. */
  tint?: boolean;
  container?: boolean;
};

export function Section({
  children,
  className,
  id,
  tint = false,
  container = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 py-20 sm:py-28",
        tint && "bg-surface",
        className
      )}
    >
      {container ? (
        <div className="container-tight">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}
