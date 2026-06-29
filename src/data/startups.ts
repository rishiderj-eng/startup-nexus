export interface ScoreBreakdown {
  innovation: number;
  feasibility: number;
  marketFit: number;
  legalReadiness: number;
  technology: number;
  fundingReadiness: number;
}

export interface ExpertReviewSummary {
  expert: string;
  role: string;
  rating: number; // 0–5
  comment: string;
}

export interface Startup {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  logoColor: string; // tailwind gradient classes for the avatar tile
  founder: string;
  industry: string;
  stage: "Idea" | "Prototype" | "MVP" | "Growth";
  verified: boolean;
  score: number; // overall 0–100
  breakdown: ScoreBreakdown;
  problem: string;
  solution: string;
  targetAudience: string;
  marketSize: string;
  businessModel: string;
  revenueModel: string;
  competitors: string[];
  fundingNeeded: string;
  communityRating: number; // 0–5
  reviewsCount: number;
  reviews: ExpertReviewSummary[];
  roadmap: { quarter: string; goal: string; done: boolean }[];
  hiring: string[];
}

const avg = (b: ScoreBreakdown) =>
  Math.round(
    (b.innovation +
      b.feasibility +
      b.marketFit +
      b.legalReadiness +
      b.technology +
      b.fundingReadiness) /
      6
  );

const breakdowns: Record<string, ScoreBreakdown> = {
  medlink: { innovation: 88, feasibility: 74, marketFit: 91, legalReadiness: 62, technology: 80, fundingReadiness: 70 },
  fieldsense: { innovation: 79, feasibility: 82, marketFit: 76, legalReadiness: 71, technology: 85, fundingReadiness: 64 },
  ledgerly: { innovation: 72, feasibility: 88, marketFit: 84, legalReadiness: 90, technology: 78, fundingReadiness: 81 },
  lumenlabs: { innovation: 92, feasibility: 61, marketFit: 70, legalReadiness: 58, technology: 89, fundingReadiness: 55 },
  cartwheel: { innovation: 68, feasibility: 80, marketFit: 88, legalReadiness: 75, technology: 72, fundingReadiness: 77 },
  solis: { innovation: 84, feasibility: 70, marketFit: 79, legalReadiness: 66, technology: 83, fundingReadiness: 60 },
};

