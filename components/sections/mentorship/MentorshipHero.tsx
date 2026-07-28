"use client";

import { motion } from "framer-motion";
import { EASE as ease } from "@/lib/motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AmbientBackground } from "@/components/shared/AmbientBackground";
import { CTA } from "@/constants/site";


export function MentorshipHero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 sm:pt-40 sm:pb-20">
      <AmbientBackground />
      <div className="container-tight text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-1.5 text-[0.82rem] text-muted backdrop-blur"
        >
          <span className="size-1.5 rounded-full bg-brand" />
          Mentorship & Services
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-[1.05] tracking-[-0.03em] text-ink sm:text-[3.5rem]"
        >
          Mentorship &amp; Services for the{" "}
          <span className="text-brand">Class of 2031</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease }}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted"
        >
          Choose the mentorship experience that best matches your goals — from a full
          ground-up build to a focused, single-service boost.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease }}
          className="mt-8 flex justify-center"
        >
          <Button asChild size="lg">
            <a href={CTA.profileAudit} target="_blank" rel="noopener noreferrer">
              Start with a Free Profile Audit
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
