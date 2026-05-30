import type { Metadata } from "next";

import { CommentsPlaceholder } from "@/components/feed/CommentsPlaceholder";
import { FeedList } from "@/components/feed/FeedList";
import { AppWindow } from "@/components/layout/AppWindow";
import { PageTransition } from "@/components/motion/PageTransition";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { feedPosts } from "@/content/feed";

export const metadata: Metadata = {
  title: "Feed",
  description:
    "Developer feed by Zeeshan Waheed with Swift/iOS notes, local AI experiments, devlogs, and engineering thoughts.",
};

export default function FeedPage() {
  return (
    <PageTransition>
      <SectionReveal>
        <AppWindow
          actions={
            <div className="rounded-2xl border border-white/10 bg-[#1c1c1e]/70 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/36">
                Local v1
              </p>
              <p className="mt-1 text-xs leading-5 text-white/54">content/feed.ts now, MDX later.</p>
            </div>
          }
          description="Swift/iOS debugging notes, RAG experiments, product updates, Xcode observations, and technical ideas that are too useful to disappear."
          eyebrow="Feed"
          title="Developer notes, devlogs, and small engineering thoughts."
        >
          <div className="space-y-6">
            <FeedList posts={feedPosts} />
            <CommentsPlaceholder />
          </div>
        </AppWindow>
      </SectionReveal>
    </PageTransition>
  );
}
