export const PROFILE = {
  name: "Anand Alagappan",
  role: "Senior Mobile Systems Engineer",
  tagline: "Building scalable, secure, and production-grade mobile systems.",
  yearsExp: "6+",
  email: "anandsubbu007@gmail.com",
  location: "India",
  description:
    "Building scalable mobile platforms, SDKs, and production-grade fintech applications with focus on architecture, performance, security, and developer experience.",
};

export const SOCIAL_LINKS = {
  github: "https://github.com/anandsubbu007",
  githubOrg: "https://github.com/Subbu-App-Tech",
  linkedin: "https://www.linkedin.com/in/anand-subbu",
  twitter: "https://twitter.com/AL_Anandsubbu",
  stackoverflow: "https://stackoverflow.com/users/12379401/anand-a-l",
  kaggle: "https://kaggle.com/anandsubbu007",
  medium: "https://medium.com/@anandsubbu7",
  leetcode: "https://leetcode.com/Anandsubbu",
  playstore: "https://play.google.com/store/apps/developer?id=Subbu+App+Tech",
};

export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: "6+", label: "Years Experience", suffix: "" },
  { value: "10K+", label: "App Downloads", suffix: "" },
  { value: "50+", label: "Active Business Users", suffix: "" },
  { value: "3", label: "Enterprises Served", suffix: "" },
  { value: "80%+", label: "Test Coverage", suffix: "" },
  { value: "40%", label: "Faster Deployments", suffix: "" },
];

export const TECH_STACK = {
  "Mobile Engineering": [
    { name: "Flutter", icon: "📱", color: "#02569B" },
    { name: "Android", icon: "🤖", color: "#3DDC84" },
    { name: "Kotlin", icon: "🟣", color: "#7F52FF" },
    { name: "Java", icon: "☕", color: "#F89820" },
    { name: "Jetpack Compose", icon: "🎨", color: "#4285F4" },
    { name: "Swift", icon: "🍎", color: "#FA7343" },
    { name: "Dart", icon: "🎯", color: "#0175C2" },
  ],
  Architecture: [
    { name: "Clean Architecture", icon: "🏛️", color: "#6366F1" },
    { name: "MVVM", icon: "🔷", color: "#3B82F6" },
    { name: "BLoC Pattern", icon: "🧩", color: "#8B5CF6" },
    { name: "Modularization", icon: "🔌", color: "#10B981" },
    { name: "Monorepo", icon: "📦", color: "#F59E0B" },
    { name: "SOLID", icon: "💎", color: "#EC4899" },
    { name: "REST APIs", icon: "🔗", color: "#06B6D4" },
  ],
  Security: [
    { name: "OWASP Mobile", icon: "🛡️", color: "#EF4444" },
    { name: "SSL Pinning", icon: "🔐", color: "#F97316" },
    { name: "Secure Storage", icon: "🔒", color: "#84CC16" },
    { name: "Okta", icon: "🔑", color: "#007DC1" },
    { name: "OAuth 2.0", icon: "🎫", color: "#6366F1" },
  ],
  "DevOps & CI/CD": [
    { name: "Jenkins", icon: "⚙️", color: "#D24939" },
    { name: "GitHub Actions", icon: "🚀", color: "#2088FF" },
    { name: "Fastlane", icon: "⚡", color: "#00F200" },
    { name: "Firebase", icon: "🔥", color: "#FFCA28" },
    { name: "Vercel", icon: "▲", color: "#FFFFFF" },
  ],
  Testing: [
    { name: "Unit Testing", icon: "🧪", color: "#10B981" },
    { name: "Integration Testing", icon: "🔬", color: "#06B6D4" },
    { name: "Widget Testing", icon: "🖼️", color: "#8B5CF6" },
    { name: "Mock Testing", icon: "🎭", color: "#F59E0B" },
  ],
  Backend: [
    { name: "Spring Boot", icon: "🌿", color: "#6DB33F" },
    { name: "NestJS", icon: "🐈", color: "#E0234E" },
    { name: "Firebase", icon: "🔥", color: "#FFCA28" },
    { name: "SQLite", icon: "🗄️", color: "#003B57" },
    { name: "REST APIs", icon: "🔗", color: "#06B6D4" },
  ],
  "AI Tooling": [
    { name: "Claude", icon: "🤖", color: "#D97706" },
    { name: "ChatGPT", icon: "💬", color: "#10A37F" },
    { name: "GitHub Copilot", icon: "👨‍✈️", color: "#6E40C9" },
    { name: "Cursor", icon: "🖱️", color: "#FFFFFF" },
    { name: "Ollama", icon: "🦙", color: "#6366F1" },
  ],
};

