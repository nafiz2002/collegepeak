"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/shared/Section";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RESOURCES } from "@/data/content";
import { CTA } from "@/constants/site";
import { ContactSection } from "@/components/sections/home/ContactSection";

export function ResourcesView() {
  return (
    <>
      <PageHero
        eyebrow="Free Resources"
        title={<>Start strong — on us.</>}
        description="Guides, essays, and tools we use with our own students. Free, practical, and updated every cycle."
      >
        <Button asChild size="lg">
          <a href={CTA.profileAudit} target="_blank" rel="noopener noreferrer">
            Get a Free Profile Audit
            <ArrowUpRight className="size-4" />
          </a>
        </Button>
      </PageHero>

      <Section className="pt-6">
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((r) => (
            <RevealItem key={r.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:border-brand/25 hover:shadow-lift"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand transition-transform duration-300 group-hover:scale-105">
                    <r.icon className="size-6" />
                  </span>
                  <Badge variant="soft">{r.tag}</Badge>
                </div>
                <h2 className="mt-6 flex items-center gap-1.5 font-display text-lg tracking-[-0.02em] text-ink">
                  {r.title}
                  <ArrowUpRight className="size-4 -translate-x-1 text-brand opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {r.description}
                </p>
                <span className="mt-6 text-sm font-semibold text-brand-700">
                  Available soon →
                </span>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <ContactSection />
    </>
  );
}
