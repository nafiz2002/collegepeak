"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EASE as ease } from "@/lib/motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RevealGroup, RevealItem, Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { RESOURCES } from "@/data/content";


export function FreeResources() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Free resources"
        title="Start strong — on us."
        description="Guides, essays, and tools we use with our own students, open to everyone."
      />

      <RevealGroup className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {RESOURCES.map((r) => (
          <RevealItem key={r.title}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, ease }}
              className="group flex h-full flex-col rounded-3xl border border-line/70 bg-white p-8 transition-all duration-400 hover:border-brand/25 hover:shadow-lift"
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-brand-50 text-brand transition-transform duration-300 group-hover:-translate-y-0.5">
                <r.icon className="size-5" />
              </span>
              <h3 className="mt-7 flex items-center gap-1.5 font-display text-lg font-semibold tracking-[-0.02em] text-ink">
                {r.title}
                <ArrowUpRight className="size-4 -translate-x-1 text-brand opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </h3>
              <p className="mt-2 text-[0.95rem] leading-[1.6] text-muted">{r.description}</p>
            </motion.div>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mt-12 flex justify-center">
        <Button asChild variant="secondary">
          <Link href="/resources">
            Browse all resources
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </Reveal>
    </Section>
  );
}
