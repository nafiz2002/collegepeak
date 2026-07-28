"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AmbientBackground } from "@/components/shared/AmbientBackground";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { EASE as ease } from "@/lib/motion";
import { STATS } from "@/constants/site";
import { CTA } from "@/constants/site";
import { cn } from "@/lib/utils";

/** One cohesive, animated stat centerpiece — three connected metrics, not cards. */
function StatCenterpiece() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % STATS.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease }}
      className="glass relative mx-auto w-full max-w-md rounded-[1.75rem] p-8 sm:p-10"
    >
      <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.16em] text-muted">
        Class of 2030 · Acceptance Profile
      </p>

      <div className="relative">
        {/* connective spine */}
        <span
          aria-hidden
          className="absolute left-[7px] top-3 bottom-3 w-px bg-line"
        />
        <motion.span
          aria-hidden
          className="absolute left-[7px] top-3 w-px bg-brand"
          animate={{ height: `${((active + 1) / STATS.length) * 100}%` }}
          transition={{ duration: 0.6, ease }}
          style={{ maxHeight: "calc(100% - 24px)" }}
        />

        <div className="flex flex-col gap-7">
          {STATS.map((stat, i) => {
            const isActive = i === active;
            return (
              <div key={stat.label} className="relative flex items-start gap-5 pl-7">
                <motion.span
                  aria-hidden
                  className="absolute left-0 top-2.5 grid size-4 place-items-center rounded-full border bg-background"
                  animate={{
                    borderColor: isActive ? "#2563EB" : "#EAE8E2",
                    scale: isActive ? 1 : 0.85,
                  }}
                  transition={{ duration: 0.4, ease }}
                >
                  <motion.span
                    className="size-2 rounded-full bg-brand"
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.4, ease }}
                  />
                </motion.span>

                <motion.div
                  animate={{ opacity: isActive ? 1 : 0.4 }}
                  transition={{ duration: 0.5, ease }}
                >
                  <div className="font-display text-[2.75rem] font-semibold leading-none tracking-[-0.04em] text-ink">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={"prefix" in stat ? (stat.prefix as string) : ""}
                      suffix={stat.suffix}
                      duration={1.4}
                    />
                  </div>
                  <p className="mt-2 text-[0.95rem] font-medium text-ink">{stat.label}</p>
                  <p className="text-sm text-muted">{stat.sub}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-40 sm:pb-24">
      <AmbientBackground />

      <div className="container-tight">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Left: message */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-1.5 text-[0.82rem] text-muted backdrop-blur"
            >
              <span className="size-1.5 rounded-full bg-brand" />
              Class of 2030 · 100% Acceptance Rate 
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease }}
              className="mx-auto mt-7 max-w-[19ch] font-display text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.035em] text-ink sm:text-[3.5rem] lg:mx-0 lg:text-[4rem]"
            >
              The peak of strategic{" "}
              <span className="text-brand">U.S. admissions</span> &amp; scholarships.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.16, ease }}
              className="mx-auto mt-6 max-w-xl text-lg leading-[1.6] text-muted lg:mx-0"
            >
              We mentor ambitious students to earn admission and life-changing scholarships at leading universities across the U.S. and beyond through personalized, strategy-first guidance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.24, ease }}
              className="mt-9 flex flex-col items-center gap-x-6 gap-y-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="group w-full sm:w-auto">
                <a href={CTA.strategySession} target="_blank" rel="noopener noreferrer">
                  Book a Strategy Session
                </a>
              </Button>
              <Link
                href="/mentorship"
                className="group hidden items-center gap-1.5 text-[0.95rem] font-medium text-ink transition-colors hover:text-brand-700 sm:inline-flex"
              >
                Explore our mentorship
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </div>

          {/* Right: animated centerpiece */}
          <StatCenterpiece />
        </div>
      </div>
    </section>
  );
}
