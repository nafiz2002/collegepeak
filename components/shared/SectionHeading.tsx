import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { type ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col",
        align === "center" ? "mx-auto items-center text-center measure" : "measure",
        className
      )}
    >
      {eyebrow ? <span className="eyebrow mb-5">{eyebrow}</span> : null}
      <h2 className="text-[2rem] leading-[1.08] text-ink sm:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-[1.6] text-muted sm:text-[1.2rem]">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
