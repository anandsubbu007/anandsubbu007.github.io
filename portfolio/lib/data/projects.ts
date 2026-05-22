export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  highlights: string[]
  tech: string[]
  playStoreUrl?: string
  githubUrl?: string
  caseStudySlug?: string
  color: string // tailwind gradient class names
  gradientFrom: string // hex colors
  gradientTo: string
  status: 'production' | 'active' | 'archived'
  featured: boolean
  flagship: boolean
  downloads?: string
  users?: string
}

export const projects: Project[] = [
  {
    id: "vanigam",
    title: "Vanigam GST Billing App",
    subtitle: "Flagship Project — GST Billing & Business Management",
    description:
      "Complex GST billing and business management app for B2B sellers — distributors, wholesalers, and small businesses. Built with scalable Flutter architecture and offline-first workflows. Took 1 year to build and has been adopted by many real businesses.",
    highlights: [
      "Full GST-compliant invoicing and billing system",
      "Offline-first architecture with background sync",
      "Multi-platform: Android + Windows + iOS",
      "PDF invoice generation with custom templates",
      "TCP-based data sync for cross-device operations",
      "Real businesses adopted as primary billing tool",
    ],
    tech: ["Flutter", "Firebase", "Dart", "PDF Generation", "SQLite", "TCP Sync", "Offline-first"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.subbu.vanigam",
    githubUrl: "https://github.com/anandsubbu007/Vanigam-GST_Billing_App",
    caseStudySlug: "vanigam",
    color: "from-blue-600 to-blue-400",
    gradientFrom: "#2563eb",
    gradientTo: "#60a5fa",
    status: "production",
    featured: true,
    flagship: true,
    downloads: "1K+",
    users: "500+",
  },
  {
    id: "retailmart",
    title: "RetailMart Ecosystem",
    subtitle: "B2B Ecommerce — Buyer & Seller Apps",
    description:
      "Complete B2B ecommerce ecosystem with dual-app architecture. 1.5 years of development with full product ownership — from architecture decisions to Play Store deployment. Includes buyer app, seller app, and NestJS backend.",
    highlights: [
      "Dual-app ecosystem: Buyer + Seller apps",
      "Full product ownership for 1.5 years",
      "NestJS backend with PostgreSQL + Redis",
      "Swagger-to-Dart auto-generated API clients (Melos)",
      "GeoLocation-based features",
      "FCM push notifications",
      "Melos monorepo architecture",
    ],
    tech: ["Flutter", "NestJS", "PostgreSQL", "Redis", "Firebase", "RiverPod", "Melos", "Chopper", "Prisma"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.subbu.retailmart",
    githubUrl: "https://github.com/anandsubbu007",
    caseStudySlug: "retailmart",
    color: "from-indigo-600 to-indigo-400",
    gradientFrom: "#4f46e5",
    gradientTo: "#818cf8",
    status: "production",
    featured: true,
    flagship: false,
  },
  {
    id: "lendwise",
    title: "LendWise",
    subtitle: "Business Lending Application",
    description:
      "Production business lending application actively used in real-world operations. Handles financial workflows, loan management, and secure data operations for business lending scenarios.",
    highlights: [
      "Active business users in production",
      "Financial workflows and loan management",
      "Secure data handling and storage",
      "Operational reliability at scale",
      "Clean, financial-grade UI/UX",
    ],
    tech: ["Flutter", "Firebase", "Dart", "Secure Storage", "REST APIs"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.subbu.lend_wise",
    caseStudySlug: "lendwise",
    color: "from-emerald-600 to-emerald-400",
    gradientFrom: "#059669",
    gradientTo: "#34d399",
    status: "production",
    featured: true,
    flagship: false,
  },
  {
    id: "product-catalogue",
    title: "Product E-Catalogue",
    subtitle: "10K+ Downloads — PDF Generation App",
    description:
      "Product showcase catalog app with powerful PDF generation. 20+ template combinations. Revenue-generating app with Google Ads integration. Achieved 10K+ downloads and 4K+ active users.",
    highlights: [
      "10K+ total downloads",
      "4K+ active users",
      "20+ PDF template combinations",
      "Revenue-generating via Google Ads",
      "Smooth, business-friendly UI",
    ],
    tech: ["Flutter", "PDF Generation", "Google Ads", "Firebase", "Dart"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.subbu.productcatalogue",
    color: "from-amber-600 to-amber-400",
    gradientFrom: "#d97706",
    gradientTo: "#fbbf24",
    status: "production",
    featured: true,
    flagship: false,
    downloads: "10K+",
    users: "4K+",
  },
  {
    id: "pixbrix",
    title: "PixBrix",
    subtitle: "Creative Visual Application",
    description:
      "Creative visual application focused on user engagement and premium UI experience. Demonstrates strong UI/UX skills in a consumer-facing context.",
    highlights: [
      "Premium creative UI/UX",
      "High user engagement",
      "Smooth animations and transitions",
      "Consumer-focused design",
    ],
    tech: ["Flutter", "Android", "Dart", "Animations"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.makeree.pixbrix",
    color: "from-rose-600 to-rose-400",
    gradientFrom: "#e11d48",
    gradientTo: "#fb7185",
    status: "production",
    featured: true,
    flagship: false,
  },
  {
    id: "drawaura",
    title: "DrawAura Social Apps",
    subtitle: "Creative Social Utility",
    description:
      "Creative social utility application for engaging creative experiences and community interaction. Social features with real-time collaboration.",
    highlights: [
      "Social utility features",
      "Real-time creative tools",
      "Community-focused design",
      "Firebase-powered real-time features",
    ],
    tech: ["Flutter", "Firebase", "Dart", "Real-time"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.drawaura.socialapps",
    color: "from-violet-600 to-violet-400",
    gradientFrom: "#7c3aed",
    gradientTo: "#a78bfa",
    status: "production",
    featured: true,
    flagship: false,
  },
]
