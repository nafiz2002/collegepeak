import {
  Compass,
  Target,
  Sparkles,
  ListChecks,
  PenLine,
  Send,
  Award,
  Plane,
  Home,
  type LucideIcon,
  ShieldAlert,
  Layers,
  FileText,
  Wallet,
  MapPin,
} from "lucide-react";

/* ---------- Success Map ---------- */

export type Milestone = { title: string; icon: LucideIcon; blurb: string };

export const SUCCESS_MAP: Milestone[] = [
  { title: "Discovery", icon: Compass, blurb: "We map your goals, story, and budget." },
  { title: "Profile Strategy", icon: Target, blurb: "A plan to make your profile undeniable." },
  { title: "Activities", icon: Sparkles, blurb: "Build real, resonant impact." },
  { title: "College Matching", icon: ListChecks, blurb: "A balanced, ambitious list." },
  { title: "Essays", icon: PenLine, blurb: "Stories only you can tell." },
  { title: "Applications", icon: Send, blurb: "Polished, on-time, error-free." },
  { title: "Scholarships", icon: Award, blurb: "Fund the dream, not just chase it." },
  { title: "Visa", icon: Plane, blurb: "Interview-ready and confident." },
  { title: "Arrival", icon: Home, blurb: "Land, settle, and thrive." },
];

/* ---------- Interactive Problem Solver ---------- */

export type Problem = {
  id: string;
  chip: string;
  icon: LucideIcon;
  title: string;
  /** One concise line naming the problem. */
  challenge: string;
  /** One concise line on how CollegePeak solves it. */
  solution: string;
  includedIn: string[];
};

export const PROBLEMS: Problem[] = [
  {
    id: "no-strategy",
    chip: "No Strategy",
    icon: Compass,
    title: "A clear admissions strategy",
    challenge: "Most students apply reactively — deadline by deadline.",
    solution:
      "We set a strategy first: the right schools, the right narrative, and a timeline that keeps every step deliberate.",
    includedIn: ["Personal Mentorship", "Premium Mentorship"],
  },
  {
    id: "weak-profile",
    chip: "Weak Profile",
    icon: ShieldAlert,
    title: "A profile that stands out",
    challenge: "Strong grades, but little evidence of real impact.",
    solution:
      "Mentors help you build leadership, activities, and research into a profile admissions officers remember.",
    includedIn: ["Personal Mentorship", "Premium Mentorship"],
  },
  {
    id: "generic-essays",
    chip: "Generic Essays",
    icon: PenLine,
    title: "Essays that sound like you",
    challenge: "Officers read thousands of forgettable essays.",
    solution:
      "We find the one story only you can tell, then refine it through unlimited reviews until every line earns its place.",
    includedIn: ["Personal Mentorship", "Premium Mentorship", "Essay Master Service"],
  },
  {
    id: "scholarships",
    chip: "Scholarship Planning",
    icon: Wallet,
    title: "Funding that's realistic",
    challenge: "Aid feels like luck — hoped for, not planned.",
    solution:
      "We match you to merit and need-based aid and build a list where funding is realistic, not wishful.",
    includedIn: ["Personal Mentorship", "Premium Mentorship", "College Listing Program"],
  },
  {
    id: "visa",
    chip: "Visa Journey",
    icon: Plane,
    title: "From offer to arrival",
    challenge: "An offer is only the beginning of the journey.",
    solution:
      "We prepare you for the F-1 interview, get documentation right, and guide you all the way to campus.",
    includedIn: ["Premium Mentorship"],
  },
];

/* ---------- Success System (page) ---------- */

export type SystemPhase = {
  step: string;
  title: string;
  icon: LucideIcon;
  body: string;
  outcomes: string[];
};

export const SUCCESS_SYSTEM: SystemPhase[] = [
  {
    step: "01",
    title: "Diagnose",
    icon: Compass,
    body: "We begin with a rigorous audit of your academics, activities, story, and goals — and a candid read on where you stand against your target schools.",
    outcomes: ["Profile audit", "Target-school gap analysis", "Budget & aid framing"],
  },
  {
    step: "02",
    title: "Design",
    icon: Layers,
    body: "We build a personalized roadmap: the profile moves that matter, a balanced college list, and a timeline that keeps every deadline in view.",
    outcomes: ["Applicant roadmap", "Balanced college list", "Milestone timeline"],
  },
  {
    step: "03",
    title: "Develop",
    icon: Sparkles,
    body: "This is where profiles transform — leadership, passion projects, competitions, and initiatives that turn a strong student into a memorable applicant.",
    outcomes: ["Leadership & impact", "Passion projects & initiatives", "Awards strategy"],
  },
  {
    step: "04",
    title: "Draft",
    icon: FileText,
    body: "Essays, supplementals, and applications — written, reviewed, and refined through unlimited iterations until every component is submission-ready.",
    outcomes: ["Personal statement", "Supplemental essays", "Application review"],
  },
  {
    step: "05",
    title: "Deliver",
    icon: Award,
    body: "We manage submissions, scholarship applications, interviews, and — once offers arrive — the visa and arrival journey end to end.",
    outcomes: ["Scholarship applications", "Interview prep", "Visa & arrival"],
  },
];

