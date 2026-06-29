export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarColor: string;
}

// TODO(backend): replace with GET /api/testimonials
export const testimonials: Testimonial[] = [
  {
    quote:
      "We came in with a vague idea and left with a scored, de-risked plan. Two of our reviewers later made intros that closed our seed round.",
    name: "Ananya Rao",
    role: "Founder, MedLink",
    initials: "AR",
    avatarColor: "from-emerald-400 to-teal-600",
  },
  {
    quote:
      "The validation score forced clarity. Watching it climb from 58 to 84 as we shipped fixes was the most useful product loop we've had.",
    name: "Sofia Marin",
    role: "Founder, Ledgerly",
    initials: "SM",
    avatarColor: "from-blue-400 to-indigo-600",
  },
  {
    quote:
      "As an expert, I review three or four ideas a week here. The structure means my feedback actually gets actioned instead of forgotten.",
    name: "Daniel Cho",
    role: "Finance Expert",
    initials: "DC",
    avatarColor: "from-violet-400 to-purple-600",
  },
  {
    quote:
      "I source pre-seed deals here precisely because they're already validated. Verified Startups convert far better than cold inbound.",
    name: "Grace Lin",
    role: "Partner, Terra Ventures",
    initials: "GL",
    avatarColor: "from-orange-400 to-rose-600",
  },
];

export interface Faq {
  question: string;
  answer: string;
}

// TODO(backend): replace with GET /api/faqs
export const faqs: Faq[] = [
  {
    question: "How is Startup Nexus different from a startup directory?",
    answer:
      "Directories list companies. Startup Nexus is a working surface: you submit an idea, experts review it, you get a transparent score across six dimensions, and you iterate. The directory is the output, not the product.",
  },
  {
    question: "Who reviews my startup?",
    answer:
      "Vetted operators, investors, and domain specialists matched to your industry by our classifier. Every reviewer has a public rating, so feedback quality stays accountable.",
  },
  {
    question: "What does the validation score measure?",
    answer:
      "Six axes — Innovation, Feasibility, Market Fit, Legal Readiness, Technology, and Funding Readiness. Each is scored independently so you can see exactly where to focus.",
  },
  {
    question: "Is my idea kept confidential?",
    answer:
      "You control visibility. Submit privately to a closed reviewer pool, or go public to invite community feedback. You can switch modes at any time.",
  },
  {
    question: "How do experts and investors get paid?",
    answer:
      "Experts set their own consultation rates and book through the platform. Investors join free; we never take carry or a cut of any deal sourced here.",
  },
  {
    question: "Can I become a Verified Startup?",
    answer:
      "Yes. Clear the score threshold, address required reviewer flags, and pass community approval. Verified Startups get prioritized investor visibility.",
  },
];

export interface PricingTier {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
}

// TODO(backend): replace with GET /api/pricing
export const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    price: "$0",
    cadence: "forever",
    description: "Validate your first idea and explore the ecosystem.",
    features: [
      "1 startup submission",
      "AI categorization",
      "Community feedback",
      "Basic validation score",
    ],
    cta: "Start free",
  },
  {
    name: "Founder Pro",
    price: "$39",
    cadence: "/ month",
    description: "For founders actively building toward a raise.",
    features: [
      "Unlimited submissions",
      "Priority expert review",
      "Full 6-axis score + history",
      "Tasks, milestones & roadmap",
      "Investor visibility",
    ],
    cta: "Go Pro",
    highlighted: true,
    badge: "Most popular",
  },
  {
    name: "Expert Pro",
    price: "$0",
    cadence: "+ earnings",
    description: "For reviewers and mentors monetizing their expertise.",
    features: [
      "Verified expert profile",
      "Set your own rates",
      "Consultation scheduling",
      "Payouts & analytics",
    ],
    cta: "Apply as expert",
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    description: "For accelerators, funds, and innovation teams.",
    features: [
      "Branded cohort spaces",
      "Bulk validation pipelines",
      "Custom scoring rubrics",
      "SSO & API access",
      "Dedicated success manager",
    ],
    cta: "Contact sales",
  },
];
