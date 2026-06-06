"use client";

import { useState } from "react";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { professionalApps, showcaseProjects, learningProjects } from "@/content/projectArchive";
import { cn } from "@/lib/utils";
import type { ScreenshotFrame } from "@/types/projectArchive";

const screenshotFrameClasses: Record<ScreenshotFrame, string> = {
  phone: "h-[22rem] w-[10.166rem] sm:h-[25rem] sm:w-[11.552rem]",
  wide: "h-[13.5rem] w-[24rem] sm:h-[15.5rem] sm:w-[28rem]",
  square: "h-[18rem] w-[18rem] sm:h-[20rem] sm:w-[20rem]",
  vision: "h-[15rem] w-[27rem] sm:h-[17rem] sm:w-[31rem]",
};

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
        "relative overflow-hidden rounded-[2.15rem] border border-white/[0.07] bg-[rgba(28,28,30,0.5)] shadow-[0_22px_70px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl",
        className,
      )}
      id={id}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0))]" />
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

export function ProjectsArchive() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const selectedProject = showcaseProjects[selectedProjectIndex];

  return (
    <div className="space-y-4">
      <ArchiveSurface className="p-5 sm:p-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(10,132,255,0.24),transparent_20rem),linear-gradient(145deg,rgba(255,255,255,0.09),rgba(28,28,30,0.2)_48%)]" />
        <div className="relative z-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <Eyebrow>Professional App Work</Eyebrow>
              <h1 className="mt-3 max-w-3xl text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-tight tracking-[-0.055em] text-white">
                Apps I have built and contributed to.
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-white/54 sm:text-base sm:leading-7">
                Selected iOS work across VPN products I built, enterprise client apps I contributed to, and iPad modernization work.
              </p>
            </div>
            <div className="shrink-0 rounded-full bg-white/[0.08] px-3.5 py-2 text-xs font-semibold text-white/52 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
              App Store work
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {professionalApps.map((app) => {
              const content = (
                <>
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-[1.3rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.18),rgba(255,255,255,0.06))] shadow-[0_14px_28px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.16)]">
                    <Image alt="" aria-hidden="true" className="h-full w-full object-cover" height={64} src={app.icon} unoptimized width={64} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-tight text-white/88">{app.name}</p>
                    <p className="mt-1 text-xs font-medium leading-tight text-white/44">{app.label}</p>
                  </div>
                  {app.href ? (
                    <span className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/[0.08] text-[0.7rem] font-semibold text-white/42 transition group-hover:bg-white/[0.14] group-hover:text-white/72">
                      ↗
                    </span>
                  ) : null}
                </>
              );

              const className =
                "group flex min-h-24 items-center gap-3 rounded-[1.55rem] bg-black/20 p-3.5 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:bg-white/[0.08] active:scale-[0.985]";

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
        </div>
      </ArchiveSurface>

      <ArchiveSurface className="p-4 sm:p-5" id="showcase">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(75,167,255,0.18),transparent_18rem),linear-gradient(145deg,rgba(255,255,255,0.08),transparent_48%)]" />
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
                    onClick={() => setSelectedProjectIndex(index)}
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
                    <a className="shrink-0 rounded-full bg-white/[0.08] px-3 py-1.5 text-xs font-semibold text-white/58 transition hover:bg-white/[0.13] hover:text-white" href={selectedProject.href}>
                      Details
                    </a>
                  </div>

                  {selectedProject.screenshots.length > 0 ? (
                    <div className="flex snap-x gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                      {selectedProject.screenshots.map((screenshot, index) => (
                        <motion.div
                          animate={{ opacity: 1, y: 0 }}
                          className={cn(
                            "relative shrink-0 snap-start overflow-hidden rounded-[1.65rem] border border-white/12 bg-white/8 shadow-[0_18px_42px_rgba(0,0,0,0.34)]",
                            screenshotFrameClasses[screenshot.frame ?? selectedProject.preferredFrame ?? "phone"],
                          )}
                          initial={{ opacity: 0, y: 10 }}
                          key={screenshot.src}
                          transition={{ delay: index * 0.03, duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <Image
                            alt={`${selectedProject.name} screenshot ${index + 1}`}
                            className={cn(
                              "h-full w-full",
                              (screenshot.frame ?? selectedProject.preferredFrame ?? "phone") === "phone"
                                ? "object-cover"
                                : "object-contain",
                            )}
                            height={800}
                            src={screenshot.src}
                            unoptimized
                            width={1200}
                          />
                        </motion.div>
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

      <ArchiveSurface className="p-5 sm:p-6" id="learning">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(28,28,30,0.18)_44%),radial-gradient(circle_at_90%_0%,rgba(191,90,242,0.16),transparent_20rem)]" />
        <div className="relative z-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>Learning Projects</Eyebrow>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-white">Files-style experiment grid</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/42">
              Smaller repos, component labs, architecture practice, and technical experiments.
            </p>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {learningProjects.map((project) => {
              const card = (
                <>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-white/88">{project.name}</p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/34">{project.category}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-white/[0.07] px-2.5 py-1 text-[0.68rem] font-semibold text-white/42">
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-white/52">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span className="rounded-full bg-black/20 px-2.5 py-1 text-[0.68rem] font-semibold text-white/42" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </>
              );

              const className =
                "block min-h-56 rounded-[1.55rem] bg-black/20 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:bg-white/[0.07]";

              return project.href ? (
                <a className={className} href={project.href} key={project.name} rel="noreferrer" target="_blank">
                  {card}
                </a>
              ) : (
                <div className={className} key={project.name}>
                  {card}
                </div>
              );
            })}
          </div>
        </div>
      </ArchiveSurface>
    </div>
  );
}
