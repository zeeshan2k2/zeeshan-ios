"use client";

import { useState } from "react";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { learningPaths, learningProjects, professionalApps, showcaseProjects, technicalNotes } from "@/content/projectArchive";
import { ScreenshotLightbox } from "@/components/ui/ScreenshotLightbox";
import { cn } from "@/lib/utils";
import type { ScreenshotFrame } from "@/types/projectArchive";

const screenshotFrameClasses: Record<ScreenshotFrame, string> = {
  phone:
    "aspect-[1170/2532] h-auto w-[10.166rem] sm:w-[11.552rem] [@media(min-width:2300px)]:w-[17rem]",
  wide: "h-[13.5rem] w-[24rem] sm:h-[15.5rem] sm:w-[28rem]",
  square: "h-[18rem] w-[18rem] sm:h-[20rem] sm:w-[20rem]",
  vision: "aspect-video h-auto w-[27rem] sm:w-[31rem]",
};

const professionalWorkGroups = [
  {
    eyebrow: "Built and scaled",
    title: "Shared VPN product architecture",
    description:
      "Re-architected a shared VPN foundation across multiple App Store deployments, covering monetization, reliability, secure configuration, and reusable product flows.",
    apps: [
      { name: "VPN TomatoLink", role: "Built end-to-end" },
      { name: "Bubble VPN", role: "Built end-to-end" },
      { name: "Uranus NetTest", role: "Built end-to-end" },
    ],
    highlights: ["StoreKit IAP", "Ad monetization", "Crashlytics", "Secure API keys", "XCTest"],
    outcome: "TomatoLink: 7.8k first-month downloads · 99.5% crash-free sessions · 38% retention improvement",
  },
  {
    eyebrow: "Client products",
    title: "Cybersecurity app delivery",
    description:
      "Improved production cybersecurity experiences through stronger onboarding, maintainable UI, authentication, localization, and targeted reliability fixes.",
    apps: [
      { name: "Zurich Cyber", role: "Product contribution" },
      { name: "Boxx Cyber", role: "Client app contribution" },
    ],
    highlights: ["Onboarding redesign", "Passkey authentication", "Localization", "Notifications", "UI consistency"],
    outcome: "Zurich Cyber: refactored key flows and resolved notification issues across an established App Store product",
  },
  {
    eyebrow: "Modernized",
    title: "Legacy iPad application",
    description:
      "Refactored and modernized a legacy Objective-C application with an iPad-focused interface overhaul and fixes across key functional paths.",
    apps: [{ name: "PunchLog", role: "Legacy modernization" }],
    highlights: ["Objective-C", "iPad UI overhaul", "Code refactoring", "Functional fixes", "Performance"],
    outcome: "Improved stability, performance, maintainability, and the overall iPad user experience",
  },
] as const;

function ArchiveSurface({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border backdrop-blur-2xl backdrop-saturate-125",
        className,
      )}
      id={id}
      style={{
        background:
          "linear-gradient(145deg, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0.04) 48%, rgba(255, 255, 255, 0.018) 100%), rgba(20, 21, 25, 0.4)",
        borderColor: "rgba(255, 255, 255, 0.16)",
        borderRadius: "1.75rem",
        boxShadow:
          "inset 0 1px 0 rgba(255, 255, 255, 0.24), inset 0 -1px 0 rgba(0, 0, 0, 0.14), 0 20px 48px rgba(0, 0, 0, 0.26)",
      }}
    >
      {children}
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/48">
      {children}
    </p>
  );
}

