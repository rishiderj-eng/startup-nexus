import {
  Lightbulb,
  Sparkles,
  ClipboardCheck,
  Gauge,
  Rocket,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

// TODO(backend): replace with GET /api/stats
export const stats: Stat[] = [
  { value: 10000, suffix: "+", label: "Founders" },
  { value: 3000, suffix: "+", label: "Experts" },
  { value: 120, suffix: "+", label: "Countries" },
  { value: 500, suffix: "+", label: "Investors" },
];

export interface Step {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** chips shown under the step (industries, score axes, etc.) */
  tags?: string[];
}

export const howItWorks: Step[] = [
  {
    step: "01",
    title: "Submit your idea",
    description:
      "Describe the problem, your solution, and who it's for. No deck required — start with a paragraph.",
    icon: Lightbulb,
  },
  {
    step: "02",
    title: "AI categorizes it",
    description:
      "Our classifier tags your startup by industry and routes it to the right specialists.",
    icon: Sparkles,
    tags: ["Healthcare", "AI", "SaaS", "FinTech", "Climate", "Food"],
  },
  {
    step: "03",
    title: "Experts review",
    description:
      "Vetted operators in your space evaluate the idea and leave structured, actionable feedback.",
    icon: ClipboardCheck,
  },
  {
    step: "04",
    title: "Get a validation score",
    description:
      "A transparent score across six dimensions shows exactly where you're strong and where you're not.",
    icon: Gauge,
    tags: [
      "Innovation",
      "Feasibility",
      "Market Fit",
      "Legal Readiness",
      "Technology",
      "Funding Readiness",
    ],
  },
  {
    step: "05",
    title: "Improve",
    description:
      "Turn recommendations into tasks and milestones. Re-submit and watch your score climb.",
    icon: Rocket,
  },
  {
    step: "06",
    title: "Community approval",
    description:
      "Clear the bar and the community certifies you as a Verified Startup — ready for investors.",
    icon: BadgeCheck,
  },
];

/** The six axes that make up a validation score. */
export const scoreAxes = [
  "Innovation",
  "Feasibility",
  "Market Fit",
  "Legal Readiness",
  "Technology",
  "Funding Readiness",
] as const;
