import { FeedCard } from "@/components/feed/FeedCard";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { feedPosts } from "@/content/feed";

export function FeedPreview() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          description="Short technical notes, devlogs, debugging thoughts, and local AI experiments."
          eyebrow="Feed"
          title="Developer notes"
        />
        <Button className="w-fit" href="/feed" variant="ghost">
          View feed
        </Button>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {feedPosts.slice(0, 3).map((post) => (
          <FeedCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
