"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_ITEMS, RESUME_PATH, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 hidden border-b border-white/8 bg-[#080a0f]/76 px-5 py-3 backdrop-blur-2xl md:block">
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between gap-4">
        <Link className="group flex items-center gap-3" href="/">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-[#1c1c1e]/78 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(0,0,0,0.22)] transition group-hover:bg-[#2c2c2e]/78">
            Z
          </span>
          <span className="text-sm font-semibold text-white/86">{SITE_NAME}</span>
        </Link>

        <div className="flex items-center rounded-2xl border border-white/10 bg-[#1c1c1e]/72 p-1 shadow-[0_14px_40px_rgba(0,0,0,0.22)]">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : item.href !== RESUME_PATH && pathname.startsWith(item.href);

            if (item.href === RESUME_PATH) {
              return (
                <a
                  className="rounded-xl px-3.5 py-2 text-sm font-medium text-white/56 transition hover:bg-[#2c2c2e]/80 hover:text-white"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                className={cn(
                  "rounded-xl px-3.5 py-2 text-sm font-medium transition active:scale-[0.98]",
                  isActive
                    ? "bg-[#0A84FF] text-white shadow-[0_10px_24px_rgba(10,132,255,0.24)]"
                    : "text-white/56 hover:bg-[#2c2c2e]/80 hover:text-white",
                )}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
