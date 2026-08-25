"use client";

import { useState } from "react";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { ScreenshotLightbox } from "@/components/ui/ScreenshotLightbox";
import { SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

const appleStackItems = [
  "Swift",
  "UIKit",
  "SwiftUI",
  "VisionOS",
  "Core Data",
  "SwiftData",
  "Keychain",
  "StoreKit",
  "XCTest",
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

const screenshotFrameClasses: Record<ScreenshotFrame, string> = {
  phone:
    "aspect-[1170/2532] h-auto w-[10.166rem] sm:w-[11.552rem] [@media(min-width:2300px)]:w-[17rem]",
  wide: "h-[13.25rem] w-[24rem] sm:h-[15rem] sm:w-[27rem]",
  square: "h-[18rem] w-[18rem] sm:h-[20rem] sm:w-[20rem]",
  vision: "aspect-video h-auto w-[27rem] sm:w-[31rem]",
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

export function HomeWidgetScreen() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const selectedProject = homeProjects[selectedProjectIndex];

  function handleProjectSelect(index: number) {
    setLightboxIndex(null);
    setSelectedProjectIndex(index);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 pb-10 pt-7 sm:px-7 sm:pt-10 lg:px-10">
      <section className="grid min-h-[32rem] gap-10 border-b border-white/[0.09] pb-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(25rem,1fr)] lg:items-end">
        <div>
          <div className="mb-10 flex items-center gap-3">
            <Image
              alt="Swift"
              className="h-9 w-9 rounded-[0.7rem] object-cover"
              height={72}
              src="/icons/swift.png"
              width={72}
            />
            <p className="text-sm font-medium text-white/48">iOS Developer</p>
          </div>

          <h1 className="max-w-[11ch] text-6xl font-semibold leading-[0.92] text-white sm:text-7xl lg:text-8xl">
            {SITE_NAME}
          </h1>
          <p className="mt-8 max-w-2xl text-xl font-medium leading-8 text-white/78 sm:text-2xl sm:leading-9">
            Native iOS apps, AI-powered tools, and Apple-platform products built with care.
          </p>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/48">
            I work across Swift, UIKit, and SwiftUI, with production experience in app architecture,
            onboarding, subscriptions, and client-facing iOS work.
          </p>
        </div>

        <div className="lg:pb-2">
          <p className="text-sm font-medium text-white/42">Selected work</p>
          <div className="mt-5 space-y-0 border-y border-white/[0.09]">
            {homeProjects.map((project, index) => {
              const isSelected = index === selectedProjectIndex;

              return (
                <button
                  className={cn(
                    "group flex w-full items-center gap-4 border-b border-white/[0.07] py-4 text-left last:border-b-0 transition",
                    isSelected ? "text-white" : "text-white/48 hover:text-white/78",
                  )}
                  key={project.name}
                  onClick={() => handleProjectSelect(index)}
                  type="button"
                >
                  <span className="w-7 shrink-0 text-sm font-medium tabular-nums text-white/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-lg font-semibold">{project.name}</span>
                    <span className="mt-1 block truncate text-sm text-white/38">{project.status}</span>
                  </span>
                  <span
                    className={cn(
                      "h-2 w-2 shrink-0 rounded-full transition",
                      isSelected ? "bg-[#0A84FF]" : "bg-white/18 group-hover:bg-white/36",
                    )}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="grid gap-8 border-b border-white/[0.09] py-12 lg:grid-cols-[17rem_minmax(0,1fr)]">
        <div>
          <p className="text-sm font-medium text-white/42">Featured project</p>
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              initial={{ opacity: 0, y: 10 }}
              key={`${selectedProject.name}-copy`}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                {selectedProject.name}
              </h2>
              <p className="mt-4 text-base leading-7 text-white/52">{selectedProject.description}</p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-black transition hover:bg-white/88 active:scale-[0.98]"
                  href={selectedProject.href}
                >
                  View project
                </a>
                {selectedProject.githubUrl ? (
                  <a
                    className="inline-flex h-11 items-center justify-center rounded-full border border-white/[0.14] px-5 text-sm font-semibold text-white/70 transition hover:border-white/24 hover:text-white active:scale-[0.98]"
                    href={selectedProject.githubUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    GitHub
                  </a>
                ) : null}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <AnimatePresence initial={false} mode="wait">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="min-w-0"
            exit={{ opacity: 0, y: 14 }}
            initial={{ opacity: 0, y: 14 }}
            key={`${selectedProject.name}-screens`}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {selectedProject.screenshots.length > 0 ? (
              <div className="flex snap-x gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {selectedProject.screenshots.slice(0, 5).map((screenshot, index) => (
                  <button
                    aria-label={`Open ${selectedProject.name} screenshot ${index + 1}`}
                    className={cn(
                      "relative shrink-0 snap-start cursor-zoom-in overflow-hidden rounded-[1.55rem] border border-white/[0.09] bg-black/20 text-left transition hover:border-white/22 hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#64D2FF]",
                      screenshotFrameClasses[screenshot.frame ?? selectedProject.preferredFrame ?? "phone"],
                    )}
                    key={`${selectedProject.name}-${index}-${screenshot.src}`}
                    onClick={() => setLightboxIndex(index)}
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
                  </button>
                ))}
              </div>
            ) : null}
          </motion.div>
        </AnimatePresence>
      </section>

      <section className="grid gap-10 border-b border-white/[0.09] py-12 lg:grid-cols-[minmax(0,1fr)_17rem]">
        <div>
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="text-sm font-medium text-white/42">Professional work</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Apps shipped and maintained.</h2>
            </div>
            <a className="hidden text-sm font-semibold text-white/52 transition hover:text-white sm:block" href="/projects">
              View all
            </a>
          </div>

          <div className="mt-7 divide-y divide-white/[0.08] border-y border-white/[0.09]">
            {professionalApps.map((app) => {
              const row = (
                <>
                  <div
                    className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[0.85rem] bg-[#1c1c1e]"
                    style={app.gradient ? { background: app.gradient } : undefined}
                  >
                    {app.icon ? (
                      <Image
                        alt=""
                        aria-hidden="true"
                        className={cn("h-full w-full object-cover", app.name === "Uranus NetTest" && "scale-[1.04]")}
                        height={48}
                        src={app.icon}
                        unoptimized
                        width={48}
                      />
                    ) : app.iconSymbol === "lock" ? (
                      <AppLockIcon className="inline-flex h-6 w-6 items-center justify-center text-center text-[1.08rem] leading-none text-white/84" />
                    ) : (
                      <span className="text-xs font-semibold text-white/84">{app.iconFallback}</span>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-base font-semibold text-white/84">{app.name}</p>
                    <p className="mt-1 truncate text-sm text-white/40">{app.label}</p>
                  </div>
                  {app.href ? <span className="text-sm text-white/32 transition group-hover:text-white/60">↗</span> : null}
                </>
              );

              const className = "group flex min-h-20 items-center gap-4 text-left transition hover:bg-white/[0.035]";

              return app.href ? (
                <a className={className} href={app.href} key={app.name} rel="noreferrer" target="_blank">
                  {row}
                </a>
              ) : (
                <div className={className} key={app.name}>
                  {row}
                </div>
              );
            })}
          </div>
        </div>

        <aside className="lg:pt-14">
          <p className="text-sm font-medium text-white/42">Stack</p>
          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
            {appleStackItems.map((item) => (
              <span className="text-sm font-medium text-white/58" key={item}>
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 border-t border-white/[0.09] pt-6">
            <p className="text-sm font-medium text-white/42">Current</p>
            <p className="mt-3 text-base font-semibold text-white/78">iOS Developer</p>
            <p className="mt-1 text-sm text-white/42">Synapse Tech Inc. / Aug 2024 - Present</p>
          </div>
        </aside>
      </section>

      <section className="flex flex-col gap-5 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-white/42">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Build something native.</h2>
        </div>
        <a
          className="inline-flex h-11 w-fit items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-black transition hover:bg-white/88 active:scale-[0.98]"
          href="/about#contact"
        >
          Let&apos;s connect
        </a>
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
