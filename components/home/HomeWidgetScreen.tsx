import type { ReactNode } from "react";

import { Card } from "@/components/ui/Card";
import { experience } from "@/content/experience";
import { feedPosts } from "@/content/feed";
import { projects } from "@/content/projects";
import { socialLinks } from "@/content/social";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

const featuredProject = projects.find((project) => project.slug === "swift-genui") ?? projects[0];
const projectStack = projects.filter((project) => project.slug !== featuredProject.slug);
const latestPost = feedPosts[0];
const enterpriseExperience = experience[0];

const quickActions = [
  { label: "Resume", symbol: "CV", href: socialLinks.find((link) => link.label === "View Resume")?.href },
  { label: "GitHub", symbol: "GH", href: socialLinks.find((link) => link.label === "GitHub")?.href },
  { label: "Email", symbol: "@", href: socialLinks.find((link) => link.label === "Email")?.href },
];

const buildingItems = [
  { label: "Relive", detail: "Private iOS product", tint: "bg-[#0A84FF]" },
  { label: "Swift GenUI", detail: "Local LLM UI systems", tint: "bg-[#34C759]" },
  { label: "Local AI tooling", detail: "RAG + model experiments", tint: "bg-[#BF5AF2]" },
];

function WidgetTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/48", className)}>
      {children}
    </p>
  );
}

function WidgetSurface({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "relative h-full overflow-hidden rounded-[2.15rem] border-white/[0.07] bg-[rgba(28,28,30,0.48)] shadow-[0_22px_70px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0))]" />
      {children}
    </Card>
  );
}

