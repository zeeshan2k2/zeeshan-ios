"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_ITEMS, RESUME_PATH } from "@/lib/constants";
import { cn } from "@/lib/utils";

const mobileItems = NAV_ITEMS.filter((item) => item.href !== RESUME_PATH);

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 z-30 border-t border-white/10 bg-[#080a0f]/86 px-3 pb-3 pt-2 backdrop-blur-2xl md:hidden">
      <div className="grid grid-cols-4 gap-1 rounded-3xl border border-white/10 bg-[#1c1c1e]/76 p-1 shadow-[0_-16px_44px_rgba(0,0,0,0.28)]">
        {mobileItems.map((item) => {
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <Link
              className={cn(
                "flex min-h-12 items-center justify-center rounded-2xl text-xs font-semibold transition active:scale-[0.97]",
                isActive
                  ? "bg-[#0A84FF] text-white shadow-[0_10px_24px_rgba(10,132,255,0.24)]"
                  : "text-white/52 hover:bg-[#2c2c2e]/70 hover:text-white",
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
  );
}
