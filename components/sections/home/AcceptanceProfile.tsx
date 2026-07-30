import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Marquee } from "@/components/shared/Marquee";
import { UniversityMark } from "@/components/shared/UniversityMark";
import { ACCEPTANCE_UNIVERSITIES, type University } from "@/data/universities";

function UniversityTile({ uni }: { uni: University }) {
  return (
    <div className="group relative h-[132px] w-[248px] shrink-0 overflow-hidden rounded-3xl border border-line/70 bg-card p-6 transition-all duration-400 ease-brand hover:-translate-y-1 hover:border-brand/25 hover:shadow-lift">
      <div className="flex items-center gap-4">
        <UniversityMark
          initials={uni.initials}
          name={uni.name}
          slug={uni.slug}
          hasLogo={uni.hasLogo}
          tint={uni.tint}
          size={48}
        />
        <p className="font-display text-[0.98rem] font-semibold leading-tight tracking-[-0.01em] text-ink">
          {uni.name}
        </p>
      </div>

      <div className="mt-5 flex items-center gap-2 text-sm text-muted">
        <span className="size-1.5 rounded-full bg-brand" />
        Admitted · Class of 2030
      </div>
    </div>
  );
}

export function AcceptanceProfile() {
  return (
    <Section tint container={false} className="overflow-hidden">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Where our students land"
          title="Offers earned across our cohorts."
          description="100% of our students received admission offers and scholarship awards across top U.S. universities."
        />
      </div>

      <div className="mt-16 flex flex-col gap-5">
        <Marquee speed={52}>
          {ACCEPTANCE_UNIVERSITIES.map((uni, i) => (
            <UniversityTile key={`${uni.slug}-a-${i}`} uni={uni} />
          ))}
        </Marquee>
        <Marquee speed={62} reverse>
          {[...ACCEPTANCE_UNIVERSITIES].reverse().map((uni, i) => (
            <UniversityTile key={`${uni.slug}-b-${i}`} uni={uni} />
          ))}
        </Marquee>
      </div>
    </Section>
  );
}
