"use client";

import { useEffect } from "react";

type PreloadImage = {
  src: string;
  width?: number;
  quality?: number;
};

function getOptimizedImageUrl({ src, width = 828, quality = 82 }: PreloadImage) {
  if (!src.startsWith("/")) {
    return src;
  }

  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
}

function requestIdle(callback: () => void) {
  const browserWindow = window as Window & typeof globalThis & {
    requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
    cancelIdleCallback?: (handle: number) => void;
  };

  if (browserWindow.requestIdleCallback && browserWindow.cancelIdleCallback) {
    const idleId = browserWindow.requestIdleCallback(callback, { timeout: 1_500 });

    return () => browserWindow.cancelIdleCallback?.(idleId);
  }

  const timeoutId = browserWindow.setTimeout(callback, 700);

  return () => browserWindow.clearTimeout(timeoutId);
}

export function useOptimizedImagePreloader(images: PreloadImage[], enabled = true) {
  useEffect(() => {
    if (!enabled || images.length === 0) {
      return;
    }

    let isCancelled = false;
    const queue = Array.from(new Set(images.map(getOptimizedImageUrl)));

    async function preloadQueue() {
      const concurrency = 2;
      let cursor = 0;

      async function worker() {
        while (!isCancelled && cursor < queue.length) {
          const src = queue[cursor];
          cursor += 1;

          await new Promise<void>((resolve) => {
            const image = new window.Image();

            image.onload = () => resolve();
            image.onerror = () => resolve();
            image.src = src;
          });
        }
      }

      await Promise.all(Array.from({ length: concurrency }, worker));
    }

    const cancelIdle = requestIdle(() => {
      void preloadQueue();
    });

    return () => {
      isCancelled = true;
      cancelIdle();
    };
  }, [enabled, images]);
}
