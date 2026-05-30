import type { ReactNode } from "react";

import { Card } from "@/components/ui/Card";
import { experience } from "@/content/experience";
import { feedPosts } from "@/content/feed";
import { projects } from "@/content/projects";
import { socialLinks } from "@/content/social";
import { SITE_NAME } from "@/lib/constants";
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

const contactPosterLinks = [
  {
    label: "GitHub",
    href: socialLinks.find((link) => link.label === "GitHub")?.href,
    icon: "github",
    className: "bg-[#181717] text-white",
  },
  {
    label: "LinkedIn",
    href: socialLinks.find((link) => link.label === "LinkedIn")?.href,
    icon: "linkedin",
    className: "bg-[#0A66C2] text-white",
  },
  {
    label: "Email",
    href: socialLinks.find((link) => link.label === "Email")?.href,
    icon: "email",
    className: "bg-[linear-gradient(145deg,#64D2FF,#0A84FF)] text-white",
  },
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

function ContactPosterIcon({ icon }: { icon: string }) {
  if (icon === "github") {
    return (
      <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24">
        <path
          d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.91.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18A10.98 10.98 0 0 1 12 6.17c.98 0 1.96.13 2.88.39 2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.42-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.04c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (icon === "linkedin") {
    return <span aria-hidden="true" className="text-[1.55rem] font-bold leading-none tracking-[-0.02em]">in</span>;
  }

  if (icon === "email") {
    return (
      <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24">
        <path
          d="M4.75 5.5h14.5c1.24 0 2.25 1.01 2.25 2.25v8.5c0 1.24-1.01 2.25-2.25 2.25H4.75A2.25 2.25 0 0 1 2.5 16.25v-8.5C2.5 6.51 3.51 5.5 4.75 5.5Zm.2 2 6.28 4.86c.45.35 1.09.35 1.54 0l6.28-4.86H4.95Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24">
      <path
        d="M6.25 2.75h7.5L19.25 8v13.25h-13V2.75Zm7.2 1.8v4.1h4.2l-4.2-4.1ZM8.6 12.25h6.8v1.65H8.6v-1.65Zm0 3.1h6.8V17H8.6v-1.65Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function HomeWidgetScreen() {
  return (
    <div className="grid auto-rows-[minmax(10rem,auto)] gap-4 lg:grid-cols-8">
      <WidgetSurface className="min-h-[25rem] p-6 sm:p-7 lg:col-span-5 lg:row-span-2">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_10%,rgba(10,132,255,0.34),transparent_18rem),radial-gradient(circle_at_88%_0%,rgba(191,90,242,0.18),transparent_14rem),linear-gradient(145deg,rgba(24,31,43,0.82),rgba(12,14,20,0.5)_58%,rgba(8,9,12,0.72))]" />
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/[0.055] blur-3xl" />
        <div className="relative z-10 flex h-full flex-col justify-between gap-7">
          <div className="flex items-start justify-between gap-5">
            <div>
              <WidgetTitle>Contact Poster</WidgetTitle>
              <h1 className="mt-5 max-w-[12ch] text-[clamp(3.4rem,7vw,6.4rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white">
                {SITE_NAME}
              </h1>
            </div>
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.75rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.2),rgba(255,255,255,0.08))] text-2xl font-semibold tracking-[-0.04em] text-white/92 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_18px_44px_rgba(0,0,0,0.3)] sm:h-24 sm:w-24 sm:text-3xl">
              ZW
            </div>
          </div>

          <div>
            <p className="max-w-2xl text-[clamp(1.55rem,3vw,2.45rem)] font-semibold leading-tight tracking-[-0.04em] text-white/92">
              iOS Developer building native apps, AI-assisted systems, and polished Apple-platform experiences.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/64">
              I work across Swift, UIKit, SwiftUI, and VisionOS, with production experience in app architecture, monetization, onboarding, and client-facing iOS work.
            </p>
          </div>

          <div className="grid gap-2.5 sm:grid-cols-3">
            {["Swift / UIKit", "SwiftUI / VisionOS", "Python / AI"].map((item) => (
              <div
                className="rounded-[1.35rem] bg-black/22 px-4 py-3 text-sm font-semibold text-white/78 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2.5">
            {contactPosterLinks.map((link) =>
              link.href ? (
                <a
                  aria-label={link.label}
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-[1.15rem] shadow-[0_12px_28px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.18)] transition hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.96]",
                    link.className,
                  )}
                  href={link.href}
                  key={link.label}
                  title={link.label}
                >
                  <ContactPosterIcon icon={link.icon} />
                </a>
              ) : null,
            )}
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
