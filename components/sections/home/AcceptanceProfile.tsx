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

      {/* Default: acceptance confirmation. Hover: outcome detail. */}
      <div className="relative mt-5 h-9">
        <p className="absolute inset-0 flex items-center gap-2 text-sm text-muted transition-opacity duration-300 group-hover:opacity-0">
          <span className="size-1.5 rounded-full bg-brand" />
          Admitted · Class of 2030
        </p>
        <dl className="absolute inset-0 grid grid-cols-3 gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {[
            ["Major", uni.major],
            ["Award", uni.scholarship],
            ["Student", uni.student],
          ].map(([label, value]) => (
            <div key={label as string} className="min-w-0">
              <dt className="text-[0.6rem] font-medium uppercase tracking-[0.08em] text-muted">
                {label}
              </dt>
              <dd className="truncate text-[0.72rem] font-medium text-ink">{value}</dd>
            </div>
          ))}
        </dl>
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
          description="100% of our students received admission offers and scholarship awards. Hover any school to see the outcome."
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
