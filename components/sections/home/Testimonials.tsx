"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE as ease } from "@/lib/motion";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TESTIMONIALS, type Testimonial } from "@/data/content";
import { cn } from "@/lib/utils";

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="group glass flex h-full flex-col justify-between rounded-3xl p-7 transition-[box-shadow,border-color] duration-400 ease-brand hover:border-brand/25 hover:shadow-lift sm:p-8">
      <blockquote className="font-display text-[1.2rem] font-medium leading-[1.5] tracking-[-0.01em] text-ink sm:text-[1.25rem]">
        {t.quote}
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-3 border-t border-line/70 pt-6">
        <span className="grid size-9 place-items-center rounded-full bg-brand-50 text-sm font-medium text-brand">
          {t.initials}
        </span>
        <span>
          <span className="block text-sm font-medium text-ink">{t.author}</span>
          <span className="block text-xs text-muted">{t.detail}</span>
        </span>
      </figcaption>
    </figure>
  );
}

/** Mobile: one card at a time, swipeable, with dots + optional autoplay. */
function MobileCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const reduce = useReducedMotion();

  const scrollTo = (i: number) => {
    const el = ref.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: reduce ? "auto" : "smooth" });
  };

  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    setIdx(Math.round(el.scrollLeft / el.clientWidth));
  };

  // Optional autoplay (paused when the user prefers reduced motion).
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => {
      const el = ref.current;
      if (!el) return;
      const next = (Math.round(el.scrollLeft / el.clientWidth) + 1) % TESTIMONIALS.length;
      el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
    }, 4500);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <div className="mt-12 sm:hidden">
      <div
        ref={ref}
        onScroll={onScroll}
        className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto"
      >
        {TESTIMONIALS.map((t) => (
          <div key={t.quote} className="w-full shrink-0 snap-center px-0.5">
            <Card t={t} />
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {TESTIMONIALS.map((t, i) => (
          <button
            key={t.quote}
            onClick={() => scrollTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              i === idx ? "w-6 bg-brand" : "w-2 bg-line"
            )}
          />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Student success"
        title="The results speak. So do our students."
        description="Real outcomes from students who chose strategy over guesswork."
      />

      <MobileCarousel />

      {/* Desktop: grid */}
      <div className="mx-auto mt-14 hidden max-w-5xl gap-6 sm:grid sm:grid-cols-2">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.quote}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.08, ease }}
          >
            <Card t={t} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
