import type { Metadata } from "next";

import { CommentsPlaceholder } from "@/components/feed/CommentsPlaceholder";
import { FeedList } from "@/components/feed/FeedList";
import { PageTransition } from "@/components/motion/PageTransition";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { Badge } from "@/components/ui/Badge";
import { feedPosts } from "@/content/feed";

export const metadata: Metadata = {
  title: "Feed",
  description:
    "Developer feed by Zeeshan Waheed with Swift/iOS notes, local AI experiments, devlogs, and engineering thoughts.",
};

export default function FeedPage() {
  return (
    <PageTransition className="gap-8">
      <SectionReveal className="grid gap-6 lg:grid-cols-[1fr_0.75fr] lg:items-end">
        <div>
          <Badge>Feed</Badge>
          <h1 className="mt-5 text-4xl font-semibold text-white sm:text-5xl">
            Developer notes, devlogs, and small engineering thoughts.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/62">
            A local-content feed for Swift/iOS debugging notes, RAG experiments, product updates,
            Xcode observations, and technical ideas that are too useful to disappear.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#1c1c1e]/58 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/36">
            Local v1 architecture
          </p>
          <p className="mt-3 text-sm leading-6 text-white/58">
            Posts live in <span className="font-medium text-white/72">content/feed.ts</span> for
            now. MDX can come later when the writing layer needs richer formatting.
          </p>
        </div>
      </SectionReveal>

      <SectionReveal>
        <FeedList posts={feedPosts} />
      </SectionReveal>
      <SectionReveal>
        <CommentsPlaceholder />
      </SectionReveal>
    </PageTransition>
  );
}
