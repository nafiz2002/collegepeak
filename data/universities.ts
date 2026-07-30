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
  classYear?: string;
  /* --- Hover reveal (SAMPLE outcomes — replace with real, verified data) --- */
  major?: string;
  scholarship?: string;
  student?: string;
};

/**
 * Class of 2028-2030 acceptance profile.
 */
export const ACCEPTANCE_UNIVERSITIES: University[] = [
  { name: "Columbia University", initials: "CU", slug: "columbia", hasLogo: true, tint: "#1D4FD7", classYear: "2028", major: "Political Science", scholarship: "Merit Scholarship", student: "CollegePeak '28" },
  { name: "Boston University", initials: "BU", slug: "boston", hasLogo: true, tint: "#B31B1B", classYear: "2029", major: "Economics", scholarship: "Trustee Scholarship", student: "CollegePeak '29" },
  { name: "Purdue University", initials: "PU", slug: "purdue", hasLogo: true, tint: "#9D8420", classYear: "2030", major: "Computer Science", scholarship: "Merit Award", student: "CollegePeak '30" },
  { name: "Emory University", initials: "EU", slug: "emory", hasLogo: true, tint: "#1E3A8A", classYear: "2028", major: "Public Health", scholarship: "Need-Based Aid", student: "CollegePeak '28" },
  { name: "UC Berkeley", initials: "UCB", slug: "uc-berkeley", hasLogo: true, tint: "#1E40AF", classYear: "2029", major: "Data Science", scholarship: "Merit Award", student: "CollegePeak '29" },
  { name: "UCLA", initials: "UCLA", slug: "ucla", hasLogo: true, tint: "#2563EB", classYear: "2030", major: "Business Economics", scholarship: "Regents Scholarship", student: "CollegePeak '30" },
  { name: "University of Rochester", initials: "UR", slug: "rochester", hasLogo: true, tint: "#9A7B27", classYear: "2028", major: "Biology", scholarship: "Dean's Scholarship", student: "CollegePeak '28" },
  { name: "Carleton College", initials: "CC", slug: "carleton", hasLogo: true, tint: "#0F172A", classYear: "2029", major: "Mathematics", scholarship: "Merit Award", student: "CollegePeak '29" },
  { name: "Colgate University", initials: "CU", slug: "colgate", hasLogo: true, tint: "#5B2A86", classYear: "2030", major: "International Relations", scholarship: "Need-Based Aid", student: "CollegePeak '30" },
  { name: "Bucknell University", initials: "BU", slug: "bucknell", hasLogo: true, tint: "#C2410C", classYear: "2028", major: "Engineering", scholarship: "Merit Scholarship", student: "CollegePeak '28" },
  { name: "Gettysburg College", initials: "GC", slug: "gettysburg", hasLogo: true, tint: "#C2410C", classYear: "2029", major: "Political Science", scholarship: "Presidential Scholarship", student: "CollegePeak '29" },
  { name: "Oberlin College", initials: "OC", slug: "oberlin", hasLogo: true, tint: "#9A7B27", classYear: "2030", major: "Environmental Studies", scholarship: "Merit Award", student: "CollegePeak '30" },
  { name: "University of Washington", initials: "UW", slug: "washington", hasLogo: true, tint: "#4B2E83", classYear: "2028", major: "Computer Science", scholarship: "Need-Based Aid", student: "CollegePeak '28" },
  { name: "Denison University", initials: "DU", slug: "denison", hasLogo: true, tint: "#B91C1C", classYear: "2029", major: "Economics", scholarship: "Merit Scholarship", student: "CollegePeak '29" },
];
