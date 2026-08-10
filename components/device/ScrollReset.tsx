"use client";

import { useEffect } from "react";

import { usePathname } from "next/navigation";

export function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollContainer = document.querySelector<HTMLElement>("[data-device-scroll]");
    const hash = window.location.hash;

    if (hash) {
      window.requestAnimationFrame(() => {
        const target = document.querySelector<HTMLElement>(hash);

        if (!target) {
          return;
        }

        if (scrollContainer) {
          const targetTop = target.offsetTop - 18;
          scrollContainer.scrollTo({ top: targetTop, left: 0, behavior: "smooth" });
          return;
        }

        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });

      return;
    }

    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
