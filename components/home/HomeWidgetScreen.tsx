"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { Card } from "@/components/ui/Card";
import { feedPosts } from "@/content/feed";
import { socialLinks } from "@/content/social";
import { SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

const feedPreviewPosts = feedPosts.slice(0, 4);

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
    label: "X",
    href: socialLinks.find((link) => link.label === "X")?.href,
    icon: "x",
    className: "bg-black text-white",
  },
  {
    label: "Email",
    href: socialLinks.find((link) => link.label === "Email")?.href,
    icon: "email",
    className: "bg-[linear-gradient(145deg,#64D2FF,#0A84FF)] text-white",
  },
];

const appleStackItems = [
  { label: "Languages", detail: "Swift, Objective-C, Python, JavaScript", tint: "bg-[#0A84FF]" },
  { label: "Apple UI", detail: "UIKit, SwiftUI, VisionOS, WidgetKit", tint: "bg-[#BF5AF2]" },
  { label: "Data & APIs", detail: "Core Data, SwiftData, Keychain, URLSession", tint: "bg-[#34C759]" },
  { label: "Reliability", detail: "XCTest, Firebase, Crashlytics, Notifications", tint: "bg-[#FF9F0A]" },
  { label: "Product", detail: "StoreKit, Ads SDKs, Lottie, Figma", tint: "bg-[#FF453A]" },
];

const currentRoleHighlights = [
  "App Store VPN apps",
  "VisionOS AI Tutor",
  "Enterprise iOS client work",
  "Legacy iPad modernization",
];

type ProfessionalApp = {
  name: string;
  label: string;
  icon?: string;
  iconFallback?: string;
  href?: string;
};

