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
  {
    slug: "relive-private-product-notes",
    title: "Relive as a private product",
    date: "2026-05-29",
    type: "devlog",
    tags: ["Relive", "iOS", "Product"],
    excerpt:
      "For Relive, the public trail should be product progress, interaction notes, and screenshots instead of source code.",
    content:
      "Relive is personal product work, so the code stays private while the public page becomes a product journal: progress, interaction notes, screenshots, technical decisions, and the small design questions that shape the experience.",
    project: "relive",
  },
  {
    slug: "codex-data-flow-detective",
    title: "Tracing data flow like a detective",
    date: "2026-05-29",
    type: "note",
    tags: ["Codex", "Architecture", "Debugging"],
    excerpt:
      "Codex keeps calling this production-level, but I am still tracing the data flow like a detective.",
    content:
      "Codex keeps calling this production-level, but I am still tracing the data flow like a detective. The feature can look done from the outside while the internal flow still needs more trust.",
  },
];
