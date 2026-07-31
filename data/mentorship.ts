import { CTA } from "@/constants/site";

export type Program = {
  id: string;
  name: string;
  /** Fixed-price services only. Omitted for consultation-based programs. */
  price?: string;
  /** Shown when there is no public price (e.g. "By application"). */
  priceNote?: string;
  flagship?: boolean;
  description: string;
  /** Short value line used on the homepage preview. */
  homeDescription?: string;
  /** Trimmed feature set for the homepage preview. */
  previewFeatures?: string[];
  features: string[];
  cta: { label: string; href: string };
};

export const PERSONAL_PROGRAM: Program = {
  id: "personal",
  name: "CollegePeak Personal Mentorship",
  priceNote: "Pricing shared in your consultation",
  description:
    "Personalized admissions mentorship from strategy to submission — for students ready to shape a strong application with a dedicated mentor.",
  homeDescription:
    "Personalized admissions mentorship from strategy to submission.",
  previewFeatures: [
    "Dedicated Strategy Mentor",
    "Personalized Admissions Strategy",
    "Unlimited Essay & Application Reviews",
    "Interview Preparation",
  ],
  features: [
    "Dedicated Strategy Mentor",
    "Personalized Admissions Strategy",
    "Unlimited Essay Reviews",
    "Unlimited Application Reviews",
    "Extracurricular Strategy",
    "Awards & Competitions Strategy",
    "Financial Aid Strategy",
    "Interview Preparation",
    "University Selection",
    "Priority Support",
  ],
  cta: { label: "Book a Strategy Session", href: CTA.strategySession },
};

export const PREMIUM_PROGRAM: Program = {
  id: "premium",
  name: "CollegePeak Premium Mentorship",
  priceNote: "Pricing shared in your strategy session",
  flagship: true,
  description:
    "Our most comprehensive applicant development experience — building an exceptional applicant from the ground up over a full admissions cycle.",
  homeDescription:
    "Our most comprehensive applicant development experience.",
  previewFeatures: [
    "Personalized Applicant Development Roadmap",
    "Leadership & Passion Project Development",
    "Awards & Competitions Strategy",
    "Financial Aid & Scholarship Strategy",
  ],
  features: [
    "Personalized Applicant Development Roadmap",
    "Leadership Development",
    "Research Guidance",
    "Passion Project Development",
    "Nonprofit / Initiative Development",
    "Startup Development (where appropriate)",
    "Awards & Competitions Strategy",
    "Personal Branding & Applicant Positioning",
    "Extracurricular Strategy",
    "Major & Career Exploration",
    "Financial Aid & Scholarship Strategy",
    "Interview Preparation",
    "Application Strategy",
    "University Selection",
    "Visa & Pre-departure Guidance",
  ],
  cta: { label: "Apply for a Strategy Session", href: CTA.apply },
};

export const ESSAY_PROGRAM: Program = {
  id: "essay",
  name: "Essay Master Service",
  price: "35,000 BDT",
  description:
    "Craft essays that read like you at your most compelling — from a blank page to a submitted story.",
  features: [
    "Personal Statement",
    "Supplemental Essays",
    "Unlimited Revisions",
    "Strategy Session",
  ],
  cta: { label: "Enroll Now", href: CTA.enroll },
};

export const COLLEGE_LIST_PROGRAM: Program = {
  id: "college-list",
  name: "College Listing Program",
  price: "10,000 BDT",
  description:
    "A balanced, data-informed college list built around your profile, budget, and ambitions.",
  features: [
    "Reach Schools",
    "Match Schools",
    "Safety Schools",
    "Scholarship Match",
    "Financial Fit Analysis",
  ],
  cta: { label: "Enroll Now", href: CTA.enroll },
};

export const PROFILE_AUDIT_PROGRAM: Program = {
  id: "profile-audit",
  name: "FREE Profile Audit",
  price: "Free",
  description:
    "A no-pressure look at where you stand today — and the clearest next step toward a stronger application.",
  features: [
    "30-minute consultation",
    "Profile assessment",
    "Scholarship evaluation",
    "University recommendations",
    "Next-step roadmap",
  ],
  cta: { label: "Book Free Profile Audit", href: CTA.profileAudit },
};

/** Ordered for the Mentorship page (flagship first). */
export const ALL_PROGRAMS: Program[] = [
  PREMIUM_PROGRAM,
  PERSONAL_PROGRAM,
  ESSAY_PROGRAM,
  COLLEGE_LIST_PROGRAM,
  PROFILE_AUDIT_PROGRAM,
];

/** Two headline programs shown on the home page preview. */
export const PREVIEW_PROGRAMS: Program[] = [PREMIUM_PROGRAM, PERSONAL_PROGRAM];

/* ---------- Comparison table ---------- */

export type ComparisonColumn = {
  id: string;
  label: string;
  flagship?: boolean;
};

export const COMPARISON_COLUMNS: ComparisonColumn[] = [
  { id: "premium", label: "Premium", flagship: true },
  { id: "personal", label: "Personal" },
  { id: "essay", label: "Essay" },
  { id: "college-list", label: "College List" },
  { id: "profile-audit", label: "Profile Audit" },
];

/** yes = ✓, no = —, unlimited = "Unlimited" pill. */
export type CellValue = "yes" | "no" | "unlimited";

export type ComparisonRow = {
  feature: string;
  values: Record<string, CellValue>;
};

/**
 * Build a row from a shorthand map. Columns not listed default to "no".
 * Keeps the matrix readable while guaranteeing Premium reads as the fullest column.
 */
const row = (
  feature: string,
  map: Partial<Record<string, CellValue>>
): ComparisonRow => ({
  feature,
  values: COMPARISON_COLUMNS.reduce<Record<string, CellValue>>((acc, c) => {
    acc[c.id] = map[c.id] ?? "no";
    return acc;
  }, {}),
});

const Y: CellValue = "yes";
const U: CellValue = "unlimited";

export const COMPARISON_ROWS: ComparisonRow[] = [
  row("Dedicated Mentor", { premium: Y, personal: Y, essay: Y }),
  row("Applicant Development Roadmap", { premium: Y }),
  row("Leadership Development", { premium: Y }),
  row("Research Guidance", { premium: Y }),
  row("Passion Project Development", { premium: Y }),
  row("Awards & Competitions Strategy", { premium: Y, personal: Y }),
  row("Personal Branding & Positioning", { premium: Y }),
  row("Essay Mentorship", { premium: U, personal: U, essay: U }),
  row("Application Reviews", { premium: U, personal: U, essay: Y }),
  row("Extracurricular Strategy", { premium: Y, personal: Y }),
  row("Scholarship Strategy", { premium: Y, personal: Y, "college-list": Y, "profile-audit": Y }),
  row("Financial Aid Strategy", { premium: Y, personal: Y, "college-list": Y }),
  row("University Selection", { premium: Y, personal: Y, "college-list": Y, "profile-audit": Y }),
  row("Interview Preparation", { premium: Y, personal: Y }),
  row("Visa & Pre-departure Guidance", { premium: Y }),
  row("Waitlist Support", { premium: Y, personal: Y }),
  row("24/7 Priority Support", { premium: Y, personal: Y }),
];
