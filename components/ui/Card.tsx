"use client";

import type { ReactNode } from "react";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

type CardProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
};

export function Card({ children, className, ...props }: CardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "rounded-3xl border border-white/10 bg-[#1c1c1e]/58 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl",
        className,
      )}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { y: -2, scale: 1.003 }}
      whileTap={reduceMotion ? undefined : { scale: 0.995 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
