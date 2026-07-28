import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/shared/Section";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { FAQS } from "@/data/content";
import { ContactSection } from "@/components/sections/home/ContactSection";

export const metadata: Metadata = {
  title: "FAQ",
  alternates: { canonical: "/faq" },
  description:
    "Answers to common questions about CollegePeak — cost, SAT scores, scholarships, support, timelines, and destinations beyond the U.S.",
};

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        eyebrow="Frequently Asked"
        title={<>Everything you&apos;re wondering about.</>}
        description="Straight answers on cost, scholarships, timelines, and how we work. Still curious? Reach out any time."
      />

      <Section className="pt-6">
        <div className="mx-auto max-w-3xl">
          <FaqAccordion items={FAQS} />
        </div>
      </Section>

      <ContactSection />
    </>
  );
}
