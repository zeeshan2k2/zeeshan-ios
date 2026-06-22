import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";

import { DeviceShell } from "@/components/device/DeviceShell";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zeeshanwaheed.dev"),
  title: {
    default: "Zeeshan Waheed | iOS Developer",
    template: "%s | Zeeshan Waheed",
  },
  description:
    "Personal portfolio for Zeeshan Waheed, an iOS developer building native apps, AI-powered tools, and polished Apple-platform products.",
  authors: [{ name: "Zeeshan Waheed" }],
  creator: "Zeeshan Waheed",
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
        <DeviceShell>{children}</DeviceShell>
        <Analytics />
      </body>
    </html>
  );
}
