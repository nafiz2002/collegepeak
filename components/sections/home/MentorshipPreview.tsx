"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RevealGroup, RevealItem, Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { PREVIEW_PROGRAMS, type Program } from "@/data/mentorship";
import { cn } from "@/lib/utils";

function PreviewCard({ program }: { program: Program }) {
  const flagship = program.flagship;
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group glass flex h-full flex-col p-8 transition-[box-shadow,border-color] duration-400 ease-brand hover:shadow-lift sm:p-9",
        flagship ? "border-brand/25 ring-1 ring-brand/10 shadow-glow" : "hover:border-brand/25"
      )}
    >
      {flagship && (
        <span className="mb-3 inline-flex w-fit items-center rounded-full bg-brand/10 px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.12em] text-brand-700">
          Flagship
        </span>
      )}
      <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink">
        {program.name}
      </h3>
      <p className="mt-3 text-[1.02rem] leading-[1.6] text-muted">
        {program.homeDescription ?? program.description}
      </p>

      <ul className="mt-7 flex flex-1 flex-col gap-3">
        {(program.previewFeatures ?? program.features.slice(0, 4)).map((f) => (
          <li key={f} className="flex items-start gap-3 text-[0.95rem] text-ink">
            <Check className="mt-1 size-4 shrink-0 text-brand" strokeWidth={2.25} />
            <span className="leading-snug">{f}</span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        variant={flagship ? "primary" : "secondary"}
        size="lg"
        className="group mt-8 w-full"
      >
        <a href={program.cta.href} target="_blank" rel="noopener noreferrer">
          {program.cta.label}
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </a>
      </Button>
    </motion.div>
  );
}

export function MentorshipPreview() {
  return (
    <Section tint className="py-24 sm:py-28">
      <SectionHeading
        eyebrow="Mentorship"
        title="Guidance calibrated to your ambition."
        description="Understand the value first. Pricing is discussed when we meet — in a strategy session tailored to your goals."
      />

      <RevealGroup className="mx-auto mt-14 grid max-w-4xl items-stretch gap-6 lg:grid-cols-2">
        {PREVIEW_PROGRAMS.map((program) => (
          <RevealItem key={program.id} className="h-full">
            <PreviewCard program={program} />
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mt-12 flex justify-center">
        <Button asChild variant="secondary" size="lg">
          <Link href="/mentorship">
            Explore All Services
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </Reveal>
    </Section>
  );
}
