export interface Expert {
  id: string;
  name: string;
  title: string;
  industry: string;
  initials: string;
  avatarColor: string;
  experienceYears: number;
  skills: string[];
  certifications: string[];
  rating: number; // 0–5
  reviews: number;
  available: boolean;
  rate: string;
  linkedin: string;
  portfolio: string;
}

// TODO(backend): replace with GET /api/experts
export const experts: Expert[] = [
  {
    id: "ex_01",
    name: "Dr. Lena Fischer",
    title: "Former CMO, digital health unicorn",
    industry: "Healthcare",
    initials: "LF",
    avatarColor: "from-emerald-400 to-teal-600",
    experienceYears: 18,
    skills: ["Clinical validation", "Regulatory", "Care models"],
    certifications: ["MD", "MBA — INSEAD"],
    rating: 4.9,
    reviews: 212,
    available: true,
    rate: "$240 / 30 min",
    linkedin: "https://linkedin.com/in/example",
    portfolio: "https://example.com",
  },
  {
    id: "ex_02",
    name: "Daniel Cho",
    title: "Ex-CFO, two fintech exits",
    industry: "Finance",
    initials: "DC",
    avatarColor: "from-blue-400 to-indigo-600",
    experienceYears: 15,
    skills: ["Financial modeling", "Fundraising", "Unit economics"],
    certifications: ["CFA", "CPA"],
    rating: 4.8,
    reviews: 168,
    available: true,
    rate: "$200 / 30 min",
    linkedin: "https://linkedin.com/in/example",
    portfolio: "https://example.com",
  },
  {
    id: "ex_03",
    name: "Elena Petrova",
    title: "Principal ML Engineer",
    industry: "Artificial Intelligence",
    initials: "EP",
    avatarColor: "from-violet-400 to-purple-600",
    experienceYears: 12,
    skills: ["LLM systems", "Inference", "MLOps"],
    certifications: ["PhD — CS", "AWS ML Specialty"],
    rating: 4.9,
    reviews: 143,
    available: false,
    rate: "$280 / 30 min",
    linkedin: "https://linkedin.com/in/example",
    portfolio: "https://example.com",
  },
  {
    id: "ex_04",
    name: "Aisha Bello",
    title: "Compliance & data privacy counsel",
    industry: "Compliance",
    initials: "AB",
    avatarColor: "from-cyan-400 to-sky-600",
    experienceYears: 14,
    skills: ["GDPR", "Data residency", "Audit"],
    certifications: ["JD", "CIPP/E"],
    rating: 4.7,
    reviews: 98,
    available: true,
    rate: "$220 / 30 min",
    linkedin: "https://linkedin.com/in/example",
    portfolio: "https://example.com",
  },
  {
    id: "ex_05",
    name: "Tom Becker",
    title: "VP Product, marketplace scaleup",
    industry: "Product",
    initials: "TB",
    avatarColor: "from-orange-400 to-rose-600",
    experienceYears: 11,
    skills: ["0→1", "Activation", "Pricing"],
    certifications: ["Reforge — Growth"],
    rating: 4.6,
    reviews: 121,
    available: true,
    rate: "$180 / 30 min",
    linkedin: "https://linkedin.com/in/example",
    portfolio: "https://example.com",
  },
  {
    id: "ex_06",
    name: "Priya Sharma",
    title: "AgriTech operator & agronomist",
    industry: "Agriculture",
    initials: "PS",
    avatarColor: "from-lime-400 to-green-600",
    experienceYears: 13,
    skills: ["Precision ag", "Supply chain", "Field ops"],
    certifications: ["MSc — Agronomy"],
    rating: 4.7,
    reviews: 76,
    available: true,
    rate: "$160 / 30 min",
    linkedin: "https://linkedin.com/in/example",
    portfolio: "https://example.com",
  },
];

export interface Investor {
  id: string;
  name: string;
  firm: string;
  initials: string;
  avatarColor: string;
  stage: string;
  checkSize: string;
  industries: string[];
  portfolioCount: number;
  notable: string[];
}

// TODO(backend): replace with GET /api/investors
export const investors: Investor[] = [
  {
    id: "in_01",
    name: "Marcus Hale",
    firm: "Northwind Capital",
    initials: "MH",
    avatarColor: "from-blue-400 to-indigo-600",
    stage: "Seed – Series A",
    checkSize: "$250K – $3M",
    industries: ["Healthcare", "FinTech", "SaaS"],
    portfolioCount: 42,
    notable: ["MedLink", "Ledgerly"],
  },
  {
    id: "in_02",
    name: "Grace Lin",
    firm: "Terra Ventures",
    initials: "GL",
    avatarColor: "from-emerald-400 to-teal-600",
    stage: "Pre-seed – Seed",
    checkSize: "$100K – $1M",
    industries: ["Climate", "Agriculture", "Energy"],
    portfolioCount: 31,
    notable: ["Solis", "FieldSense"],
  },
  {
    id: "in_03",
    name: "Hiroshi Tanaka",
    firm: "Vertex Labs Fund",
    initials: "HT",
    avatarColor: "from-violet-400 to-purple-600",
    stage: "Seed – Series B",
    checkSize: "$500K – $8M",
    industries: ["AI", "Robotics", "DeepTech"],
    portfolioCount: 58,
    notable: ["Lumen Labs"],
  },
  {
    id: "in_04",
    name: "Sara Nilsson",
    firm: "Atlas Angels",
    initials: "SN",
    avatarColor: "from-orange-400 to-rose-600",
    stage: "Pre-seed",
    checkSize: "$25K – $250K",
    industries: ["E-commerce", "Consumer", "Marketplace"],
    portfolioCount: 67,
    notable: ["Cartwheel"],
  },
];
