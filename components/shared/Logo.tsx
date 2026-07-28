import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SITE } from "@/constants/site";

/**
 * Brand signature glyph — an ascending "peak". Only used as part of the
 * wordmark fallback and the 404 page.
 */
export function PeakGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 24 L12 12 L18 19 L28 6"
        stroke="url(#peakGrad)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="28" cy="6" r="2.4" fill="#2563EB" />
      <defs>
        <linearGradient
          id="peakGrad"
          x1="4"
          y1="24"
          x2="28"
          y2="6"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#93BBFD" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Logo({
  className,
  variant = "full",
}: {
  className?: string;
  variant?: "full" | "mark";
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label={`${SITE.name} — home`}
    >
      {SITE.logo ? (
        <Image
          src={SITE.logo}
          alt={SITE.name}
          width={320}
          height={80}
          priority
          className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <>
          <span className="grid size-9 place-items-center rounded-xl border border-line bg-white shadow-soft transition-transform duration-300 group-hover:-translate-y-0.5">
            <PeakGlyph className="size-5" />
          </span>

          {variant === "full" && (
            <span className="font-display text-lg font-semibold tracking-[-0.02em] text-ink">
              College<span className="text-brand">Peak</span>
            </span>
          )}
        </>
      )}
    </Link>
  );
}