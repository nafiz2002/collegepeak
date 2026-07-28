"use client";

import { motion } from "framer-motion";
import { Check, Minus, Infinity as InfinityIcon } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  COMPARISON_COLUMNS,
  COMPARISON_ROWS,
  type CellValue,
} from "@/data/mentorship";
import { cn } from "@/lib/utils";

function Cell({ value, flagship }: { value: CellValue; flagship?: boolean }) {
  if (value === "unlimited") {
    return (
      <span
        className={cn(
          "mx-auto inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[0.68rem] font-medium",
          flagship ? "bg-brand text-white" : "bg-brand-50 text-brand-700"
        )}
      >
        <InfinityIcon className="size-3" aria-hidden />
        Unlimited
      </span>
    );
  }
  if (value === "yes") {
    return (
      <>
        <Check className="mx-auto size-[18px] text-brand" strokeWidth={2.25} aria-hidden />
        <span className="sr-only">Included</span>
      </>
    );
  }
  return (
    <>
      <Minus className="mx-auto size-4 text-line" aria-hidden />
      <span className="sr-only">Not included</span>
    </>
  );
}

/* Mobile: per-program checklist cards (no squeezed table). */
function MobileCompare() {
  return (
    <div className="mt-12 flex flex-col gap-4 lg:hidden">
      {COMPARISON_COLUMNS.map((col) => {
        const included = COMPARISON_ROWS.filter((r) => r.values[col.id] !== "no");
        return (
          <div
            key={col.id}
            className={cn(
              "glass rounded-3xl p-6",
              col.flagship && "border-brand/25 ring-1 ring-brand/10 shadow-glow"
            )}
          >
            <div className="flex items-center gap-2">
              {col.flagship && (
                <span className="rounded-full bg-brand px-2 py-0.5 text-[0.6rem] font-medium uppercase tracking-[0.1em] text-white">
                  Flagship
                </span>
              )}
              <h3 className="font-display text-lg font-semibold tracking-[-0.01em] text-ink">
                {col.label}
              </h3>
            </div>
            <ul className="mt-4 flex flex-col gap-2.5">
              {included.map((r) => (
                <li key={r.feature} className="flex items-start gap-2.5 text-sm text-ink">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" strokeWidth={2.25} />
                  <span className="leading-snug">
                    {r.feature}
                    {r.values[col.id] === "unlimited" && (
                      <span className="ml-1.5 rounded-full bg-brand-50 px-1.5 py-0.5 text-[0.62rem] font-medium text-brand-700">
                        Unlimited
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export function ComparisonTable() {
  return (
    <Section tint>
      <SectionHeading
        eyebrow="Compare programs"
        title="Find your exact fit."
        description="Every program delivers. The difference is how far we go together — Premium goes furthest."
      />

      <MobileCompare />

      {/* Desktop: full comparison table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-16 hidden max-w-5xl overflow-hidden rounded-3xl border border-line/70 bg-card lg:block"
      >
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">
            Comparison of CollegePeak mentorship programs and the features each includes.
          </caption>
          <thead>
            <tr>
              <th
                scope="col"
                className="px-6 pb-5 pt-7 text-[0.8rem] font-medium uppercase tracking-[0.1em] text-muted"
              >
                Included
              </th>
              {COMPARISON_COLUMNS.map((col) => (
                <th
                  key={col.id}
                  scope="col"
                  className={cn(
                    "px-4 pb-5 pt-7 text-center align-bottom",
                    col.flagship && "rounded-t-2xl bg-brand-50/60"
                  )}
                >
                  <div className="flex flex-col items-center gap-1">
                    {col.flagship && (
                      <span className="text-[0.62rem] font-medium uppercase tracking-[0.12em] text-brand">
                        Flagship
                      </span>
                    )}
                    <span
                      className={cn(
                        "font-display text-[0.95rem] font-semibold tracking-[-0.01em]",
                        col.flagship ? "text-brand-700" : "text-ink"
                      )}
                    >
                      {col.label}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map((r, idx) => (
              <tr
                key={r.feature}
                className={cn(
                  "transition-colors hover:bg-surface/50",
                  idx !== 0 && "[&>*]:border-t [&>*]:border-line/60"
                )}
              >
                <th
                  scope="row"
                  className="px-6 py-4 text-left text-sm font-medium text-ink"
                >
                  {r.feature}
                </th>
                {COMPARISON_COLUMNS.map((col) => (
                  <td
                    key={col.id}
                    className={cn(
                      "px-4 py-4 text-center",
                      col.flagship && "bg-brand-50/40",
                      col.flagship && idx === COMPARISON_ROWS.length - 1 && "rounded-b-2xl"
                    )}
                  >
                    <Cell value={r.values[col.id]} flagship={col.flagship} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <p className="mt-6 text-center text-sm text-muted">
        Not sure which fits?{" "}
        <span className="font-medium text-brand-700">Start with a free profile audit.</span>
      </p>
    </Section>
  );
}
