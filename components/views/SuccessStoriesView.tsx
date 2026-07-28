"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/shared/Section";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { Marquee } from "@/components/shared/Marquee";
import { UniversityMark } from "@/components/shared/UniversityMark";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { TESTIMONIALS } from "@/data/content";
import { ACCEPTANCE_UNIVERSITIES } from "@/data/universities";
import { STATS } from "@/constants/site";
import { ContactSection } from "@/components/sections/home/ContactSection";

export function SuccessStoriesView() {
  return (
    <>
      <PageHero
        eyebrow="Success Stories"
        title={<>Outcomes we&apos;re proud of.</>}
        description="Behind every acceptance is a student who bet on strategy. Here's what that looks like in practice."
      />

      {/* Stats band */}
      <Section className="pt-4">
        <div className="grid gap-5 sm:grid-cols-3">
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="glass glass-tint rounded-3xl px-6 py-10 text-center"
            >
              <div className="font-display text-5xl font-semibold tracking-[-0.03em] text-ink">
                <AnimatedCounter
                  value={stat.value}
                  prefix={"prefix" in stat ? (stat.prefix as string) : ""}
                  suffix={stat.suffix}
                />
              </div>
              <p className="mt-3 font-display font-semibold text-ink">{stat.label}</p>
              <p className="mt-1 text-sm text-muted">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section tint className="pt-6">
        <RevealGroup className="grid gap-5 sm:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <RevealItem key={t.quote}>
              <figure className="glass glass-tint flex h-full flex-col rounded-3xl p-8">
                <Quote className="size-8 text-brand-200" />
                <blockquote className="mt-5 flex-1 text-[1.05rem] leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full bg-brand-50 font-display font-semibold text-brand">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">
                      {t.author}
                    </span>
                    <span className="block text-xs text-muted">{t.detail}</span>
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* Acceptance marquee */}
      <Section container={false} className="pt-4">
        <div className="container-tight mb-10 text-center">
          <span className="eyebrow">
            <span className="size-1.5 rounded-full bg-brand" />
            Class of 2030 · Acceptance Profile
          </span>
          <h2 className="mt-4 font-display text-3xl tracking-[-0.02em] text-ink">
            Offers earned across our cohorts.
          </h2>
        </div>
        <Marquee speed={50}>
          {ACCEPTANCE_UNIVERSITIES.map((uni, i) => (
            <div
              key={`${uni.slug}-${i}`}
              className="flex items-center justify-center rounded-3xl border border-line bg-white px-6 py-5 shadow-soft"
            >
              <UniversityMark
                initials={uni.initials}
                name={uni.name}
                slug={uni.slug}
                tint={uni.tint}
                size={52}
              />
            </div>
          ))}
        </Marquee>
      </Section>

      <ContactSection />
    </>
  );
}
