import type { Metadata } from "next";
import { SuccessStoriesView } from "@/components/views/SuccessStoriesView";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "150+ acceptances and $10M+ in scholarships. Real outcomes from CollegePeak students who chose strategy over guesswork.",
  alternates: { canonical: "/success-stories" },
};

export default function SuccessStoriesPage() {
  return <SuccessStoriesView />;
}
