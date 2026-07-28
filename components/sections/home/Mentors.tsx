"use client";

import { motion } from "framer-motion";
import { EASE as ease } from "@/lib/motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { UniversityMark } from "@/components/shared/UniversityMark";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { MENTORS } from "@/data/mentors";


export function Mentors() {
  return (
    <Section tint>
      <SectionHeading
        eyebrow="Meet your mentors"
        title="Guided by students who got in."
        description="Our mentors sit inside the universities our students aspire to — advice that's current, candid, and lived."
      />

      <RevealGroup className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {MENTORS.map((mentor) => (
          <RevealItem key={mentor.university}>
            <motion.article
              whileHover={{ y: -5 }}
              transition={{ duration: 0.35, ease }}
              className="group glass flex h-full flex-col items-center rounded-3xl p-9 text-center transition-[box-shadow,border-color] duration-400 hover:border-brand/25 hover:shadow-lift"
            >
              <div className="transition-transform duration-400 ease-brand group-hover:scale-[1.06]">
                <UniversityMark
                  initials={mentor.initials}
                  name={mentor.university}
                  slug={mentor.slug}
                  tint={mentor.tint}
                  size={72}
                />
              </div>

              <h3 className="mt-7 font-display text-lg font-semibold tracking-[-0.02em] text-ink">
                {mentor.university}
              </h3>
              <p className="mt-1.5 text-sm text-muted">
                {mentor.classYear} · {mentor.role}
              </p>

              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Admissions Mentor
                <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </motion.article>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
