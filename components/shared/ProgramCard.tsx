"use client";

import { Check, ArrowRight } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Program } from "@/data/mentorship";

type ProgramCardProps = {
  program: Program;
  className?: string;
  emphasis?: boolean;
};

export function ProgramCard({ program, className, emphasis }: ProgramCardProps) {
  const highlight = program.flagship || emphasis;

  return (
    <GlassCard
      className={cn(
        "flex h-full flex-col p-8 sm:p-9",
        highlight && "border-brand/25 ring-1 ring-brand/10 shadow-glow",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          {program.flagship && (
            <span className="mb-3 inline-flex items-center rounded-full bg-brand/10 px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.12em] text-brand-700">
              Flagship
            </span>
          )}
          <h3 className="font-display text-[1.35rem] font-semibold leading-tight tracking-[-0.02em] text-ink">
            {program.name}
          </h3>
        </div>
      </div>

      {/* Price / consultation note */}
      <div className="mt-6">
        {program.price ? (
          <>
            <span
              className={cn(
                "font-display text-[2rem] font-semibold tracking-[-0.03em]",
                program.price === "Free" ? "text-brand" : "text-ink"
              )}
            >
              {program.price}
            </span>
            {program.priceNote && (
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {program.priceNote}
              </p>
            )}
          </>
        ) : (
          <p className="text-[0.95rem] font-medium leading-relaxed text-brand-700">
            {program.priceNote ?? "Pricing shared in your strategy session"}
          </p>
        )}
      </div>

      <p className="mt-5 text-[0.95rem] leading-[1.6] text-muted">
        {program.description}
      </p>

      <div className="my-7 hairline" />

      <ul className="flex flex-1 flex-col gap-3.5">
        {program.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-[0.95rem] text-ink">
            <Check
              className="mt-1 size-4 shrink-0 text-brand"
              strokeWidth={2.25}
            />
            <span className="leading-snug">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        variant={highlight ? "primary" : "secondary"}
        size="lg"
        className="group mt-9 w-full"
      >
        <a href={program.cta.href} target="_blank" rel="noopener noreferrer">
          {program.cta.label}
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </a>
      </Button>
    </GlassCard>
  );
}
