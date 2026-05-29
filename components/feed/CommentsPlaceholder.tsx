import { Card } from "@/components/ui/Card";

export function CommentsPlaceholder() {
  return (
    <Card className="p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/36">
        Comments later
      </p>
      <h2 className="mt-3 text-xl font-semibold text-white">Giscus-ready, not custom-built.</h2>
      <p className="mt-3 text-sm leading-6 text-white/58">
        Comments are intentionally out of v1. This space is reserved for a future Giscus integration
        backed by GitHub Discussions, so the feed can gain discussion without adding a backend or
        database.
      </p>
    </Card>
  );
}
