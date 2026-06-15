"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type LightboxScreenshot = {
  src: string;
};

type ScreenshotLightboxProps = {
  activeIndex: number | null;
  onChange: (index: number) => void;
  onClose: () => void;
  projectName: string;
  screenshots: LightboxScreenshot[];
};

function CloseIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
      <path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      className={direction === "left" ? "h-6 w-6" : "h-6 w-6 rotate-180"}
      viewBox="0 0 24 24"
    >
      <path d="m15 5-7 7 7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

export function ScreenshotLightbox({
  activeIndex,
  onChange,
  onClose,
  projectName,
  screenshots,
}: ScreenshotLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const isOpen = activeIndex !== null && screenshots.length > 0;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const deviceScroll = document.querySelector<HTMLElement>("[data-device-scroll]");
    const previousBodyOverflow = document.body.style.overflow;
    const previousDeviceOverflow = deviceScroll?.style.overflow;

    document.body.style.overflow = "hidden";
    if (deviceScroll) {
      deviceScroll.style.overflow = "hidden";
    }

    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      if (deviceScroll) {
        deviceScroll.style.overflow = previousDeviceOverflow ?? "";
      }
      previousFocusRef.current?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || activeIndex === null) {
      return;
    }

    const currentIndex = activeIndex;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft") {
        onChange((currentIndex - 1 + screenshots.length) % screenshots.length);
      } else if (event.key === "ArrowRight") {
        onChange((currentIndex + 1) % screenshots.length);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, isOpen, onChange, onClose, screenshots.length]);

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && activeIndex !== null ? (
        <motion.div
          animate={{ opacity: 1 }}
          aria-label={`${projectName} screenshot viewer`}
          aria-modal="true"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/92 p-3 backdrop-blur-xl sm:p-6"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
          role="dialog"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-4 p-4 sm:p-6">
            <div className="rounded-xl bg-black/48 px-3 py-2 text-sm font-semibold text-white/76 backdrop-blur-xl">
              {projectName} · {activeIndex + 1} / {screenshots.length}
            </div>
            <button
              aria-label="Close screenshot viewer"
              className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-black/52 text-white/84 shadow-[0_12px_34px_rgba(0,0,0,0.35)] backdrop-blur-xl transition hover:bg-white/14 hover:text-white active:scale-95"
              onClick={onClose}
              ref={closeButtonRef}
              type="button"
            >
              <CloseIcon />
            </button>
          </div>

          {screenshots.length > 1 ? (
            <>
              <button
                aria-label="Previous screenshot"
                className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/14 bg-black/52 text-white/84 shadow-[0_12px_34px_rgba(0,0,0,0.35)] backdrop-blur-xl transition hover:bg-white/14 hover:text-white active:scale-95 sm:left-6"
                onClick={() => onChange((activeIndex - 1 + screenshots.length) % screenshots.length)}
                type="button"
              >
                <ArrowIcon direction="left" />
              </button>
              <button
                aria-label="Next screenshot"
                className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/14 bg-black/52 text-white/84 shadow-[0_12px_34px_rgba(0,0,0,0.35)] backdrop-blur-xl transition hover:bg-white/14 hover:text-white active:scale-95 sm:right-6"
                onClick={() => onChange((activeIndex + 1) % screenshots.length)}
                type="button"
              >
                <ArrowIcon direction="right" />
              </button>
            </>
          ) : null}

          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[calc(100dvh-5rem)] w-[calc(100vw-1.5rem)] sm:h-[calc(100dvh-7rem)] sm:w-[calc(100vw-8rem)]"
            initial={{ opacity: 0, scale: 0.98 }}
            key={screenshots[activeIndex].src}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              alt={`${projectName} screenshot ${activeIndex + 1}`}
              className="object-contain"
              fill
              priority
              sizes="100vw"
              src={screenshots[activeIndex].src}
              unoptimized
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
