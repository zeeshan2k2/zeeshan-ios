import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "swift-genui",
    name: "Swift GenUI",
    description: "Schema-driven native UI generation using local LLMs and SwiftUI.",
    category: "AI + iOS + native UI systems",
    status: "Active",
    techStack: ["Swift", "SwiftUI", "Local LLMs", "Schema Design"],
    overview:
      "An exploration of generating native SwiftUI interfaces from structured schemas with local model assistance.",
    purpose:
      "Make AI-assisted UI generation feel native, inspectable, and practical for Apple platform workflows.",
    currentStatus: "Active prototype and technical exploration.",
    links: [
      {
        label: "View details",
        href: "/projects#swift-genui",
        type: "details",
      },
    ],
  },
  {
    slug: "byteforge",
    name: "ByteForge",
    description: "Exploring GGUF model compression and local AI tooling in C++.",
    category: "Systems + local AI tooling",
    status: "Experimental",
    techStack: ["C++", "GGUF", "Local AI", "Systems"],
    overview:
      "A systems-focused project for learning how model formats, compression, and local tooling behave closer to the metal.",
    purpose:
      "Build stronger intuition for local AI infrastructure by experimenting below the app layer.",
    currentStatus: "Experimental research and tooling work.",
    links: [
      {
        label: "View details",
        href: "/projects#byteforge",
        type: "details",
      },
    ],
  },
  {
    slug: "relive",
    name: "Relive",
    description:
      "A personal iOS product for rediscovering your photo library through a scrolling, memory-focused experience.",
    category: "iOS product + photo experience",
    status: "Private Product",
    techStack: ["Swift", "UIKit", "SwiftUI", "Photos"],
    overview:
      "A private product in active development focused on making old photo libraries feel easier and more emotional to revisit.",
    purpose:
      "Turn passive photo storage into an intentional memory-browsing experience.",
    currentStatus:
      "Source code is private while the product is in active development. Public updates will focus on progress, screenshots, devlogs, and technical notes.",
    isSourcePrivate: true,
    links: [
      {
        label: "View details",
        href: "/projects#relive",
        type: "details",
      },
      {
        label: "Devlog",
        href: "/feed?project=relive",
        type: "devlog",
      },
    ],
  },
  {
    slug: "light-eater",
    name: "Light Eater",
    description: "An indie game concept exploring game design and creative product building.",
    category: "Game design + creative product building",
    status: "Upcoming",
    techStack: ["Game Design", "Prototyping", "Creative Direction"],
    overview:
      "An upcoming creative project for exploring atmosphere, interaction, and the shape of a small indie game.",
    purpose:
      "Practice building a product experience where mechanics, mood, and visual identity all matter.",
    currentStatus: "Upcoming concept and early planning.",
    links: [
      {
        label: "View details",
        href: "/projects#light-eater",
        type: "details",
      },
    ],
  },
];