// TODO(backend): replace with GET /api/startups and GET /api/startups/[slug]
export const startups: Startup[] = [
  {
    id: "st_01",
    slug: "medlink",
    name: "MedLink",
    tagline: "Async triage that routes patients to the right care in minutes.",
    logoColor: "from-emerald-400 to-teal-600",
    founder: "Dr. Ananya Rao",
    industry: "Healthcare",
    stage: "MVP",
    verified: true,
    score: avg(breakdowns.medlink),
    breakdown: breakdowns.medlink,
    problem:
      "Primary care queues are overloaded; non-urgent cases wait days while emergencies go unseen.",
    solution:
      "An async triage layer that scores symptoms, routes to the right clinician, and books automatically.",
    targetAudience: "Multi-clinic networks and telehealth providers in emerging markets.",
    marketSize: "$48B global digital triage by 2030",
    businessModel: "B2B2C SaaS, per-seat + usage",
    revenueModel: "Monthly platform fee + per-consult routing fee",
    competitors: ["Babylon", "Ada Health", "Practo"],
    fundingNeeded: "$1.5M seed",
    communityRating: 4.6,
    reviewsCount: 38,
    reviews: [
      { expert: "Dr. Lena Fischer", role: "Healthcare", rating: 5, comment: "Routing logic is clinically sound. Tighten the legal posture on patient data residency." },
      { expert: "Marcus Hale", role: "Investment", rating: 4, comment: "Strong wedge. Show me payer-side willingness to pay before the round." },
    ],
    roadmap: [
      { quarter: "Q1", goal: "Pilot with 3 clinics", done: true },
      { quarter: "Q2", goal: "Insurance integration", done: true },
      { quarter: "Q3", goal: "Regulatory clearance", done: false },
      { quarter: "Q4", goal: "Multi-region launch", done: false },
    ],
    hiring: ["Clinical Lead", "Backend Engineer", "Compliance Manager"],
  },
  {
    id: "st_02",
    slug: "fieldsense",
    name: "FieldSense",
    tagline: "Satellite + soil sensors that tell smallholders exactly when to act.",
    logoColor: "from-lime-400 to-green-600",
    founder: "Kofi Mensah",
    industry: "Agriculture",
    stage: "Prototype",
    verified: false,
    score: avg(breakdowns.fieldsense),
    breakdown: breakdowns.fieldsense,
    problem: "Smallholder farmers lose 30% of yield to mistimed irrigation and pests.",
    solution: "Low-cost sensors + satellite models that push simple, timely actions over SMS.",
    targetAudience: "Cooperatives of smallholder farmers across Sub-Saharan Africa and South Asia.",
    marketSize: "$22B precision agriculture",
    businessModel: "Hardware + subscription",
    revenueModel: "Device lease + per-acre advisory subscription",
    competitors: ["CropIn", "Taranis", "aWhere"],
    fundingNeeded: "$800K pre-seed",
    communityRating: 4.2,
    reviewsCount: 21,
    reviews: [
      { expert: "Priya Sharma", role: "Agriculture", rating: 4, comment: "Great unit economics if device cost stays under $20. De-risk the supply chain." },
    ],
    roadmap: [
      { quarter: "Q1", goal: "Field trial, 50 farms", done: true },
      { quarter: "Q2", goal: "SMS advisory v1", done: false },
      { quarter: "Q3", goal: "Co-op partnerships", done: false },
      { quarter: "Q4", goal: "Scale to 5,000 farms", done: false },
    ],
    hiring: ["Embedded Engineer", "Agronomist", "Field Ops"],
  },
  {
    id: "st_03",
    slug: "ledgerly",
    name: "Ledgerly",
    tagline: "Real-time reconciliation for marketplace sellers across every channel.",
    logoColor: "from-blue-400 to-indigo-600",
    founder: "Sofia Marin",
    industry: "FinTech",
    stage: "Growth",
    verified: true,
    score: avg(breakdowns.ledgerly),
    breakdown: breakdowns.ledgerly,
    problem: "Sellers can't reconcile settlements, fees, and tax across marketplaces — money leaks everywhere.",
    solution: "Automated reconciliation that matches payouts to orders and flags leakage in real time.",
    targetAudience: "Mid-market marketplace sellers and finance teams.",
    marketSize: "$15B reconciliation & spend management",
    businessModel: "SaaS subscription",
    revenueModel: "Tiered monthly subscription by transaction volume",
    competitors: ["A2X", "Synder", "Webgility"],
    fundingNeeded: "$4M Series A",
    communityRating: 4.8,
    reviewsCount: 54,
    reviews: [
      { expert: "Daniel Cho", role: "Finance", rating: 5, comment: "Reconciliation depth is best-in-class. Founder-market fit is obvious." },
      { expert: "Aisha Bello", role: "Compliance", rating: 5, comment: "Audit trail is investor-grade. Add multi-currency before Series A." },
    ],
    roadmap: [
      { quarter: "Q1", goal: "Multi-marketplace sync", done: true },
      { quarter: "Q2", goal: "Tax module", done: true },
      { quarter: "Q3", goal: "Multi-currency", done: true },
      { quarter: "Q4", goal: "Enterprise SSO", done: false },
    ],
    hiring: ["Senior Backend", "Solutions Engineer", "Account Executive"],
  },
  {
    id: "st_04",
    slug: "lumenlabs",
    name: "Lumen Labs",
    tagline: "On-device LLMs that run private copilots without the cloud.",
    logoColor: "from-violet-400 to-purple-600",
    founder: "Ravi Nair",
    industry: "AI",
    stage: "Prototype",
    verified: false,
    score: avg(breakdowns.lumenlabs),
    breakdown: breakdowns.lumenlabs,
    problem: "Enterprises want copilots but can't send sensitive data to third-party clouds.",
    solution: "A runtime that compresses and serves capable models entirely on local hardware.",
    targetAudience: "Regulated enterprises in finance, healthcare, and defense.",
    marketSize: "$36B private/edge AI",
    businessModel: "Licensing + support",
    revenueModel: "Per-node license + enterprise support contracts",
    competitors: ["Ollama", "Llamafile", "Modular"],
    fundingNeeded: "$3M seed",
    communityRating: 4.4,
    reviewsCount: 29,
    reviews: [
      { expert: "Elena Petrova", role: "Artificial Intelligence", rating: 5, comment: "Compression numbers are impressive. Legal/IP posture needs work." },
    ],
    roadmap: [
      { quarter: "Q1", goal: "Runtime alpha", done: true },
      { quarter: "Q2", goal: "Quantization pipeline", done: false },
      { quarter: "Q3", goal: "Enterprise pilots", done: false },
      { quarter: "Q4", goal: "GA release", done: false },
    ],
    hiring: ["ML Systems Engineer", "DevRel", "Enterprise Sales"],
  },
  {
    id: "st_05",
    slug: "cartwheel",
    name: "Cartwheel",
    tagline: "Headless checkout that lifts conversion for D2C brands by 20%.",
    logoColor: "from-orange-400 to-rose-600",
    founder: "Maya Okonkwo",
    industry: "E-commerce",
    stage: "MVP",
    verified: true,
    score: avg(breakdowns.cartwheel),
    breakdown: breakdowns.cartwheel,
    problem: "D2C brands lose buyers at a clunky, slow checkout they don't control.",
    solution: "A drop-in headless checkout optimized for speed, wallets, and one-tap reorders.",
    targetAudience: "Direct-to-consumer brands doing $1M–$50M GMV.",
    marketSize: "$9B checkout & payments tooling",
    businessModel: "Usage-based",
    revenueModel: "Per-transaction fee + premium analytics tier",
    competitors: ["Bolt", "Fast (defunct)", "Shop Pay"],
    fundingNeeded: "$2M seed",
    communityRating: 4.5,
    reviewsCount: 33,
    reviews: [
      { expert: "Tom Becker", role: "Product", rating: 4, comment: "Conversion lift is real. Nail the brand-customization story." },
    ],
    roadmap: [
      { quarter: "Q1", goal: "Checkout v1", done: true },
      { quarter: "Q2", goal: "Wallet integrations", done: true },
      { quarter: "Q3", goal: "Analytics suite", done: false },
      { quarter: "Q4", goal: "Platform marketplace", done: false },
    ],
    hiring: ["Frontend Engineer", "Growth Marketer"],
  },
  {
    id: "st_06",
    slug: "solis",
    name: "Solis",
    tagline: "Financing + software that puts rooftop solar within reach for SMBs.",
    logoColor: "from-amber-400 to-yellow-600",
    founder: "Liam Walsh",
    industry: "Climate",
    stage: "Idea",
    verified: false,
    score: avg(breakdowns.solis),
    breakdown: breakdowns.solis,
    problem: "Small businesses want solar but can't navigate financing, permits, and installers.",
    solution: "A single flow that quotes, finances, permits, and schedules rooftop solar installs.",
    targetAudience: "Small and mid-sized commercial property owners.",
    marketSize: "$28B commercial solar",
    businessModel: "Marketplace + financing",
    revenueModel: "Origination fee + software subscription for installers",
    competitors: ["Aurora Solar", "Palmetto", "Wunder"],
    fundingNeeded: "$1.2M pre-seed",
    communityRating: 4.1,
    reviewsCount: 17,
    reviews: [
      { expert: "Grace Lin", role: "Renewables", rating: 4, comment: "Permitting is the moat. Prove you can compress that timeline." },
    ],
    roadmap: [
      { quarter: "Q1", goal: "Quoting engine", done: false },
      { quarter: "Q2", goal: "Financing partner", done: false },
      { quarter: "Q3", goal: "Installer network", done: false },
      { quarter: "Q4", goal: "First 100 installs", done: false },
    ],
    hiring: ["Founding Engineer", "Partnerships Lead"],
  },
];

export const getStartup = (slug: string) =>
  startups.find((s) => s.slug === slug);
