import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";

import { DeviceShell } from "@/components/device/DeviceShell";

import "./globals.css";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Zeeshan Waheed",
  url: "https://zeeshanwaheed.dev",
  image: "https://zeeshanwaheed.dev/opengraph-image",
  jobTitle: "iOS Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  sameAs: [
    "https://github.com/zeeshan2k2",
    "https://linkedin.com/in/zeeshanwaheed1",
    "https://x.com/zeeshanwaheed",
  ],
  knowsAbout: [
    "iOS Development",
    "Swift",
    "UIKit",
    "SwiftUI",
    "visionOS",
    "Apple Platforms",
    "Local AI",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Zeeshan Waheed",
  url: "https://zeeshanwaheed.dev",
  description:
    "Personal site for Zeeshan Waheed, an iOS developer building native apps, AI-powered tools, and polished Apple-platform products.",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zeeshanwaheed.dev"),
  title: {
    default: "Zeeshan Waheed | iOS Developer",
    template: "%s | Zeeshan Waheed",
  },
  description:
    "Personal portfolio for Zeeshan Waheed, an iOS developer building native apps, AI-powered tools, and polished Apple-platform products.",
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Zeeshan Waheed" }],
  creator: "Zeeshan Waheed",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Zeeshan Waheed | iOS Developer",
    description:
      "iOS developer building native apps, AI-powered tools, and polished Apple-platform products.",
    url: "https://zeeshanwaheed.dev",
    siteName: "Zeeshan Waheed",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Zeeshan Waheed - iOS Developer portfolio",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeeshan Waheed | iOS Developer",
    description:
      "iOS developer building native apps, AI-powered tools, and polished Apple-platform products.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd, websiteJsonLd]),
          }}
        />
        <DeviceShell>{children}</DeviceShell>
        <Analytics />
      </body>
    </html>
  );
}
