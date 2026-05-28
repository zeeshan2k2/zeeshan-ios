import type { FeedPost } from "@/types/feed";

export const feedPosts: FeedPost[] = [
  {
    slug: "delegate-callback-flow",
    title: "Delegate callback flow notes",
    date: "2026-05-29",
    type: "short",
    tags: ["Swift", "UIKit", "Debugging"],
    excerpt:
      "Trying to get this delegate callback flow working properly. The feature works now, but I still do not fully trust the flow.",
    content:
      "Trying to get this delegate callback flow working properly. The feature works now, but I still do not fully trust the flow.",
  },
  {
    slug: "xcode-previews-cache",
    title: "Xcode previews stopped updating again",
    date: "2026-05-29",
    type: "short",
    tags: ["Xcode", "SwiftUI"],
    excerpt:
      "Xcode previews stopped updating again. I do not know if it is me, the cache, or the universe.",
    content:
      "Xcode previews stopped updating again. I do not know if it is me, the cache, or the universe.",
  },
  {
    slug: "swift-genui-schema-first",
    title: "Schema-first UI generation",
    date: "2026-05-29",
    type: "technical",
    tags: ["Swift GenUI", "Local LLMs", "SwiftUI"],
    excerpt:
      "Thinking through how much structure a local model needs before generated SwiftUI stops feeling random.",
    content:
      "The interesting part of Swift GenUI is not just generating views. It is designing schemas that keep the output native, predictable, and easy to inspect.",
    project: "swift-genui",
  },
];
