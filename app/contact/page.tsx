import type { Metadata } from "next";
import { ContactView } from "@/components/views/ContactView";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a strategy session or a free profile audit with CollegePeak. Reach us on WhatsApp, visit our Dhanmondi office, or find us on Facebook.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactView />;
}
