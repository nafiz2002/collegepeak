import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  /** Duration in seconds for one full loop. */
  speed?: number;
  reverse?: boolean;
  className?: string;
};

/**
 * Pure-CSS infinite marquee. The children are duplicated so the loop is seamless,
 * and the animation translates by exactly -50%. Pauses on hover.
 */
export function Marquee({ children, speed = 40, reverse = false, className }: MarqueeProps) {
  return (
    <div
      className={cn(
        "group/marquee relative flex overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center gap-6 pr-6",
          "animate-marquee group-hover/marquee:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]"
        )}
        style={{ ["--marquee-duration" as string]: `${speed}s` }}
        aria-hidden="false"
      >
        {children}
      </div>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center gap-6 pr-6",
          "animate-marquee group-hover/marquee:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]"
        )}
        style={{ ["--marquee-duration" as string]: `${speed}s` }}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
