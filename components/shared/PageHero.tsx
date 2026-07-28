"use client";

import { motion } from "framer-motion";
import { EASE as ease } from "@/lib/motion";
import { AmbientBackground } from "./AmbientBackground";
import { type ReactNode } from "react";


export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-14 sm:pt-40 sm:pb-16">
      <AmbientBackground />
      <div className="container-tight text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-1.5 text-[0.82rem] text-muted backdrop-blur"
        >
          <span className="size-1.5 rounded-full bg-brand" />
          {eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-[1.06] tracking-[-0.03em] text-ink sm:text-5xl"
        >
          {title}
        </motion.h1>

        {description ? (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted"
          >
            {description}
          </motion.p>
        ) : null}

        {children ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
            className="mt-8 flex justify-center"
          >
            {children}
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
