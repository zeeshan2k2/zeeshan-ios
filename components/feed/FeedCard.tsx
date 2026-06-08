import type { FeedPost } from "@/types/feed";

import { cn } from "@/lib/utils";

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
  const typeTint = {
    short: "bg-[#FFD60A]",
    note: "bg-[#0A84FF]",
    devlog: "bg-[#34C759]",
    technical: "bg-[#BF5AF2]",
  }[post.type];

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[1.65rem] border border-white/[0.07] bg-black/20 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:bg-white/[0.07]",
        !isShort && "sm:p-5",
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]" />
      <div className="relative z-10">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className={cn("h-2.5 w-2.5 rounded-full", typeTint)} />
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/40">
            {typeLabel}
          </span>
          <time className="text-xs font-medium text-white/34" dateTime={post.date}>
            {post.date}
          </time>
          {post.project ? (
            <span className="rounded-full bg-white/[0.07] px-2.5 py-1 text-[0.68rem] font-semibold text-white/42">
              {post.project}
            </span>
          ) : null}
        </div>

        <h3 className={cn("font-semibold tracking-[-0.025em] text-white", isShort ? "text-base" : "text-xl")}>
          {post.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-white/58">{isShort ? post.content : post.excerpt}</p>

        {!isShort ? <p className="mt-4 text-sm leading-6 text-white/48">{post.content}</p> : null}

        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span className="rounded-full bg-white/[0.055] px-2.5 py-1 text-[0.68rem] font-semibold text-white/38" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
