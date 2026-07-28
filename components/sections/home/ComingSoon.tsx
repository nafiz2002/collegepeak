"use client";

import { motion } from "framer-motion";
import { EASE as ease } from "@/lib/motion";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { COMING_SOON } from "@/data/content";


export function ComingSoon() {
  return (
    <Section tint>
      <SectionHeading
        eyebrow="On the horizon"
        title="A full admissions platform, in the making."
        description="We're building the tools our students have always wished existed. A first look."
      />

      <RevealGroup className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {COMING_SOON.map((item) => (
          <RevealItem key={item.title}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, ease }}
              className="group flex h-36 flex-col justify-between rounded-3xl border border-line/70 bg-white/50 p-7 backdrop-blur-md transition-colors duration-300 hover:border-brand-200"
            >
              <div className="flex items-start justify-between">
                <span className="grid size-11 place-items-center rounded-2xl bg-brand-50/70 text-brand/90">
                  <item.icon className="size-5" />
                </span>
                <span className="rounded-full border border-line/80 px-2.5 py-1 text-[0.62rem] font-medium uppercase tracking-[0.12em] text-muted">
                  Coming soon
                </span>
              </div>
              <p className="font-display text-lg font-semibold tracking-[-0.02em] text-ink/80">
                {item.title}
              </p>
            </motion.div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