export function HomeWidgetScreen() {
  return (
    <div className="grid auto-rows-[minmax(10rem,auto)] gap-4 lg:grid-cols-8">
      <WidgetSurface className="min-h-[25rem] p-6 sm:p-7 lg:col-span-5 lg:row-span-2">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(10,132,255,0.3),transparent_18rem),radial-gradient(circle_at_92%_0%,rgba(255,255,255,0.14),transparent_13rem),linear-gradient(145deg,rgba(24,31,43,0.78),rgba(12,14,20,0.48)_58%,rgba(8,9,12,0.68))]" />
        <div className="relative z-10 flex h-full flex-col justify-between gap-8">
          <div className="flex items-start justify-between gap-5">
            <div>
              <WidgetTitle>Contact Poster</WidgetTitle>
              <h1 className="mt-5 max-w-[12ch] text-[clamp(3.4rem,7vw,6.4rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white">
                {SITE_NAME}
              </h1>
            </div>
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.8rem] bg-white/14 text-2xl font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_18px_44px_rgba(0,0,0,0.26)] sm:h-24 sm:w-24">
              ZW
            </div>
          </div>

          <div>
            <p className="max-w-2xl text-[clamp(1.55rem,3vw,2.45rem)] font-semibold leading-tight tracking-[-0.04em] text-white/92">
              iOS Engineer building native apps and local AI tools.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/64">{SITE_DESCRIPTION}</p>
          </div>

          <div className="grid gap-2.5 sm:grid-cols-3">
            {["Swift", "UIKit / SwiftUI", "Local AI"].map((item) => (
              <div
                className="rounded-[1.35rem] bg-black/22 px-4 py-3 text-sm font-semibold text-white/78 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </WidgetSurface>

      <WidgetSurface className="p-5 lg:col-span-3">
        <div className="relative z-10">
          <WidgetTitle>Reminders</WidgetTitle>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-white">Currently building</h2>
          <div className="mt-5 space-y-3">
            {buildingItems.map((item) => (
              <div className="flex items-center gap-3 rounded-[1.35rem] bg-white/[0.065] px-3.5 py-3" key={item.label}>
                <span className={cn("h-3 w-3 shrink-0 rounded-full shadow-[0_0_18px_currentColor]", item.tint)} />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white/86">{item.label}</p>
                  <p className="mt-0.5 truncate text-xs font-medium text-white/44">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </WidgetSurface>

      <a className="block lg:col-span-3" href={`/projects#${featuredProject.slug}`}>
        <WidgetSurface className="min-h-[17rem] p-5">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_0%,rgba(10,132,255,0.42),transparent_12rem),linear-gradient(145deg,rgba(10,132,255,0.22),rgba(60,55,178,0.18)_44%,rgba(20,21,28,0.5))]" />
          <div className="relative z-10 flex h-full flex-col">
            <div className="flex items-center justify-between gap-4">
              <WidgetTitle className="text-white/58">Shortcuts</WidgetTitle>
              <span className="rounded-full bg-white/14 px-3 py-1 text-xs font-semibold text-white/72">
                {featuredProject.status}
              </span>
            </div>
            <div className="mt-5 flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-[#0A84FF] text-xl font-semibold text-white shadow-[0_16px_38px_rgba(10,132,255,0.28),inset_0_1px_0_rgba(255,255,255,0.28)]">
              UI
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.045em] text-white">{featuredProject.name}</h2>
            <p className="mt-2 text-sm leading-6 text-white/64">{featuredProject.description}</p>
            <div className="mt-auto flex flex-wrap gap-2 pt-5">
              {featuredProject.techStack.slice(0, 3).map((tech) => (
                <span className="rounded-full bg-white/12 px-2.5 py-1 text-[0.7rem] font-semibold text-white/58" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </WidgetSurface>
      </a>

      <WidgetSurface className="p-5 lg:col-span-5">
        <div className="relative z-10">
          <div className="flex items-center justify-between gap-4">
            <WidgetTitle>Files</WidgetTitle>
            <a className="text-sm font-semibold text-[#9FD0FF]" href="/projects">
              Projects
            </a>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {projectStack.map((project) => (
              <a
                className="group min-h-36 rounded-[1.55rem] bg-white/[0.065] p-3.5 transition hover:bg-white/[0.1] active:scale-[0.99]"
                href={`/projects#${project.slug}`}
                key={project.slug}
              >
                <div className="mb-4 h-10 w-14 rounded-b-[0.55rem] rounded-t-[0.9rem] bg-[linear-gradient(180deg,#7DD9FF,#35B7F2)] shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_12px_26px_rgba(0,0,0,0.2)]">
                  <div className="h-3 w-9 rounded-t-[0.55rem] bg-[#B8EEFF]" />
                </div>
                <p className="text-base font-semibold tracking-[-0.02em] text-white">{project.name}</p>
                <p className="mt-1 text-xs font-medium text-white/42">{project.status}</p>
                <p className="mt-3 text-xs leading-5 text-white/50">{project.category}</p>
              </a>
            ))}
          </div>
        </div>
      </WidgetSurface>

      <WidgetSurface className="p-5 lg:col-span-4">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,214,10,0.18),rgba(28,28,30,0.28)_42%)]" />
        <div className="relative z-10">
          <div className="flex items-center justify-between gap-4">
            <WidgetTitle className="text-white/52">Notes</WidgetTitle>
            <a className="text-sm font-semibold text-[#FFE07A]" href="/feed">
              Feed
            </a>
          </div>
          <div className="mt-5 rounded-[1.45rem] bg-[rgba(255,250,224,0.1)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
            <p className="text-xs font-semibold text-[#FFE07A]/80">{latestPost.type}</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-white">{latestPost.title}</h2>
            <p className="mt-3 text-sm leading-6 text-white/58">{latestPost.excerpt}</p>
          </div>
        </div>
      </WidgetSurface>

      <WidgetSurface className="p-5 lg:col-span-4">
        <div className="relative z-10">
          <WidgetTitle>Control Center</WidgetTitle>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {quickActions.map((action) =>
              action.href ? (
                <a
                  className="flex min-h-28 flex-col justify-between rounded-[1.65rem] bg-white/[0.075] p-4 transition hover:bg-white/[0.12] active:scale-[0.98]"
                  href={action.href}
                  key={action.label}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-[1.1rem] bg-white/14 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
                    {action.symbol}
                  </span>
                  <span className="text-sm font-semibold text-white/78">{action.label}</span>
                </a>
              ) : null,
            )}
          </div>
          <p className="mt-5 text-xs leading-5 text-white/42">{enterpriseExperience.summary}</p>
        </div>
      </WidgetSurface>
    </div>
  );
}
