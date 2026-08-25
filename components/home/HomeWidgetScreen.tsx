"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { ScreenshotLightbox } from "@/components/ui/ScreenshotLightbox";
import { SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

const currentRoleHighlights = [
  "App Store VPN apps",
  "Authentication and mobile security",
  "Enterprise iOS client work",
  "Legacy iPad modernization",
];

type ProfessionalApp = {
  name: string;
  label: string;
  icon?: string;
  iconFallback?: string;
  iconSymbol?: "lock";
  gradient?: string;
  href?: string;
};

const professionalApps: ProfessionalApp[] = [
  {
    name: "Enterprise Security App",
    label: "Private client work",
    iconSymbol: "lock",
    gradient: "linear-gradient(145deg, #4b4c50 0%, #1b1c20 46%, #050608 100%)",
  },
  {
    name: "33VPN",
    label: "iOS VPN App",
    icon: "/ui/appscreenshots/33vpn/app-icon.png",
  },
  {
    name: "VPN TomatoLink",
    label: "Built end-to-end",
    icon: "/professional-apps/tomato-vpn.png",
    href: "https://apps.apple.com/us/app/vpn-tomatolink-fast-wifi-proxy/id6449517484",
  },
  {
    name: "Bubble VPN",
    label: "Built end-to-end",
    icon: "/professional-apps/bubble-vpn.png",
    href: "https://apps.apple.com/us/app/bubble-vpn-speed-connect-fast/id1591409499",
  },
  {
    name: "Uranus NetTest",
    label: "Built end-to-end",
    icon: "/professional-apps/uranus-nettest.png",
    href: "https://apps.apple.com/us/app/uranus-nettest-speed-test/id1585109550",
  },
  {
    name: "PunchLog",
    label: "Modernized",
    icon: "/professional-apps/punchlist.png",
  },
];

function AppLockIcon({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={className}
      style={{
        fontFamily:
          "SF Pro, SF Pro Display, SF Symbols, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
      }}
    >
      􀎡
    </span>
  );
}

type ScreenshotFrame = "phone" | "wide" | "square" | "vision";

type HomeProjectScreenshot = {
  src: string;
  frame?: ScreenshotFrame;
};

type HomeProject = {
  name: string;
  status: string;
  description: string;
  icon?: string;
  iconFallback?: string;
  href: string;
  githubUrl?: string;
  preferredFrame?: ScreenshotFrame;
  screenshots: HomeProjectScreenshot[];
};

const homeProjects: HomeProject[] = [
  {
    name: "33VPN",
    status: "iOS VPN App",
    description: "A UIKit VPN app built with MVVM, Clean Architecture, reusable flows, and a polished iOS interface.",
    icon: "/ui/appscreenshots/33vpn/app-icon.png",
    href: "/projects#33vpn",
    githubUrl: "https://github.com/zeeshan2k2/33VPN",
    preferredFrame: "phone",
    screenshots: [
      { src: "/ui/appscreenshots/33vpn/Home.png" },
      { src: "/ui/appscreenshots/33vpn/servers.png" },
      { src: "/ui/appscreenshots/33vpn/settings.png" },
      { src: "/ui/appscreenshots/33vpn/premium%201.png" },
      { src: "/ui/appscreenshots/33vpn/premium%202.png" },
      { src: "/ui/appscreenshots/33vpn/premium%203.png" },
      { src: "/ui/appscreenshots/33vpn/vpn%20protocol.png" },
      { src: "/ui/appscreenshots/33vpn/privacy%20policy.png" },
      { src: "/ui/appscreenshots/33vpn/delete%20alert.png" },
      { src: "/ui/appscreenshots/33vpn/Support.png" },
    ],
  },
  {
    name: "Weather",
    status: "SwiftUI + widgets",
    description: "SwiftUI weather interface with forecast views, widgets, and AI summary screens.",
    icon: "/ui/appscreenshots/weather/app-icon.png",
    href: "/projects#weather-app",
    githubUrl: "https://github.com/zeeshan2k2/Weather",
    preferredFrame: "phone",
    screenshots: [
      { src: "/ui/appscreenshots/weather/weather-view.PNG" },
      { src: "/ui/appscreenshots/weather/weather-list-view.png" },
      { src: "/ui/appscreenshots/weather/day-detail-view.PNG" },
      { src: "/ui/appscreenshots/weather/ai-summary-view.PNG" },
      { src: "/ui/appscreenshots/weather/widget-medium.jpg", frame: "wide" },
      { src: "/ui/appscreenshots/weather/widget-small.jpg", frame: "square" },
    ],
  },
  {
    name: "SwiftGenUI",
    status: "AI + native UI",
    description: "Schema-driven UI generation rendered into native Apple-platform interfaces.",
    icon: "/ui/appscreenshots/swift-genui/app-icon.png",
    href: "/projects#swift-genui",
    githubUrl: "https://github.com/zeeshan2k2/SwiftGenUI",
    preferredFrame: "phone",
    screenshots: [
      { src: "/ui/appscreenshots/swift-genui/home.png" },
      { src: "/ui/appscreenshots/swift-genui/generated%20canvas.png" },
      { src: "/ui/appscreenshots/swift-genui/schema%20inspector.png" },
      { src: "/ui/appscreenshots/swift-genui/ai%20provider.png" },
      { src: "/ui/appscreenshots/swift-genui/endpoint%20setting.png" },
      { src: "/ui/appscreenshots/swift-genui/history.png" },
    ],
  },
  {
    name: "Spatial Tutor",
    status: "AI + visionOS",
    description: "VisionOS AI tutor with SwiftUI, TCA, voice streaming, and session summaries.",
    icon: "/ui/appscreenshots/spatial-tutor/app-icon.png",
    href: "/projects#spatial-tutor",
    githubUrl: "https://github.com/zeeshan2k2/Spatial-Tutor",
    preferredFrame: "vision",
    screenshots: [
      { src: "/ui/appscreenshots/spatial-tutor/board%20view.png" },
      { src: "/ui/appscreenshots/spatial-tutor/diargram%20board.png" },
      { src: "/ui/appscreenshots/spatial-tutor/entry.png" },
      { src: "/ui/appscreenshots/spatial-tutor/edit profile.png" },
    ],
  },
];

function SectionLabel({ children }: { children: string }) {
  return <p className="text-xs font-bold uppercase text-white/38">{children}</p>;
}

function ProjectIcon({ project }: { project: HomeProject }) {
  return (
    <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[0.95rem] bg-[#2c2c2e]">
      {project.icon ? (
        <Image alt="" className="h-full w-full object-cover" height={48} src={project.icon} width={48} />
      ) : (
        <span className="text-sm font-semibold text-white/80">{project.iconFallback}</span>
      )}
    </span>
  );
}

export function HomeWidgetScreen() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const selectedProject = homeProjects[selectedProjectIndex];
  const heroScreenshot = selectedProject.screenshots[0];

  function handleProjectSelect(index: number) {
    setLightboxIndex(null);
    setSelectedProjectIndex(index);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 pb-10 pt-5 sm:px-6 lg:px-8">
      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_22rem]">
        <section className="min-h-[28rem] overflow-hidden rounded-[1.8rem] border border-white/[0.1] bg-[linear-gradient(145deg,rgba(255,255,255,0.18),rgba(255,255,255,0.055)_45%,rgba(8,10,16,0.26)),rgba(23,24,28,0.62)] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl sm:p-7">
          <div className="flex h-full min-h-[24rem] flex-col justify-between">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Image
                  alt="Swift"
                  className="h-12 w-12 rounded-[1rem] object-cover shadow-[0_10px_22px_rgba(0,0,0,0.26)]"
                  height={96}
                  src="/icons/swift.png"
                  width={96}
                />
                <div>
                  <p className="text-sm font-bold text-white/88">iOS Developer</p>
                  <p className="mt-0.5 text-xs font-semibold text-white/42">Swift / UIKit / SwiftUI</p>
                </div>
              </div>
            </div>

            <div className="pt-12">
              <h1 className="max-w-[10ch] text-[4.25rem] font-black leading-[0.84] text-white sm:text-[6.7rem] lg:text-[7.4rem]">
                {SITE_NAME}
              </h1>
              <p className="mt-7 max-w-2xl text-2xl font-bold leading-tight text-white/92 sm:text-3xl">
                Native apps, AI tools, and Apple-platform products with product polish.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/56">
                I build across architecture, onboarding, subscriptions, client-facing iOS products,
                and independent AI/visionOS experiments.
              </p>
            </div>
          </div>
        </section>

        <aside className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
          <section className="rounded-[1.55rem] border border-white/[0.1] bg-[linear-gradient(180deg,rgba(44,44,46,0.7),rgba(28,28,30,0.76))] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl">
            <SectionLabel>Current</SectionLabel>
            <p className="mt-4 text-2xl font-black text-white">Synapse Tech Inc.</p>
            <p className="mt-1 text-sm font-semibold text-white/46">iOS Developer / Aug 2024 - Present</p>
            <div className="mt-6 divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {currentRoleHighlights.slice(0, 3).map((highlight) => (
                <p className="py-3 text-sm font-semibold text-white/58" key={highlight}>
                  {highlight}
                </p>
              ))}
            </div>
          </section>

          <section className="rounded-[1.55rem] border border-white/[0.1] bg-[linear-gradient(180deg,rgba(44,44,46,0.7),rgba(28,28,30,0.76))] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl">
            <SectionLabel>Start</SectionLabel>
            <p className="mt-4 text-2xl font-black text-white">Build something native.</p>
            <p className="mt-3 text-sm leading-6 text-white/50">
              Need help with an iOS app, architecture, debugging, or product polish?
            </p>
            <a
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-white px-5 text-sm font-bold !text-black transition hover:bg-white/88 active:scale-[0.98]"
              href="/about#contact"
            >
              Let&apos;s connect
            </a>
          </section>
        </aside>
      </div>

      <section className="mt-4 overflow-hidden rounded-[1.65rem] border border-white/[0.1] bg-[linear-gradient(145deg,rgba(44,44,46,0.76),rgba(18,19,23,0.92))] shadow-[0_22px_70px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-2xl">
        <div className="grid gap-0 lg:grid-cols-[5.75rem_minmax(0,1fr)]">
          <nav aria-label="Featured projects" className="border-b border-white/[0.08] p-3 lg:border-b-0 lg:border-r">
            <div className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-col lg:overflow-visible">
              {homeProjects.map((project, index) => {
                const isSelected = index === selectedProjectIndex;

                return (
                  <button
                    aria-label={`Show ${project.name}`}
                    className={cn(
                      "group flex h-[4.45rem] w-[4.45rem] shrink-0 flex-col items-center justify-center gap-1.5 rounded-[1.1rem] text-center transition active:scale-[0.98]",
                      isSelected
                        ? "bg-white/[0.14] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]"
                        : "text-white/42 hover:bg-white/[0.065] hover:text-white/82",
                    )}
                    key={project.name}
                    onClick={() => handleProjectSelect(index)}
                    title={project.name}
                    type="button"
                  >
                    <ProjectIcon project={project} />
                    <span
                      className={cn(
                        "h-1 w-1 rounded-full transition",
                        isSelected ? "bg-white" : "bg-transparent group-hover:bg-white/30",
                      )}
                    />
                  </button>
                );
              })}
            </div>
          </nav>

          <main className="min-w-0">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="grid min-h-[32rem] gap-0 xl:grid-cols-[minmax(0,1fr)_22rem]"
                exit={{ opacity: 0, y: 12 }}
                initial={{ opacity: 0, y: 12 }}
                key={selectedProject.name}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="min-w-0 px-4 py-5 sm:px-6">
                  {heroScreenshot ? (
                    <button
                      aria-label={`Open ${selectedProject.name} featured screenshot`}
                      className="relative flex min-h-[28rem] w-full cursor-zoom-in items-end overflow-hidden rounded-[1.35rem] bg-black text-left shadow-[0_18px_44px_rgba(0,0,0,0.42)] transition hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#64D2FF]"
                      onClick={() => setLightboxIndex(0)}
                      type="button"
                    >
                      <Image
                        alt={`${selectedProject.name} featured screenshot`}
                        className={cn(
                          "h-full w-full",
                          (heroScreenshot.frame ?? selectedProject.preferredFrame ?? "phone") === "phone"
                            ? "object-contain p-5"
                            : (heroScreenshot.frame ?? selectedProject.preferredFrame) === "vision"
                              ? "object-cover"
                              : "object-contain",
                        )}
                        height={900}
                        src={heroScreenshot.src}
                        unoptimized
                        width={1200}
                      />
                    </button>
                  ) : null}
                </div>

                <aside className="border-t border-white/[0.08] px-5 py-5 sm:px-6 xl:border-l xl:border-t-0">
                  <SectionLabel>Featured work</SectionLabel>
                  <h2 className="mt-3 text-4xl font-black leading-tight text-white">{selectedProject.name}</h2>
                  <p className="mt-3 text-base leading-7 text-white/54">{selectedProject.description}</p>

                  <div className="mt-6 flex gap-2">
                    <a
                      className="inline-flex h-10 items-center justify-center rounded-full bg-white px-4 text-sm font-bold !text-black transition hover:bg-white/88 active:scale-[0.98]"
                      href={selectedProject.href}
                    >
                      Open
                    </a>
                    {selectedProject.githubUrl ? (
                      <a
                        className="inline-flex h-10 items-center justify-center rounded-full bg-white/[0.1] px-4 text-sm font-bold !text-white transition hover:bg-white/[0.15] active:scale-[0.98]"
                        href={selectedProject.githubUrl}
                        rel="noreferrer"
                        target="_blank"
                      >
                        GitHub
                      </a>
                    ) : null}
                  </div>

                  {selectedProject.screenshots.length > 1 ? (
                    <div className="mt-8">
                      <p className="text-xs font-bold uppercase text-white/30">Screens</p>
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        {selectedProject.screenshots.slice(1, 4).map((screenshot, index) => (
                          <button
                            aria-label={`Open ${selectedProject.name} screenshot ${index + 2}`}
                            className="aspect-square overflow-hidden rounded-[0.95rem] bg-black transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#64D2FF]"
                            key={`${selectedProject.name}-thumb-${screenshot.src}`}
                            onClick={() => setLightboxIndex(index + 1)}
                            type="button"
                          >
                            <Image
                              alt={`${selectedProject.name} screenshot ${index + 2}`}
                              className="h-full w-full object-cover"
                              height={260}
                              src={screenshot.src}
                              unoptimized
                              width={260}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </aside>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </section>

      <section className="mt-4 rounded-[1.65rem] border border-white/[0.1] bg-[linear-gradient(180deg,rgba(44,44,46,0.66),rgba(28,28,30,0.78))] px-5 py-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-2xl sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <SectionLabel>App shelf</SectionLabel>
            <h2 className="mt-2 text-2xl font-black">Shipped and maintained.</h2>
          </div>
          <a className="hidden text-sm font-bold !text-white/46 transition hover:!text-white sm:block" href="/projects">
            View all
          </a>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4 lg:grid-cols-6">
          {professionalApps.map((app) => {
            const icon = (
              <div
                className="relative mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-[1.15rem] bg-[#1c1c1e] shadow-[0_12px_24px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.12)]"
                style={app.gradient ? { background: app.gradient } : undefined}
              >
                {app.icon ? (
                  <Image
                    alt=""
                    aria-hidden="true"
                    className={cn("h-full w-full object-cover", app.name === "Uranus NetTest" && "scale-[1.04]")}
                    height={64}
                    src={app.icon}
                    unoptimized
                    width={64}
                  />
                ) : app.iconSymbol === "lock" ? (
                  <AppLockIcon className="inline-flex h-7 w-7 items-center justify-center text-center text-[1.26rem] leading-none text-white/88" />
                ) : (
                  <span className="text-sm font-semibold text-white/84">{app.iconFallback}</span>
                )}
              </div>
            );

            const content = (
              <>
                {icon}
                <span className="mt-2 block truncate text-center text-xs font-bold text-white/76">{app.name}</span>
                <span className="mt-0.5 block truncate text-center text-[0.68rem] font-semibold text-white/36">
                  {app.label}
                </span>
              </>
            );

            return app.href ? (
              <a className="min-w-0 text-center transition hover:brightness-110 active:scale-[0.98]" href={app.href} key={app.name} rel="noreferrer" target="_blank">
                {content}
              </a>
            ) : (
              <div className="min-w-0 text-center" key={app.name}>
                {content}
              </div>
            );
          })}
        </div>
      </section>

      <ScreenshotLightbox
        activeIndex={lightboxIndex}
        onChange={setLightboxIndex}
        onClose={() => setLightboxIndex(null)}
        projectName={selectedProject.name}
        screenshots={selectedProject.screenshots}
      />
    </div>
  );
}
