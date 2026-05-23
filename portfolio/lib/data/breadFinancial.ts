export const breadFinancial = {
  company: "Bread Financial",
  role: "Senior Software Engineer",
  period: "Sept 2023 – Present",
  location: "Bengaluru, India",
  description:
    "Building enterprise-grade mobile payment and savings experiences for a leading US fintech company serving millions of customers across iOS & Android.",
  metrics: [
    {
      label: "API Call Reduction",
      value: "−60%",
      description: "Eliminated redundant API calls via interceptor-level optimization — cut server cost and improved performance",
      icon: "Zap",
      color: "#3b82f6",
    },
    {
      label: "Deployment Time",
      value: "−40%",
      description: "Jenkins CI/CD pipeline optimization",
      icon: "Rocket",
      color: "#10b981",
    },
    {
      label: "Code Quality",
      value: "+30%",
      description: "Custom lint package reducing issues",
      icon: "CheckCircle",
      color: "#a855f7",
    },
    {
      label: "Test Coverage",
      value: "80%+",
      description: "Unit, UI, and integration test coverage",
      icon: "TestTube",
      color: "#f59e0b",
    },
  ],
  currentWork: [
    "Native Android & iOS SDK development for partner and internal integrations",
    "Flutter mobile app architecture — clean arch, MVVM, GoRouter migration",
    "API optimization: interceptor-based on-demand token refresh, 60% call reduction",
    "Token security hardening — biometric protection, session deduplication",
    "Okta SDK integration for secure JWT/OAuth authentication flows",
    "Adobe Analytics, Adobe Assurance, Medallia SDK integrations",
    "Custom lint rules, monorepo tooling, Jenkins CI/CD pipelines",
    "Balance Transfer, NFL Catalogue, Direct Deposit, Digital Dispute features",
    "Mentoring developers & QA engineers; leading KT sessions and ADR discussions",
  ],
  products: [
    {
      name: "Bread Mobile App",
      platform: "Flutter (iOS & Android)",
      url: "https://play.google.com/store/apps/details?id=com.lonoperationsllc.breadmobile",
    },
    { name: "Native Android SDK", platform: "Android", url: "" },
    { name: "Bread Savings", platform: "Android & iOS", url: "" },
    { name: "Project Monaco POC", platform: "Flutter", url: "" },
  ],
  seniorPeriod: "Nov 2024 – Present",
  swePeriod: "Sept 2023 – Nov 2024",
  highlights: [
    {
      title: "GoRouter Migration",
      detail: "Led complex Flutter Navigator → GoRouter migration including custom bottom-nav animation using cached-screenshot workaround due to ShellRoute private key constraints. Authored migration guide, ran KT sessions.",
    },
    {
      title: "Token Security Architecture",
      detail: "Identified multiple active access token vulnerability — redesigned from proactive 3-min pre-refresh to on-demand 401 interceptor strategy. Added biometric protection for refresh tokens (15% non-biometric user impact assessed).",
    },
    {
      title: "Balance Transfer Feature",
      detail: "~95% frontend ownership — clean architecture implementation, DMP integration, linter cleanup, full release coordination across onshore and AEM teams.",
    },
    {
      title: "NFL Catalogue",
      detail: "100% frontend + automation ownership. Delivered with zero post-release issues. Identified and fixed deprecated API immediately before production impact.",
    },
  ],
}
