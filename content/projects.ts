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
    buildSummary:
      "I am designing the schema layer, generation flow, and SwiftUI rendering patterns that can turn structured intent into native interface output.",
    highlights: [
      "Schema-first approach for predictable UI generation.",
      "Local model workflow instead of cloud-only experimentation.",
      "Native SwiftUI output that can be inspected and refined.",
    ],
    progress: ["Schema drafts", "SwiftUI renderer experiments", "Local LLM prompt flow"],
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
    buildSummary:
      "I am exploring how GGUF models are represented, compressed, moved around, and supported by small local tooling experiments in C++.",
    highlights: [
      "Hands-on exploration of model file formats.",
      "C++ tooling practice around local AI workflows.",
      "Systems-level thinking behind app-facing AI features.",
    ],
    progress: ["GGUF notes", "Compression experiments", "CLI tooling sketches"],
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
    buildSummary:
      "I am building the product flow, photo browsing interactions, and memory-focused presentation patterns for a personal iOS app.",
    highlights: [
      "Scrolling memory-first browsing experience.",
      "Private product work with public devlogs and progress notes.",
      "Native iOS interaction design focused on emotional recall.",
    ],
    progress: ["Product flow", "Photo library exploration", "Interaction prototypes"],
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
    buildSummary:
      "I am shaping the concept, mechanics, and early visual direction before committing to a full prototype.",
    highlights: [
      "Creative product practice beyond utility apps.",
      "Atmosphere, interaction, and game feel as first-class design problems.",
      "Early concept work that can evolve into a playable prototype.",
    ],
    progress: ["Concept notes", "Mechanic sketches", "Mood exploration"],
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
