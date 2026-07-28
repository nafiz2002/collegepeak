"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ArrowRight, Target, Sparkles } from "lucide-react";
import { EASE as ease } from "@/lib/motion";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PROBLEMS, type Problem } from "@/data/content";
import { cn } from "@/lib/utils";

function PanelBody({ p }: { p: Problem }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="rounded-2xl border border-line/70 bg-white/60 p-4">
        <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-muted">
          <Target className="size-3.5" aria-hidden />
          The challenge
        </p>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-ink">{p.challenge}</p>
      </div>
      <div className="rounded-2xl border border-brand-200 bg-brand-50/50 p-4">
        <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-brand">
          <Sparkles className="size-3.5" aria-hidden />
          How we help
        </p>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-ink">{p.solution}</p>
      </div>
    </div>
  );
}

function IncludedIn({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
        Included in
      </span>
      {items.map((item) => (
        <span
          key={item}
          className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-medium text-brand-700"
        >
          <Check className="size-3" strokeWidth={2.75} />
          {item}
        </span>
      ))}
    </div>
  );
}

export function ProblemSolver() {
  const [active, setActive] = useState(PROBLEMS[0].id);
  const current = PROBLEMS.find((p) => p.id === active) ?? PROBLEMS[0];

  return (
    <Section className="py-24 sm:py-28">
      <SectionHeading
        eyebrow="Why students choose CollegePeak"
        title="Every challenge has a strategy."
        description="Select a challenge to discover how CollegePeak helps."
      />

      {/* Desktop: selector cards + expanding panel */}
      <div className="mt-14 hidden lg:block">
        <div className="grid grid-cols-5 gap-3">
          {PROBLEMS.map((problem) => {
            const isActive = problem.id === active;
            return (
              <button
                key={problem.id}
                onClick={() => setActive(problem.id)}
                aria-pressed={isActive}
                className={cn(
                  "group flex flex-col items-start gap-3 rounded-2xl border p-4 text-left transition-all duration-300",
                  isActive
                    ? "border-brand/40 bg-white shadow-glow ring-1 ring-brand/10"
                    : "border-line bg-white/70 hover:-translate-y-0.5 hover:border-brand-200"
                )}
              >
                <span
                  className={cn(
                    "grid size-10 place-items-center rounded-xl transition-all duration-300",
                    isActive ? "bg-brand text-white" : "bg-surface text-brand group-hover:scale-105"
                  )}
                >
                  <problem.icon className="size-5" />
                </span>
                <span
                  className={cn(
                    "text-sm font-semibold",
                    isActive ? "text-brand-700" : "text-ink"
                  )}
                >
                  {problem.chip}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.38, ease }}
              className="glass rounded-3xl border-brand/20 p-8 shadow-glow"
            >
              <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-9">
                <motion.span
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, ease, delay: 0.05 }}
                  className="grid size-16 place-items-center rounded-2xl bg-brand text-white shadow-glow"
                >
                  <current.icon className="size-7" />
                </motion.span>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink">
                    {current.title}
                  </h3>
                  <div className="mt-5">
                    <PanelBody p={current} />
                  </div>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <IncludedIn items={current.includedIn} />
                    <Button asChild size="sm" className="shrink-0">
                      <Link href="/mentorship">
                        Explore Our Mentorship
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile: accordion (one open at a time) */}
      <div className="mt-12 lg:hidden">
        <Accordion type="single" collapsible defaultValue={PROBLEMS[0].id} className="flex flex-col gap-3">
          {PROBLEMS.map((p) => (
            <AccordionItem key={p.id} value={p.id}>
              <AccordionTrigger>
                <span className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-xl bg-brand-50 text-brand">
                    <p.icon className="size-[18px]" />
                  </span>
                  {p.chip}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4 pt-1">
                  <PanelBody p={p} />
                  <IncludedIn items={p.includedIn} />
                  <Button asChild size="sm" className="w-full">
                    <Link href="/mentorship">
                      Explore Our Mentorship
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
