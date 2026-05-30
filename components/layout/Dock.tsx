"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

import { NAV_ITEMS, RESUME_PATH } from "@/lib/constants";

const iconStyles: Record<string, { icon: string }> = {
  Home: {
    icon: "/app-icons/home.svg",
  },
  Projects: {
    icon: "/app-icons/projects.svg",
  },
  Feed: {
    icon: "/app-icons/feed.svg",
  },
  About: {
    icon: "/app-icons/about.svg",
  },
  Resume: {
    icon: "/app-icons/resume.svg",
  },
};

const dockItems = NAV_ITEMS.map((item) => {
  const style = iconStyles[item.label] ?? {
    icon: "/app-icons/home.svg",
  };

  return {
    ...item,
    ...style,
  };
});

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
      <nav className="pointer-events-auto relative flex max-w-full items-end gap-3 rounded-[1.05rem] border border-white/14 bg-[linear-gradient(180deg,rgba(83,83,88,0.56),rgba(34,34,37,0.48))] px-3 py-2.5 shadow-[0_22px_60px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:gap-4 sm:px-4 sm:py-3">
        {dockItems.map((item) => {
          const isActive =
            item.href === "/" ? pathname === "/" : item.href !== RESUME_PATH && pathname.startsWith(item.href);
          const className = `relative flex h-full w-full items-center justify-center overflow-hidden rounded-[20%] shadow-[0_8px_14px_rgba(0,0,0,0.32)] ${
            isActive ? "brightness-105" : "opacity-95 hover:opacity-100"
          }`;

          const content = (
            <>
              <motion.span className={className} {...iconMotion}>
                <Image
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover"
                  height={58}
                  src={item.icon}
                  width={58}
                />
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

          if (item.href === RESUME_PATH) {
            return (
              <a
                aria-label={item.label}
                className="group relative flex h-11 w-11 shrink-0 items-center justify-center overflow-visible sm:h-[58px] sm:w-[58px]"
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
              className="group relative flex h-11 w-11 shrink-0 items-center justify-center overflow-visible sm:h-[58px] sm:w-[58px]"
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
