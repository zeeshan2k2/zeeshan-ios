import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "border-[#0A84FF]/60 bg-[#0A84FF] text-white shadow-[0_14px_38px_rgba(10,132,255,0.28)] hover:bg-[#2997ff]",
  secondary:
    "border-white/10 bg-[#1c1c1e]/72 text-white/88 shadow-[0_12px_34px_rgba(0,0,0,0.24)] hover:border-white/18 hover:bg-[#2c2c2e]/82",
  ghost: "border-transparent bg-transparent text-white/62 hover:bg-[#1c1c1e]/70 hover:text-white",
};

export function Button({ children, className, variant = "secondary", ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-2xl border px-5 text-sm font-semibold transition duration-200 ease-out active:scale-[0.97]",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