function LearningProjectAction({
  href,
  kind,
  label,
}: {
  href?: string;
  kind: "github" | "notion";
  label: string;
}) {
  if (!href) {
    return null;
  }

  const content = (
    <>
      <span
        className={cn(
          "flex h-10 w-10 items-center justify-center overflow-hidden rounded-[0.95rem] shadow-[0_10px_24px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.18)] transition group-hover:-translate-y-0.5 group-hover:brightness-110 group-active:scale-[0.96]",
          kind === "github" ? "bg-[#181717] text-white" : "bg-white",
        )}
      >
        {kind === "github" ? (
          <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
            <path
              d="M12 .8A11.2 11.2 0 0 0 8.46 22.63c.56.1.76-.24.76-.54v-1.97c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.15 1.72 1.15 1 1.72 2.63 1.22 3.28.94.1-.72.39-1.22.71-1.5-2.49-.29-5.11-1.25-5.11-5.56 0-1.23.44-2.23 1.15-3.01-.11-.28-.5-1.43.11-2.97 0 0 .94-.3 3.09 1.15A10.75 10.75 0 0 1 12 6.28c.96 0 1.92.13 2.82.38 2.14-1.45 3.08-1.15 3.08-1.15.61 1.54.23 2.69.12 2.97.72.78 1.15 1.78 1.15 3.01 0 4.32-2.63 5.27-5.13 5.55.4.35.76 1.04.76 2.09v2.97c0 .3.21.65.78.54A11.2 11.2 0 0 0 12 .8Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <Image alt="" aria-hidden="true" className="h-6 w-6 object-contain" height={24} src="/icons/notion.png" width={24} />
        )}
      </span>
      <span className="text-[0.68rem] font-semibold text-white/48 transition group-hover:text-white/72">
        {label}
      </span>
    </>
  );

  const className = "group flex min-w-14 flex-col items-center gap-1.5";

  return (
    <a className={className} href={href} rel="noreferrer" target="_blank">
      {content}
    </a>
  );
}

