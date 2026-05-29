import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-xl border border-white/10 bg-[#1c1c1e]/70 px-3 py-1 text-xs font-medium text-white/62",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
