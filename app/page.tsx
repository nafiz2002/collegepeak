import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/Hero";
import { AcceptanceProfile } from "@/components/sections/home/AcceptanceProfile";
import { SuccessMap } from "@/components/sections/home/SuccessMap";
import { ProblemSolver } from "@/components/sections/home/ProblemSolver";
import { MentorshipPreview } from "@/components/sections/home/MentorshipPreview";
import { Mentors } from "@/components/sections/home/Mentors";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { FreeResources } from "@/components/sections/home/FreeResources";
import { FaqPreview } from "@/components/sections/home/FaqPreview";
import { ContactSection } from "@/components/sections/home/ContactSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/**
 * Homepage story (one coherent narrative):
 * Hero → University Acceptances → Admissions Journey → Why CollegePeak →
 * Mentorship → Meet Your Mentors → Student Success → Resources → FAQ → Final CTA.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <AcceptanceProfile />
      <SuccessMap />
      <ProblemSolver />
      <MentorshipPreview />
      <Mentors />
      <Testimonials />
      <FreeResources />
      <FaqPreview />
      <ContactSection />
    </>
  );
}
