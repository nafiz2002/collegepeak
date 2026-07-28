import { whatsappLink } from "@/lib/utils";

export const SITE = {
  name: "CollegePeak",
  tagline: "The Peak of Strategic U.S. Admissions & Scholarships.",
  description:
    "CollegePeak is a premium admissions mentorship firm for ambitious students targeting top U.S. universities and scholarships — with the flexibility to pursue stronger opportunities anywhere.",
  url: "https://collegepeak.co",
  whatsappNumber: "8801306990152",
  phoneDisplay: "01306990152",
  address: "Level 7, 27 Shaptak Square, Road 16, Dhanmondi, Dhaka",
  facebook: "https://facebook.com/collegepeak",

  /**
   * Official logo.
   * Make sure your logo is located at:
   * public/logos/cp.png
   */
  logo: "/logos/cp.png",
} as const;

export const CTA = {
  strategySession: whatsappLink(
    SITE.whatsappNumber,
    "Hi CollegePeak — I'd like to book a strategy session."
  ),
  apply: whatsappLink(
    SITE.whatsappNumber,
    "Hi CollegePeak — I'd like to apply for the Premium Mentorship program and schedule a strategy session."
  ),
  consultation: whatsappLink(
    SITE.whatsappNumber,
    "Hi CollegePeak — I'd like to schedule a consultation about mentorship."
  ),
  enroll: whatsappLink(
    SITE.whatsappNumber,
    "Hi CollegePeak — I'd like to enroll in a service."
  ),
  profileAudit: whatsappLink(
    SITE.whatsappNumber,
    "Hi CollegePeak — I'd like to book my free profile audit."
  ),
} as const;

export const STATS = [
  {
    value: 150,
    suffix: "+",
    label: "Acceptances",
    sub: "Across Our Cohorts",
  },
  {
    value: 10,
    prefix: "$",
    suffix: "M+",
    label: "Scholarships Awarded",
    sub: "Merit & Need-Based Aid",
  },
  {
    value: 100,
    suffix: "%",
    label: "Admitted with Scholarships",
    sub: "Class of 2030",
  },
] as const;