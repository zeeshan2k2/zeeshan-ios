"use client";

import { useEffect } from "react";

import { usePathname } from "next/navigation";

export function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollContainer = document.querySelector<HTMLElement>("[data-device-scroll]");

    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
