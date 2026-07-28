"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";
import { GraduationCap, PartyPopper } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SUCCESS_MAP } from "@/data/content";

const N = SUCCESS_MAP.length;

function Dot({ progress, threshold }: { progress: MotionValue<number>; threshold: number }) {
  const on = useTransform(progress, (p): number => (p >= threshold ? 1 : 0));
  const scale = useTransform(on, [0, 1], [1, 1.15]);
  const bg = useTransform(on, [0, 1], ["#EAE8E2", "#2563EB"]);
  const shadow = useTransform(on, [0, 1], [
    "0 0 0 0 rgba(37,99,235,0)",
    "0 0 0 5px rgba(37,99,235,0.12)",
  ]);
  return (
    <motion.span
      style={{ scale, backgroundColor: bg, boxShadow: shadow }}
      className="block size-3 rounded-full"
    />
  );
}

/* ---------- Desktop: horizontal, scroll-driven ---------- */
function HorizontalMap({ progress }: { progress: MotionValue<number> }) {
  const fill = useTransform(progress, [0, 1], ["0%", "100%"]);
  const walker = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <div className="relative hidden lg:block">
      <div className="absolute left-0 right-0 top-[5px] h-px bg-line" />
      <motion.div style={{ width: fill }} className="absolute left-0 top-[5px] h-px bg-brand" />
      <motion.div
        style={{ left: walker }}
        className="absolute top-[5px] z-10 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.span
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          className="grid size-8 place-items-center rounded-full border border-white bg-brand text-white shadow-glow"
        >
          <GraduationCap className="size-4" />
        </motion.span>
      </motion.div>

      <div className="relative flex justify-between">
        {SUCCESS_MAP.map((m, i) => (
          <div key={m.title} className="flex flex-col items-center" style={{ width: `${100 / N}%` }}>
            <Dot progress={progress} threshold={(i + 0.5) / N} />
            <p className="mt-5 text-center text-[0.8rem] font-medium leading-tight text-ink">
              {m.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Mobile: swipeable horizontal timeline ---------- */
function MobileJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);

  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    const step = el.scrollWidth / N;
    setI(Math.min(N - 1, Math.round(el.scrollLeft / step)));
  };

  return (
    <div className="lg:hidden">
      {/* progress */}
      <div className="mb-5 flex items-center gap-3">
        <div className="relative h-1 flex-1 rounded-full bg-line">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-brand"
            animate={{ width: `${((i + 1) / N) * 100}%` }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <span className="text-xs font-medium tabular-nums text-muted">
          {i + 1} / {N}
        </span>
      </div>

      <div
        ref={ref}
        onScroll={onScroll}
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-1"
      >
        {SUCCESS_MAP.map((m, idx) => {
          const isLast = idx === N - 1;
          return (
            <div
              key={m.title}
              className="w-[78%] shrink-0 snap-center rounded-3xl border border-line/70 bg-card p-6"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-2xl bg-brand-50 text-brand">
                  {isLast ? <PartyPopper className="size-5" /> : <m.icon className="size-5" />}
                </span>
                <span className="font-display text-sm font-semibold text-line">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-5 font-display text-lg font-semibold tracking-[-0.01em] text-ink">
                {m.title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{m.blurb}</p>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-center text-xs text-muted">Swipe the journey →</p>
    </div>
  );
}

export function SuccessMap() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.6"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 26 });

  return (
    <Section className="py-24 sm:py-28">
      <SectionHeading
        eyebrow="The admissions journey"
        title="From “I want to study in the USA” to arrival."
        description="One clear path, walked together — every milestone deliberate, nothing left to chance."
        align="left"
      />

      <div ref={ref} className="mt-14 sm:mt-16">
        <div className="mb-12 inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-brand-50/50 px-4 py-2">
          <GraduationCap className="size-4 text-brand" />
          <span className="text-sm font-medium text-brand-700">
            I Want To Study In The USA
          </span>
        </div>

        <HorizontalMap progress={progress} />
        <MobileJourney />
      </div>
    </Section>
  );
}
