import type { Metadata } from "next";
import { MentorshipHero } from "@/components/sections/mentorship/MentorshipHero";
import { MentorshipCards } from "@/components/sections/mentorship/MentorshipCards";
import { ComparisonTable } from "@/components/sections/mentorship/ComparisonTable";
import { ContactSection } from "@/components/sections/home/ContactSection";

export const metadata: Metadata = {
  title: "Mentorship & Services",
  alternates: { canonical: "/mentorship" },
  description:
    "Choose the CollegePeak mentorship experience that matches your goals — Premium, Personal, Essay Master Service, College Listing, or a free Profile Audit.",
};

export default function MentorshipPage() {
  return (
    <>
      <MentorshipHero />
      <MentorshipCards />
      <ComparisonTable />
      <ContactSection />
    </>
  );
}
