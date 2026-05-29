import type { FeedPost } from "@/types/feed";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

type FeedCardProps = {
  post: FeedPost;
};

export function FeedCard({ post }: FeedCardProps) {
  const isShort = post.type === "short";
  const typeLabel = {
    short: "Short",
    note: "Note",
    devlog: "Devlog",
    technical: "Technical",
  }[post.type];

  return (
    <Card
      className={
        isShort
          ? "p-4 transition duration-200 hover:border-white/18 hover:bg-[#2c2c2e]/48"
          : "p-5 transition duration-200 hover:border-white/18 hover:bg-[#2c2c2e]/44"
      }
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Badge>{typeLabel}</Badge>
        <time className="text-xs text-white/38" dateTime={post.date}>
          {post.date}
        </time>
        {post.project ? (
          <span className="rounded-xl bg-[#0A84FF]/14 px-2.5 py-1 text-xs font-medium text-[#8abfff]">
            {post.project}
          </span>
        ) : null}
      </div>

      <h3
        className={
          isShort ? "text-base font-semibold text-white" : "text-xl font-semibold text-white"
        }
      >
        {post.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-white/58">{isShort ? post.content : post.excerpt}</p>

      {!isShort ? <p className="mt-4 text-sm leading-6 text-white/50">{post.content}</p> : null}

      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span className="rounded-xl bg-[#2c2c2e]/52 px-2.5 py-1 text-xs text-white/44" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </Card>
  );
}
