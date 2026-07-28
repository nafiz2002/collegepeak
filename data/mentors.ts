export type Mentor = {
  university: string;
  initials: string;
  slug: string;
  classYear: string;
  role: string;
  tint?: string;
};

export const MENTORS: Mentor[] = [
  {
    university: "Denison University",
    initials: "DU",
    slug: "denison",
    classYear: "Class of 2028",
    role: "Admissions Mentor",
    tint: "#B91C1C",
  },
  {
    university: "Amherst College",
    initials: "AC",
    slug: "amherst",
    classYear: "Class of 2027",
    role: "Admissions Mentor",
    tint: "#7C1D2B",
  },
  {
    university: "University of Toronto",
    initials: "UT",
    slug: "toronto",
    classYear: "Class of 2030",
    role: "Admissions Mentor",
    tint: "#1E3A8A",
  },
  {
    university: "Furman University",
    initials: "FU",
    slug: "furman",
    classYear: "Class of 2030",
    role: "Admissions Mentor",
    tint: "#5B2A86",
  },
  {
    university: "Oberlin College",
    initials: "OC",
    slug: "oberlin",
    classYear: "Class of 2029",
    role: "Admissions Mentor",
    tint: "#B8860B",
  },
];
