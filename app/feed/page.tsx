import type { Metadata } from "next";

import { FeedList } from "@/components/feed/FeedList";
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
        <section className="relative overflow-hidden rounded-[2.15rem] border border-white/[0.07] bg-[rgba(28,28,30,0.5)] shadow-[0_22px_70px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(255,214,10,0.18),transparent_18rem),radial-gradient(circle_at_90%_0%,rgba(10,132,255,0.16),transparent_18rem),linear-gradient(145deg,rgba(255,255,255,0.08),transparent_48%)]" />
          <div className="relative z-10 p-5 sm:p-6">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/48">
                  Feed
                </p>
                <h1 className="mt-3 max-w-3xl text-[clamp(2.2rem,4.6vw,4rem)] font-semibold leading-tight tracking-[-0.055em] text-white">
                  Notes, devlogs, and small engineering thoughts.
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-white/54 sm:text-base sm:leading-7">
                  Swift/iOS debugging notes, local AI experiments, product updates, Xcode observations, and technical ideas worth keeping.
                </p>
              </div>

              <div className="w-fit rounded-full bg-white/[0.08] px-3.5 py-2 text-xs font-semibold text-white/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                Local notes
              </div>
            </div>

            <FeedList posts={feedPosts} />
          </div>
        </section>
      </SectionReveal>
    </PageTransition>
  );
}
