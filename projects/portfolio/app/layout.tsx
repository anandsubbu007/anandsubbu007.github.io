import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: false,
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://anandsubbu007.github.io"),
  title: "Anand Alagappan | Flutter Engineer, Android Developer, Senior Mobile Systems Engineer",
  description:
    "Flutter Engineer and Android Developer with 6+ years building SDKs, fintech apps, and scalable enterprise mobile platforms.",
  keywords: [
    "Flutter Engineer",
    "Android Developer",
    "Flutter Developer",
    "Senior Mobile Engineer",
    "SDK Developer",
    "Fintech Mobile",
    "Anand Alagappan",
  ],
  authors: [{ name: "Anand Alagappan" }],
  icons: {
    icon: [
      { url: "/images/profile/avatar.jpg", type: "image/jpeg" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/images/profile/avatar.jpg",
  },
  openGraph: {
    title: "Anand Alagappan | Flutter Engineer and Android Developer",
    description:
      "Flutter Engineer and Android Developer with 6+ years building SDKs, fintech apps, and scalable enterprise mobile platforms.",
    type: "website",
    url: "https://anandsubbu007.github.io/portfolio",
    images: "/images/profile/avatar.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anand Alagappan | Flutter Engineer and Android Developer",
    description:
      "Flutter Engineer and Android Developer with 6+ years building SDKs, fintech apps, and scalable enterprise mobile platforms.",
    images: "/images/profile/avatar.jpg",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0e1a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#0a0e1a] text-[#f1f5f9] antialiased">
        {children}
      </body>
    </html>
  )
}
