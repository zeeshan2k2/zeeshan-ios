import type { Metadata } from "next";
import type { ReactNode } from "react";

import { DeviceShell } from "@/components/device/DeviceShell";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Zeeshan Waheed | iOS Engineer",
    template: "%s | Zeeshan Waheed",
  },
  description:
    "Personal portfolio for Zeeshan Waheed, an iOS engineer building native apps, local AI tools, and Apple-inspired product experiences.",
  authors: [{ name: "Zeeshan Waheed" }],
  creator: "Zeeshan Waheed",
  openGraph: {
    title: "Zeeshan Waheed | iOS Engineer",
    description:
      "iOS engineer building native apps, local AI tools, and Apple-inspired product experiences.",
    type: "website",
    locale: "en_US",
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
      </body>
    </html>
  );
}
