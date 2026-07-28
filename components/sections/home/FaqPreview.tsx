import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { FAQS } from "@/data/content";

export function FaqPreview() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Questions, answered"
        title="Everything you're wondering about."
        description="Straight answers on cost, scholarships, timelines, and support."
      />

      <div className="mx-auto mt-14 max-w-3xl">
        <FaqAccordion items={FAQS.slice(0, 5)} />
        <Reveal className="mt-10 flex justify-center">
          <Button asChild variant="secondary">
            <Link href="/faq">
              See all FAQs
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}
