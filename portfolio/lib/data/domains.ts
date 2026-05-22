export interface Domain {
  id: string
  title: string
  description: string
  items: string[]
  icon: string // lucide icon name
  gradient: string
  accentColor: string
}

export const domains: Domain[] = [
  {
    id: "mobile-platform",
    title: "Mobile Platform Engineering",
    description: "Large-scale Flutter apps and enterprise Android architecture",
    items: [
      "Large-scale Flutter applications",
      "Enterprise Android development",
      "Modular architecture & Monorepo",
      "Developer tooling & DX",
      "Performance optimization",
    ],
    icon: "Smartphone",
    gradient: "from-blue-600/20 to-blue-500/5",
    accentColor: "#3b82f6",
  },
  {
    id: "sdk-plugin",
    title: "SDK & Plugin Development",
    description: "Native Android SDKs, Flutter plugins, hardware integrations",
    items: [
      "Native Android SDK development",
      "Flutter platform plugins",
      "Internal tooling & SDKs",
      "WebView rendering SDKs",
      "Hardware integrations (BLE, printers)",
    ],
    icon: "Package",
    gradient: "from-indigo-600/20 to-indigo-500/5",
    accentColor: "#6366f1",
  },
  {
    id: "fintech-pos",
    title: "Fintech & POS Systems",
    description: "Payment workflows, POS integrations, and offline transactions",
    items: [
      "Payment workflow engineering",
      "POS integrations (SUNMI/ELO/PAX)",
      "Offline transaction handling",
      "Card reader integrations (BLE)",
      "Mosambee & PinePOS SDKs",
    ],
    icon: "CreditCard",
    gradient: "from-emerald-600/20 to-emerald-500/5",
    accentColor: "#10b981",
  },
  {
    id: "security",
    title: "Security Engineering",
    description: "OWASP compliance, vulnerability remediation, mobile hardening",
    items: [
      "OWASP MASVS compliance",
      "SSL pinning implementation",
      "Secure storage patterns",
      "Vulnerability remediation",
      "Ostorlab security analysis",
    ],
    icon: "Shield",
    gradient: "from-red-600/20 to-orange-500/5",
    accentColor: "#ef4444",
  },
  {
    id: "performance",
    title: "Performance & Reliability",
    description: "Startup optimization, crash reduction, 80%+ test coverage",
    items: [
      "Startup time optimization",
      "Rendering performance tuning",
      "Crash rate reduction",
      "Memory optimization",
      "80%+ test coverage achieved",
    ],
    icon: "Zap",
    gradient: "from-yellow-600/20 to-amber-500/5",
    accentColor: "#eab308",
  },
  {
    id: "ai-engineering",
    title: "AI-Assisted Engineering",
    description: "AI coding workflows, rapid prototyping, documentation automation",
    items: [
      "AI coding workflow integration",
      "Architecture exploration with AI",
      "Rapid prototyping & POCs",
      "Documentation automation",
      "Context-aware code review",
    ],
    icon: "Brain",
    gradient: "from-purple-600/20 to-violet-500/5",
    accentColor: "#a855f7",
  },
]