/* ---------- Testimonials ---------- */

export type Testimonial = {
  quote: string;
  author: string;
  detail: string;
  initials: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "CollegePeak turned a scattered list of dreams into an actual plan. I went from unsure to admitted, with a scholarship I didn't think was possible.",
    author: "Nahian, Abraham Lincoln Scholar",
    detail: "Class of 2029 , Gettysburg College",
    initials: "N",
  },
  {
    quote:
      "My mentor pushed me to build something real, not just look good on paper. The essays finally sounded like me. That made all the difference.",
    author: "Galib, John F Oberlin Scholar",
    detail: "Class of 2029 , Oberlin College",
    initials: "G",
  },
  {
    quote:
      "The strategy was the part I never knew I was missing. Every week had a clear next step, and every deadline was handled before it became stressful.",
    author: "Shahriar, Near Full Ride with 4 Years Gap",
    detail: "Class of 2030, Denison College",
    initials: "S",
  },
  {
    quote:
      "From profile building to the visa interview, they were there for every step. It felt less like a service and more like a team that wanted me to win.",
    author: "Mahfuz, Offer + visa secured",
    detail: "Class of 2029",
    initials: "M",
  },
];

/* ---------- Free Resources ---------- */

export type Resource = {
  title: string;
  description: string;
  icon: LucideIcon;
  tag: string;
};

export const RESOURCES: Resource[] = [
  { title: "PDF Guides", description: "Step-by-step playbooks for every stage of the application.", icon: FileText, tag: "Guide" },
  { title: "Essay Guides", description: "Frameworks and examples for essays that stand out.", icon: PenLine, tag: "Writing" },
  { title: "Blog", description: "Strategy, deadlines, and admissions insight — in plain language.", icon: Layers, tag: "Reading" },
  { title: "Scholarship Resources", description: "Curated funding opportunities and how to win them.", icon: Award, tag: "Funding" },
  { title: "College Lists", description: "Starter lists by profile, field, and aid potential.", icon: ListChecks, tag: "Research" },
  { title: "Videos", description: "Short, practical walkthroughs from our mentors.", icon: Sparkles, tag: "Watch" },
];

/* ---------- FAQ ---------- */

export type Faq = { question: string; answer: string };

export const FAQS: Faq[] = [
  {
    question: "How much does CollegePeak cost?",
    answer:
      "Our Personal Mentorship Program is 120,000 BDT. For the Premium Mentorship Program, we recommend scheduling a strategy session so we can determine whether it's the right fit for your goals. We also offer focused services — the Essay Master Service (35,000 BDT), the College Listing Program (10,000 BDT), and a completely free Profile Audit to get started.",
  },
  {
    question: "Do I need a high SAT score to work with you?",
    answer:
      "No. Many of our strongest outcomes come from students who leaned into a distinctive profile rather than test scores alone. We help you build the strongest application around your actual strengths — and where testing matters, we help you plan it strategically.",
  },
  {
    question: "Can CollegePeak help me win scholarships?",
    answer:
      "Yes — scholarship planning is central to what we do. We match you to merit and need-based opportunities, position your application for aid, and build a college list where funding is realistic. Our cohorts have earned $10M+ in scholarships.",
  },
  {
    question: "What kind of support do students get?",
    answer:
      "Personal Mentorship students receive priority support and unlimited essay and application reviews. Premium Mentorship students work with a dedicated 4-to-1 mentor team and have 24/7 support across the entire cycle — from profile building through visa and arrival.",
  },
  {
    question: "When should I start, and what's the ideal timeline?",
    answer:
      "The earlier the better — the most transformative work (profile building, research, leadership) needs runway. That said, we support students at every stage, including those applying this cycle. Book a free profile audit and we'll map a realistic timeline for you.",
  },
  {
    question: "Do you only help with U.S. universities?",
    answer:
      "The United States is our specialty. But when another destination offers a genuinely stronger opportunity for you, we'll help you pursue it with the same strategic rigor — because the goal is your best outcome, not just a particular map pin.",
  },
];

/* ---------- Coming Soon ---------- */

export type ComingSoonItem = { title: string; icon: LucideIcon };

export const COMING_SOON: ComingSoonItem[] = [
  { title: "University Database", icon: ListChecks },
  { title: "Student Dashboard", icon: Layers },
  { title: "Application Tracker", icon: Send },
  { title: "Mentor Dashboard", icon: Compass },
  { title: "SAT Practice Portal", icon: Target },
  { title: "Digital Resource Library", icon: FileText },
];

export { MapPin };
