"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { Card } from "@/components/ui/Card";
import { ScreenshotLightbox } from "@/components/ui/ScreenshotLightbox";
import { SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

const appleStackItems = [
  { label: "Languages", detail: "Swift, Objective-C, Python, JavaScript" },
  { label: "Apple UI", detail: "UIKit, SwiftUI, VisionOS, WidgetKit" },
  { label: "Data & APIs", detail: "Core Data, SwiftData, Keychain, URLSession" },
  { label: "Reliability", detail: "XCTest, Firebase, Crashlytics, Notifications" },
  { label: "Product", detail: "StoreKit, Ads SDKs, Lottie, Figma" },
];

const currentRoleHighlights = [
  "App Store VPN apps",
  "Authentication & mobile security",
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
        "relative h-full overflow-hidden backdrop-blur-2xl backdrop-saturate-125",
        className,
      )}
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
    </Card>
  );
}

export function HomeWidgetScreen() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const projectSectionRef = useRef<HTMLDivElement>(null);
  const selectedProject = homeProjects[selectedProjectIndex];

  useEffect(() => {
    const section = projectSectionRef.current;
    const scrollContainer = section?.closest("[data-device-scroll]") as HTMLElement | null;

    if (!section || !scrollContainer) {
      return;
    }

    const currentSection = section;
    const currentScrollContainer = scrollContainer;
    const desktopProjectBrowserQuery = window.matchMedia("(min-width: 1280px)");

    function updateSelectedProject() {
      if (!desktopProjectBrowserQuery.matches) {
        return;
      }

      const sectionRect = currentSection.getBoundingClientRect();
      const containerRect = currentScrollContainer.getBoundingClientRect();
      const scrollDistance = Math.max(1, sectionRect.height - containerRect.height);
      const progress = Math.min(0.999, Math.max(0, (containerRect.top - sectionRect.top) / scrollDistance));
      const nextIndex = Math.min(homeProjects.length - 1, Math.floor(progress * homeProjects.length));

      setSelectedProjectIndex(nextIndex);
    }

    updateSelectedProject();
    currentScrollContainer.addEventListener("scroll", updateSelectedProject, { passive: true });
    desktopProjectBrowserQuery.addEventListener("change", updateSelectedProject);
    window.addEventListener("resize", updateSelectedProject);

    return () => {
      currentScrollContainer.removeEventListener("scroll", updateSelectedProject);
      desktopProjectBrowserQuery.removeEventListener("change", updateSelectedProject);
      window.removeEventListener("resize", updateSelectedProject);
    };
  }, []);

  function handleProjectSelect(index: number) {
    setLightboxIndex(null);
    setSelectedProjectIndex(index);

    const section = projectSectionRef.current;
    const scrollContainer = section?.closest("[data-device-scroll]") as HTMLElement | null;

    if (!section || !scrollContainer) {
      return;
    }

    if (!window.matchMedia("(min-width: 1280px)").matches) {
      return;
    }

    const sectionRect = section.getBoundingClientRect();
    const containerRect = scrollContainer.getBoundingClientRect();
    const scrollDistance = Math.max(1, section.offsetHeight - scrollContainer.clientHeight);
    const segmentTop = scrollDistance * (index / homeProjects.length) + 1;
    const targetTop = scrollContainer.scrollTop + sectionRect.top - containerRect.top + segmentTop;

    scrollContainer.scrollTo({ top: targetTop, behavior: "smooth" });
  }

  return (
    <div className="grid auto-rows-[minmax(10rem,auto)] gap-4 lg:grid-cols-8">
      <WidgetSurface className="order-1 min-h-[25rem] p-6 sm:p-7 lg:order-none lg:col-span-5">
        <div className="relative z-10 flex h-full flex-col justify-between gap-7">
          <div className="flex items-start justify-between gap-5">
            <div>
              <WidgetTitle>Contact Poster</WidgetTitle>
              <h1 className="mt-5 max-w-[12ch] text-[clamp(3.4rem,7vw,6.4rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white">
                {SITE_NAME}
              </h1>
            </div>
            <div className="h-12 w-12 shrink-0 overflow-hidden rounded-[0.95rem] border border-white/14 shadow-[0_10px_24px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.2)] sm:h-16 sm:w-16 sm:rounded-[0.8rem]">
              <Image
                alt="Swift"
                className="h-full w-full object-cover"
                height={96}
                src="/icons/swift.png"
                width={96}
              />
            </div>
          </div>

          <div>
            <p className="max-w-2xl text-[clamp(1.55rem,3vw,2.45rem)] font-semibold leading-tight tracking-[-0.04em] text-white/92">
              iOS Developer building native apps, AI-powered tools, and polished Apple-platform products.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/64">
              I work across Swift, UIKit, and SwiftUI, with production experience in app architecture, onboarding, subscriptions, and shipping client-facing iOS work. I also explore VisionOS and AI-powered products through independent projects.
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

        </div>
      </WidgetSurface>

      <WidgetSurface className="order-4 p-5 lg:order-none lg:col-span-3">
        <div className="relative z-10">
          <WidgetTitle>Apple Stack</WidgetTitle>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-white">Core development stack.</h2>
          <div className="mt-5 space-y-2.5">
            {appleStackItems.map((item) => (
              <div className="rounded-[1.35rem] bg-white/[0.065] px-3.5 py-3" key={item.label}>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white/86">{item.label}</p>
                  <p className="mt-0.5 truncate text-xs font-medium text-white/44">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-[1.45rem] bg-black/22 p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/42">Current Role</p>
                <p className="mt-2 text-sm font-semibold text-white/84">iOS Developer</p>
                <p className="mt-1 text-xs font-medium text-white/48">Synapse Tech Inc.</p>
              </div>
              <span className="rounded-full bg-[#34C759]/16 px-2.5 py-1 text-[0.68rem] font-semibold text-[#9BE7AE]">
                Aug 2024 - Present
              </span>
            </div>
            <div className="mt-3 grid gap-1.5">
              {currentRoleHighlights.map((highlight) => (
                <div className="flex items-center gap-2 text-xs font-medium text-white/54" key={highlight}>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/36" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </WidgetSurface>

      <div className="order-2 lg:order-none lg:col-span-8 xl:h-[250vh]" ref={projectSectionRef}>
        <div className="xl:sticky xl:top-10">
          <WidgetSurface className="p-4">
        <div className="relative z-10">
          <div className="mb-4 flex items-center justify-between gap-4 px-1">
            <div>
              <WidgetTitle>Files</WidgetTitle>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-white">Project previews</h2>
            </div>
            <a className="text-sm font-semibold text-[#9FD0FF]" href="/projects">
              View all
            </a>
          </div>

          <div className="grid gap-4 xl:grid-cols-[16.5rem_minmax(0,1fr)]">
            <div className="flex gap-2 overflow-x-auto rounded-[1.75rem] bg-black/20 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden xl:block xl:space-y-2.5 xl:overflow-visible">
              {homeProjects.map((project, index) => {
                const isSelected = index === selectedProjectIndex;

                return (
                  <button
                    className={cn(
                      "flex min-w-[13.25rem] items-center gap-3 rounded-[1.35rem] p-3 text-left transition active:scale-[0.99] xl:w-full xl:min-w-0",
                      isSelected ? "bg-white/[0.14] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]" : "hover:bg-white/[0.07]",
                    )}
                    key={project.name}
                    onClick={() => handleProjectSelect(index)}
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
                  key={selectedProject.name}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="mb-3 flex items-start justify-between gap-4 px-1">
                    <div className="min-w-0">
                      <p className="text-lg font-semibold tracking-[-0.025em] text-white">{selectedProject.name}</p>
                      <p className="mt-1 max-w-xl text-sm leading-5 text-white/52">{selectedProject.description}</p>
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
                          key={`${selectedProject.name}-${index}-${screenshot.src}`}
                          onClick={() => setLightboxIndex(index)}
                          transition={{ delay: index * 0.035, duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
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
                        "flex items-center justify-center rounded-[1.65rem] border border-dashed border-white/16 bg-white/[0.045] text-center",
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
          </WidgetSurface>
        </div>
      </div>

      <WidgetSurface className="order-3 p-5 lg:order-none lg:col-span-8">
        <div className="relative z-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <WidgetTitle>Professional App Work</WidgetTitle>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-white">Apps I’ve built and contributed to.</h2>
            </div>
          </div>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/52">
            Selected iOS work across VPN products I built, enterprise client apps I contributed to, and iPad modernization work.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {professionalApps.map((app) => {
              const content = (
                <>
                  <div
                    className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-[1rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.18),rgba(255,255,255,0.06))] shadow-[0_14px_28px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.16)] sm:h-16 sm:w-16"
                    style={app.gradient ? { background: app.gradient } : undefined}
                  >
                    {app.icon ? (
                      <Image
                        alt=""
                        aria-hidden="true"
                        className={cn(
                          "h-full w-full object-cover",
                          app.name === "Uranus NetTest" && "scale-[1.04]",
                        )}
                        height={64}
                        src={app.icon}
                        unoptimized
                        width={64}
                      />
                    ) : (
                      app.iconSymbol === "lock" ? (
                        <AppLockIcon className="inline-flex h-7 w-7 translate-x-[0.5px] items-center justify-center text-center text-[1.30rem] leading-none text-white/88" />
                      ) : (
                        <span className="text-sm font-semibold tracking-[-0.02em] text-white/88">{app.iconFallback}</span>
                      )
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-tight text-white/86">{app.name}</p>
                    <p className="mt-1 text-xs font-medium leading-tight text-white/42">{app.label}</p>
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
      </WidgetSurface>

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
