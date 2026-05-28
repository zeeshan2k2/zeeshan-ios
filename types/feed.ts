export type FeedPostType = "short" | "note" | "devlog" | "technical";

export type FeedPost = {
  slug: string;
  title: string;
  date: string;
  type: FeedPostType;
  tags: string[];
  excerpt: string;
  content: string;
  project?: string;
};
