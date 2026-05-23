export interface ExperienceEntry {
  id: string
  company: string
  companyShort: string
  role: string
  period: string
  location: string
  type: 'fulltime' | 'contract' | 'freelance'
  current: boolean
  description: string
  bullets: string[]
  products?: string[]
  productLinks?: { name: string; url: string }[]
  tech: string[]
  color: string
  accentColor: string
}

export const experience: ExperienceEntry[] = [
  {
    id: "bread-financial",
    company: "Bread Financial",
    companyShort: "BF",
    role: "Senior Software Engineer",
    period: "Sept 2023 – Present",
    location: "Bengaluru, India",
    type: "fulltime",
    current: true,
    description:
      "Building enterprise-grade mobile experiences for a leading US fintech. Developing Native Android SDKs, Flutter mobile apps, and developer tooling for payment and savings products.",
    bullets: [
      "Developed Native Android SDK for seamless integration into client apps",
      "Built custom lint package reducing issues by 30%",
      "Designed and optimized custom plugins, boosting app performance by 25%",
      "Set up Jenkins CI/CD pipelines, reducing deployment time by 40%",
      "Mentored junior developers and led knowledge-sharing sessions",
      "Flutter framework optimization maintaining high code standards",
      "App security improvements and OWASP MASVS compliance",
      "Okta SDK integration for secure authentication (JWT/OAuth)",
      "Vulnerability remediation based on Ostorlab security findings",
      "Fraudnet logging and monitoring implementation",
      "Code reviews enforcing quality and consistency across teams",
    ],
    products: ["Bread Mobile App (Flutter)", "Native Android SDK", "Bread Savings (Android & iOS)"],
    productLinks: [
      {
        name: "Bread Mobile App",
        url: "https://play.google.com/store/apps/details?id=com.lonoperationsllc.breadmobile",
      },
    ],
    tech: ["Flutter", "Kotlin", "Android SDK", "Jenkins", "Okta", "OWASP", "JWT", "OAuth2", "Fastlane"],
    color: "from-blue-600 to-blue-500",
    accentColor: "#3b82f6",
  },
  {
    id: "neosoft",
    company: "NeoSOFT Technology",
    companyShort: "NS",
    role: "Associate Software Engineer (Contract)",
    period: "April 2022 – Sept 2023",
    location: "Chennai, Tamil Nadu",
    type: "contract",
    current: false,
    description:
      "Built cross-platform mobile apps for Android, tablets, and POS systems. Specialized in offline-first architectures and custom hardware integrations.",
    bullets: [
      "Cross-platform mobile apps (Flutter) for Android, tablets, and POS systems",
      "Offline-first architectures with local databases and background sync",
      "Custom platform plugins for native Android hardware (printers, scanners, peripherals)",
      "Refactored and modularized large codebases for maintainability",
      "Production support, performance tuning, and OS compatibility",
      "Flutter POS 4.0: Thermal printer, card reader BLE, offline cache, payment providers",
      "Android FAB: POS app for Zambia with card reader & thermal printer integration",
      "Flutter EatOS: QSR, KDS, CFD restaurant management for SUNMI/ELO/PAX POS",
      "Android POS 3.0: UPI payments, Mosambee & PinePOS integrations",
    ],
    products: ["Flutter POS 4.0", "Android FAB", "Flutter EatOS", "Android POS 3.0"],
    tech: ["Flutter", "Kotlin", "Java", "Bloc", "GetIt", "Chopper", "SQFLite", "GraphQL", "RxJava", "SQLite", "WebSockets"],
    color: "from-indigo-600 to-indigo-500",
    accentColor: "#6366f1",
  },
  {
    id: "teknuance",
    company: "Teknuance Info Tech",
    companyShort: "TK",
    role: "Mobile Application Developer",
    period: "Jan 2020 – Mar 2022",
    location: "Chennai / Remote",
    type: "fulltime",
    current: false,
    description:
      "Designed, developed, and deployed 5 mobile apps, 2 desktop apps, and 1 web app across fintech, e-commerce, healthcare, and social networking domains.",
    bullets: [
      "Delivered 5 production mobile apps, 2 desktop apps, 1 web app",
      "Flutter + Android Kotlin/Java — full stack mobile development",
      "State management with Bloc, Provider, and GetX",
      "Firebase SDK, Appwrite BaaS, REST APIs, SQLite integrations",
      "NestJS / Spring Boot backend integrations",
      "CI/CD with GitHub Actions and Play Store deployments",
      "Long-term client ownership: Zettribe (1+ year engagement)",
      "Projects: RetailMart (B2B eCommerce), Brix Art, Client Apps",
    ],
    tech: ["Flutter", "Kotlin", "Java", "Bloc", "Provider", "GetX", "Firebase", "Appwrite", "NestJS", "GitHub Actions"],
    color: "from-emerald-600 to-emerald-500",
    accentColor: "#10b981",
  },
  {
    id: "subbu-app-tech",
    company: "Subbu App Tech",
    companyShort: "SA",
    role: "Professional Freelancer",
    period: "Jan 2018 – Dec 2019",
    location: "Mannargudi, Tamil Nadu",
    type: "freelance",
    current: false,
    description:
      "Independent freelance mobile development — building B2B ecommerce and cross-platform applications for clients while self-learning software engineering.",
    bullets: [
      "B2B Ecommerce App (Flutter mobile + NestJS backend)",
      "Cross-platform: Android, iOS, and Web",
      "Payment, auth, and product management API integrations",
      "Open source contributions to the Flutter ecosystem",
      "Self-taught transition from Mechanical Engineering to Software",
    ],
    tech: ["Flutter", "NestJS", "Dart", "Firebase", "REST APIs"],
    color: "from-amber-600 to-amber-500",
    accentColor: "#f59e0b",
  },
]
