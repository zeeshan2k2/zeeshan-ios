import type { Metadata } from "next";

import { AppWindow } from "@/components/layout/AppWindow";
import { PageTransition } from "@/components/motion/PageTransition";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { Card } from "@/components/ui/Card";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: "About Zeeshan Waheed, iOS engineer and software engineering undergraduate.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <SectionReveal>
        <AppWindow description={SITE_DESCRIPTION} eyebrow="About" title={SITE_NAME}>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "iOS engineering",
                body: "Swift, UIKit, SwiftUI, and native interaction patterns are the center of my engineering work.",
              },
              {
                title: "Local AI systems",
                body: "I like exploring local LLM tooling, RAG workflows, and model-side infrastructure that can run closer to the user.",
              },
              {
                title: "Product building",
                body: "I care about turning technical ideas into polished product experiences with clear interaction and visual intent.",
              },
            ].map((focus) => (
              <Card className="p-5" key={focus.title}>
                <h2 className="text-lg font-semibold text-white">{focus.title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/56">{focus.body}</p>
              </Card>
            ))}
          </div>
        </AppWindow>
      </SectionReveal>
    </PageTransition>
  );
}
