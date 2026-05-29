import type { FeedPost } from "@/types/feed";

import { FeedCard } from "@/components/feed/FeedCard";

type FeedListProps = {
  posts: FeedPost[];
};

export function FeedList({ posts }: FeedListProps) {
  const shortPosts = posts.filter((post) => post.type === "short");
  const longPosts = posts.filter((post) => post.type !== "short");

  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/36">Shorts</p>
          <p className="mt-2 text-sm text-white/50">Quick thoughts, debugging notes, and tiny updates.</p>
        </div>

        <div className="space-y-3">
          {shortPosts.map((post) => (
            <FeedCard key={post.slug} post={post} />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/36">
            Notes and devlogs
          </p>
          <p className="mt-2 text-sm text-white/50">
            Longer entries about Swift, RAG, local AI, product work, and project progress.
          </p>
        </div>

        <div className="space-y-4">
          {longPosts.map((post) => (
            <FeedCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