function LearningCard({
  project,
  compact = false,
  resourcesLabel = "Code and notes",
}: {
  project: {
    name: string;
    category: string;
    description: string;
    techStack: string[];
    githubUrl?: string;
    notionUrl?: string;
    status: string;
  };
  compact?: boolean;
  resourcesLabel?: string;
}) {
  return (
    <article
      className={cn(
        "flex flex-col overflow-hidden rounded-[1.55rem] bg-black/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:bg-white/[0.07]",
        compact ? "min-h-[17.25rem]" : "min-h-[20rem]",
      )}
      key={project.name}
    >
      <div className="flex items-center justify-between gap-3 border-b border-white/[0.06] px-4 py-3.5">
        <div className="min-w-0">
          <p className={cn("truncate font-semibold text-white/90", compact ? "text-[0.95rem]" : "text-sm")}>
            {project.name}
          </p>
          <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/34">{project.category}</p>
        </div>
        <span className="shrink-0 rounded-full bg-white/[0.07] px-2.5 py-1 text-[0.68rem] font-semibold text-white/42">
          {project.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-4 py-4">
        <p className={cn("text-white/54", compact ? "text-[0.82rem] leading-5" : "text-sm leading-6")}>{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span className="rounded-full bg-white/[0.055] px-2.5 py-1 text-[0.68rem] font-semibold text-white/42" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex min-h-[5.25rem] items-center justify-between gap-4 border-t border-white/[0.06] bg-black/10 px-4 py-3">
        <div>
          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-white/30">Resources</p>
          <p className="mt-1 text-xs text-white/38">{resourcesLabel}</p>
        </div>
        <div className="flex items-end gap-2">
          <LearningProjectAction href={project.githubUrl} kind="github" label="GitHub" />
          <LearningProjectAction href={project.notionUrl} kind="notion" label="Notes" />
        </div>
      </div>
    </article>
  );
}

export function ProjectsArchive() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const selectedProject = showcaseProjects[selectedProjectIndex];
  const archivePriority = [
    "Passkey",
    "ByteForge",
    "iOS Notifications Examples",
    "iOS Combine Examples",
    "iOS Networking Examples",
    "Widget Kit",
    "GraphQL Lab",
    "Call Kit",
  ];

  const learningArchiveEntries = [...technicalNotes, ...learningProjects].sort((a, b) => {
    const aPriority = archivePriority.indexOf(a.name);
    const bPriority = archivePriority.indexOf(b.name);

    if (aPriority !== -1 || bPriority !== -1) {
      if (aPriority === -1) return 1;
      if (bPriority === -1) return -1;
      return aPriority - bPriority;
    }

    if (a.githubUrl !== b.githubUrl) {
      return a.githubUrl ? 1 : -1;
    }

    return a.name.localeCompare(b.name);
  });

  return (
    <div className="space-y-4">
      <ArchiveSurface className="p-5 sm:p-6">
        <div className="relative z-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <Eyebrow>Professional App Work</Eyebrow>
              <h1 className="mt-3 max-w-3xl text-[clamp(1.8rem,3.5vw,3rem)] font-semibold leading-tight tracking-[-0.045em] text-white">
                Production iOS work, by contribution.
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-white/54 sm:text-base sm:leading-7">
                A closer look at the architecture, product systems, and modernization work behind the apps shown on Home.
              </p>
            </div>
            <div className="shrink-0 text-left sm:text-right">
              <p className="text-sm font-semibold text-white/72">Synapse Tech Inc.</p>
              <p className="mt-1 text-xs font-medium text-white/42">Aug 2024 – Present</p>
            </div>
          </div>

          <div className="mt-7 border-t border-white/[0.09]">
            {professionalWorkGroups.map((group) => (
              <section
                className="grid gap-5 border-b border-white/[0.09] py-6 last:border-b-0 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.72fr)] lg:gap-10"
                key={group.title}
              >
                <div>
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[#64D2FF]/72">
                    {group.eyebrow}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold tracking-[-0.025em] text-white/92 sm:text-2xl">
                    {group.title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-white/54">
                    {group.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.highlights.map((highlight) => (
                      <span
                        className="rounded-full bg-white/[0.075] px-3 py-1.5 text-xs font-semibold text-white/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                        key={highlight}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 border-l-2 border-[#30D158]/70 pl-3 text-xs font-medium leading-5 text-white/62 sm:text-sm">
                    {group.outcome}
                  </p>
                </div>

                <div className="flex flex-col justify-center divide-y divide-white/[0.08]">
                  {group.apps.map((groupApp) => {
                    const app = professionalApps.find((item) => item.name === groupApp.name);

                    if (!app) {
                      return null;
                    }

                    const content = (
                      <>
                        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[1rem] shadow-[0_12px_28px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.16)]">
                          <Image
                            alt=""
                            aria-hidden="true"
                            className="h-full w-full object-cover"
                            height={56}
                            src={app.icon}
                            unoptimized
                            width={56}
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-white/88">{app.name}</p>
                          <p className="mt-1 text-xs font-medium text-white/44">{groupApp.role}</p>
                        </div>
                        {app.href ? (
                          <span className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-sm text-white/42 transition group-hover:bg-white/[0.13] group-hover:text-white/78">
                            ↗
                          </span>
                        ) : null}
                      </>
                    );

                    const className =
                      "group flex min-h-20 items-center gap-3 py-3 text-left transition first:pt-0 last:pb-0";

                    return app.href ? (
                      <a className={className} href={app.href} key={app.name} rel="noreferrer" target="_blank">
                        {content}
                      </a>
                    ) : (
                      <div className={className} key={app.name}>
                        {content}
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </ArchiveSurface>

      <ArchiveSurface className="p-4 sm:p-5" id="showcase">
        <div className="relative z-10">
          <div className="mb-4 flex items-center justify-between gap-4 px-1">
            <div>
              <Eyebrow>Showcase Projects</Eyebrow>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-white">Project preview browser</h2>
            </div>
            <span className="rounded-full bg-white/[0.08] px-3 py-1.5 text-xs font-semibold text-white/50">
              Manual
            </span>
          </div>

          <div className="grid gap-4 xl:grid-cols-[17rem_minmax(0,1fr)]">
            <div className="flex gap-2 overflow-x-auto rounded-[1.75rem] bg-black/20 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden xl:block xl:space-y-2.5 xl:overflow-visible">
              {showcaseProjects.map((project, index) => {
                const isSelected = index === selectedProjectIndex;

                return (
                  <button
                    className={cn(
                      "flex min-w-[14rem] items-center gap-3 rounded-[1.35rem] p-3 text-left transition active:scale-[0.99] xl:w-full xl:min-w-0",
                      isSelected ? "bg-white/[0.14] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]" : "hover:bg-white/[0.07]",
                    )}
                    key={project.slug}
                    onClick={() => {
                      setLightboxIndex(null);
                      setSelectedProjectIndex(index);
                    }}
                    type="button"
                  >
                    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[1rem] bg-[linear-gradient(145deg,#2C2C2E,#111217)] shadow-[0_10px_22px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.14)]">
                      {project.icon ? (
                        <Image alt="" className="h-full w-full object-cover" height={48} src={project.icon} width={48} />
                      ) : (
                        <span className="text-sm font-semibold text-white/86">{project.iconFallback}</span>
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-white/88">{project.name}</p>
                      <p className="mt-1 truncate text-xs font-medium text-white/44">{project.status}</p>
                    </div>
                    <span className={cn("ml-auto h-2 w-2 shrink-0 rounded-full", isSelected ? "bg-[#0A84FF]" : "bg-white/18")} />
                  </button>
                );
              })}
            </div>

            <div className="min-w-0 rounded-[1.75rem] bg-black/18 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -18, filter: "blur(8px)" }}
                  initial={{ opacity: 0, x: 18, filter: "blur(8px)" }}
                  key={selectedProject.slug}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="mb-3 flex flex-col gap-3 px-1 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <p className="text-lg font-semibold tracking-[-0.025em] text-white">{selectedProject.name}</p>
                      <p className="mt-1 max-w-2xl text-sm leading-5 text-white/52">{selectedProject.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {selectedProject.techStack.slice(0, 5).map((tech) => (
                          <span className="rounded-full bg-white/[0.07] px-2.5 py-1 text-[0.7rem] font-semibold text-white/48" key={tech}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {selectedProject.githubUrl ? (
                      <a
                        className="group flex shrink-0 items-center gap-2 rounded-xl bg-[#181717] px-3 py-2 text-xs font-semibold text-white/76 shadow-[0_10px_24px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.16)] transition hover:-translate-y-0.5 hover:bg-[#242424] hover:text-white active:scale-[0.97]"
                        href={selectedProject.githubUrl}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24">
                          <path
                            d="M12 .8A11.2 11.2 0 0 0 8.46 22.63c.56.1.76-.24.76-.54v-1.97c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.15 1.72 1.15 1 1.72 2.63 1.22 3.28.94.1-.72.39-1.22.71-1.5-2.49-.29-5.11-1.25-5.11-5.56 0-1.23.44-2.23 1.15-3.01-.11-.28-.5-1.43.11-2.97 0 0 .94-.3 3.09 1.15A10.75 10.75 0 0 1 12 6.28c.96 0 1.92.13 2.82.38 2.14-1.45 3.08-1.15 3.08-1.15.61 1.54.23 2.69.12 2.97.72.78 1.15 1.78 1.15 3.01 0 4.32-2.63 5.27-5.13 5.55.4.35.76 1.04.76 2.09v2.97c0 .3.21.65.78.54A11.2 11.2 0 0 0 12 .8Z"
                            fill="currentColor"
                          />
                        </svg>
                        GitHub
                      </a>
                    ) : null}
                  </div>

                  {selectedProject.screenshots.length > 0 ? (
                    <div className="flex snap-x gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                      {selectedProject.screenshots.map((screenshot, index) => (
                        <motion.button
                          aria-label={`Open ${selectedProject.name} screenshot ${index + 1}`}
                          animate={{ opacity: 1, y: 0 }}
                          className={cn(
                            "relative shrink-0 snap-start cursor-zoom-in overflow-hidden rounded-[1.65rem] border border-white/12 bg-white/8 text-left shadow-[0_18px_42px_rgba(0,0,0,0.34)] transition hover:border-white/24 hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#64D2FF]",
                            screenshotFrameClasses[screenshot.frame ?? selectedProject.preferredFrame ?? "phone"],
                          )}
                          initial={{ opacity: 0, y: 10 }}
                          key={`${selectedProject.slug}-${index}-${screenshot.src}`}
                          onClick={() => setLightboxIndex(index)}
                          transition={{ delay: index * 0.03, duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          type="button"
                        >
                          <Image
                            alt={`${selectedProject.name} screenshot ${index + 1}`}
                            className={cn(
                              "h-full w-full",
                              (screenshot.frame ?? selectedProject.preferredFrame ?? "phone") === "phone"
                                ? "scale-[1.018] object-cover"
                                : (screenshot.frame ?? selectedProject.preferredFrame) === "vision"
                                  ? "scale-[1.006] object-cover"
                                  : "object-contain",
                            )}
                            height={800}
                            src={screenshot.src}
                            unoptimized
                            width={1200}
                          />
                        </motion.button>
                      ))}
                    </div>
                  ) : (
                    <div
                      className={cn(
                        "flex items-center justify-center rounded-[1.65rem] border border-dashed border-white/16 bg-white/[0.045] p-8 text-center",
                        selectedProject.preferredFrame === "vision"
                          ? "h-[15rem] sm:h-[17rem]"
                          : selectedProject.preferredFrame === "wide"
                            ? "h-[13.25rem] sm:h-[15rem]"
                            : "h-[22rem] sm:h-[25rem]",
                      )}
                    >
                      <div>
                        <p className="text-sm font-semibold text-white/72">Screenshots coming soon</p>
                        <p className="mt-2 max-w-xs text-xs leading-5 text-white/42">
                          Add assets for {selectedProject.name} and this preview will turn into a horizontal gallery.
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </ArchiveSurface>

      <ScreenshotLightbox
        activeIndex={lightboxIndex}
        onChange={setLightboxIndex}
        onClose={() => setLightboxIndex(null)}
        projectName={selectedProject.name}
        screenshots={selectedProject.screenshots}
      />

      <ArchiveSurface className="p-5 sm:p-6" id="learning">
        <div className="relative z-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>Learning Archive</Eyebrow>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-white">How I learned, what I studied, and what I built</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/42">
              Structured learning paths first, followed by the notes, experiments, and repo-backed work that turned those ideas into something usable.
            </p>
          </div>

          <div className="mt-6 border-t border-white/[0.08] pt-6">
            <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
              <div>
                <Eyebrow>Learning Paths</Eyebrow>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white">Course tracks and self-directed paths</h3>
              </div>
              <p className="max-w-md text-sm leading-6 text-white/40">The structured tracks that shaped the way I approached Swift, UIKit, and SwiftUI before the deeper topic notes and repo work.</p>
            </div>
            <div className="grid gap-3 lg:grid-cols-3">
              {learningPaths.map((project) => (
                <LearningCard compact key={project.name} project={project} resourcesLabel="Notes collection" />
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-white/[0.08] pt-6">
            <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
              <div>
                <Eyebrow>Notes and Projects</Eyebrow>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white">Focused notes, experiments, and repo-backed practice</h3>
              </div>
              <p className="max-w-md text-sm leading-6 text-white/40">The rest of the archive in one place: technical notes I wrote for myself, smaller experiments, and practical repo work where those ideas got tested properly.</p>
            </div>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {learningArchiveEntries.map((project) => (
                <LearningCard
                  compact={!project.githubUrl}
                  key={project.name}
                  project={project}
                  resourcesLabel={project.githubUrl ? "Code and notes" : "Notes and references"}
                />
              ))}
            </div>
          </div>
        </div>
      </ArchiveSurface>
    </div>
  );
}