export const PROJECTS = [
  {
    id: "vanigam",
    title: "Vanigam GST Billing",
    subtitle: "FLAGSHIP PROJECT",
    description:
      "A complex GST billing and business management application built with scalable Flutter architecture and offline-first workflows.",
    longDescription:
      "Vanigam is a production-grade GST billing application serving real businesses across India. Built with Clean Architecture + BLoC state management, it features offline-first SQLite storage, complex GST calculation engine, PDF generation, multi-user support, and a fully modular codebase.",
    tags: ["Flutter", "Clean Architecture", "BLoC", "SQLite", "GST", "PDF"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.subbu.vanigam",
    githubUrl: "https://github.com/anandsubbu007/Vanigam-GST_Billing_App",
    caseStudySlug: "vanigam",
    featured: true,
    metrics: [
      "Offline-first architecture",
      "Real production app",
      "Complex GST engine",
      "Multi-user support",
    ],
    architecture: "Clean Architecture + BLoC",
    gradient: "from-violet-600 via-purple-600 to-blue-600",
    accentColor: "#7C3AED",
  },
  {
    id: "retailmart",
    title: "RetailMart Ecosystem",
    subtitle: "MOST COMPLEX — 1.5 YEARS",
    description:
      "A complete B2B ecommerce ecosystem with separate Buyer and Seller applications, complex role-based workflows, and scalable mobile architecture.",
    longDescription:
      "RetailMart is a dual-app B2B ecommerce ecosystem built over 1.5 years of continuous development. Features multi-role authentication, complex order workflows, inventory management, real-time sync, and production-grade NestJS backend.",
    tags: [
      "Flutter",
      "NestJS",
      "Firebase",
      "B2B Ecommerce",
      "Multi-role",
      "REST APIs",
    ],
    playStoreUrls: {
      seller:
        "https://play.google.com/store/apps/details?id=com.subbu.retailmart_seller",
      buyer:
        "https://play.google.com/store/apps/details?id=com.subbu.retailmart&hl=en_IN",
    },
    caseStudySlug: "retailmart",
    featured: true,
    metrics: [
      "Dual-app ecosystem",
      "1.5 years ownership",
      "Complex order flows",
      "B2B marketplace",
    ],
    architecture: "MVVM + Clean Architecture",
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    accentColor: "#059669",
  },
  {
    id: "bread",
    title: "Bread Financial Mobile",
    subtitle: "ENTERPRISE — FINTECH GRADE",
    description:
      "Native Android SDK development, Flutter application development, Okta integrations, analytics, CI/CD pipelines, and release engineering at enterprise scale.",
    longDescription:
      "At Bread Financial, I lead SDK development, platform integrations (Okta, Adobe Analytics, Medallia, Decibel), monorepo migrations, CI/CD pipeline optimization, security hardening, and release engineering for production fintech applications.",
    tags: [
      "Android",
      "Flutter",
      "Okta",
      "Jenkins",
      "SDK",
      "Fintech",
      "Security",
    ],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.lonoperationsllc.breadmobile",
    caseStudySlug: "bread-financial",
    featured: true,
    metrics: [
      "30% fewer code issues",
      "25% performance boost",
      "40% faster deploys",
      "80%+ test coverage",
    ],
    architecture: "Enterprise Modular Architecture",
    gradient: "from-orange-600 via-red-600 to-rose-600",
    accentColor: "#DC2626",
  },
  {
    id: "lendwise",
    title: "LendWise",
    subtitle: "ACTIVE PRODUCTION — FINTECH",
    description:
      "A production business lending application actively used daily by 50+ real businesses for their lending operations.",
    tags: ["Flutter", "Fintech", "SQLite", "Secure Storage"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.subbu.lend_wise",
    metrics: [
      "50+ active users",
      "Daily operational use",
      "Financial workflows",
      "Secure data handling",
    ],
    architecture: "Clean Architecture",
    gradient: "from-blue-600 via-indigo-600 to-violet-600",
    accentColor: "#4F46E5",
  },
  {
    id: "product-catalogue",
    title: "Product Catalogue",
    subtitle: "10K+ DOWNLOADS MILESTONE",
    description:
      "Production Android application with 10,000+ downloads demonstrating scalable product showcase architecture.",
    tags: ["Android", "Kotlin", "REST APIs", "MVVM"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.subbu.productcatalogue",
    metrics: [
      "10K+ downloads",
      "Long-term maintenance",
      "Production Android",
      "Scalable architecture",
    ],
    architecture: "MVVM",
    gradient: "from-pink-600 via-rose-600 to-orange-600",
    accentColor: "#DB2777",
  },
  {
    id: "pixbrix",
    title: "PixBrix",
    subtitle: "CREATIVE TOOLING",
    description:
      "Creative visual application focused on user engagement and premium UI experience.",
    tags: ["Flutter", "Creative", "UI/UX"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.makeree.pixbrix",
    metrics: [
      "Creative tooling",
      "Engaging UX",
      "Premium UI",
      "Freelance project",
    ],
    architecture: "Provider + MVVM",
    gradient: "from-cyan-600 via-sky-600 to-blue-600",
    accentColor: "#0284C7",
  },
  {
    id: "drawaura",
    title: "DrawAura Social",
    subtitle: "SOCIAL UTILITY APP",
    description:
      "Creative social utility application focused on engaging experiences and scalable mobile workflows.",
    tags: ["Flutter", "Social", "Creative", "Firebase"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.drawaura.socialapps",
    metrics: [
      "Social platform",
      "Scalable workflows",
      "Firebase integration",
      "Freelance project",
    ],
    architecture: "BLoC + Firebase",
    gradient: "from-yellow-600 via-amber-600 to-orange-600",
    accentColor: "#D97706",
  },
];

export const EXPERIENCE = [
  {
    company: "Bread Financial",
    role: "Senior Mobile Software Engineer",
    period: "2023 – Present",
    type: "Full-time",
    description:
      "Leading native Android SDK development, Flutter applications, platform integrations (Okta, Adobe Analytics, Medallia, Decibel), monorepo migration, CI/CD pipelines, security hardening, and release engineering.",
    highlights: [
      "Native Android SDK & Flutter app development",
      "Okta, Adobe Analytics, Medallia, Decibel integrations",
      "WebView rendering SDK development",
      "Monorepo migration & custom lint tooling",
      "Jenkins CI/CD pipeline engineering",
      "Mobile security hardening (OWASP)",
      "80%+ test coverage achievement",
      "Senior engineer mentoring",
    ],
    techStack: ["Android", "Flutter", "Kotlin", "Okta", "Jenkins", "Firebase"],
    color: "#EF4444",
    logo: "🏦",
  },
  {
    company: "NeoSOFT",
    role: "Mobile Software Engineer",
    period: "2021 – 2023",
    type: "Full-time",
    description:
      "Developed enterprise mobile applications with complex business workflows, backend integrations, and scalable architecture patterns.",
    highlights: [
      "Enterprise mobile application development",
      "Complex business workflow implementation",
      "Backend API integrations",
      "Performance optimization",
      "Team collaboration & code reviews",
    ],
    techStack: ["Flutter", "Android", "Kotlin", "REST APIs", "Firebase"],
    color: "#8B5CF6",
    logo: "🏢",
  },
  {
    company: "Teknuance",
    role: "Mobile Developer",
    period: "2020 – 2021",
    type: "Full-time",
    description:
      "Built mobile applications with focus on UI/UX quality, API integration, and production deployment.",
    highlights: [
      "Mobile application development",
      "UI/UX implementation",
      "API integration",
      "Play Store deployment",
      "Cross-functional collaboration",
    ],
    techStack: ["Flutter", "Android", "Java", "REST APIs"],
    color: "#06B6D4",
    logo: "⚙️",
  },
  {
    company: "Freelancing & Product Building",
    role: "Independent Mobile Engineer",
    period: "2019 – Present",
    type: "Freelance",
    description:
      "Built production applications including Vanigam GST Billing (flagship), RetailMart ecosystem, LendWise, Product Catalogue, PixBrix, and DrawAura — with real users and businesses.",
    highlights: [
      "Vanigam GST Billing — flagship project",
      "RetailMart B2B ecosystem — 1.5 years",
      "LendWise — 50+ active business users",
      "Product Catalogue — 10K+ downloads",
      "PixBrix & DrawAura — freelance apps",
      "Full product ownership end-to-end",
    ],
    techStack: ["Flutter", "Android", "NestJS", "Firebase", "SQLite"],
    color: "#10B981",
    logo: "🚀",
  },
];

export const DOMAINS = [
  {
    title: "Mobile Platform Engineering",
    icon: "📱",
    color: "#7C3AED",
    items: [
      "Large-scale Flutter applications",
      "Enterprise Android applications",
      "Modular architecture systems",
      "Monorepo migrations",
      "Developer tooling",
    ],
  },
  {
    title: "SDK & Plugin Development",
    icon: "🔌",
    color: "#059669",
    items: [
      "Native Android SDKs",
      "Flutter plugins & packages",
      "WebView rendering SDKs",
      "Hardware integrations",
      "Internal tooling libraries",
    ],
  },
  {
    title: "Fintech & POS Systems",
    icon: "💳",
    color: "#DC2626",
    items: [
      "Payment workflow engineering",
      "POS system integrations",
      "Offline transaction handling",
      "Secure authentication flows",
      "Financial data handling",
    ],
  },
  {
    title: "Security Engineering",
    icon: "🛡️",
    color: "#D97706",
    items: [
      "OWASP mobile practices",
      "SSL pinning implementation",
      "Secure storage patterns",
      "Vulnerability remediation",
      "Mobile security hardening",
    ],
  },
  {
    title: "Performance & Reliability",
    icon: "⚡",
    color: "#0284C7",
    items: [
      "App startup optimization",
      "Rendering performance tuning",
      "Crash rate reduction",
      "Memory optimization",
      "Build pipeline optimization",
    ],
  },
  {
    title: "AI-Assisted Engineering",
    icon: "🤖",
    color: "#6366F1",
    items: [
      "AI coding workflows",
      "Architecture exploration",
      "Rapid prototyping",
      "Productivity tooling",
      "Documentation automation",
    ],
  },
];

export const AI_TOOLS = [
  {
    name: "Claude",
    use: "Architecture exploration, complex refactoring, technical documentation",
    icon: "🤖",
    color: "#D97706",
  },
  {
    name: "GitHub Copilot",
    use: "In-editor code completion, boilerplate acceleration, test generation",
    icon: "👨‍✈️",
    color: "#6E40C9",
  },
  {
    name: "ChatGPT",
    use: "Problem-solving, code review, debugging strategies",
    icon: "💬",
    color: "#10A37F",
  },
  {
    name: "Cursor",
    use: "AI-first IDE workflows, codebase-wide context editing",
    icon: "🖱️",
    color: "#FFFFFF",
  },
  {
    name: "Ollama",
    use: "Local LLM workflows for offline, secure code assistance",
    icon: "🦙",
    color: "#6366F1",
  },
];
