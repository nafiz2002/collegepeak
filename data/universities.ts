export type University = {
  /** Full name — shown on hover and used for the logo alt text. */
  name: string;
  /** Monogram shown by the fallback mark until an official SVG is added. */
  initials: string;
  /** Slug for the official SVG at /public/logos/<slug>.svg */
  slug: string;
  /** Set true once /public/logos/<slug>.svg exists (see note below). */
  hasLogo?: boolean;
  tint?: string;
  /* --- Hover reveal (SAMPLE outcomes — replace with real, verified data) --- */
  major?: string;
  scholarship?: string;
  student?: string;
};

/**
 * Class of 2030 acceptance profile.
 *
 * LOGOS: To show official university logos, add each mark as
 * /public/logos/<slug>.svg and set `hasLogo: true` on that entry. Until then,
 * an elegant monogram is shown (official trademarks are not bundled by default).
 *
 * HOVER DATA: `major`, `scholarship`, and `student` are sample values shown on
 * hover — replace them with real, verified student outcomes before launch.
 */
export const ACCEPTANCE_UNIVERSITIES: University[] = [
  { name: "Columbia University", initials: "CU", slug: "columbia", tint: "#1D4FD7", major: "Political Science", scholarship: "Merit Scholarship", student: "CollegePeak '30" },
  { name: "Boston University", initials: "BU", slug: "boston", tint: "#B31B1B", major: "Economics", scholarship: "Trustee Scholarship", student: "CollegePeak '30" },
  { name: "Purdue University", initials: "PU", slug: "purdue", tint: "#9D8420", major: "Computer Science", scholarship: "Merit Award", student: "CollegePeak '30" },
  { name: "Emory University", initials: "EU", slug: "emory", tint: "#1E3A8A", major: "Public Health", scholarship: "Need-Based Aid", student: "CollegePeak '30" },
  { name: "UC Berkeley", initials: "UCB", slug: "uc-berkeley", tint: "#1E40AF", major: "Data Science", scholarship: "Merit Award", student: "CollegePeak '30" },
  { name: "UCLA", initials: "UCLA", slug: "ucla", tint: "#2563EB", major: "Business Economics", scholarship: "Regents Scholarship", student: "CollegePeak '30" },
  { name: "University of Rochester", initials: "UR", slug: "rochester", tint: "#9A7B27", major: "Biology", scholarship: "Dean's Scholarship", student: "CollegePeak '30" },
  { name: "Carleton College", initials: "CC", slug: "carleton", tint: "#0F172A", major: "Mathematics", scholarship: "Merit Award", student: "CollegePeak '30" },
  { name: "Colgate University", initials: "CU", slug: "colgate", tint: "#5B2A86", major: "International Relations", scholarship: "Need-Based Aid", student: "CollegePeak '30" },
  { name: "Bucknell University", initials: "BU", slug: "bucknell", tint: "#C2410C", major: "Engineering", scholarship: "Merit Scholarship", student: "CollegePeak '30" },
  { name: "Gettysburg College", initials: "GC", slug: "gettysburg", tint: "#C2410C", major: "Political Science", scholarship: "Presidential Scholarship", student: "CollegePeak '30" },
  { name: "Oberlin College", initials: "OC", slug: "oberlin", tint: "#9A7B27", major: "Environmental Studies", scholarship: "Merit Award", student: "CollegePeak '30" },
  { name: "University of Washington", initials: "UW", slug: "washington", tint: "#4B2E83", major: "Computer Science", scholarship: "Need-Based Aid", student: "CollegePeak '30" },
  { name: "Denison University", initials: "DU", slug: "denison", tint: "#B91C1C", major: "Economics", scholarship: "Merit Scholarship", student: "CollegePeak '30" },
];
