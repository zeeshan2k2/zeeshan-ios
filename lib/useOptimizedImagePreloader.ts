"use client";

import { useEffect } from "react";

type PreloadImage = {
  src: string;
  width?: number;
  widths?: number[];
  quality?: number;
  priority?: boolean;
};

function getOptimizedImageUrls({ src, width = 828, widths, quality = 82 }: PreloadImage) {
  if (!src.startsWith("/")) {
    return [src];
  }

  const targetWidths = widths?.length ? widths : [width];

  return targetWidths.map((targetWidth) => (
    `/_next/image?url=${encodeURIComponent(src)}&w=${targetWidth}&q=${quality}`
  ));
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

    function buildQueue(items: PreloadImage[]) {
      return Array.from(new Set(items.flatMap(getOptimizedImageUrls)));
    }

    async function preloadQueue(queue: string[], concurrency: number) {
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

    const priorityImages = images.filter((image) => image.priority);
    const remainingImages = images.filter((image) => !image.priority);
    const priorityQueue = buildQueue(priorityImages.length > 0 ? priorityImages : images);
    const remainingQueue = priorityImages.length > 0 ? buildQueue(remainingImages) : [];
    const timers: number[] = [];

    const cancelIdle = requestIdle(() => {
      void preloadQueue(priorityQueue, 4);

      if (remainingQueue.length > 0) {
        timers.push(window.setTimeout(() => {
          void preloadQueue(remainingQueue, 2);
        }, 2_500));
      }
    });

    return () => {
      isCancelled = true;
      cancelIdle();
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [enabled, images]);
}
