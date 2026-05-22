import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://anandsubbu007.github.io"),
  title: {
    default: "Anand Alagappan — Senior Mobile Systems Engineer",
    template: "%s | Anand Alagappan",
  },
  description:
    "Senior Mobile Systems Engineer specializing in Flutter, Android, Fintech, Platform Engineering, and Mobile Security. Building scalable mobile platforms and SDKs.",
  keywords: [
    "Flutter Engineer",
    "Android Developer",
    "Mobile Systems Engineer",
    "Fintech Mobile",
    "SDK Development",
    "Mobile Architecture",
    "Kotlin",
    "Java",
    "Platform Engineering",
  ],
  authors: [{ name: "Anand Alagappan" }],
  creator: "Anand Alagappan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anandsubbu007.github.io",
    siteName: "Anand Alagappan",
    title: "Anand Alagappan — Senior Mobile Systems Engineer",
    description:
      "Building scalable mobile platforms, SDKs, and production-grade fintech applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anand Alagappan — Senior Mobile Systems Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anand Alagappan — Senior Mobile Systems Engineer",
    description:
      "Building scalable mobile platforms, SDKs, and production-grade fintech applications.",
    creator: "@AL_Anandsubbu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="noise">{children}</body>
    </html>
  );
}
