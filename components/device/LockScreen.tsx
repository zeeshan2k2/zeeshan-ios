"use client";

import { useEffect, useState } from "react";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";

type LockScreenProps = {
  onUnlock: () => void;
  wallpaperSrc: string;
};

function formatLockTime(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

function formatLockDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function LockScreen({ onUnlock, wallpaperSrc }: LockScreenProps) {
  const [now, setNow] = useState(() => new Date());
  const reduceMotion = useReducedMotion();
  const controls = useAnimationControls();
  const dragThreshold = -84;

  useEffect(() => {
    const interval = window.setInterval(() => setNow(new Date()), 30_000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <motion.div
      animate={controls}
      className="absolute inset-0 z-50 flex touch-none flex-col overflow-hidden bg-[#07090d] text-white"
      drag={reduceMotion ? false : "y"}
      dragConstraints={{ bottom: 0, top: -1200 }}
      dragElastic={0.02}
      exit={{ opacity: 0.96, y: reduceMotion ? 0 : "-100%" }}
      initial={{ opacity: 1, y: 0 }}
      onDragEnd={(_, info) => {
        if (info.offset.y < dragThreshold || info.velocity.y < -520) {
          onUnlock();
          return;
        }

        controls.start({
          y: 0,
          transition: {
            type: "spring",
            stiffness: 320,
            damping: 32,
            mass: 0.8,
          },
        });
      }}
      transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${wallpaperSrc})` }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_12%,rgba(113,142,206,0.22),transparent_24rem),radial-gradient(circle_at_78%_8%,rgba(255,255,255,0.12),transparent_20rem),linear-gradient(180deg,rgba(5,8,14,0.2),rgba(5,8,14,0.32)_48%,rgba(0,0,0,0.45)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0)_28%,rgba(0,0,0,0.24)_100%)]" />

      <div className="relative z-10 flex h-10 items-center justify-between px-5 text-sm font-semibold text-white/88 sm:px-7 md:h-11 md:text-base">
        <span>{formatLockTime(now)}</span>
        <div className="flex items-center gap-2">
          <div className="flex h-4 items-end gap-0.5" aria-hidden="true">
            {[0.35, 0.5, 0.68, 0.86].map((height, index) => (
              <span
                className="w-1 rounded-[0.15rem] bg-white/86"
                key={height}
                style={{ height: `${height * 14}px`, opacity: 0.5 + index * 0.12 }}
              />
            ))}
          </div>
          <svg aria-hidden="true" className="h-4 w-5 text-white/86" viewBox="0 0 24 18">
            <path
              d="M2.4 5.7C7.7 1.2 16.3 1.2 21.6 5.7M6.2 9.4c3.3-2.8 8.3-2.8 11.6 0m-7.6 3.7c1.1-.9 2.5-.9 3.6 0"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2.2"
            />
          </svg>
          <svg aria-hidden="true" className="h-[1.05rem] w-[2.05rem] text-white/86" viewBox="0 0 34 18">
            <rect fill="none" height="13" rx="3.5" stroke="currentColor" strokeWidth="1.7" width="28" x="1" y="2.5" />
            <path d="M31 6.4c1.2.45 2 1.45 2 2.6s-.8 2.15-2 2.6V6.4Z" fill="currentColor" opacity="0.55" />
            <rect fill="currentColor" height="9" rx="2.2" width="16" x="3.5" y="4.5" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center px-8 text-center">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mt-[min(13vh,7rem)]"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          transition={{ delay: reduceMotion ? 0 : 0.18, duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[clamp(1.1rem,2.5vw,1.6rem)] font-semibold text-white/86">{formatLockDate(now)}</p>
          <p className="mt-1 text-[clamp(4.8rem,13vw,9.5rem)] font-semibold leading-none tracking-[-0.04em] text-white">
            {formatLockTime(now)}
          </p>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mt-auto flex flex-col items-center pb-9 md:pb-10"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
          transition={{ delay: reduceMotion ? 0 : 0.32, duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-sm font-medium text-white/70 md:text-base">Swipe up to unlock</p>
          <motion.div
            aria-label="Swipe up to unlock"
            className="flex h-12 w-32 touch-none items-center justify-center rounded-full"
            role="presentation"
            whileDrag={{ scale: 1.03 }}
          >
            <motion.span
              animate={reduceMotion ? undefined : { y: [0, -5, 0], opacity: [0.68, 1, 0.68] }}
              className="h-1.5 w-32 rounded-full bg-white/82 shadow-[0_0_24px_rgba(255,255,255,0.24)]"
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
