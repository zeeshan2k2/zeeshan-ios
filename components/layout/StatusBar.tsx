"use client";

import { useEffect, useState } from "react";

function formatStatusDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(date);
}

function formatStatusTime(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

export function StatusBar() {
  const [now, setNow] = useState(() => new Date());
  const batteryPercent = now.getMinutes() + 30;

  useEffect(() => {
    const interval = window.setInterval(() => setNow(new Date()), 30_000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="sticky top-0 z-40 flex h-8 items-center justify-between px-5 text-white/88 backdrop-blur-md sm:px-7 md:h-7">
      <div className="flex items-center gap-2 text-xs font-semibold leading-none sm:text-sm">
        <span>{formatStatusTime(now)}</span>
        <span className="hidden text-white/62 sm:inline">{formatStatusDate(now)}</span>
      </div>

      <div className="flex items-center gap-1.5 text-xs font-semibold leading-none sm:text-sm">
        <div className="flex h-3.5 items-end gap-[0.125rem]" aria-hidden="true">
          {[0.35, 0.5, 0.68, 0.86].map((height, index) => (
            <span
              className="w-[0.2rem] rounded-[0.15rem] bg-white/82"
              key={height}
              style={{ height: `${height * 12}px`, opacity: 0.48 + index * 0.13 }}
            />
          ))}
        </div>

        <svg aria-hidden="true" className="h-3.5 w-[1.1rem] text-white/82" viewBox="0 0 24 18">
          <path
            d="M2.4 5.7C7.7 1.2 16.3 1.2 21.6 5.7M6.2 9.4c3.3-2.8 8.3-2.8 11.6 0m-7.6 3.7c1.1-.9 2.5-.9 3.6 0"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2.2"
          />
        </svg>

        <span className="text-white/76">{batteryPercent}%</span>
        <svg aria-hidden="true" className="h-[0.9rem] w-[1.8rem] text-white/82" viewBox="0 0 34 18">
          <rect
            fill="none"
            height="13"
            rx="3.5"
            stroke="currentColor"
            strokeWidth="1.7"
            width="28"
            x="1"
            y="2.5"
          />
          <path
            d="M31 6.4c1.2.45 2 1.45 2 2.6s-.8 2.15-2 2.6V6.4Z"
            fill="currentColor"
            opacity="0.55"
          />
          <rect
            fill="currentColor"
            height="9"
            rx="2.2"
            width={(23 * batteryPercent) / 100}
            x="3.5"
            y="4.5"
          />
        </svg>
      </div>
    </div>
  );
}
