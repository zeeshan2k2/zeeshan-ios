import type { Metadata } from "next";

import { AboutProfile } from "@/components/about/AboutProfile";
import { PageTransition } from "@/components/motion/PageTransition";
import { SectionReveal } from "@/components/motion/SectionReveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Zeeshan Waheed, an iOS Developer building native Apple-platform apps, AI-assisted systems, and polished product experiences.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <SectionReveal>
        <AboutProfile />
      </SectionReveal>
    </PageTransition>
  );
}
