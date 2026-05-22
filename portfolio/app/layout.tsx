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
  title: "Anand Alagappan | Senior Mobile Systems Engineer",
  description:
    "Senior Mobile Systems Engineer specializing in Flutter, Android SDK development, Fintech, and enterprise mobile platforms.",
  keywords: [
    "Flutter Engineer",
    "Android Developer",
    "Senior Mobile Engineer",
    "SDK Developer",
    "Fintech Mobile",
    "Anand Alagappan",
  ],
  authors: [{ name: "Anand Alagappan" }],
  openGraph: {
    title: "Anand Alagappan | Senior Mobile Systems Engineer",
    description:
      "Senior Mobile Systems Engineer specializing in Flutter, Android SDK development, Fintech, and enterprise mobile platforms.",
    type: "website",
    url: "https://anandsubbu007.github.io/portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anand Alagappan | Senior Mobile Systems Engineer",
    description:
      "Senior Mobile Systems Engineer specializing in Flutter, Android SDK development, Fintech, and enterprise mobile platforms.",
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
