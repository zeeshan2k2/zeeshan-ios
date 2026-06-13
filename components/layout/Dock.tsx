"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

import { socialLinks } from "@/content/social";
import { NAV_ITEMS, RESUME_PATH } from "@/lib/constants";
import { cn } from "@/lib/utils";

type DockIcon = "github" | "linkedin" | "x" | "email";

type DockItem = {
  label: string;
  href: string;
  icon?: string;
  socialIcon?: DockIcon;
  external?: boolean;
};

const iconStyles: Record<string, { icon: string }> = {
  Home: {
    icon: "/app-icons/home.svg",
  },
  Projects: {
    icon: "/app-icons/projects.svg",
  },
  About: {
    icon: "/app-icons/about.svg",
  },
  Resume: {
    icon: "/app-icons/resume.svg",
  },
};

const navigationItems: DockItem[] = NAV_ITEMS.map((item) => {
  const style = iconStyles[item.label] ?? {
    icon: "/app-icons/home.svg",
  };

  return {
    ...item,
    ...style,
  };
});

const externalItems: DockItem[] = (["GitHub", "LinkedIn", "X", "Email"] as const).flatMap((label) => {
  const social = socialLinks.find((link) => link.label === label);

  if (!social) {
    return [];
  }

  return [{
    ...social,
    external: social.href.startsWith("http"),
    socialIcon: label.toLowerCase() as DockIcon,
  }];
});

const dockItems = [...navigationItems, ...externalItems];

function SocialAppIcon({ icon }: { icon: DockIcon }) {
  if (icon === "github") {
    return (
      <span className="flex h-full w-full items-center justify-center bg-[#181717] text-white">
        <svg aria-hidden="true" className="h-[52%] w-[52%]" viewBox="0 0 24 24">
          <path
            d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.91.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18A10.98 10.98 0 0 1 12 6.17c.98 0 1.96.13 2.88.39 2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.42-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.04c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
            fill="currentColor"
          />
        </svg>
      </span>
    );
  }

  if (icon === "linkedin") {
    return (
      <span className="flex h-full w-full items-center justify-center bg-[#0A66C2] text-[clamp(1.15rem,3vw,2rem)] font-bold leading-none text-white">
        in
      </span>
    );
  }

  if (icon === "x") {
    return (
      <span className="flex h-full w-full items-center justify-center bg-black">
        <Image alt="" aria-hidden="true" className="h-[47%] w-[47%] object-contain" height={24} src="/icons/X.avif" width={24} />
      </span>
    );
  }

  return (
    <span className="flex h-full w-full items-center justify-center bg-[linear-gradient(145deg,#64D2FF,#0A84FF)] text-white">
      <svg aria-hidden="true" className="h-[55%] w-[55%]" viewBox="0 0 24 24">
        <path
          d="M4.75 5.5h14.5c1.24 0 2.25 1.01 2.25 2.25v8.5c0 1.24-1.01 2.25-2.25 2.25H4.75A2.25 2.25 0 0 1 2.5 16.25v-8.5C2.5 6.51 3.51 5.5 4.75 5.5Zm.2 2 6.28 4.86c.45.35 1.09.35 1.54 0l6.28-4.86H4.95Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

export function Dock() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  const iconMotion = reduceMotion
    ? {}
    : {
        whileHover: {
          y: -6,
          scale: 1.08,
          filter: "brightness(1.06)",
        },
        whileTap: {
          y: -1,
          scale: 0.965,
          filter: "brightness(0.98)",
        },
        transition: {
          type: "spring" as const,
          stiffness: 260,
          damping: 24,
          mass: 0.65,
        },
      };

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 flex justify-center px-3 pb-4 pt-10 sm:px-6 sm:pb-6">
      <nav className="pointer-events-auto relative flex max-w-full items-end gap-2 rounded-[1.05rem] border border-white/14 bg-[linear-gradient(180deg,rgba(83,83,88,0.56),rgba(34,34,37,0.48))] px-2.5 py-2.5 shadow-[0_22px_60px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:gap-3 sm:px-4 sm:py-3">
        {dockItems.map((item, index) => {
          const isActive =
            item.href === "/" ? pathname === "/" : item.href !== RESUME_PATH && pathname.startsWith(item.href);
          const className = cn(
            "relative flex h-full w-full items-center justify-center overflow-hidden rounded-[20%] shadow-[0_8px_14px_rgba(0,0,0,0.32)] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[linear-gradient(155deg,rgba(255,255,255,0.22),rgba(255,255,255,0.04)_42%,transparent_62%)] after:shadow-[inset_0_1px_0_rgba(255,255,255,0.24)]",
            isActive ? "brightness-105" : "opacity-95 hover:opacity-100",
          );

          const content = (
            <>
              <motion.span className={className} {...iconMotion}>
                {item.socialIcon ? (
                  <SocialAppIcon icon={item.socialIcon} />
                ) : (
                  <Image
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-cover"
                    height={58}
                    src={item.icon ?? "/app-icons/home.svg"}
                    width={58}
                  />
                )}
              </motion.span>
              <span className="sr-only">
                {item.label}
              </span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-7 whitespace-nowrap rounded-xl bg-black/72 px-2 py-1 text-[0.65rem] font-semibold text-white/82 opacity-0 shadow-[0_10px_28px_rgba(0,0,0,0.3)] transition group-hover:opacity-100"
              >
                {item.label}
              </span>
            </>
          );

          const itemClassName = cn(
            "group relative flex h-9 w-9 shrink-0 items-center justify-center overflow-visible min-[430px]:h-10 min-[430px]:w-10 sm:h-[58px] sm:w-[58px]",
            index === navigationItems.length && "ml-1 before:absolute before:-left-[0.45rem] before:h-[72%] before:w-px before:bg-white/18 sm:ml-2 sm:before:-left-[0.7rem]",
          );

          if (item.socialIcon) {
            return (
              <a
                aria-label={item.label}
                className={itemClassName}
                href={item.href}
                key={item.label}
                rel={item.external ? "noreferrer" : undefined}
                target={item.external ? "_blank" : undefined}
              >
                {content}
              </a>
            );
          }

          if (item.href === RESUME_PATH) {
            return (
              <a
                aria-label={item.label}
                className={itemClassName}
                href={item.href}
                key={item.href}
              >
                {content}
              </a>
            );
          }

          return (
            <Link
              aria-label={item.label}
              className={itemClassName}
              href={item.href}
              key={item.href}
            >
              {content}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
