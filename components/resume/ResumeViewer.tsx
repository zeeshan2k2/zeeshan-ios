"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type ResumeViewerProps = {
  pdfPath: string;
};

export function ResumeViewer({ pdfPath }: ResumeViewerProps) {
  const viewerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  async function handleFullscreen() {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    await viewerRef.current?.requestFullscreen();
  }

  useEffect(() => {
    function syncFullscreenState() {
      setIsFullscreen(document.fullscreenElement === viewerRef.current);
    }

    document.addEventListener("fullscreenchange", syncFullscreenState);

    return () => {
      document.removeEventListener("fullscreenchange", syncFullscreenState);
    };
  }, []);

  const viewerMode = isFullscreen ? "page=1&zoom=100" : "view=FitH";

  return (
    <div
      className="relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-black/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
      ref={viewerRef}
    >
      <iframe
        className={cn(
          "w-full bg-white",
          isFullscreen ? "h-[100dvh] min-h-0" : "h-[72vh] min-h-[34rem]",
        )}
        key={viewerMode}
        src={`${pdfPath}#${viewerMode}`}
        title="Zeeshan Waheed Resume PDF"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-end bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.42))] px-4 pb-4 pt-14">
        <button
          className="pointer-events-auto inline-flex min-h-11 items-center gap-2 rounded-full border border-white/12 bg-[#1c1c1e]/82 px-4 text-sm font-semibold text-white/82 shadow-[0_14px_34px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl transition hover:bg-[#2c2c2e]/90 hover:text-white active:scale-[0.97]"
          onClick={handleFullscreen}
          type="button"
        >
          <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24">
            <path
              d="M5.5 9.25V5.5h3.75V3.75h-5.5v5.5h1.75Zm9.25-5.5V5.5h3.75v3.75h1.75v-5.5h-5.5Zm3.75 14.75h-3.75v1.75h5.5v-5.5H18.5v3.75Zm-14.75-3.75v5.5h5.5V18.5H5.5v-3.75H3.75Z"
              fill="currentColor"
            />
          </svg>
          {isFullscreen ? "Exit fullscreen" : "Fullscreen"}
        </button>
      </div>
    </div>
  );
}
