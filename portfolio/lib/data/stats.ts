export interface Stat {
  id: string
  label: string
  value: number
  suffix: string
  prefix: string
  description: string
  color: string
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
    id: "downloads",
    label: "App Downloads",
    value: 13,
    suffix: "K+",
    prefix: "",
    description: "Across personal & open source apps",
    color: "#6366f1",
  },
  {
    id: "users",
    label: "Active Users",
    value: 1,
    suffix: "K+",
    prefix: "",
    description: "Using apps built by me daily",
    color: "#10b981",
  },
  {
    id: "apps",
    label: "Production Apps",
    value: 5,
    suffix: "+",
    prefix: "",
    description: "Shipped to Play Store & App Store",
    color: "#f59e0b",
  },
  {
    id: "domains",
    label: "Domains",
    value: 3,
    suffix: "",
    prefix: "",
    description: "Fintech, POS, Enterprise",
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
]
