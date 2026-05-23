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
    metric: "10M+ Users Served",
    description: "Contributed to fintech apps used by millions across iOS & Android — Bread Financial mobile ecosystem",
    category: "scale",
    icon: "Users",
    highlight: true,
  },
  {
    id: "2",
    metric: "60% API Cost Reduction",
    description: "Identified and eliminated redundant API calls via interceptor-level optimization, cutting server cost and improving app performance",
    category: "performance",
    icon: "Zap",
    highlight: true,
  },
  {
    id: "3",
    metric: "40% Faster Deployments",
    description: "Set up Jenkins CI/CD pipelines at Bread Financial, reducing deployment time by 40%",
    category: "delivery",
    icon: "Rocket",
    highlight: true,
  },
  {
    id: "4",
    metric: "80%+ Test Coverage",
    description: "Achieved and maintained 80%+ test coverage across Flutter and Android codebases at Bread Financial",
    category: "quality",
    icon: "CheckCircle",
    highlight: true,
  },
  {
    id: "5",
    metric: "50% WebSocket Load Drop",
    description: "Optimized WebSocket connections at NeoSOFT EatOS — eliminated repeated unnecessary calls, 30% performance gain overall",
    category: "performance",
    icon: "BarChart2",
    highlight: true,
  },
  {
    id: "6",
    metric: "Token Security Fix",
    description: "Resolved duplicate active access token vulnerability — moved from proactive refresh to on-demand 401 interceptor strategy, enforced biometric protection",
    category: "quality",
    icon: "Shield",
    highlight: true,
  },
  {
    id: "7",
    metric: "Native Android SDK",
    description: "Built production-grade Native Android SDK for seamless client app integration — stable API, backward compatible, secure data handling",
    category: "delivery",
    icon: "Package",
    highlight: false,
  },
  {
    id: "8",
    metric: "30% Fewer Code Issues",
    description: "Built custom lint package at Bread Financial, reducing code quality issues by 30%",
    category: "quality",
    icon: "Code2",
    highlight: false,
  },
  {
    id: "9",
    metric: "60% B2B Efficiency Gain",
    description: "Digitized 70% of family B2B distribution operations — invoice to delivery tracking, batch collection, multi-user access; improved sales by 60%",
    category: "scale",
    icon: "TrendingUp",
    highlight: false,
  },
  {
    id: "10",
    metric: "NFL Feature: Zero Bugs",
    description: "Owned complete frontend + automation for NFL Catalogue feature — delivered with zero post-release issues; identified and fixed deprecated API pre-production",
    category: "delivery",
    icon: "Star",
    highlight: false,
  },
  {
    id: "11",
    metric: "Balance Transfer: 95% Ownership",
    description: "Led ~95% of frontend development for Balance Transfer feature — clean architecture, DMP integration, full release coordination",
    category: "delivery",
    icon: "Crown",
    highlight: false,
  },
  {
    id: "12",
    metric: "6+ Engineers Mentored",
    description: "Mentored junior developers and QA engineers across Bread Financial, NeoSOFT, and Teknuance via KT sessions, PR reviews, and architecture discussions",
    category: "quality",
    icon: "GraduationCap",
    highlight: false,
  },
]
