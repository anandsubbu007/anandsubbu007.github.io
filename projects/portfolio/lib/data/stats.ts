export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix: string;
  prefix: string;
  description: string;
  color: string;
}

export const stats: Stat[] = [
  {
    id: "experience",
    label: "Years Experience",
    value: 6,
    suffix: "+",
    prefix: "",
    description: "Building production mobile systems",
    color: "#3b82f6",
  },
  {
    id: "professional-users",
    label: "App Users Reached",
    value: 10,
    suffix: "M+",
    prefix: "",
    description:
      "Contributed to fintech apps used by 10M+ users across iOS & Android",
    color: "#10b981",
  },
  {
    id: "personal-downloads",
    label: "Personal App Downloads",
    value: 13,
    suffix: "K+",
    prefix: "",
    description: "Indie & open-source apps on Play Store",
    color: "#6366f1",
  },
  {
    id: "domains",
    label: "Industry Domains",
    value: 5,
    suffix: "+",
    prefix: "",
    description: "Fintech, B2B, ERP, POS, Enterprise",
    color: "#a855f7",
  },
  {
    id: "coverage",
    label: "Test Coverage",
    value: 80,
    suffix: "%+",
    prefix: "",
    description: "Achieved at Bread Financial",
    color: "#22c55e",
  },
  {
    id: "api-savings",
    label: "API Call Reduction",
    value: 60,
    suffix: "%",
    prefix: "",
    description: "Eliminated redundant calls, cut server cost",
    color: "#f59e0b",
  },
];
