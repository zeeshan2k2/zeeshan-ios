"use client";

import type { ReactNode } from "react";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type PageTransitionProps = {
  children: ReactNode;
  className?: string;
};

export function PageTransition({ children, className }: PageTransitionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.main
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "mx-auto flex min-h-full w-full max-w-[1180px] flex-col px-4 pb-10 pt-8 sm:px-6 sm:py-12 lg:px-8",
        className,
      )}
      initial={reduceMotion ? false : { opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}
