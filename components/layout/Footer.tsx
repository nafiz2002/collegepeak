import Link from "next/link";
import { MapPin, Phone, Facebook, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { NAV_ITEMS } from "@/constants/nav";
import { SITE, CTA } from "@/constants/site";
import { whatsappLink } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-surface">
      <div className="container-tight py-16">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo className="scale-[1.8] origin-left" />

            <p className="mt-8 text-sm leading-relaxed text-muted">
              {SITE.tagline}
            </p>

            <a
              href={CTA.strategySession}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand"
            >
              Book a strategy session
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Explore</h3>
            <ul className="mt-2 flex flex-col sm:mt-4 sm:gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="-mx-2 block rounded-lg px-2 py-2.5 text-sm text-muted transition-colors hover:text-brand-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Get in touch</h3>
            <ul className="mt-4 space-y-4 text-sm text-muted">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
                <span>{SITE.address}</span>
              </li>

              <li>
                <a
                  href={whatsappLink(SITE.whatsappNumber)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mx-2 flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:text-brand-700"
                >
                  <Phone className="size-4 shrink-0 text-brand" />
                  WhatsApp — {SITE.phoneDisplay}
                </a>
              </li>

              <li>
                <a
                  href={SITE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mx-2 flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:text-brand-700"
                >
                  <Facebook className="size-4 shrink-0 text-brand" />
                  facebook.com/collegepeak
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 hairline" />

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-muted sm:flex-row">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <p>The Peak of Strategic U.S. Admissions & Scholarships.</p>
        </div>
      </div>
    </footer>
  );
}