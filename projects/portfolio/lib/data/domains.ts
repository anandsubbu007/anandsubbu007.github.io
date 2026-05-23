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
    description: "Large-scale Flutter & Android apps across fintech, enterprise, and POS systems",
    items: [
      "Large-scale Flutter applications (fintech, POS, ERP)",
      "Enterprise Android development (Kotlin, Jetpack Compose)",
      "Modular architecture & Monorepo tooling",
      "Custom lint rules & developer experience",
      "Performance optimization & crash reduction",
    ],
    icon: "Smartphone",
    gradient: "from-blue-600/20 to-blue-500/5",
    accentColor: "#3b82f6",
  },
  {
    id: "fintech-payments",
    title: "Fintech & Payments",
    description: "Production fintech apps, payment workflows, and secure session management",
    items: [
      "Fintech mobile app engineering (Bread Financial)",
      "Secure payment and balance-transfer flows",
      "Okta SDK / OAuth2 / JWT integration",
      "Token lifecycle & session security",
      "Fraud detection and Adobe Analytics integration",
    ],
    icon: "CreditCard",
    gradient: "from-emerald-600/20 to-emerald-500/5",
    accentColor: "#10b981",
  },
  {
    id: "b2b-erp",
    title: "B2B, ERP & Enterprise",
    description: "ERP systems, distribution automation, ecommerce, and restaurant management platforms",
    items: [
      "B2B distribution ERP (Vanigam — full GST, invoicing, stock)",
      "B2B ecommerce ecosystem (RetailMart)",
      "Restaurant management platform (EatOS — QSR, KDS, CFD)",
      "POS hardware integrations (SUNMI, ELO, PAX, Mosambee)",
      "Offline-first architecture & multi-user access control",
    ],
    icon: "Package",
    gradient: "from-indigo-600/20 to-indigo-500/5",
    accentColor: "#6366f1",
  },
  {
    id: "sdk-plugin",
    title: "SDK & Plugin Development",
    description: "Native Android SDKs, Flutter plugins, and hardware integrations",
    items: [
      "Native Android SDK for client app integrations",
      "Flutter platform plugins (Pigeon, platform channels)",
      "WebView rendering SDK development",
      "BLE card reader & thermal printer integrations",
      "Medallia, Adobe Assurance, Fraudnet SDKs",
    ],
    icon: "Zap",
    gradient: "from-violet-600/20 to-violet-500/5",
    accentColor: "#8b5cf6",
  },
  {
    id: "security",
    title: "Security Engineering",
    description: "OWASP compliance, token security, vulnerability remediation, mobile hardening",
    items: [
      "OWASP MASVS compliance & Ostorlab analysis",
      "SSL pinning & secure storage patterns",
      "Token security: on-demand refresh strategy",
      "Biometric auth enforcement for sensitive flows",
      "iOS Privacy Manifest & vulnerability remediation",
    ],
    icon: "Shield",
    gradient: "from-red-600/20 to-orange-500/5",
    accentColor: "#ef4444",
  },
  {
    id: "ai-engineering",
    title: "AI-Assisted Engineering",
    description: "AI coding workflows, rapid prototyping, documentation automation",
    items: [
      "AI coding workflow integration (Copilot, Claude, Cursor)",
      "Architecture exploration and ADR generation",
      "Rapid prototyping & technical POCs",
      "Documentation automation via agentic workflows",
      "Context-aware code review assistance",
    ],
    icon: "Brain",
    gradient: "from-purple-600/20 to-violet-500/5",
    accentColor: "#a855f7",
  },
]
