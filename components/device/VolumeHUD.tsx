"use client";

import { motion } from "framer-motion";

type VolumeHUDProps = {
  volume: number;
};

export function VolumeHUD({ volume }: VolumeHUDProps) {
  const normalizedVolume = Math.max(0, Math.min(100, volume));
  const isMuted = normalizedVolume === 0;

  return (
    <motion.div
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="pointer-events-none absolute left-1/2 top-5 z-[55] flex w-[min(19rem,calc(100%-2rem))] -translate-x-1/2 items-center gap-3 rounded-[1.25rem] border border-white/14 bg-[#1f1f23]/72 px-4 py-3 text-white shadow-[0_22px_60px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-2xl md:top-7"
      exit={{ opacity: 0, scale: 0.98, y: -8 }}
      initial={{ opacity: 0, scale: 0.98, y: -8 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10">
        <svg aria-hidden="true" className="h-5 w-5 text-white/88" viewBox="0 0 24 24">
          {isMuted ? (
            <>
              <path
                d="M4 9.2v5.6c0 .7.5 1.2 1.2 1.2H8l4.6 3.6c.8.6 1.9.1 1.9-.9V5.3c0-1-1.1-1.5-1.9-.9L8 8H5.2C4.5 8 4 8.5 4 9.2Z"
                fill="currentColor"
              />
              <path d="m18 9 3 3m0-3-3 3" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
            </>
          ) : (
            <>
              <path
                d="M4 9.2v5.6c0 .7.5 1.2 1.2 1.2H8l4.6 3.6c.8.6 1.9.1 1.9-.9V5.3c0-1-1.1-1.5-1.9-.9L8 8H5.2C4.5 8 4 8.5 4 9.2Z"
                fill="currentColor"
              />
              <path
                d="M17.2 8.4c1.1 1 1.8 2.2 1.8 3.6s-.7 2.6-1.8 3.6"
                fill="none"
                opacity="0.82"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </>
          )}
        </svg>
      </div>

      <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/18">
        <motion.div
          animate={{ width: `${normalizedVolume}%` }}
          className="h-full rounded-full bg-white/90"
          initial={false}
          transition={{ type: "spring", stiffness: 360, damping: 34, mass: 0.7 }}
        />
      </div>
    </motion.div>
  );
}
