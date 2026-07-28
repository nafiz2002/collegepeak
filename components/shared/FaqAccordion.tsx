"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";
import type { Faq } from "@/data/content";

export function FaqAccordion({
  items,
  defaultOpen,
}: {
  items: Faq[];
  defaultOpen?: string;
}) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={defaultOpen ?? items[0]?.question}
      className="flex flex-col gap-3"
    >
      {items.map((faq, i) => (
        <Reveal key={faq.question} delay={i}>
          <AccordionItem value={faq.question}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        </Reveal>
      ))}
    </Accordion>
  );
}