const professionalApps: ProfessionalApp[] = [
  {
    name: "Zurich Cyber",
    label: "Contributed",
    icon: "/professional-apps/zurich-cyber.png",
    href: "https://apps.apple.com/ch/app/zurich-cyber-security/id6476657273?l=en-GB",
  },
  {
    name: "Boxx Cyber",
    label: "Contributed",
    icon: "/professional-apps/boxx-cyber.png",
    href: "https://apps.apple.com/us/app/boxx-cyber-security/id6752987257",
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
  preferredFrame?: ScreenshotFrame;
  screenshots: HomeProjectScreenshot[];
};

const screenshotFrameClasses: Record<ScreenshotFrame, string> = {
  phone: "h-[22rem] w-[10.4rem] sm:h-[25rem] sm:w-[11.8rem]",
  wide: "h-[13.25rem] w-[24rem] sm:h-[15rem] sm:w-[27rem]",
  square: "h-[18rem] w-[18rem] sm:h-[20rem] sm:w-[20rem]",
  vision: "h-[15rem] w-[27rem] sm:h-[17rem] sm:w-[31rem]",
};

const homeProjects = [
  {
    name: "33VPN",
    status: "Public first phase",
    description: "UIKit VPN client interface with MVVM Clean Architecture.",
    icon: "/ui/appscreenshots/33vpn/app-icon.png",
    href: "/projects#33vpn",
    preferredFrame: "phone",
    screenshots: [
      { src: "/ui/appscreenshots/33vpn/home-updated.png" },
      { src: "/ui/appscreenshots/33vpn/servers.png" },
      { src: "/ui/appscreenshots/33vpn/settings.png" },
      { src: "/ui/appscreenshots/33vpn/premium%201.png" },
      { src: "/ui/appscreenshots/33vpn/vpn%20protocol.png" },
    ],
  },
  {
    name: "Weather",
    status: "SwiftUI + widgets",
    description: "SwiftUI weather interface with forecast views, widgets, and AI summary screens.",
    icon: "/ui/appscreenshots/weather/app-icon.png",
    href: "/projects#weather-app",
    preferredFrame: "phone",
    screenshots: [
      { src: "/ui/appscreenshots/weather/weather-view.PNG" },
      { src: "/ui/appscreenshots/weather/weather-list-view.png" },
      { src: "/ui/appscreenshots/weather/day-detail-view.PNG" },
      { src: "/ui/appscreenshots/weather/ai-summary-view.PNG" },
      { src: "/ui/appscreenshots/weather/widget-medium.jpg", frame: "wide" },
    ],
  },
  {
    name: "SwiftGenUI",
    status: "AI + native UI",
    description: "Schema-driven UI generation rendered into native Apple-platform interfaces.",
    iconFallback: "UI",
    href: "/projects#swift-genui",
    preferredFrame: "wide",
    screenshots: [],
  },
  {
    name: "Spatial Tutor",
    status: "AI + VisionOS",
    description: "VisionOS AI tutor with SwiftUI, TCA, voice streaming, and session summaries.",
    iconFallback: "ST",
    href: "/projects#spatial-tutor",
    preferredFrame: "vision",
    screenshots: [],
  },
] satisfies HomeProject[];

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

  if (icon === "x") {
    return <Image alt="" aria-hidden="true" className="h-6 w-6 object-contain" height={24} src="/icons/X.avif" width={24} />;
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
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
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
      <WidgetSurface className="min-h-[25rem] p-6 sm:p-7 lg:col-span-5">
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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(10,132,255,0.2),transparent_12rem),linear-gradient(145deg,rgba(255,255,255,0.08),transparent_42%)]" />
        <div className="relative z-10">
          <WidgetTitle>Apple Stack</WidgetTitle>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-white">Production-ready iOS toolkit.</h2>
          <div className="mt-5 space-y-2.5">
            {appleStackItems.map((item) => (
              <div className="flex items-center gap-3 rounded-[1.35rem] bg-white/[0.065] px-3.5 py-3" key={item.label}>
                <span className={cn("h-2.5 w-2.5 shrink-0 rounded-full shadow-[0_0_18px_currentColor]", item.tint)} />
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
                <p className="mt-1 text-xs font-medium text-white/48">Synapse Consulting</p>
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

      <div className="lg:col-span-8 xl:h-[250vh]" ref={projectSectionRef}>
        <div className="xl:sticky xl:top-[calc(50%-18rem)]">
          <WidgetSurface className="p-4">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(75,167,255,0.18),transparent_18rem),linear-gradient(145deg,rgba(255,255,255,0.08),transparent_48%)]" />
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
                    <a className="shrink-0 rounded-full bg-white/[0.08] px-3 py-1.5 text-xs font-semibold text-white/58 transition hover:bg-white/[0.13] hover:text-white" href={selectedProject.href}>
                      Open
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
                          transition={{ delay: index * 0.035, duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <Image
                            alt={`${selectedProject.name} screenshot ${index + 1}`}
                            className="h-full w-full object-contain"
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

      <WidgetSurface className="p-5 lg:col-span-5">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(10,132,255,0.22),transparent_18rem),linear-gradient(145deg,rgba(255,255,255,0.09),rgba(28,28,30,0.22)_48%)]" />
        <div className="relative z-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <WidgetTitle>Professional App Work</WidgetTitle>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-white">Apps I’ve built and contributed to.</h2>
            </div>
            <span className="rounded-full bg-white/[0.08] px-3 py-1.5 text-xs font-semibold text-white/48">
              Synapse
            </span>
          </div>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/52">
            Selected iOS work across VPN products I built, enterprise client apps I contributed to, and iPad modernization work.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {professionalApps.map((app) => {
              const content = (
                <>
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-[1.15rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.18),rgba(255,255,255,0.06))] shadow-[0_14px_28px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.16)] sm:h-16 sm:w-16 sm:rounded-[1.3rem]">
                    {app.icon ? (
                      <Image
                        alt=""
                        aria-hidden="true"
                        className="h-full w-full object-cover"
                        height={64}
                        src={app.icon}
                        unoptimized
                        width={64}
                      />
                    ) : (
                      <span className="text-sm font-semibold text-white/84">{app.iconFallback}</span>
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

      <WidgetSurface className="p-5 lg:col-span-3">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,214,10,0.18),rgba(28,28,30,0.28)_42%)]" />
        <div className="relative z-10">
          <div className="flex items-center justify-between gap-4">
            <WidgetTitle className="text-white/52">Notes</WidgetTitle>
            <a className="text-sm font-semibold text-[#FFE07A]" href="/feed">
              Open Feed
            </a>
          </div>

          <div className="mt-5 space-y-2.5">
            {feedPreviewPosts.map((post) => (
              <a
                className="block rounded-[1.25rem] bg-[rgba(255,250,224,0.1)] p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition hover:bg-[rgba(255,250,224,0.14)]"
                href="/feed"
                key={post.slug}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="truncate text-sm font-semibold text-white/84">{post.title}</p>
                  <span className="shrink-0 rounded-full bg-[#FFE07A]/14 px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[#FFE07A]/82">
                    {post.type}
                  </span>
                </div>
                <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-white/46">{post.excerpt}</p>
              </a>
            ))}
          </div>
        </div>
      </WidgetSurface>
    </div>
  );
}
