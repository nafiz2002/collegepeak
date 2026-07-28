"use client";

import { motion } from "framer-motion";
import { EASE as ease } from "@/lib/motion";
import { MapPin, Phone, Facebook, ArrowUpRight, MessageCircle, CalendarCheck } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { SITE, CTA } from "@/constants/site";
import { whatsappLink } from "@/lib/utils";


const details = [
  {
    icon: MapPin,
    label: "Office",
    value: SITE.address,
    href: undefined as string | undefined,
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: SITE.phoneDisplay,
    href: whatsappLink(SITE.whatsappNumber),
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "facebook.com/collegepeak",
    href: SITE.facebook,
  },
];

export function ContactView() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let&apos;s map your path.</>}
        description="Book a strategy session or send us a message. We usually reply within a few hours on WhatsApp."
      />

      <Section className="pt-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease }}
            className="glass glass-tint flex flex-col justify-between rounded-3xl p-8 sm:p-10"
          >
            <div>
              <span className="grid size-14 place-items-center rounded-2xl bg-brand text-white shadow-glow">
                <CalendarCheck className="size-7" />
              </span>
              <h2 className="mt-6 font-display text-2xl tracking-[-0.02em] text-ink">
                Book a strategy session
              </h2>
              <p className="mt-3 text-[1.05rem] leading-relaxed text-muted">
                A focused conversation about your goals, your profile, and the clearest
                next step. Come with questions — leave with a plan.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={CTA.strategySession} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" />
                  Message on WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={CTA.profileAudit} target="_blank" rel="noopener noreferrer">
                  Free Profile Audit
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08, ease }}
            className="flex flex-col gap-3"
          >
            {details.map((d) => {
              const inner = (
                <div className="flex items-center gap-4 rounded-3xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:border-brand-200 hover:shadow-lift">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand">
                    <d.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      {d.label}
                    </p>
                    <p className="mt-0.5 font-medium text-ink">{d.value}</p>
                  </div>
                  {d.href && <ArrowUpRight className="ml-auto size-4 text-muted" />}
                </div>
              );
              return d.href ? (
                <a
                  key={d.label}
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {inner}
                </a>
              ) : (
                <div key={d.label}>{inner}</div>
              );
            })}

            <div className="mt-1 overflow-hidden rounded-3xl border border-line shadow-soft">
              <iframe
                title="CollegePeak office location"
                src="https://www.google.com/maps?q=Shaptak+Square+Dhanmondi+Dhaka&output=embed"
                className="h-56 w-full border-0 grayscale-[0.2]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
