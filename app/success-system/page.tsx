import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/shared/Section";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { SUCCESS_SYSTEM } from "@/data/content";
import { ContactSection } from "@/components/sections/home/ContactSection";
import { CTA } from "@/constants/site";

export const metadata: Metadata = {
  title: "Success System",
  alternates: { canonical: "/success-system" },
  description:
    "The CollegePeak Success System — a five-phase method that turns ambitious students into admitted, funded applicants: Diagnose, Design, Develop, Draft, Deliver.",
};

export default function SuccessSystemPage() {
  return (
    <>
      <PageHero
        eyebrow="The Success System"
        title={<>A method, not a maybe.</>}
        description="Great admissions outcomes aren't luck — they're the result of a repeatable system. Here's the five-phase process behind every CollegePeak student."
      >
        <Button asChild size="lg">
          <a href={CTA.strategySession} target="_blank" rel="noopener noreferrer">
            Book a Strategy Session
            <ArrowUpRight className="size-4" />
          </a>
        </Button>
      </PageHero>

      <Section className="pt-6">
        <div className="relative">
          {/* Vertical connective spine */}
          <div
            aria-hidden
            className="absolute left-[27px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-brand-200 via-line to-transparent sm:block"
          />

          <RevealGroup className="flex flex-col gap-6">
            {SUCCESS_SYSTEM.map((phase) => (
              <RevealItem key={phase.step}>
                <article className="group relative flex flex-col gap-6 rounded-3xl border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:border-brand/25 hover:shadow-lift sm:flex-row sm:items-start sm:p-8">
                  <div className="flex items-center gap-4 sm:flex-col sm:items-center">
                    <span className="relative z-10 grid size-14 shrink-0 place-items-center rounded-2xl bg-brand text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
                      <phase.icon className="size-6" />
                    </span>
                    <span className="font-display text-sm font-semibold tracking-[0.14em] text-brand sm:mt-2">
                      {phase.step}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h2 className="font-display text-2xl tracking-[-0.02em] text-ink">
                      {phase.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-[1.05rem] leading-relaxed text-muted">
                      {phase.body}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {phase.outcomes.map((o) => (
                        <li
                          key={o}
                          className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm font-medium text-ink"
                        >
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <ContactSection />
    </>
  );
}
