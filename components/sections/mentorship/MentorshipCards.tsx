import { Section } from "@/components/shared/Section";
import { ProgramCard } from "@/components/shared/ProgramCard";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { ALL_PROGRAMS } from "@/data/mentorship";

export function MentorshipCards() {
  // Flagship + Personal lead; the three focused services follow.
  const [premium, personal, ...rest] = ALL_PROGRAMS;

  return (
    <Section className="pt-8 sm:pt-10">
      <RevealGroup className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-7">
        <RevealItem className="h-full lg:z-10 lg:scale-[1.02]">
          <ProgramCard program={premium} />
        </RevealItem>
        <RevealItem className="h-full">
          <ProgramCard program={personal} />
        </RevealItem>
      </RevealGroup>

      <RevealGroup className="mt-6 grid items-stretch gap-6 lg:grid-cols-3 lg:gap-7">
        {rest.map((program) => (
          <RevealItem key={program.id} className="h-full">
            <ProgramCard program={program} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
