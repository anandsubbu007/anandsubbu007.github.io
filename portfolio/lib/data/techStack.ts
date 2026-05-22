export interface TechItem {
  name: string
  level: 'expert' | 'advanced' | 'intermediate'
  icon?: string
}

export interface TechCategory {
  id: string
  name: string
  description: string
  color: string
  accentColor: string
  items: TechItem[]
}

export const techStack: TechCategory[] = [
  {
    id: "mobile",
    name: "Mobile Engineering",
    description: "Core mobile platform expertise",
    color: "from-blue-600 to-blue-400",
    accentColor: "#3b82f6",
    items: [
      { name: "Flutter / Dart", level: "expert" },
      { name: "Android (Kotlin)", level: "expert" },
      { name: "Android (Java)", level: "advanced" },
      { name: "Jetpack Compose", level: "advanced" },
      { name: "iOS (Swift)", level: "intermediate" },
      { name: "React Native", level: "intermediate" },
    ],
  },
  {
    id: "architecture",
    name: "Architecture & Patterns",
    description: "Engineering architecture and design",
    color: "from-indigo-600 to-indigo-400",
    accentColor: "#6366f1",
    items: [
      { name: "Clean Architecture", level: "expert" },
      { name: "MVVM", level: "expert" },
      { name: "MVP", level: "expert" },
      { name: "SOLID Principles", level: "expert" },
      { name: "Modularization", level: "advanced" },
      { name: "Monorepo (Melos)", level: "advanced" },
      { name: "Design Patterns", level: "advanced" },
      { name: "Offline-first", level: "advanced" },
    ],
  },
  {
    id: "security",
    name: "Security Engineering",
    description: "Mobile security and compliance",
    color: "from-red-600 to-orange-500",
    accentColor: "#ef4444",
    items: [
      { name: "OWASP MASVS", level: "expert" },
      { name: "SSL Pinning", level: "expert" },
      { name: "Okta SDK", level: "advanced" },
      { name: "JWT / OAuth2", level: "advanced" },
      { name: "Secure Storage", level: "expert" },
      { name: "Vulnerability Assessment", level: "advanced" },
      { name: "Ostorlab Analysis", level: "intermediate" },
    ],
  },
  {
    id: "devops",
    name: "DevOps & CI/CD",
    description: "Release engineering and automation",
    color: "from-green-600 to-emerald-400",
    accentColor: "#22c55e",
    items: [
      { name: "Jenkins", level: "advanced" },
      { name: "GitHub Actions", level: "advanced" },
      { name: "Fastlane", level: "advanced" },
      { name: "Git", level: "expert" },
      { name: "Play Store Release", level: "expert" },
      { name: "App Store Release", level: "advanced" },
      { name: "Docker", level: "intermediate" },
    ],
  },
  {
    id: "testing",
    name: "Testing & Quality",
    description: "Test engineering and quality assurance",
    color: "from-yellow-600 to-amber-400",
    accentColor: "#eab308",
    items: [
      { name: "Unit Testing", level: "expert" },
      { name: "UI Testing", level: "advanced" },
      { name: "Integration Testing", level: "advanced" },
      { name: "TDD", level: "advanced" },
      { name: "BDD", level: "intermediate" },
      { name: "jUnit", level: "advanced" },
      { name: "Espresso", level: "advanced" },
    ],
  },
  {
    id: "backend",
    name: "Backend & Integration",
    description: "Backend services and API integrations",
    color: "from-purple-600 to-violet-400",
    accentColor: "#a855f7",
    items: [
      { name: "Spring Boot", level: "intermediate" },
      { name: "NestJS", level: "advanced" },
      { name: "Firebase", level: "expert" },
      { name: "REST APIs", level: "expert" },
      { name: "GraphQL", level: "advanced" },
      { name: "PostgreSQL", level: "intermediate" },
      { name: "Redis", level: "intermediate" },
      { name: "WebSockets", level: "advanced" },
    ],
  },
  {
    id: "libraries",
    name: "Libraries & Tools",
    description: "Key libraries and frameworks",
    color: "from-pink-600 to-rose-400",
    accentColor: "#ec4899",
    items: [
      { name: "Bloc / RxDart", level: "expert" },
      { name: "Retrofit / Chopper", level: "expert" },
      { name: "Hilt / Koin / Dagger", level: "advanced" },
      { name: "RxJava", level: "advanced" },
      { name: "Room / SQFLite", level: "expert" },
      { name: "GetX / RiverPod", level: "advanced" },
      { name: "Melos", level: "advanced" },
    ],
  },
]
