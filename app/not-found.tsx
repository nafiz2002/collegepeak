import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PeakGlyph } from "@/components/shared/Logo";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 -z-10 aura" />
      <div className="text-center">
        <span className="mx-auto grid size-16 place-items-center rounded-2xl border border-line bg-white shadow-soft">
          <PeakGlyph className="size-8" />
        </span>
        <p className="mt-8 font-display text-6xl font-semibold tracking-[-0.03em] text-ink">
          404
        </p>
        <h1 className="mt-3 font-display text-2xl tracking-[-0.02em] text-ink">
          This trail doesn&apos;t lead anywhere.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-muted">
          The page you&apos;re looking for may have moved. Let&apos;s get you back on the path.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">
            <ArrowLeft className="size-4" />
            Back to home
          </Link>
        </Button>
      </div>
    </section>
  );
}
