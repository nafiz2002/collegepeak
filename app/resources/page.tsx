import type { Metadata } from "next";
import { ResourcesView } from "@/components/views/ResourcesView";

export const metadata: Metadata = {
  title: "Free Resources",
  description:
    "Free admissions guides, essay frameworks, scholarship resources, and college lists — the same tools CollegePeak uses with its own students.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return <ResourcesView />;
}
