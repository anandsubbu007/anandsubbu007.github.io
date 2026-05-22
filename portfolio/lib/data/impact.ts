export interface ImpactItem {
  id: string
  metric: string
  description: string
  category: 'performance' | 'quality' | 'delivery' | 'scale'
  icon: string // lucide icon name
  highlight: boolean
}

export const impactItems: ImpactItem[] = [
  {
    id: "1",
    metric: "40% Faster Deployments",
    description: "Set up Jenkins CI/CD pipelines at Bread Financial, reducing deployment time by 40%",
    category: "delivery",
    icon: "Rocket",
    highlight: true,
  },
  {
    id: "2",
    metric: "30% Fewer Issues",
    description: "Built custom lint package at Bread Financial, reducing code quality issues by 30%",
    category: "quality",
    icon: "CheckCircle",
    highlight: true,
  },
  {
    id: "3",
    metric: "25% Performance Boost",
    description: "Designed optimized custom plugins at Bread Financial, boosting app performance by 25%",
    category: "performance",
    icon: "Zap",
    highlight: true,
  },
  {
    id: "4",
    metric: "80%+ Test Coverage",
    description: "Achieved and maintained 80%+ test coverage across Flutter and Android codebases at Bread Financial",
    category: "quality",
    icon: "TestTube",
    highlight: true,
  },
  {
    id: "5",
    metric: "13K+ Downloads",
    description: "Personal apps and open source projects accumulated 13K+ cumulative downloads on Play Store",
    category: "scale",
    icon: "Download",
    highlight: false,
  },
  {
    id: "6",
    metric: "Native Android SDK",
    description: "Built production-grade Native Android SDK for seamless client app integration at Bread Financial",
    category: "delivery",
    icon: "Package",
    highlight: false,
  },
  {
    id: "7",
    metric: "1.5 Years Product Ownership",
    description: "Full product ownership of RetailMart B2B ecommerce ecosystem for 1.5 years end-to-end",
    category: "scale",
    icon: "Crown",
    highlight: false,
  },
  {
    id: "8",
    metric: "3 Engineering Domains",
    description: "Shipped production systems across Fintech, POS/Retail, and Enterprise SaaS domains",
    category: "scale",
    icon: "Globe",
    highlight: false,
  },
  {
    id: "9",
    metric: "6+ Engineers Mentored",
    description: "Mentored junior developers and QA engineers across Bread Financial, NeoSOFT, and Teknuance",
    category: "quality",
    icon: "Users",
    highlight: false,
  },
  {
    id: "10",
    metric: "OWASP Compliance",
    description: "Led mobile security improvements ensuring full OWASP MASVS compliance and vulnerability remediation",
    category: "quality",
    icon: "Shield",
    highlight: false,
  },
]
