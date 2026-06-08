import type { FeedPost } from "@/types/feed";

import { FeedCard } from "@/components/feed/FeedCard";

type FeedListProps = {
  posts: FeedPost[];
};

export function FeedList({ posts }: FeedListProps) {
  const shortPosts = posts.filter((post) => post.type === "short");
  const longPosts = posts.filter((post) => post.type !== "short");

  return (
    <div className="grid gap-4 xl:grid-cols-[20rem_minmax(0,1fr)]">
      <section className="rounded-[1.9rem] bg-black/18 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        <div className="px-2 py-2">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/38">Pinned shorts</p>
          <p className="mt-2 text-sm leading-5 text-white/48">Quick notes and tiny debugging markers.</p>
        </div>

        <div className="mt-2 space-y-2.5">
          {shortPosts.map((post) => (
            <FeedCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="rounded-[1.9rem] bg-black/18 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        <div className="px-2 py-2">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/38">Notes and devlogs</p>
          <p className="mt-2 text-sm leading-5 text-white/48">
            Longer entries about Swift, local AI, product work, and project progress.
          </p>
        </div>

        <div className="mt-2 grid gap-3">
          {longPosts.map((post) => (
            <FeedCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
