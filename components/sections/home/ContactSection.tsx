import Link from "next/link";
import { MapPin, Phone, Facebook, ArrowUpRight, ArrowRight } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { SITE, CTA } from "@/constants/site";
import { whatsappLink } from "@/lib/utils";

const channels = [
  { icon: MapPin, label: "Visit", value: "27 Shaptak Square, Dhanmondi", href: undefined as string | undefined },
  { icon: Phone, label: "WhatsApp", value: SITE.phoneDisplay, href: whatsappLink(SITE.whatsappNumber) },
  { icon: Facebook, label: "Facebook", value: "facebook.com/collegepeak", href: SITE.facebook },
];

export function ContactSection() {
  return (
    <Section>
      <Reveal>
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-line/70 bg-surface">
          <div className="grid gap-12 p-10 sm:p-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="eyebrow mb-5">Let&apos;s begin</span>
              <h2 className="max-w-md font-display text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[2.5rem]">
                Your best-fit university is closer than it feels.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-[1.6] text-muted">
                Book a strategy session and leave with clarity — a realistic list, a
                plan for your profile, and a path to funding.
              </p>
              <div className="mt-9 flex flex-col gap-x-6 gap-y-4 sm:flex-row sm:items-center">
                <Button asChild size="lg">
                  <a href={CTA.strategySession} target="_blank" rel="noopener noreferrer">
                    Book a Strategy Session
                  </a>
                </Button>
                <Link
                  href="/mentorship"
                  className="group inline-flex items-center gap-1.5 text-[0.95rem] font-medium text-ink transition-colors hover:text-brand-700"
                >
                  Explore services
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              {channels.map((c) => {
                const inner = (
                  <div className="flex items-center gap-4 rounded-2xl border border-line/70 bg-white px-5 py-4 transition-all duration-300 hover:border-brand-200 hover:shadow-soft">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand">
                      <c.icon className="size-[18px]" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.12em] text-muted">{c.label}</p>
                      <p className="mt-0.5 text-sm font-medium text-ink">{c.value}</p>
                    </div>
                    {c.href && <ArrowUpRight className="ml-auto size-4 text-muted" />}
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="block">
                    {inner}
                  </a>
                ) : (
                  <div key={c.label}>{inner}</div>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
