"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type UniversityMarkProps = {
  initials: string;
  /** Full name for accessibility only. */
  name: string;
  tint?: string;
  slug?: string;
  /** Set true once you've added /public/logos/<slug>.svg */
  hasLogo?: boolean;
  size?: number;
  className?: string;
};

/**
 * Renders an elegant monogram crest for a university.
 *
 * To use an official mark instead: drop the SVG/PNG at /public/logos/<slug>.png,
 * then pass `hasLogo` — the component swaps to next/image automatically.
 * Includes automatic error fallback to monogram if an image fails to load.
 */
export function UniversityMark({
  initials,
  name,
  tint = "#2563EB",
  slug,
  hasLogo = true,
  size = 56,
  className,
}: UniversityMarkProps) {
  const [imgError, setImgError] = useState(false);

  if (hasLogo && slug && !imgError) {
    return (
      <span
        className={cn(
          "grid shrink-0 place-items-center rounded-2xl border border-line bg-white p-2 shadow-soft transition-transform duration-300 group-hover:scale-105 overflow-hidden",
          className
        )}
        style={{ width: size, height: size }}
      >
        <Image
          src={`/logos/${slug}.png`}
          alt={name}
          width={size}
          height={size}
          className="h-full w-full object-contain p-0.5"
          onError={() => setImgError(true)}
        />
      </span>
    );
  }

  return (
    <span
      role="img"
      aria-label={name}
      title={name}
      className={cn(
        "grid shrink-0 place-items-center rounded-2xl border border-line bg-white font-display font-semibold tracking-[-0.02em] shadow-soft transition-transform duration-300 group-hover:scale-105",
        className
      )}
      style={{
        width: size,
        height: size,
        color: tint,
        background: `linear-gradient(160deg, #ffffff 30%, ${tint}0f)`,
      }}
    >
      <span style={{ fontSize: Math.max(12, size / (initials.length > 2 ? 3.4 : 2.8)) }}>
        {initials}
      </span>
    </span>
  );
}
