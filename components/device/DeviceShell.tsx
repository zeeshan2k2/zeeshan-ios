"use client";

import { useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { IPadFrame } from "@/components/device/IPadFrame";
import { IPhoneFrame } from "@/components/device/IPhoneFrame";
import { LockScreen } from "@/components/device/LockScreen";
import { ScrollReset } from "@/components/device/ScrollReset";
import { VolumeHUD } from "@/components/device/VolumeHUD";
import { Dock } from "@/components/layout/Dock";
import { StatusBar } from "@/components/layout/StatusBar";

type DeviceShellProps = {
  children: ReactNode;
};

export function DeviceShell({ children }: DeviceShellProps) {
  const [screenState, setScreenState] = useState<"home" | "black" | "lock">("home");
  const [showBlackCover, setShowBlackCover] = useState(false);
  const [showVolumeHUD, setShowVolumeHUD] = useState(false);
  const [volume, setVolume] = useState(60);
  const powerTimeoutRef = useRef<number | null>(null);
  const volumeTimeoutRef = useRef<number | null>(null);

  function handlePowerPress() {
    if (powerTimeoutRef.current !== null) {
      window.clearTimeout(powerTimeoutRef.current);
      powerTimeoutRef.current = null;
    }

    setShowVolumeHUD(false);

    if (screenState === "lock") {
      setShowBlackCover(true);

      powerTimeoutRef.current = window.setTimeout(() => {
        setScreenState("black");
        powerTimeoutRef.current = null;
      }, 360);

      return;
    }

    if (screenState === "black") {
      setShowBlackCover(true);

      powerTimeoutRef.current = window.setTimeout(() => {
        setScreenState("lock");
        powerTimeoutRef.current = window.setTimeout(() => {
          setShowBlackCover(false);
          powerTimeoutRef.current = null;
        }, 260);
      }, 620);

      return;
    }

    setShowBlackCover(true);
    setScreenState("black");
    powerTimeoutRef.current = window.setTimeout(() => {
      setScreenState("lock");
      powerTimeoutRef.current = window.setTimeout(() => {
        setShowBlackCover(false);
        powerTimeoutRef.current = null;
      }, 260);
    }, 620);
  }

  function handleUnlock() {
    if (powerTimeoutRef.current !== null) {
      window.clearTimeout(powerTimeoutRef.current);
      powerTimeoutRef.current = null;
    }

    setShowBlackCover(false);
    setScreenState("home");
  }

  function showVolumeLevel(nextVolume: number) {
    setVolume(nextVolume);
    setShowVolumeHUD(true);

    if (volumeTimeoutRef.current !== null) {
      window.clearTimeout(volumeTimeoutRef.current);
    }

    volumeTimeoutRef.current = window.setTimeout(() => {
      setShowVolumeHUD(false);
      volumeTimeoutRef.current = null;
    }, 1_050);
  }

  function handleVolumeChange(direction: "down" | "up") {
    const nextVolume =
      direction === "up"
        ? Math.min(100, Math.ceil((volume + 10) / 10) * 10)
        : Math.max(0, Math.floor((volume - 10) / 10) * 10);

    showVolumeLevel(nextVolume);
  }

  return (
    <div className="min-h-screen overflow-x-hidden px-0 text-white md:flex md:items-center md:justify-center md:px-4 md:py-6 lg:px-6">
      <div className="relative flex h-screen w-full flex-col bg-[#080a0f] md:h-[min(86vh,940px)] md:min-h-0 md:max-w-[1320px] md:rounded-[3.5rem] md:border md:border-white/14 md:bg-[#0a0b0f] md:p-3 md:shadow-[0_38px_140px_rgba(0,0,0,0.56),inset_0_1px_0_rgba(255,255,255,0.12)] lg:p-4">
        <IPadFrame
          onPowerPress={handlePowerPress}
          onVolumeDown={() => handleVolumeChange("down")}
          onVolumeUp={() => handleVolumeChange("up")}
        />

        <div className="relative flex-1 overflow-hidden md:min-h-0 md:rounded-[2.75rem] md:border md:border-white/10 md:bg-[#080a0f] md:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
          <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_26%_0%,rgba(115,151,255,0.2),transparent_30rem),radial-gradient(circle_at_92%_8%,rgba(255,255,255,0.08),transparent_22rem)]" />
          <div
            className="device-screen-scroll relative z-10 h-full overflow-y-auto overscroll-contain pb-24 md:min-h-0 md:pb-28"
            data-device-scroll
          >
            <ScrollReset />
            <IPhoneFrame />
            <StatusBar />
            {children}
          </div>
          <Dock />
          <AnimatePresence>
            {showVolumeHUD && screenState !== "black" ? <VolumeHUD key="volume-hud" volume={volume} /> : null}
            {screenState === "lock" ? (
              <LockScreen key="lock-screen" onUnlock={handleUnlock} />
            ) : null}
            {showBlackCover ? (
              <motion.div
                animate={{ opacity: 1 }}
                className="absolute inset-0 z-[70] bg-black"
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                key="black-screen"
                transition={{ duration: screenState === "lock" ? 0.22 : 0.34, ease: [0.22, 1, 0.36, 1] }}
              />
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
