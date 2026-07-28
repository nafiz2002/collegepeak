"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight, ArrowRight } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/constants/nav";
import { CTA } from "@/constants/site";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll when the full-screen menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease }}
        className={cn(
          "mx-auto mt-3 flex max-w-[1120px] items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 sm:px-5",
          scrolled || open
            ? "border border-white/60 bg-white/85 shadow-soft backdrop-blur-xl"
            : "border border-transparent bg-transparent"
        )}
        style={{ width: "calc(100% - 1.5rem)" }}
      >
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  active ? "text-brand-700" : "text-muted hover:text-ink"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-brand-50"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={CTA.strategySession} target="_blank" rel="noopener noreferrer">
              Book a Strategy Session
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-full border border-line bg-white text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </motion.div>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col px-6 pb-10 pt-28">
              <nav className="flex flex-col">
                {NAV_ITEMS.map((item, i) => {
                  const active = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.06 + i * 0.05, ease }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center justify-between border-b border-line/70 py-5 font-display text-2xl tracking-[-0.02em] transition-colors",
                          active ? "text-brand-700" : "text-ink"
                        )}
                      >
                        {item.label}
                        <ArrowRight
                          className={cn(
                            "size-5 transition-colors",
                            active ? "text-brand" : "text-muted"
                          )}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5, ease }}
                className="mt-auto flex flex-col gap-3"
              >
                <Button asChild size="lg" className="w-full">
                  <a href={CTA.strategySession} target="_blank" rel="noopener noreferrer">
                    Book a Strategy Session
                  </a>
                </Button>
                <Button asChild size="lg" variant="secondary" className="w-full">
                  <a href={CTA.profileAudit} target="_blank" rel="noopener noreferrer">
                    Start Your Admissions Journey
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
